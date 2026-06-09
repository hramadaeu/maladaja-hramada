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

  logoHomeLabel: {
    be: "Маладая Грамада — на галоўную",
    ru: "Маладая Грамада — на главную",
    en: "Maladaja Hramada — home",
    pl: "Maladaja Hramada — strona główna",
  } satisfies Record<Locale, string>,

  socialInstagram: {
    be: "Інстаграм",
    ru: "Инстаграм",
    en: "Instagram",
    pl: "Instagram",
  } satisfies Record<Locale, string>,

  socialTelegram: {
    be: "Тэлеграм",
    ru: "Телеграм",
    en: "Telegram",
    pl: "Telegram",
  } satisfies Record<Locale, string>,

  socialTikTok: {
    be: "ТыкТок",
    ru: "ТикТок",
    en: "TikTok",
    pl: "TikTok",
  } satisfies Record<Locale, string>,

  socialLinkedIn: {
    be: "ЛінкедІн",
    ru: "ЛинкедИн",
    en: "LinkedIn",
    pl: "LinkedIn",
  } satisfies Record<Locale, string>,
} as const;
