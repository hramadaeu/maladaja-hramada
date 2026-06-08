import type { Locale } from "@/config/i18n";

export const teaserCopy = {
  newsTitle: {
    ru: "Новости",
    be: "Навіны",
    en: "News",
    pl: "Aktualności",
  } satisfies Record<Locale, string>,
  newsSubtitle: {
    ru: "Последние обновления и события движения",
    be: "Апошнія навіны і падзеі руху",
    en: "Latest updates and movement events",
    pl: "Najnowsze informacje i wydarzenia ruchu",
  } satisfies Record<Locale, string>,
  projectsTitle: {
    ru: "Проекты",
    be: "Праекты",
    en: "Projects",
    pl: "Projekty",
  } satisfies Record<Locale, string>,
  projectsSubtitle: {
    ru: "Инициативы, которые мы реализуем вместе",
    be: "Ініцыятывы, якія мы рэалізуем разам",
    en: "Initiatives we run together",
    pl: "Inicjatywy, które realizujemy wspólnie",
  } satisfies Record<Locale, string>,
  readMore: {
    ru: "Смотреть все",
    be: "Глядзець усе",
    en: "View all",
    pl: "Zobacz wszystkie",
  } satisfies Record<Locale, string>,
} as const;

type TeaserItem = {
  id: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  date: Record<Locale, string>;
};

export const mockNewsItems: TeaserItem[] = [
  {
    id: "1",
    title: {
      ru: "Весенний форум активистов",
      be: "Вясновы форум актывістаў",
      en: "Spring activists forum",
      pl: "Wiosenne forum aktywistów",
    },
    excerpt: {
      ru: "Встреча молодых лидеров, воркшопы и планирование кампаний на сезон.",
      be: "Сустрэча маладых лідараў, воркшопы і планаванне кампаній на сезон.",
      en: "Young leaders meet for workshops and seasonal campaign planning.",
      pl: "Spotkanie młodych liderów, warsztaty i planowanie kampanii sezonowych.",
    },
    date: {
      ru: "12 марта 2026",
      be: "12 сакавіка 2026",
      en: "March 12, 2026",
      pl: "12 marca 2026",
    },
  },
  {
    id: "2",
    title: {
      ru: "Открытый микрофон солидарности",
      be: "Адкрыты мікрафон салідарнасці",
      en: "Open mic for solidarity",
      pl: "Otwarty mikrofon solidarności",
    },
    excerpt: {
      ru: "Вечер историй, музыки и разговоров о будущем демократической Беларуси.",
      be: "Вечар гісторый, музыкі і размоў пра будучыню дэмакратычнай Беларусі.",
      en: "An evening of stories, music, and dialogue on Belarus’s democratic future.",
      pl: "Wieczór opowieści, muzyki i rozmów o demokratycznej przyszłości Białorusi.",
    },
    date: {
      ru: "28 февраля 2026",
      be: "28 лютага 2026",
      en: "February 28, 2026",
      pl: "28 lutego 2026",
    },
  },
];
