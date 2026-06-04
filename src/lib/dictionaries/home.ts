import type { Locale } from "@/config/i18n";

export const homeCopy = {
  eyebrow: {
    ru: "Молодёжная организация",
    be: "Маладзёжная арганізацыя",
    en: "Youth organization",
    pl: "Organizacja młodzieżowa",
  } satisfies Record<Locale, string>,
  headline: {
    ru: "Кто мы и наши ценности",
    be: "Хто мы і нашы каштоўнасці",
    en: "Who we are and our values",
    pl: "Kim jesteśmy i nasze wartości",
  } satisfies Record<Locale, string>,
  mission: {
    ru: "«Маладая Грамада» — прогрессивное молодёжное движение социал-демократических ценностей. Мы объединяем активистов, которые строят справедливое, свободное и солидарное общество в Беларуси и за её пределами.",
    be: "«Маладая Грамада» — прагрэсіўны малады рух сацыял-дэмакратычных каштоўнасцяў. Мы аб’ядноўваем актывістаў, якія будуюць справядлівае, свабоднае і салідарнае грамадства ў Беларусі і за яе межамі.",
    en: "Maladaja Hramada is a progressive youth movement rooted in social democratic values. We bring together activists building a fair, free, and solidarity-driven society in Belarus and beyond.",
    pl: "Młoda Hromada to progresywny ruch młodzieżowy oparty na wartościach socjaldemokratycznych. Łączymy aktywistów budujących sprawiedliwe, wolne i solidarne społeczeństwo na Białorusi i poza nią.",
  } satisfies Record<Locale, string>,
  cta: {
    ru: "Присоединиться",
    be: "Далучыцца",
    en: "Join us",
    pl: "Dołącz",
  } satisfies Record<Locale, string>,
  valuesTitle: {
    ru: "Наши ценности",
    be: "Нашы каштоўнасці",
    en: "Our values",
    pl: "Nasze wartości",
  } satisfies Record<Locale, string>,
} as const;

export const homeValues = [
  {
    key: "freedom",
    title: {
      ru: "Свобода",
      be: "Свабода",
      en: "Freedom",
      pl: "Wolność",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Право каждого на достойную жизнь, самовыражение и участие в общественных решениях.",
      be: "Права кожнага на годную жыццё, самавыражэнне і ўдзел у грамадскіх рашэннях.",
      en: "Everyone’s right to a dignified life, self-expression, and participation in public decisions.",
      pl: "Prawo każdego do godnego życia, wyrażania siebie i udziału w decyzjach publicznych.",
    } satisfies Record<Locale, string>,
  },
  {
    key: "justice",
    title: {
      ru: "Справедливость",
      be: "Справядлівасць",
      en: "Justice",
      pl: "Sprawiedliwość",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Равные возможности, защита прав человека и ответственность власти перед обществом.",
      be: "Роўныя магчымасці, абарона правоў чалавека і адказнасць улады перад грамадствам.",
      en: "Equal opportunity, human rights protection, and accountability of power to society.",
      pl: "Równe szanse, ochrona praw człowieka i odpowiedzialność władzy wobec społeczeństwa.",
    } satisfies Record<Locale, string>,
  },
  {
    key: "solidarity",
    title: {
      ru: "Солидарность",
      be: "Салідарнасць",
      en: "Solidarity",
      pl: "Solidarność",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Взаимная поддержка внутри сообщества и солидарность с теми, кто борется за демократию.",
      be: "Узаемная падтрымка ў супольнасці і салідарнасць з тымі, хто змагаецца за дэмакратыю.",
      en: "Mutual support within our community and solidarity with those fighting for democracy.",
      pl: "Wzajemne wsparcie w społeczności i solidarność z tymi, którzy walczą o demokrację.",
    } satisfies Record<Locale, string>,
  },
  {
    key: "equality",
    title: {
      ru: "Равенство",
      be: "Роўнасць",
      en: "Equality",
      pl: "Równość",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Борьба с дискриминацией и создание инклюзивного пространства для всех молодых людей.",
      be: "Барацьба з дыскрымінацыяй і стварэнне інклюзіўнага прасторы для ўсіх маладых людзей.",
      en: "Fighting discrimination and building an inclusive space for all young people.",
      pl: "Walka z dyskryminacją i tworzenie inkluzywnej przestrzeni dla wszystkich młodych ludzi.",
    } satisfies Record<Locale, string>,
  },
] as const;
