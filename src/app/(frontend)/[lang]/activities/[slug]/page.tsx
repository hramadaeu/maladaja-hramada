import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isValidLocale, locales } from "@/config/i18n";
import { localeMetadata } from "@/config/seo";
import { ActivityDetail } from "@/components/sections/activity-detail";
import { activitiesCopy } from "@/lib/dictionaries/activities";
import { t } from "@/lib/translate";

type SlugPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = activitiesCopy.items.map((item) => item.slug);
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const item = activitiesCopy.items.find((i) => i.slug === slug);
  if (!item) notFound();

  return localeMetadata(lang, {
    title: t(item.title, lang),
    description: t(item.description, lang),
    path: `/activities/${slug}`,
    ogType: "article",
  });
}

export default async function ActivitySlugPage({ params }: SlugPageProps) {
  const { lang, slug } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const item = activitiesCopy.items.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return <ActivityDetail lang={lang} item={item} />;
}
