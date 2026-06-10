import type { Metadata } from "next";
import { Suspense } from "react";
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

async function ActivitiesList({ lang }: { lang: string }) {
  const items = await getActivities(lang);
  return <ActivitiesSection lang={lang} items={items} />;
}

function ActivitiesListSkeleton() {
  return (
    <section className="pt-6 md:pt-8 pb-10 md:pb-14 px-4 md:px-16 max-w-container-max mx-auto animate-pulse">
      <div className="h-10 w-48 bg-concrete-gray mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="brutal-border h-72 bg-concrete-gray" />
        ))}
      </div>
    </section>
  );
}

export default async function ActivitiesPage({
  params,
}: ActivitiesPageProps) {
  const { lang } = await params;

  return (
    <>
      <Suspense fallback={<ActivitiesListSkeleton />}>
        <ActivitiesList lang={lang} />
      </Suspense>
    </>
  );
}
