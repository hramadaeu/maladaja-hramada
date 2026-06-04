import type { Locale } from "@/config/i18n";

export const donateCopy = {
  title: {
    ru: "Поддержать",
    be: "Падтрымаць",
    en: "Support us",
    pl: "Wesprzyj nas",
  } satisfies Record<Locale, string>,
  subtitle: {
    ru: "Анонимная поддержка — мы не собираем и не храним ваши персональные данные.",
    be: "Ананімная падтрымка — мы не збіраем і не захоўваем вашы персанальныя даныя.",
    en: "Anonymous support — we do not collect or store your personal data.",
    pl: "Anonimowe wsparcie — nie zbieramy ani nie przechowujemy Twoich danych osobowych.",
  } satisfies Record<Locale, string>,
  oneTime: {
    ru: "Разовый взнос",
    be: "Аднаразовы ўзнос",
    en: "One-time",
    pl: "Jednorazowo",
  } satisfies Record<Locale, string>,
  regular: {
    ru: "Регулярная поддержка",
    be: "Рэгулярная падтрымка",
    en: "Monthly support",
    pl: "Cyklicznie",
  } satisfies Record<Locale, string>,
  bankTitle: {
    ru: "Прямой перевод (PL)",
    be: "Прамы перавод (PL)",
    en: "Direct transfer (PL)",
    pl: "Przelew bezpośredni (PL)",
  } satisfies Record<Locale, string>,
  bankHint: {
    ru: "Банковский счёт в злотых. Укажите «Darowizna» в назначении платежа.",
    be: "Банкаўскі рахунак у злотых. Укажыце «Darowizna» ў прызначэнні плацяжу.",
    en: "Bank account in PLN. Use “Darowizna” as the payment reference.",
    pl: "Rachunek w PLN. W tytule przelewu wpisz „Darowizna”.",
  } satisfies Record<Locale, string>,
  copy: {
    ru: "Скопировать IBAN",
    be: "Скапіяваць IBAN",
    en: "Copy IBAN",
    pl: "Kopiuj IBAN",
  } satisfies Record<Locale, string>,
  copied: {
    ru: "Скопировано",
    be: "Скапіявана",
    en: "Copied",
    pl: "Skopiowano",
  } satisfies Record<Locale, string>,
  onlineTitle: {
    ru: "Онлайн-платформы",
    be: "Онлайн-платформы",
    en: "Online platforms",
    pl: "Platformy online",
  } satisfies Record<Locale, string>,
  cryptoTitle: {
    ru: "Криптовалюта",
    be: "Крыптавалюта",
    en: "Cryptocurrency",
    pl: "Kryptowaluty",
  } satisfies Record<Locale, string>,
  cryptoCta: {
    ru: "Показать кошельки",
    be: "Паказаць кашалькі",
    en: "Show wallets",
    pl: "Pokaż portfele",
  } satisfies Record<Locale, string>,
  cryptoDialogTitle: {
    ru: "Криптокошельки",
    be: "Крыптакашалькі",
    en: "Crypto wallets",
    pl: "Portfele krypto",
  } satisfies Record<Locale, string>,
  cryptoDialogDesc: {
    ru: "Отсканируйте QR-код или скопируйте адрес. Данные носят демонстрационный характер.",
    be: "Адсканіруйце QR-код або скапіюйце адрас. Даныя маюць дэманстрацыйны характар.",
    en: "Scan the QR code or copy the address. Details shown are for demonstration only.",
    pl: "Zeskanuj kod QR lub skopiuj adres. Dane mają charakter demonstracyjny.",
  } satisfies Record<Locale, string>,
} as const;

export const cryptoWallets = [
  { id: "btc", label: "Bitcoin (BTC)" },
  { id: "eth", label: "Ethereum (ETH)" },
  { id: "usdt", label: "USDT (TRC20)" },
] as const;
