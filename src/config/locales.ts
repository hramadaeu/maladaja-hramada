export const locales = ["ru", "be", "en", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";
