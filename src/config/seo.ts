import type { Metadata } from "next";
import { locales, type Locale } from "@/config/locales";

export const siteUrl = process.env.SITE_URL ?? "https://www.mhramada.org";

export const siteName: Record<Locale, string> = {
  ru: "Маладая Грамада",
  be: "Маладая Грамада",
  en: "Maladaja Hramada",
  pl: "Młoda Hromada",
};

export const siteDescription: Record<Locale, string> = {
  ru: "Прогрессивное молодёжное движение социал-демократических ценностей. Строим демократическую Беларусь.",
  be: "Прагрэсіўны малады рух сацыял-дэмакратычных каштоўнасцяў. Будуем дэмакратычную Беларусь.",
  en: "A progressive youth movement rooted in social democratic values. Building a democratic Belarus.",
  pl: "Progresywny ruch młodzieżowy oparty na wartościach socjaldemokratycznych. Budujemy demokratyczną Białoruś.",
};

export const ogImage = "/brand/og-image.png";
export const ogImageWidth = 1200;
export const ogImageHeight = 630;

const ogImageAbsolute = `${siteUrl}${ogImage}`;

export function pageUrl(lang: string, path = ""): string {
  return `${siteUrl}/${lang}${path}`;
}

export function defaultMetadata(lang: string): Metadata {
  const locale = lang as Locale;
  return {
    title: siteName[locale],
    description: siteDescription[locale],
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: siteName[locale],
      description: siteDescription[locale],
      url: siteUrl,
      siteName: siteName[locale],
      locale: lang,
      type: "website",
      images: [
        {
          url: ogImageAbsolute,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: siteName[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName[locale],
      description: siteDescription[locale],
      images: [ogImageAbsolute],
    },
    alternates: {
      canonical: siteUrl,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}`]),
      ),
    },
  };
}

export type LocaleMetadataInput = {
  title: string;
  description: string;
  /** Locale-prefixed path, e.g. "/about" or "/policy/x". Empty string = homepage. */
  path?: string;
  /** Override OG type, defaults to "website". */
  ogType?: "website" | "article";
};

/**
 * Centralized per-page metadata builder. Use this in every page's
 * `generateMetadata` to ensure consistent canonical, OpenGraph, and Twitter
 * card output (including images).
 */
export function localeMetadata(
  lang: string,
  input: LocaleMetadataInput,
): Metadata {
  const locale = lang as Locale;
  const url = pageUrl(lang, input.path ?? "");
  const fullTitle = `${input.title} | ${siteName[locale]}`;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, pageUrl(l, input.path ?? "")]),
      ),
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url,
      siteName: siteName[locale],
      locale: lang,
      type: input.ogType ?? "website",
      images: [
        {
          url: ogImageAbsolute,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [ogImageAbsolute],
    },
  };
}
