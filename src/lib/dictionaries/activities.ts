import type { Locale } from "@/config/i18n";

export const activitiesPageCopy = {
  title: {
    be: "Што робім",
    ru: "Что делаем",
    pl: "Co robimy",
    en: "Our work",
  } satisfies Record<Locale, string>,
  description: {
    be: "Нашы кампаніі і праекты",
    ru: "Наши кампании и проекты",
    pl: "Nasze kampanie i projekty",
    en: "Our campaigns and projects",
  } satisfies Record<Locale, string>,
} as const;

export const activitiesCopy = {
  viewAll: {
    be: "Усе",
    ru: "Все",
    en: "View All",
    pl: "Wszystkie",
  } satisfies Record<Locale, string>,

  campaignBadge: {
    be: "Кампанія",
    ru: "Кампания",
    en: "Campaign",
    pl: "Kampania",
  } satisfies Record<Locale, string>,

  projectBadge: {
    be: "Праект",
    ru: "Проект",
    en: "Project",
    pl: "Projekt",
  } satisfies Record<Locale, string>,

  urgent: {
    be: "Тэрмінова",
    ru: "Срочно",
    en: "Urgent",
    pl: "Pilne",
  } satisfies Record<Locale, string>,

  ongoing: {
    be: "Бягучая",
    ru: "Текущая",
    en: "Ongoing",
    pl: "W trakcie",
  } satisfies Record<Locale, string>,

  teaserTitle: {
    be: "Апошняе",
    ru: "Последнее",
    en: "Latest",
    pl: "Najnowsze",
  } satisfies Record<Locale, string>,

  readMoreCta: {
    be: "Падрабязней",
    ru: "Подробнее",
    en: "Read More",
    pl: "Czytaj dalej",
  } satisfies Record<Locale, string>,

  signaturesLabel: {
    be: "Подпісаў",
    ru: "Подписей",
    en: "Signatures",
    pl: "Podpisów",
  } satisfies Record<Locale, string>,

  /** @deprecated Migrated to Payload Activity collection. */
  items: [
    {
      id: "campaign-1",
      slug: "defend-student-rights",
      type: "campaign" as const,
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3MuQBQuwAeOaLqD8UAJJZbjYpBgZ5s8AbSbP14SsAn-kOI-txSMG2D5V4IaahOXhPaqhhmqK9jcWOJXcr35F7DaRxfhc_EurzEa16AZnDf-zaksyVmphoX9arZcIy8jaHRk4Y-1GZ9fkURlDJtGpUtcLuw4Z0D7lRDhHgojRBjW520usO0eCDmx5NR2iDnBv1REhviYglFH6JYykzJFasKN0Ca2VDY7Xw_PiayI7hnU3FkW2sPUvuPLyG4c-PuWIdsQTqVdp2-_sy",
      alt: {
        be: "Пратэстоўцы з плакатамі",
        ru: "Протестующие с плакатами",
        en: "Protestors holding signs",
        pl: "Protestujący z transparentami",
      } satisfies Record<Locale, string>,
      badge: "urgent" as const,
      progress: { current: 7500, max: 10000 },
      title: {
        be: "Абаранім правы студэнтаў",
        ru: "Защитим права студентов",
        en: "Defend Student Rights",
        pl: "Brońmy praw studentów",
      } satisfies Record<Locale, string>,
      description: {
        be: "Мабілізуем студэнтаў ВНУ супраць апошняга павышэння платы за навучанне і патрабуем празрыстага размеркавання фінансавання. Далучайцеся да забастоўкі ў наступную пятніцу.",
        ru: "Мобилизуем студентов вузов против последнего повышения платы за обучение и требуем прозрачного распределения финансирования. Присоединяйтесь к забастовке в следующую пятницу.",
        en: "Mobilizing across universities to protest the recent tuition hikes and demand transparent funding allocation. Join the strike next Friday.",
        pl: "Mobilizujemy środowiska uniwersyteckie przeciwko ostatnim podwyżkom czesnego i domagamy się przejrzystego przydziału funduszy. Dołącz do strajku w najbliższy piątek.",
      } satisfies Record<Locale, string>,
      cta: {
        type: "external" as const,
        href: "https://www.change.org",
        label: {
          be: "Падпісаць петыцыю",
          ru: "Подписать петицию",
          en: "Sign Petition",
          pl: "Podpisz petycję",
        } satisfies Record<Locale, string>,
      },
    },
    {
      id: "campaign-2",
      slug: "workers-union-solidarity",
      type: "campaign" as const,
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Kz63kY_P8Nmfrc7qV1xGTdG3ktoUTePUkGzKKNDXWQkIviRzJcYube8EIYS1dXffW_CAbmJxTbfGJ-6EpN7y3dCCeUmY0YtEMrlyq8AAwo2X7M5PyEb2tfSOwGO3Bx8HCAgW7jZQpviHY6BLdZ1YWlppUQV7oMxboNO8z0CT2ZbzwEM8zNLMOgT5gF8QCB4SykUX1nTKS_JVe9xedllPTgDamWNHTGQMb5txv-i9_uC5ZJDQIdfgUclsa7mdt5tHiV7mHqTlyJ9F",
      alt: {
        be: "Мегафон на зямлі",
        ru: "Мегафон на земле",
        en: "Megaphone on ground",
        pl: "Megafon na ziemi",
      } satisfies Record<Locale, string>,
      title: {
        be: "Салідарнасць з прафсаюзам",
        ru: "Солидарность с профсоюзом",
        en: "Workers Union Solidarity",
        pl: "Solidarność ze związkiem zawodowym",
      } satisfies Record<Locale, string>,
      description: {
        be: "Падтрымліваем работнікаў транспарту ў іх патрабаваннях справядлівай аплаты і бяспечных умоваў працы. Яны рухаюць горад — яны заслугоўваюць павагі.",
        ru: "Поддерживаем работников транспорта в их требованиях справедливой оплаты и безопасных условий труда. Они двигают город — они заслуживают уважения.",
        en: "Standing with the transit workers in their demand for fair wages and safe working conditions. They move the city; they deserve respect.",
        pl: "Stoimy ramię w ramię z pracownikami transportu w ich walce o godne wynagrodzenia i bezpieczne warunki pracy. Oni napędzają miasto — zasługują na szacunek.",
      } satisfies Record<Locale, string>,
      tags: {
        be: ["Праца", "Салідарнасць"],
        ru: ["Труд", "Солидарность"],
        en: ["Labor", "Solidarity"],
        pl: ["Praca", "Solidarność"],
      } satisfies Record<Locale, readonly string[]>,
      cta: {
        type: "internal" as const,
        href: "workers-union-solidarity",
        label: {
          be: "Падрабязней",
          ru: "Подробнее",
          en: "Read More",
          pl: "Czytaj dalej",
        } satisfies Record<Locale, string>,
      },
    },
    {
      id: "campaign-3",
      slug: "mutual-aid-network",
      type: "campaign" as const,
      variant: "solid" as const,
      badge: "ongoing" as const,
      title: {
        be: "Сетка ўзаемадапамогі",
        ru: "Сеть взаимопомощи",
        en: "Mutual Aid Network",
        pl: "Sieć wzajemnej pomocy",
      } satisfies Record<Locale, string>,
      description: {
        be: "Наш фонд грамадскай абароны аказвае прамую падтрымку актывістам, якія сутыкаюцца з судовымі іскамі, і бастуючым работнікам. Салідарнасць — нашая зброя.",
        ru: "Наш фонд общественной защиты оказывает прямую поддержку активистам, на которых давят судебными исками, и бастующим работникам. Солидарность — наше оружие.",
        en: "Our community defense fund provides direct support to activists facing legal fees and workers striking for better conditions. Solidarity is our weapon.",
        pl: "Nasz fundusz obrony społecznej zapewnia bezpośrednie wsparcie aktywistom mierzącym się z kosztami prawnymi oraz strajkującym pracownikom. Solidarność jest naszą bronią.",
      } satisfies Record<Locale, string>,
      cta: {
        type: "external" as const,
        href: "https://bysol.org",
        label: {
          be: "Падтрымаць",
          ru: "Поддержать",
          en: "Contribute Now",
          pl: "Wesprzyj",
        } satisfies Record<Locale, string>,
      },
    },
    {
      id: "project-1",
      slug: "civic-participation-school",
      type: "project" as const,
      date: {
        be: "Актыўны праект",
        ru: "Активный проект",
        en: "Active project",
        pl: "Aktywny projekt",
      } satisfies Record<Locale, string>,
      title: {
        be: "Школа грамадзянскай удзелу",
        ru: "Школа гражданского участия",
        en: "Civic participation school",
        pl: "Szkoła uczestnictwa obywatelskiego",
      } satisfies Record<Locale, string>,
      description: {
        be: "Навучанне навыкам адвокацыі, медыяцыі і арганізацыі лакальных ініцыятыў.",
        ru: "Обучение навыкам адвокации, медиации и организации локальных инициатив.",
        en: "Training in advocacy, mediation, and organizing local initiatives.",
        pl: "Szkolenie z advocacy, mediacji i organizowania inicjatyw lokalnych.",
      } satisfies Record<Locale, string>,
    },
    {
      id: "project-2",
      slug: "what-is-social-democracy",
      type: "project" as const,
      youtubePlaylistId: "PLLvxC2iMTjztnAvtoNlsdTrvRwdMio-kH",
      date: {
        be: "Адукацыйны праект",
        ru: "Образовательный проект",
        en: "Educational project",
        pl: "Projekt edukacyjny",
      } satisfies Record<Locale, string>,
      title: {
        be: "Што такое сацыял-дэмакратыя?",
        ru: "Что такое социал-демократия?",
        en: "What is Social Democracy?",
        pl: "Czym jest socjaldemokracja?",
      } satisfies Record<Locale, string>,
      description: {
        be: "Плэйліст з відэа, якія тлумачаць асновы сацыял-дэмакратыі, яе гісторыю, каштоўнасці і сучасныя падыходы.",
        ru: "Плейлист с видео, объясняющих основы социал-демократии, её историю, ценности и современные подходы.",
        en: "A YouTube playlist explaining the fundamentals of social democracy — its history, values, and modern approaches.",
        pl: "Playlista wyjaśniająca podstawy socjaldemokracji — jej historię, wartości i współczesne podejścia.",
      } satisfies Record<Locale, string>,
    },
  ],
} as const;
