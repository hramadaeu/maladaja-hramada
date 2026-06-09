import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/config/i18n";
import { localeMetadata } from "@/config/seo";
import { activitiesPageCopy } from "@/lib/dictionaries/activities";
import { getActivities } from "@/lib/activities.server";
import { resolveLocale } from "@/lib/translate";
import { ActivitiesSection } from "@/components/sections/activities";

type ActivitiesPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ActivitiesPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return localeMetadata(lang, {
    title: activitiesPageCopy.title[resolveLocale(lang)],
    description: activitiesPageCopy.description[resolveLocale(lang)],
    path: "/activities",
  });
}

export default async function ActivitiesPage({
  params,
}: ActivitiesPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const items = await getActivities(lang);

  return (
    <>
      <ActivitiesSection lang={lang} items={items} />
    </>
  );
}
