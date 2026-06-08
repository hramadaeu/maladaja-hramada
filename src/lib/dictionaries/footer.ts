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
} as const;
