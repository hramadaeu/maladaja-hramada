import type { Locale } from "@/config/i18n";

/**
 * Hero section on the main page (currently rendered by `HomeSection`).
 * The headline is split into three pieces so the middle word can keep its
 * red highlight styling while the surrounding words re-flow per language.
 */
export const homeSectionCopy = {
  eyebrow: {
    ru: "МАНИФЕСТ 2026",
    be: "МАНІФЕСТ 2026",
    en: "MANIFESTO 2026",
    pl: "MANIFEST 2026",
  } satisfies Record<Locale, string>,
  headlineLead: {
    ru: "За",
    be: "За",
    en: "For A",
    pl: "Po",
  } satisfies Record<Locale, string>,
  headlineHighlight: {
    ru: "демократическое",
    be: "дэмакратычную",
    en: "Democratic",
    pl: "demokratyczną",
  } satisfies Record<Locale, string>,
  headlineTail: {
    ru: "будущее",
    be: "будучыню",
    en: "Future",
    pl: "przyszłość",
  } satisfies Record<Locale, string>,
  body: {
    ru: "Мы — поколение, которое отказывается ждать. Мы строим силу через низовые действия, бескомпромиссные требования и радикальную солидарность. Время тихих вежливых просьб прошло.",
    be: "Мы — пакаленне, якое адмаўляецца чакаць. Мы будуем сілу праз нізавыя дзеянні, бескампрамісныя патрабаванні і радыкальную салідарнасць. Час ціхіх ветлівых просьбаў скончыўся.",
    en: "We are the generation that refuses to wait. We build power through grassroots action, uncompromising demands, and radical solidarity. The time for quiet polite requests is over.",
    pl: "Jesteśmy pokoleniem, które nie chce czekać. Budujemy siłę poprzez działania oddolne, bezkompromisowe postulaty i radykalną solidarność. Czas cichych, uprzejmych próśb się skończył.",
  } satisfies Record<Locale, string>,
  ctaPrimary: {
    ru: "Присоединиться к движению",
    be: "Далучыцца да руху",
    en: "Join the Movement",
    pl: "Dołącz do ruchu",
  } satisfies Record<Locale, string>,
  ctaSecondary: {
    ru: "Наши требования",
    be: "Нашы патрабаванні",
    en: "Read Our Demands",
    pl: "Nasze postulaty",
  } satisfies Record<Locale, string>,
} as const;
