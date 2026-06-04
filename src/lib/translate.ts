import { defaultLocale, isValidLocale, type Locale } from "@/config/i18n";

export function resolveLocale(lang: string): Locale {
  return isValidLocale(lang) ? lang : defaultLocale;
}

/** Pick a localized string; falls back to `ru`. */
export function t<T extends Record<Locale, string>>(
  dictionary: T,
  lang: string,
): string {
  const locale = resolveLocale(lang);
  return dictionary[locale] ?? dictionary[defaultLocale];
}

/** Pick a localized object; falls back to `ru`. */
export function pickLocalized<T>(dictionary: Record<Locale, T>, lang: string): T {
  const locale = resolveLocale(lang);
  return dictionary[locale] ?? dictionary[defaultLocale];
}
