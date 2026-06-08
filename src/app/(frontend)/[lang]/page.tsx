import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@/config/i18n";
import { defaultMetadata } from "@/config/seo";
import {
  HomeSection,
  DonateSection,
  RosesSeparator,
} from "@/components/sections";
import { ActivitiesSection } from "@/components/sections/activities";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return defaultMetadata(lang as Locale);
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <div className="flex flex-col">
        {/* Full-width hero breakout */}
        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <HomeSection lang={lang} />
        </div>

      <ActivitiesSection lang={lang} teaser />
      <RosesSeparator />
      <DonateSection lang={lang} />
    </div>
  );
}
