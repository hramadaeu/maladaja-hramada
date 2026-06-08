/**
 * Locale configuration — re-exports the single source of truth defined in
 * `src/config/locales.ts`, which is in turn consumed by `payload.config.ts`.
 *
 * Importing from this module keeps the public API stable for the rest of the
 * app (middleware, routes, components, content), while ensuring locales are
 * defined exactly once. Do not redefine locales or `defaultLocale` here.
 */
import { defaultLocale, locales, type Locale } from "@/config/locales";

export { defaultLocale, locales, type Locale };

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
