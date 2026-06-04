import type { Locale } from "@/config/i18n";
import { policySlugs } from "@/config/policy-routes";

export const policyCopy = {
  sectionTitle: {
    ru: "Политика",
    be: "Палітыка",
    en: "Policy",
    pl: "Polityka",
  } satisfies Record<Locale, string>,
  indexTitle: {
    ru: "Политика организации",
    be: "Палітыка арганізацыі",
    en: "Organizational policy",
    pl: "Polityka organizacji",
  } satisfies Record<Locale, string>,
  indexIntro: {
    ru: "Документы, определяющие наше видение, ценности и позиции по ключевым вопросам.",
    be: "Дакументы, якія вызначаюць нашае бачэнне, каштоўнасці і пазіцыі па ключавых пытаннях.",
    en: "Documents that define our vision, values, and positions on key issues.",
    pl: "Dokumenty określające naszą wizję, wartości i stanowiska w kluczowych kwestiach.",
  } satisfies Record<Locale, string>,
  backToPolicy: {
    ru: "К политике",
    be: "Да палітыкі",
    en: "Back to policy",
    pl: "Wróć do polityki",
  } satisfies Record<Locale, string>,
  readMore: {
    ru: "Читать",
    be: "Чытаць",
    en: "Read",
    pl: "Czytaj",
  } satisfies Record<Locale, string>,
  mainBadge: {
    ru: "Основной документ",
    be: "Асноўны дакумент",
    en: "Main document",
    pl: "Dokument główny",
  } satisfies Record<Locale, string>,
} as const;

export const policySubsections = [
  {
    slug: policySlugs.commonVision,
    featured: true,
    title: {
      ru: "Общее видение",
      be: "Агульнае бачанне",
      en: "Common vision",
      pl: "Wspólna wizja",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Стратегическое видение и принципы «Маладой Грамады».",
      be: "Стратэгічнае бачэнне і прынцыпы «Маладой Грамады».",
      en: "Strategic vision and principles of Maladaja Hramada.",
      pl: "Wizja strategiczna i zasady Młodej Hromady.",
    } satisfies Record<Locale, string>,
  },
  {
    slug: policySlugs.lgbtqCivilPartnership,
    featured: false,
    title: {
      ru: "ЛГБТК+ и гражданское партнёрство",
      be: "ЛГБТК+ і грамадзянскае партнёрства",
      en: "LGBTQ+ and civil partnership",
      pl: "LGBTQ+ i partnerstwo cywilne",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Позиция по правам ЛГБТК+ и гражданскому партнёрству.",
      be: "Пазіцыя па правах ЛГБТК+ і грамадзянскім партнёрстве.",
      en: "Our stance on LGBTQ+ rights and civil partnership.",
      pl: "Nasze stanowisko w sprawie praw LGBTQ+ i partnerstwa cywilnego.",
    } satisfies Record<Locale, string>,
  },
  {
    slug: policySlugs.youthPolicy,
    featured: false,
    title: {
      ru: "Молодёжная политика",
      be: "Маладыя палітыка",
      en: "Youth policy",
      pl: "Polityka młodzieżowa",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Приоритеты и инициативы в сфере молодёжной политики.",
      be: "Прыярытэты і ініцыятывы ў сферы маладыя палітыкі.",
      en: "Priorities and initiatives in youth policy.",
      pl: "Priorytety i inicjatywy w polityce młodzieżowej.",
    } satisfies Record<Locale, string>,
  },
  {
    slug: policySlugs.postUni,
    featured: false,
    title: {
      ru: "Отработки после ВНУ",
      be: "Адпрацоўкі пасля ВНУ",
      en: "Post-UNI developments",
      pl: "Opracowania po UNI",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Позиции и документы, подготовленные после Всебеларускага народнага ўзходу.",
      be: "Пазіцыі і дакументы, падрыхтаваныя пасля Усебеларускага народнага ўзходу.",
      en: "Positions and documents prepared after the All-Belarusian People's Assembly.",
      pl: "Stanowiska i dokumenty przygotowane po Wszechbiałoruskim Zgromadzeniu Ludowym.",
    } satisfies Record<Locale, string>,
  },
] as const;

export const lgbtqPageCopy = {
  lgbtqHeading: {
    ru: "Политика в отношении ЛГБТК+",
    be: "Палітыка ў адносінах ЛГБТК+",
    en: "LGBTQ+ policy",
    pl: "Polityka LGBTQ+",
  } satisfies Record<Locale, string>,
  civilPartnershipHeading: {
    ru: "Гражданское партнёрство",
    be: "Грамадзянскае партнёрства",
    en: "Civil partnership",
    pl: "Partnerstwo cywilne",
  } satisfies Record<Locale, string>,
} as const;
