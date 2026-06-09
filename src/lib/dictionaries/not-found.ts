import type { Locale } from "@/config/i18n";

export const notFoundCopy = {
  title: {
    be: "Гэтую старонку палітычна рэпрэсавалі",
    ru: "Эту страницу политически репрессировали",
    en: "This page was politically repressed",
    pl: "Ta strona została politycznie represjonowana",
  } satisfies Record<Locale, string>,
  subtitle: {
    be: "Давайце вернем вас на правільны шлях.",
    ru: "Давайте вернём вас на правильный путь.",
    en: "Let&apos;s get you back on track.",
    pl: "Znajdźmy właściwą drogę.",
  } satisfies Record<Locale, string>,
  cta: {
    be: "На галоўную",
    ru: "На главную",
    en: "Go home",
    pl: "Strona główna",
  } satisfies Record<Locale, string>,
  copyright: {
    be: "Маладая Грамада",
    ru: "Маладая Грамада",
    en: "Maladaja Hramada",
    pl: "Maladaja Hramada",
  } satisfies Record<Locale, string>,
} as const;
