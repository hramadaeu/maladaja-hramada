import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@/config/i18n";
import { PolicyIndex } from "@/components/policy/policy-index";
import { localeMetadata } from "@/config/seo";
import { policyCopy } from "@/lib/dictionaries/policy";
import { notFound } from "next/navigation";

type PolicyPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  return localeMetadata(lang, {
    title: policyCopy.indexTitle[locale],
    description: policyCopy.indexIntro[locale],
    path: "/policy",
  });
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <PolicyIndex lang={lang} />;
}
