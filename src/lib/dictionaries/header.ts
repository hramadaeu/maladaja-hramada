import type { Locale } from "@/config/i18n";

/** Strings used by the mobile menu in the site header. */
export const mobileMenuCopy = {
  openLabel: {
    ru: "Меню",
    be: "Меню",
    en: "Menu",
    pl: "Menu",
  } satisfies Record<Locale, string>,
  closeLabel: {
    ru: "Закрыть",
    be: "Закрыць",
    en: "Close",
    pl: "Zamknij",
  } satisfies Record<Locale, string>,
  themeLight: {
    ru: "Светлая тема",
    be: "Светлая тэма",
    en: "Light theme",
    pl: "Jasny motyw",
  } satisfies Record<Locale, string>,
  themeDark: {
    ru: "Тёмная тема",
    be: "Цёмная тэма",
    en: "Dark theme",
    pl: "Ciemny motyw",
  } satisfies Record<Locale, string>,
} as const;
