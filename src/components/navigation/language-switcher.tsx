"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/config/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLang: string;
};

const languageNames: Record<string, string> = {
  ru: "Русский",
  be: "Беларусь",
  en: "English",
  pl: "Polski",
};

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Remove current language from pathname and build new path
  const getPathForLocale = (locale: string) => {
    // Remove the current language prefix
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "");
    return `/${locale}${pathWithoutLang || ""}`;
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getPathForLocale(locale)}
          className={cn(
            "rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
            currentLang === locale
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
          title={languageNames[locale]}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
