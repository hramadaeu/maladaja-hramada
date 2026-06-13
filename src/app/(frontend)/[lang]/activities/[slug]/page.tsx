import type { Metadata } from "next";
import { Suspense } from "react";
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

function ActivityDetailSkeleton() {
  return (
    <article className="py-12 px-4 md:px-16 max-w-container-max mx-auto animate-pulse">
      <div className="h-5 w-32 bg-concrete-gray mb-6" />
      <div className="h-10 w-3/4 bg-concrete-gray mb-4" />
      <div className="w-full h-0.5 bg-concrete-gray mb-8" />
      <div className="h-64 md:h-96 w-full bg-concrete-gray" />
      <div className="mt-10 space-y-4">
        <div className="h-5 w-full bg-concrete-gray" />
        <div className="h-5 w-5/6 bg-concrete-gray" />
        <div className="h-5 w-2/3 bg-concrete-gray" />
      </div>
      <div className="mt-10 aspect-video w-full bg-concrete-gray max-w-3xl" />
    </article>
  );
}

async function ActivityDetailFetcher({ lang, slug }: { lang: string; slug: string }) {
  const item = await getActivityBySlug(slug, lang);
  if (!item) notFound();
  return <ActivityDetail lang={lang} item={item} />;
}

export default async function ActivitySlugPage({ params }: SlugPageProps) {
  const { lang, slug } = await params;

  return (
    <Suspense fallback={<ActivityDetailSkeleton />}>
      <ActivityDetailFetcher lang={lang} slug={slug} />
    </Suspense>
  );
}
