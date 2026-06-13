import type { Locale } from "@/config/i18n";

export const aboutCopy = {
  badge: {
    ru: "О нас",
    be: "Пра нас",
    en: "About Us",
    pl: "O nas",
  } satisfies Record<Locale, string>,

  whoWeAre: {
    ru: "Кто мы",
    be: "Хто мы",
    en: "Who We Are",
    pl: "Kim jesteśmy",
  } satisfies Record<Locale, string>,

  mission: {
    ru: "Маладая Грамада — прогрессивное молодёжное движение, которое стремится построить прогрессивную социал-демократическую Беларусь с сильными политическими и общественными институтами. Мы объединяем активистов, которые строят справедливое, свободное и солидарное общество в Беларуси и за её пределами.",
    be: "Маладая Грамада — прагрэсіўны малады рух, які імкнецца пабудаваць прагрэсіўную сацыял-дэмакратычную Беларусь з моцнымі палітычнымі і грамадскімі інстытутамі. Мы аб’ядноўваем актывістаў, якія будуюць справядлівае, свабоднае і салідарнае грамадства ў Беларусі і за яе межамі.",
    en: "Maladaja Hramada is a progressive youth movement that seeks to build a progressive social democratic Belarus with strong political and civic institutions. We bring together activists building a fair, free, and solidarity-driven society in Belarus and beyond.",
    pl: "Młoda Hromada to progresywny ruch młodzieżowy, który dąży do zbudowania progresywnej socjaldemokratycznej Białorusi z silnymi instytucjami politycznymi i obywatelskimi. Łączymy aktywistów budujących sprawiedliwe, wolne i solidarne społeczeństwo na Białorusi i poza nią.",
  } satisfies Record<Locale, string>,

  founded: {
    ru: "Молодые белорусы, которые отказываются мириться со статус-кво. Наша работа охватывает низовую активность, адвокацию политик, взаимопомощь и международную солидарность.",
    be: "Маладыя беларусы, якія адмаўляюцца мірыцца са статус-кво. Наша праца ахоплівае нізавую актыўнасць, адвакацыю палітык, узаемадапамогу і міжнародную салідарнасць.",
    en: "Young Belarusians who refuse to accept the status quo. Our work spans grassroots activism, policy advocacy, mutual aid, and international solidarity.",
    pl: "Młodzi Białorusini, którzy odmawiają akceptacji status quo. Nasza działalność obejmuje aktywizm oddolny, rzecznictwo polityczne, wzajemną pomoc i solidarność międzynarodową.",
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

  partnersTitle: {
    ru: "Наши партнёры",
    be: "Нашыя партнёры",
    en: "Our Partners",
    pl: "Nasi partnerzy",
  } satisfies Record<Locale, string>,

  historyTitle: {
    ru: "Наша история",
    be: "Наша гісторыя",
    en: "Our History",
    pl: "Nasza historia",
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

export const aboutMilestones = [
  {
    key: "founded",
    date: "1994",
    title: {
      ru: "Основание",
      be: "Заснаванне",
      en: "Foundation",
      pl: "Założenie",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Молодёжное социал-демократическое объединение «Маладая Грамада» образовано по инициативе партии БСДГ (Беларуская Сацыял-дэмакратычная Грамада).",
      be: "Маладзёжнае сацыял-дэмакратычнае аб’яднанне «Маладая Грамада» ўтворана па ініцыятыве партыі БСДГ (Беларуская Сацыял-дэмакратычная Грамада).",
      en: "The youth social-democratic movement 'Maladaja Hramada' is formed on the initiative of the BSDP (Hramada) party.",
      pl: "Młodzieżowe stowarzyszenie socjaldemokratyczne 'Maladaja Hramada' powstaje z inicjatywy partii BSDG (Białoruska Socjaldemokratyczna Hromada).",
    } satisfies Record<Locale, string>,
  },
  {
    key: "rise",
    date: "1996–1998",
    title: {
      ru: "Расцвет",
      be: "Росквіт",
      en: "Rise",
      pl: "Rozkwit",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Официальная регистрация 14 июня 1996 года. Организация становится одной из самых влиятельных молодёжных организаций Беларуси, соосновывает Раду молодёжных организаций, участвует в протестах против авторитарного референдума 1996 года.",
      be: "Афіцыйная рэгістрацыя 14 чэрвеня 1996 года. Арганізацыя становіцца адной з самых уплывовых моладзевых арганізацый Беларусі, сузасноўвае Раду моладзевых арганізацый, удзельнічае ў пратэстах супраць аўтарытарнага рэферэндуму 1996 года.",
      en: "Officially registered on 14 June 1996. The organisation becomes one of the most influential youth organisations in Belarus, co-founds the Council of Youth Organisations, and takes part in protests against the 1996 authoritarian referendum.",
      pl: "Oficjalna rejestracja 14 czerwca 1996 roku. Organizacja staje się jedną z najbardziej wpływowych organizacji młodzieżowych na Białorusi, współzakłada Radę Organizacji Młodzieżowych i bierze udział w protestach przeciwko autorytarnemu referendum z 1996 roku.",
    } satisfies Record<Locale, string>,
  },
  {
    key: "split",
    date: "1999–2004",
    title: {
      ru: "Раскол и ликвидация",
      be: "Раскол і ліквідацыя",
      en: "Split & Liquidation",
      pl: "Rozłam i likwidacja",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Внутренний конфликт раскалывает движение. Из части членов создаётся «Маладыя сацыял-дэмакраты». В 2004 году Верховный Суд ликвидирует «Маладую Грамаду» по иску Министерства юстиции.",
      be: "Унутраны канфлікт расколвае рух. З часткі членаў ствараецца «Маладыя сацыял-дэмакраты». У 2004 годзе Вярхоўны Суд ліквідуе «Маладую Грамаду» па іску Міністэрства юстыцыі.",
      en: "Internal conflict splits the movement. Some members form 'Maladyja Sacyjal-Demakraty' (MSD). In 2004 the Supreme Court liquidates 'Maladaja Hramada' at the suit of the Ministry of Justice.",
      pl: "Konflikt wewnętrzny rozbija ruch. Część członków tworzy 'Maladyja Sacyjal-Demakraty' (MSD). W 2004 roku Sąd Najwyższy likwiduje 'Maladaja Hramada' na wniosek Ministerstwa Sprawiedliwości.",
    } satisfies Record<Locale, string>,
  },
  {
    key: "reunification",
    date: "2005",
    title: {
      ru: "Воссоединение",
      be: "Уз'яднанне",
      en: "Reunification",
      pl: "Zjednoczenie",
    } satisfies Record<Locale, string>,
    description: {
      ru: "МСД и МГ проводят объединительный съезд 3 июля 2005 года. Приняты новый Устав, Программа и символика — роза с контурами Беларуси. Создана единая организация «МСД-МГ».",
      be: "МСД і МГ праводзяць аб'яднаўчы з'езд 3 ліпеня 2005 года. Прыняты новы Статут, Праграма і сімволіка — ружа з контурамі Беларусі. Створана адзіная арганізацыя «МСД-МГ».",
      en: "MSD and MH hold a unification congress on 3 July 2005. A new Statute, Program, and symbolism — a rose with the contours of Belarus — are adopted. The unified organisation 'MSD-MH' is formed.",
      pl: "MSD i MH przeprowadzają zjazd jednoczący 3 lipca 2005 roku. Przyjmują nowy Statut, Program i symbolikę — różę z konturami Białorusi. Powstaje zjednoczona organizacja 'MSD-MH'.",
    } satisfies Record<Locale, string>,
  },
  {
    key: "repression",
    date: "2025",
    title: {
      ru: "Репрессии",
      be: "Рэпрэсіі",
      en: "Repression",
      pl: "Represje",
    } satisfies Record<Locale, string>,
    description: {
      ru: "Страницы организации в социальных сетях внесены в Республиканский список экстремистских материалов белорусскими властями.",
      be: "Старонкі арганізацыі ў сацыяльных сетках унесены ў Рэспубліканскі спіс экстрэмісцкіх матэрыялаў беларускімі ўладамі.",
      en: "The organisation's social media pages are added to the Republican List of Extremist Materials by Belarusian authorities.",
      pl: "Strony organizacji w mediach społecznościowych zostają wpisane przez białoruskie władze na Republikową Listę Materiałów Ekstremistycznych.",
    } satisfies Record<Locale, string>,
  },
] as const;

