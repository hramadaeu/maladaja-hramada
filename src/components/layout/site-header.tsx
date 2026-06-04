import Link from "next/link";

import { SiteLogo } from "@/components/brand/site-logo";
import { DonateNavLink } from "@/components/navigation/donate-nav-link";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";

import type { Locale } from "@/config/i18n";

import { navigation } from "@/config/site";

import { cn } from "@/lib/utils";

const navLinkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

type SiteHeaderProps = {
  lang: string;
};

export function SiteHeader({ lang }: SiteHeaderProps) {
  const locale = lang as Locale;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <SiteLogo lang={lang} />
        <nav
          className="flex flex-1 flex-nowrap items-center justify-end gap-0.5 overflow-x-auto sm:gap-1"
          aria-label="Main"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              className={cn(navLinkClass, "shrink-0")}
            >
              {item.label[locale]}
            </Link>
          ))}

          <DonateNavLink lang={lang} className={cn(navLinkClass, "shrink-0")} />

          <div className="ml-2 border-l border-border pl-2">
            <LanguageSwitcher currentLang={lang} />
          </div>

        </nav>
      </div>
    </header>
  );
}

