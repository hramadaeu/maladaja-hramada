import { isValidLocale } from "@/config/i18n";
import {
  DonateSection,
  HomeSection,
  NewsTeaserSection,
  ProjectsTeaserSection,
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
    <div className="-mx-4 flex flex-col sm:-mx-6 lg:-mx-8">
      <HomeSection lang={lang} />
      <NewsTeaserSection lang={lang} />
      <ProjectsTeaserSection lang={lang} />
      <DonateSection lang={lang} />
    </div>
  );
}
