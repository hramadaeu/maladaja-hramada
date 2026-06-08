import type { Locale } from "@/config/i18n";

export const aboutCopy = {
  badge: {
    ru: "О НАС",
    be: "ПРА НАС",
    en: "ABOUT US",
    pl: "O NAS",
  } satisfies Record<Locale, string>,

  whoWeAre: {
    ru: "Кто мы",
    be: "Хто мы",
    en: "Who We Are",
    pl: "Kim jesteśmy",
  } satisfies Record<Locale, string>,

  mission: {
    ru: "«Маладая Грамада» — прогрессивное молодёжное движение социал-демократических ценностей. Мы объединяем активистов, которые строят справедливое, свободное и солидарное общество в Беларуси и за её пределами.",
    be: "«Маладая Грамада» — прагрэсіўны малады рух сацыял-дэмакратычных каштоўнасцяў. Мы аб’ядноўваем актывістаў, якія будуюць справядлівае, свабоднае і салідарнае грамадства ў Беларусі і за яе межамі.",
    en: "Maladaja Hramada is a progressive youth movement rooted in social democratic values. We bring together activists building a fair, free, and solidarity-driven society in Belarus and beyond.",
    pl: "Młoda Hromada to progresywny ruch młodzieżowy oparty na wartościach socjaldemokratycznych. Łączymy aktywistów budujących sprawiedliwe, wolne i solidarne społeczeństwo na Białorusi i poza nią.",
  } satisfies Record<Locale, string>,

  founded: {
    ru: "Основанная молодыми беларусами, которые отказываются мириться со статус-кво, мы организуем, обучаем и мобилизуем ради демократического будущего. Наша работа охватывает низовую активность, адвокацию политик, взаимопомощь и международную солидарность.",
    be: "Заснаваная маладымі беларусамі, якія адмаўляюцца мірыцца са статус-кво, мы арганізуем, навучаем і мабілізуем дзеля дэмакратычнай будучыні. Наша праца ахоплівае нізавую актыўнасць, адвакацыю палітык, узаемадапамогу і міжнародную салідарнасць.",
    en: "Founded by young Belarusians who refuse to accept the status quo, we organize, educate, and mobilize for a democratic future. Our work spans grassroots activism, policy advocacy, mutual aid, and international solidarity.",
    pl: "Założona przez młodych Białorusinów, którzy odmawiają akceptacji status quo, organizujemy, edukujemy i mobilizujemy na rzecz demokratycznej przyszłości. Nasza działalność obejmuje aktywizm oddolny, rzecznictwo polityczne, wzajemną pomoc i solidarność międzynarodową.",
  } satisfies Record<Locale, string>,

  valuesTitle: {
    ru: "Наши ценности",
    be: "Нашы каштоўнасці",
    en: "Our Values",
    pl: "Nasze wartości",
  } satisfies Record<Locale, string>,

  ctaTitle: {
    ru: "Присоединяйся к движению",
    be: "Далучайся да руху",
    en: "Join the Movement",
    pl: "Dołącz do ruchu",
  } satisfies Record<Locale, string>,

  ctaText: {
    ru: "Время тихих вежливых просьб прошло. Мы строим демократическую Беларусь, и ты нужен нам.",
    be: "Час ціхіх ветлівых просьбаў мінуў. Мы будуем дэмакратычную Беларусь, і ты патрэбен нам.",
    en: "The time for quiet polite requests is over. We are building a democratic Belarus and we need you with us.",
    pl: "Czas cichych, grzecznych próśb minął. Budujemy demokratyczną Białoruś i potrzebujemy Cię z nami.",
  } satisfies Record<Locale, string>,

  getInvolved: {
    ru: "Участвовать",
    be: "Удзельнічаць",
    en: "Get Involved",
    pl: "Zaangażuj się",
  } satisfies Record<Locale, string>,

  contactUs: {
    ru: "Связаться",
    be: "Звязацца",
    en: "Contact Us",
    pl: "Skontaktuj się",
  } satisfies Record<Locale, string>,
} as const;

export const aboutValues = [
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
      en: "Everyone's right to a dignified life, self-expression, and participation in public decisions.",
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
