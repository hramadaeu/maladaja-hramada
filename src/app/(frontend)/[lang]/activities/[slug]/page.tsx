import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isValidLocale, locales } from "@/config/i18n";
import { localeMetadata } from "@/config/seo";
import { ActivityDetail } from "@/components/sections/activity-detail";
import { getActivities, getActivityBySlug } from "@/lib/activities.server";

type SlugPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  const items = await getActivities();
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const item of items) {
      params.push({ lang, slug: item.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();

  const item = await getActivityBySlug(slug, lang);
  if (!item) notFound();

  return localeMetadata(lang, {
    title: item.title,
    description: item.description,
    path: `/activities/${slug}`,
    ogType: "article",
  });
}

export default async function ActivitySlugPage({ params }: SlugPageProps) {
  const { lang, slug } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const item = await getActivityBySlug(slug, lang);

  if (!item) {
    notFound();
  }

  return <ActivityDetail lang={lang} item={item} />;
}
