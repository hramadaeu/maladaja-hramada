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
    ru: "будущее.",
    be: "будучыню.",
    en: "Future.",
    pl: "przyszłość.",
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

/** Campaigns grid on the main page (rendered by `CampaignsSection`). */
export const campaignsCopy = {
  title: {
    ru: "Последние кампании",
    be: "Апошнія кампаніі",
    en: "Latest Campaigns",
    pl: "Najnowsze kampanie",
  } satisfies Record<Locale, string>,
  viewAll: {
    ru: "Все кампании",
    be: "Усе кампаніі",
    en: "View All",
    pl: "Wszystkie",
  } satisfies Record<Locale, string>,
  urgent: {
    ru: "СРОЧНО",
    be: "ТЭРМІНОВА",
    en: "URGENT",
    pl: "PILNE",
  } satisfies Record<Locale, string>,
  ongoing: {
    ru: "ТЕКУЩАЯ",
    be: "БЯГУЧАЯ",
    en: "ONGOING",
    pl: "W TOKU",
  } satisfies Record<Locale, string>,
  signatures: {
    ru: "ПОДПИСЕЙ",
    be: "ПОДПІСАЎ",
    en: "SIGNATURES",
    pl: "PODPISÓW",
  } satisfies Record<Locale, string>,
  card1: {
    title: {
      ru: "Защитим права студентов",
      be: "Абаранім правы студэнтаў",
      en: "Defend Student Rights",
      pl: "Brońmy praw studentów",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Мобилизуем студентов вузов против последнего повышения платы за обучение и требуем прозрачного распределения финансирования. Присоединяйтесь к забастовке в следующую пятницу.",
      be: "Мабілізуем студэнтаў ВНУ супраць апошняга павышэння платы за навучанне і патрабуем празрыстага размеркавання фінансавання. Далучайцеся да забастоўкі ў наступную пятніцу.",
      en: "Mobilizing across universities to protest the recent tuition hikes and demand transparent funding allocation. Join the strike next Friday.",
      pl: "Mobilizujemy środowiska uniwersyteckie przeciwko ostatnim podwyżkom czesnego i domagamy się przejrzystego przydziału funduszy. Dołącz do strajku w najbliższy piątek.",
    } satisfies Record<Locale, string>,
    signCta: {
      ru: "Подписать петицию",
      be: "Падпісаць петыцыю",
      en: "Sign Petition",
      pl: "Podpisz petycję",
    } satisfies Record<Locale, string>,
    alt: {
      ru: "Протестующие с плакатами",
      be: "Пратэстоўцы з плакатамі",
      en: "Protestors holding signs",
      pl: "Protestujący z transparentami",
    } satisfies Record<Locale, string>,
  },
  card2: {
    title: {
      ru: "Солидарность с профсоюзом",
      be: "Салідарнасць з прафсаюзам",
      en: "Workers Union Solidarity",
      pl: "Solidarność ze związkiem zawodowym",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Поддерживаем работников транспорта в их требованиях справедливой оплаты и безопасных условий труда. Они двигают город — они заслуживают уважения.",
      be: "Падтрымліваем работнікаў транспарту ў іх патрабаваннях справядлівай аплаты і бяспечных умоваў працы. Яны рухаюць горад — яны заслугоўваюць павагі.",
      en: "Standing with the transit workers in their demand for fair wages and safe working conditions. They move the city; they deserve respect.",
      pl: "Stoimy ramię w ramię z pracownikami transportu w ich walce o godne wynagrodzenia i bezpieczne warunki pracy. Oni napędzają miasto — zasługują na szacunek.",
    } satisfies Record<Locale, string>,
    tags: {
      ru: ["ТРУД", "СОЛИДАРНОСТЬ"],
      be: ["ПРАЦА", "САЛІДАРНАСЦЬ"],
      en: ["LABOR", "SOLIDARITY"],
      pl: ["PRACA", "SOLIDARNOŚĆ"],
    } satisfies Record<Locale, readonly string[]>,
    readMoreCta: {
      ru: "Подробнее",
      be: "Падрабязней",
      en: "Read More",
      pl: "Czytaj dalej",
    } satisfies Record<Locale, string>,
    alt: {
      ru: "Мегафон на земле",
      be: "Мегафон на зямлі",
      en: "Megaphone on ground",
      pl: "Megafon na ziemi",
    } satisfies Record<Locale, string>,
  },
  card3: {
    title: {
      ru: "Сеть взаимопомощи",
      be: "Сетка ўзаемадапамогі",
      en: "Mutual Aid Network",
      pl: "Sieć wzajemnej pomocy",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Наш фонд общественной защиты оказывает прямую поддержку активистам, на которых давят судебными исками, и бастующим работникам. Солидарность — наше оружие.",
      be: "Наш фонд грамадскай абароны аказвае прамую падтрымку актывістам, якія сутыкаюцца з судовымі іскамі, і бастуючым работнікам. Салідарнасць — нашая зброя.",
      en: "Our community defense fund provides direct support to activists facing legal fees and workers striking for better conditions. Solidarity is our weapon.",
      pl: "Nasz fundusz obrony społecznej zapewnia bezpośrednie wsparcie aktywistom mierzącym się z kosztami prawnymi oraz strajkującym pracownikom. Solidarność jest naszą bronią.",
    } satisfies Record<Locale, string>,
    contributeCta: {
      ru: "Поддержать",
      be: "Падтрымаць",
      en: "Contribute Now",
      pl: "Wesprzyj",
    } satisfies Record<Locale, string>,
  },
} as const;
