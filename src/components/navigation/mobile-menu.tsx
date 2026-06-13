"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { DonateNavLink } from "@/components/navigation/donate-nav-link";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navigation } from "@/config/site";
import { mobileMenuCopy } from "@/lib/dictionaries/header";
import { resolveLocale, t } from "@/lib/translate";

type MobileMenuProps = {
  lang: string;
};

export function MobileMenu({ lang }: MobileMenuProps) {
  const locale = resolveLocale(lang);

  return (
    <Dialog>
      <DialogTrigger
        aria-label={t(mobileMenuCopy.openLabel, lang)}
        render={
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-ink-black transition-all duration-100 hover:bg-concrete-gray active:translate-x-0.5 active:translate-y-0.5"
          />
        }
      >
        <Menu className="size-6" />
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 z-50 flex h-full w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 bg-paper-white p-0 text-ink-black ring-0"
      >
        <DialogTitle className="sr-only">
          {t(mobileMenuCopy.openLabel, lang)}
        </DialogTitle>

        {/* Top bar with title + close button */}
        <div className="flex shrink-0 items-center justify-between border-b-2 border-ink-black px-4 py-4">
          <span className="font-button text-button uppercase text-ink-black">
            {t(mobileMenuCopy.openLabel, lang)}
          </span>
          <DialogClose
            aria-label={t(mobileMenuCopy.closeLabel, lang)}
            render={
              <button
                type="button"
className="inline-flex size-10 items-center justify-center text-ink-black transition-all duration-100 hover:bg-concrete-gray dark:hover:bg-white/10 active:translate-x-0.5 active:translate-y-0.5"
              />
            }
          >
            <X className="size-6" />
          </DialogClose>
        </div>

        {/* Scrollable menu body */}
        <nav
          className="flex min-h-0 flex-1 flex-col divide-y-2 divide-ink-black overflow-y-auto"
          aria-label={t(mobileMenuCopy.navMobile, lang)}
        >
          {/* Language switcher */}
          <div className="flex flex-col gap-3 px-4 py-5">
            <span className="font-label-caps text-label-caps text-ink-black/60">
              {t(mobileMenuCopy.languageLabel, lang)}
            </span>
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Nav links — each closes the menu on click */}
          <div className="flex flex-col">
            {navigation.map((item) => (
              <DialogClose
                key={item.href}
                render={
                  <Link
                    href={`/${lang}${item.href}`}
                    className="font-button text-button uppercase text-ink-black transition-all duration-100 hover:bg-concrete-gray dark:hover:bg-white/10 hover:text-proletarian-red active:translate-x-0.5 active:translate-y-0.5 px-4 py-4"
                  />
                }
              >
                {item.label[locale]}
              </DialogClose>
            ))}
          </div>

          {/* Theme toggle row */}
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-button text-button uppercase text-ink-black">
              {t(mobileMenuCopy.themeLight, lang)}
            </span>
            <ThemeToggle />
          </div>

          {/* Donate CTA — full-width, pushed to the bottom */}
          <div className="mt-auto p-4">
            <DonateNavLink
              lang={lang}
              className="block w-full bg-proletarian-red text-paper-white font-button text-button uppercase px-6 py-4 brutal-shadow transition-all duration-100 border-2 border-transparent hover:border-ink-black dark:hover:border-paper-white active:translate-x-0.5 active:translate-y-0.5 text-center"
            />
          </div>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
