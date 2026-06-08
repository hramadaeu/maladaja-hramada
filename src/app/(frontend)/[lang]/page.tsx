import { isValidLocale } from "@/config/i18n";
import {
  HomeSection,
  CampaignsSection,
  DonateSection,
  RosesSeparator,
} from "@/components/sections";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

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

      <CampaignsSection lang={lang} />
      <RosesSeparator />
      <DonateSection lang={lang} />
    </div>
  );
}
