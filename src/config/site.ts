import type { Locale } from "./i18n";

export type NavItem = {
  href: string;
  label: Record<Locale, string>;
};

/** Main nav links (logo replaces Home). */
export const navigation: NavItem[] = [
  {
    href: "/about",
    label: {
      ru: "О нас",
      be: "Пра нас",
      en: "About",
      pl: "O nas",
    },
  },
  {
    href: "/policy",
    label: {
      ru: "Политика",
      be: "Палітыка",
      en: "Policy",
      pl: "Polityka",
    },
  },
  {
    href: "/activities",
    label: {
      ru: "Что делаем",
      be: "Што робім",
      en: "Our work",
      pl: "Co robimy",
    },
  },
];

/** Donate CTA — scrolls to #donate on the homepage. */
export const donateCta = {
  label: {
    ru: "Поддержать",
    be: "Падтрымаць",
    en: "Donate",
    pl: "Wesprzyj",
  } satisfies Record<Locale, string>,
  href: (lang: string) => `/${lang}#donate`,
} as const;

export const externalLinks = {
  email: `mailto:${process.env.CONTACT_EMAIL ?? "contact@example.com"}`,
};
