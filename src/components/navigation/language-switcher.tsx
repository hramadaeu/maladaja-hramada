"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/config/i18n";
import { mobileMenuCopy } from "@/lib/dictionaries/header";
import { t } from "@/lib/translate";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLang: string;
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
            "rounded-md px-2.5 py-1 font-button text-button uppercase transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5",
            currentLang === locale
              ? "bg-concrete-gray text-proletarian-red"
              : "text-ink-black hover:text-proletarian-red hover:bg-concrete-gray dark:hover:bg-white/10"
          )}
          title={t(mobileMenuCopy.languageName, locale)}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
