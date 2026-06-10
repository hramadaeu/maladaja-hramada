import Link from "next/link";

import { SiteLogo } from "@/components/brand/site-logo";
import { DonateNavLink } from "@/components/navigation/donate-nav-link";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import { headerCopy } from "@/lib/dictionaries/header";
import { resolveLocale, t } from "@/lib/translate";

import { navigation } from "@/config/site";

const navLinkClass =
  "font-button text-button uppercase text-ink-black hover:text-proletarian-red transition-all duration-100 hover:bg-concrete-gray active:translate-x-0.5 active:translate-y-0.5 px-3 py-2";

type SiteHeaderProps = {
  lang: string;
};

export function SiteHeader({ lang }: SiteHeaderProps) {
  const locale = resolveLocale(lang);

  return (
    <header className="bg-paper-white w-full border-b-2 border-ink-black z-50 relative">
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-container-max mx-auto">
        <SiteLogo lang={lang} />

        <nav
          className="hidden md:flex items-center gap-1 font-button text-button uppercase"
          aria-label={t(headerCopy.navMain, lang)}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              className={navLinkClass}
            >
              {item.label[locale]}
            </Link>
          ))}

          <div className="ml-2 border-l-2 border-ink-black pl-2 flex items-center gap-1">
            <LanguageSwitcher currentLang={lang} />
            <ThemeToggle lang={lang} />
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <DonateNavLink
            lang={lang}
            className="hidden md:block bg-proletarian-red text-paper-white font-button text-button uppercase px-6 py-3 brutal-shadow transition-all duration-100 border-2 border-transparent hover:border-ink-black active:translate-x-0.5 active:translate-y-0.5"
          />

          <div className="md:hidden">
            <MobileMenu lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
}
