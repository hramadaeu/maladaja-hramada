import type { Locale } from "@/config/i18n";

/** Strings used by the desktop site header. */
export const headerCopy = {
  navMain: {
    be: "Асноўная",
    ru: "Основная",
    en: "Main",
    pl: "Główna",
  } satisfies Record<Locale, string>,
  skipToContent: {
    be: "Перайсці да зместу",
    ru: "Перейти к содержанию",
    en: "Skip to main content",
    pl: "Przejdź do treści",
  } satisfies Record<Locale, string>,
} as const;

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
  navMobile: {
    be: "Мабільнае меню",
    ru: "Мобильное меню",
    en: "Mobile",
    pl: "Menu mobilne",
  } satisfies Record<Locale, string>,
  languageLabel: {
    be: "Мова",
    ru: "Язык",
    en: "Language",
    pl: "Język",
  } satisfies Record<Locale, string>,
  languageName: {
    be: "Беларуская",
    ru: "Русский",
    en: "English",
    pl: "Polski",
  } satisfies Record<Locale, string>,
} as const;
