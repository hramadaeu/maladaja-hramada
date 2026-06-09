import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale } from "@/config/i18n";

const LOCALE_COOKIE = "NEXT_LOCALE";
const isProd = process.env.NODE_ENV === "production";

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0]?.trim().split("-")[0])
      .find((lang) => lang && isValidLocale(lang));

    if (preferred) {
      return preferred;
    }
  }

  return defaultLocale;
}

function setLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    // httpOnly is intentionally false: the layout reads this cookie on the
    // server to set <html lang> from the client's persisted preference.
    // We still harden with `secure` and `sameSite` to limit CSRF/exfiltration.
    httpOnly: false,
    sameSite: "lax",
    secure: isProd,
  });
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];
  if (isValidLocale(pathnameLocale)) {
    return setLocaleCookie(NextResponse.next(), pathnameLocale);
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return setLocaleCookie(NextResponse.redirect(url), locale);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
