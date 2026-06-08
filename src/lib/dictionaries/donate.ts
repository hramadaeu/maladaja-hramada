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
  bankDescription: {
    ru: "Перевод напрямую на наш счёт в злотых. Укажите «Darowizna» в назначении платежа.",
    be: "Перавод напрамую на наш рахунак у злотых. Пакажыце «Darowizna» у прызначэнні плацяжу.",
    en: "Direct transfer to our Polish bank account. Use “Darowizna” as the payment reference.",
    pl: "Przelew bezpośredni na nasze konto w złotych. W tytule wpisz „Darowizna”.",
  } satisfies Record<Locale, string>,
  copy: {
    ru: "Скопировать",
    be: "Скапіяваць",
    en: "Copy",
    pl: "Kopiuj",
  } satisfies Record<Locale, string>,
  copied: {
    ru: "Скопировано",
    be: "Скапіявана",
    en: "Copied",
    pl: "Skopiowano",
  } satisfies Record<Locale, string>,
  bmcTitle: {
    ru: "Buy Me a Coffee",
    be: "Buy Me a Coffee",
    en: "Buy Me a Coffee",
    pl: "Buy Me a Coffee",
  } satisfies Record<Locale, string>,
  bmcDescription: {
    ru: "Международные пожертвования через платформу Buy Me a Coffee.",
    be: "Міжнародныя ахвяраванні праз платформу Buy Me a Coffee.",
    en: "International donations via Buy Me a Coffee.",
    pl: "Darowizny międzynarodowe przez Buy Me a Coffee.",
  } satisfies Record<Locale, string>,
  bmcCta: {
    ru: "☕ Купить нам кофе",
    be: "☕ Купіць нам каву",
    en: "☕ Buy us a coffee",
    pl: "☕ Kup nam kawę",
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
    ru: "Отсканируйте QR-код или скопируйте адрес.",
    be: "Адсканіруйце QR-код або скапіюйце адрас.",
    en: "Scan the QR code or copy the address.",
    pl: "Zeskanuj kod QR lub skopiuj adres.",
  } satisfies Record<Locale, string>,
} as const;

export const cryptoWallets = [
  { id: "btc", label: "Bitcoin (BTC)" },
  { id: "eth", label: "Ethereum (ETH)" },
  { id: "usdt", label: "USDT (TRC20)" },
] as const;
