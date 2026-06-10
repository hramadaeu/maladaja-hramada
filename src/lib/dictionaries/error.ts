import type { Locale } from "@/config/i18n";

export const errorCopy = {
  title: {
    be: "Нешта пайшло не так",
    ru: "Что-то пошло не так",
    en: "Something went wrong",
    pl: "Coś poszło nie tak",
  } satisfies Record<Locale, string>,
  subtitle: {
    be: "Адбылася нечаканая памылка. Калі ласка, паспрабуйце яшчэ раз.",
    ru: "Произошла неожиданная ошибка. Пожалуйста, попробуйте ещё раз.",
    en: "An unexpected error occurred. Please try again.",
    pl: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie.",
  } satisfies Record<Locale, string>,
  cta: {
    be: "Паспрабаваць зноў",
    ru: "Попробовать снова",
    en: "Try again",
    pl: "Spróbuj ponownie",
  } satisfies Record<Locale, string>,
} as const;
