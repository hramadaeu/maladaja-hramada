import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";

import { OrgNameWordmark } from "@/components/brand/org-name-wordmark";
import { notFoundCopy } from "@/lib/dictionaries/not-found";
import { t } from "@/lib/translate";

export const metadata: Metadata = {
  title: "404",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function NotFound() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value ?? "be";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b-2 border-ink-black bg-paper-white px-4 md:px-16 py-4">
        <Link href={`/${lang}`} className="inline-block transition-opacity hover:opacity-90">
          <OrgNameWordmark className="h-7 w-[min(100%,200px)] sm:h-8 sm:w-[220px]" />
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="brutal-border border-l-8 border-l-proletarian-red bg-background w-full max-w-lg p-8 text-center md:p-12">
          <h1 className="font-display-lg text-[10rem] leading-none text-proletarian-red md:text-[12rem]">
            404
          </h1>
          <p className="font-headline text-headline-md text-foreground mt-4 mb-2 uppercase">
            {t(notFoundCopy.title, lang)}
          </p>
          <p className="font-body text-body-md text-foreground/60 mb-8">
            {t(notFoundCopy.subtitle, lang)}
          </p>
          <Link
            href={`/${lang}`}
            className="inline-block border-2 border-transparent bg-proletarian-red px-8 py-4 font-button text-button uppercase text-paper-white brutal-shadow transition-all duration-100 hover:border-ink-black"
          >
            {t(notFoundCopy.cta, lang)}
          </Link>
        </div>
      </main>

      <footer className="w-full border-t-2 border-ink-black bg-ink-black px-4 py-4 text-center md:px-16">
        <p className="font-label-caps text-label-caps text-paper-white/60">
          &copy; {new Date().getFullYear()} {t(notFoundCopy.copyright, lang)}
        </p>
      </footer>
    </div>
  );
}
