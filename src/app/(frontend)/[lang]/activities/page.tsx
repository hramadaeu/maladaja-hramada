import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/config/i18n";
import { localeMetadata } from "@/config/seo";
import { activitiesPageCopy } from "@/lib/dictionaries/activities";
import { t } from "@/lib/translate";
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
    title: t(activitiesPageCopy.title, lang),
    description: t(activitiesPageCopy.description, lang),
    path: "/activities",
  });
}

export default async function ActivitiesPage({
  params,
}: ActivitiesPageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <>
      <ActivitiesSection lang={lang} />
    </>
  );
}
