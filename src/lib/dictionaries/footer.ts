import type { Locale } from "@/config/i18n";

export const footerCopy = {
  tagline: {
    ru: "Маладая Грамада. Дерзкие. Прогрессивные. Демократичные.",
    be: "Маладая Грамада. Дзерзкія. Прагрэсіўныя. Дэмакратычныя.",
    en: "Maladaja Hramada. Defiant. Progressive. Democratic.",
    pl: "Młoda Hromada. Buntownicze. Postępowe. Demokratyczne.",
  } satisfies Record<Locale, string>,

  pressKit: {
    ru: "Пресс-кит",
    be: "Прэс-кіт",
    en: "Press Kit",
    pl: "Press kit",
  } satisfies Record<Locale, string>,

  contact: {
    ru: "Связаться",
    be: "Звязацца",
    en: "Contact us",
    pl: "Skontaktuj się",
  } satisfies Record<Locale, string>,

  joinUs: {
    ru: "Присоединиться",
    be: "Далучыцца",
    en: "Join us",
    pl: "Dołącz",
  } satisfies Record<Locale, string>,
} as const;
