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
    ru: "Политики организации",
    be: "Палітыкі арганізацыі",
    en: "Organizational policies",
    pl: "Polityki organizacji",
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
  inProgressLabel: {
    ru: "В разработке",
    be: "У распрацоўцы",
    en: "In progress",
    pl: "W przygotowaniu",
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
      ru: "Стратегическое видение и принципы Маладой Грамады.",
      be: "Стратэгічнае бачэнне і прынцыпы Маладой Грамады.",
      en: "Strategic vision and principles of Maladaja Hramada.",
      pl: "Wizja strategiczna i zasady Młodej Hromady.",
    } satisfies Record<Locale, string>,
  },
  {
    slug: policySlugs.civilPartnership,
    featured: false,
    title: {
      ru: "Институт гражданских партнёрств",
      be: "Інстытут грамадзянскіх партнёрстваў",
      en: "Civil Partnership Institution",
      pl: "Instytucja związków partnerskich",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Концепция, направленная на создание в Республике Беларусь института гражданских партнёрств.",
      be: "Канцэпцыя, накіраваная на стварэнне ў Рэспубліцы Беларусь інстытута грамадзянскіх партнёрстваў.",
      en: "A concept aimed at establishing the institution of civil partnerships in the Republic of Belarus.",
      pl: "Koncepcja mająca na celu ustanowienie instytucji partnerstwa cywilnego w Republice Białorusi.",
    } satisfies Record<Locale, string>,
  },
  {
    slug: policySlugs.youthPolicy,
    featured: false,
    disabled: true,
    title: {
      ru: "Молодёжная политика",
      be: "Моладзевая палітыка",
      en: "Youth policy",
      pl: "Polityka młodzieżowa",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Настоящий концепт Стратегии развития молодёжной политики является комплексным документом, который отражает систему взглядов и подходов демократического гражданского общества по совершенствованию условий для эффективного участия молодёжи в политическом, социальном, экономическом и культурном развитии Республики Беларусь.",
      be: "Канцэпт Стратэгіі развіцця моладзевай палітыкі з'яўляецца комплексным дакументам, якая адлюстроўвае сістэму поглядаў і падыходаў дэмакратычнай грамадзянскай супольнасці па ўдасканаленні ўмоў для эфектыўнага ўдзелу моладзі ў палітычным, сацыяльным, эканамічным і культурным развіцці Рэспублікі Беларусь.",
      en: "This concept of the Youth Policy Development Strategy is a comprehensive document that reflects the system of views and approaches of the democratic civil society to improving conditions for effective youth participation in the political, social, economic, and cultural development of the Republic of Belarus.",
      pl: "Koncepcja Strategii Rozwoju Polityki Młodzieżowej jest dokumentem kompleksowym, który odzwierciedla system poglądów i podejść demokratycznego społeczeństwa obywatelskiego w zakresie poprawy warunków efektywnego udziału młodzieży w rozwoju politycznym, społecznym, gospodarczym i kulturalnym Republiki Białoruś.",
    } satisfies Record<Locale, string>,
  },
  {
    slug: policySlugs.postUni,
    featured: false,
    disabled: true,
    title: {
      ru: "Отработки после ВНУ",
      be: "Адпрацоўкі пасля ВНУ",
      en: "After graduate work",
      pl: "Opracowania po universyteckie",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Позиции и документы, подготовленные после Всебеларускага народнага ўзходу.",
      be: "Пазіцыі і дакументы, падрыхтаваныя пасля Усебеларускага народнага ўзходу.",
      en: "Positions and documents prepared after the All-Belarusian People's Assembly.",
      pl: "Stanowiska i dokumenty przygotowane po Wszechbiałoruskim Zgromadzeniu Ludowym.",
    } satisfies Record<Locale, string>,
  },
] as const;

export const civilPartnershipPageCopy = {
  fullVersionLink: {
    ru: "Полная версия документа",
    be: "Поўная версія дакумента",
    en: "Full version of the document",
    pl: "Pełna wersja dokumentu",
  } satisfies Record<Locale, string>,
} as const;
