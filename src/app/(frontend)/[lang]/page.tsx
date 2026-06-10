import type { Metadata } from "next";
import { Suspense } from "react";
import { isValidLocale } from "@/config/i18n";
import { resolveLocale } from "@/lib/translate";
import { defaultMetadata } from "@/config/seo";
import {
  HomeSection,
  DonateSection,
  RosesSeparator,
} from "@/components/sections";
import { ActivitiesSection } from "@/components/sections/activities";
import { getActivities } from "@/lib/activities.server";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return defaultMetadata(resolveLocale(lang));
}

async function TeaserActivities({ lang }: { lang: string }) {
  const allItems = await getActivities(lang);
  return <ActivitiesSection lang={lang} teaser items={allItems.slice(0, 3)} />;
}

function TeasersSkeleton() {
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

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
        {/* Full-width hero breakout */}
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <HomeSection lang={lang} />
        </div>

      <Suspense fallback={<TeasersSkeleton />}>
        <TeaserActivities lang={lang} />
      </Suspense>
      <RosesSeparator />
      <DonateSection lang={lang} />
    </div>
  );
}
