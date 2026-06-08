import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

import { campaignsCopy } from "@/lib/dictionaries/home";
import { pickLocalized, t } from "@/lib/translate";

type CampaignsSectionProps = {
  lang: string;
};

export function CampaignsSection({ lang }: CampaignsSectionProps) {
  const card2Tags = pickLocalized(campaignsCopy.card2.tags, lang);

  return (
    <section className="py-20 md:py-16 px-4 md:px-16 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-ink-black pb-4">
        <div>
          <h2 className="font-headline text-headline-lg uppercase text-ink-black">
            {t(campaignsCopy.title, lang)}
          </h2>
        </div>
        <Link
          href="#"
          className="font-button text-button uppercase text-proletarian-red hover:underline decoration-2 underline-offset-4 mt-4 md:mt-0 flex items-center gap-1"
        >
          {t(campaignsCopy.viewAll, lang)} <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Campaign Card 1 */}
        <article className="bg-paper-white brutal-border border-t-4 border-t-proletarian-red flex flex-col h-full group hover:bg-concrete-gray transition-colors duration-200">
          <div className="h-48 w-full relative overflow-hidden border-b-2 border-ink-black">
            <Image
              alt={t(campaignsCopy.card1.alt, lang)}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3MuQBQuwAeOaLqD8UAJJZbjYpBgZ5s8AbSbP14SsAn-kOI-txSMG2D5V4IaahOXhPaqhhmqK9jcWOJXcr35F7DaRxfhc_EurzEa16AZnDf-zaksyVmphoX9arZcIy8jaHRk4Y-1GZ9fkURlDJtGpUtcLuw4Z0D7lRDhHgojRBjW520usO0eCDmx5NR2iDnBv1REhviYglFH6JYykzJFasKN0Ca2VDY7Xw_PiayI7hnU3FkW2sPUvuPLyG4c-PuWIdsQTqVdp2-_sy"
            />
            <div className="absolute top-4 left-4 bg-ink-black text-paper-white font-label-caps text-label-caps px-2 py-1">
              {t(campaignsCopy.urgent, lang)}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-headline text-headline-md uppercase text-ink-black mb-3">
              {t(campaignsCopy.card1.title, lang)}
            </h3>
            <p className="font-body-md text-body-md text-ink-black mb-6 flex-grow">
              {t(campaignsCopy.card1.description, lang)}
            </p>
            <div className="w-full h-4 bg-concrete-gray brutal-border mb-4">
              <div className="h-full bg-proletarian-red" style={{ width: "75%" }}></div>
            </div>
            <div className="flex justify-between font-label-caps text-label-caps text-ink-black mb-6">
              <span>
                7,500 / 10,000 {t(campaignsCopy.signatures, lang)}
              </span>
            </div>
            <button className="w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100 cursor-pointer">
              {t(campaignsCopy.card1.signCta, lang)}
            </button>
          </div>
        </article>

        {/* Campaign Card 2 */}
        <article className="bg-paper-white brutal-border flex flex-col h-full group hover:bg-concrete-gray transition-colors duration-200">
          <div className="h-48 w-full relative overflow-hidden border-b-2 border-ink-black">
            <Image
              alt={t(campaignsCopy.card2.alt, lang)}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Kz63kY_P8Nmfrc7qV1xGTdG3ktoUTePUkGzKKNDXWQkIviRzJcYube8EIYS1dXffW_CAbmJxTbfGJ-6EpN7y3dCCeUmY0YtEMrlyq8AAwo2X7M5PyEb2tfSOwGO3Bx8HCAgW7jZQpviHY6BLdZ1YWlppUQV7oMxboNO8z0CT2ZbzwEM8zNLMOgT5gF8QCB4SykUX1nTKS_JVe9xedllPTgDamWNHTGQMb5txv-i9_uC5ZJDQIdfgUclsa7mdt5tHiV7mHqTlyJ9F"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-headline text-headline-md uppercase text-ink-black mb-3">
              {t(campaignsCopy.card2.title, lang)}
            </h3>
            <p className="font-body-md text-body-md text-ink-black mb-6 flex-grow">
              {t(campaignsCopy.card2.description, lang)}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {card2Tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-ink-black text-paper-white font-label-caps text-label-caps px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100 mt-auto cursor-pointer">
              {t(campaignsCopy.card2.readMoreCta, lang)}
            </button>
          </div>
        </article>

        {/* Campaign Card 3 */}
        <article className="brutal-border flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow bg-proletarian-red text-paper-white h-full">
            <div className="flex justify-between items-start mb-6">
              <HeartHandshake className="size-10" />
              <span className="font-label-caps text-label-caps border border-paper-white px-2 py-1">
                {t(campaignsCopy.ongoing, lang)}
              </span>
            </div>
            <h3 className="font-headline text-headline-md uppercase mb-3">
              {t(campaignsCopy.card3.title, lang)}
            </h3>
            <p className="font-body-md text-body-md mb-6 flex-grow">
              {t(campaignsCopy.card3.description, lang)}
            </p>
            <button className="w-full bg-paper-white text-proletarian-red font-button text-button uppercase px-4 py-3 brutal-border border-paper-white hover:bg-ink-black hover:text-paper-white hover:border-ink-black transition-colors duration-100 mt-auto cursor-pointer">
              {t(campaignsCopy.card3.contributeCta, lang)}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
