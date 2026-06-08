import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

import { activitiesCopy, activitiesPageCopy, activityExternalUrls } from "@/lib/dictionaries/activities";
import { pickLocalized, t } from "@/lib/translate";

type ActivitiesSectionProps = {
  lang: string;
  teaser?: boolean;
};

export function ActivitiesSection({ lang, teaser }: ActivitiesSectionProps) {
  const items = teaser ? activitiesCopy.items.slice(0, 3) : activitiesCopy.items;

  return (
    <section className="py-20 md:py-16 px-4 md:px-16 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-ink-black pb-4">
        <h2 className="font-headline text-headline-lg uppercase text-ink-black">
          {teaser ? t(activitiesCopy.teaserTitle, lang) : t(activitiesPageCopy.title, lang)}
        </h2>
        {teaser && (
          <Link
            href={`/${lang}/activities`}
            className="font-button text-button uppercase text-proletarian-red hover:underline decoration-2 underline-offset-4 mt-4 md:mt-0 flex items-center gap-1"
          >
            {t(activitiesCopy.viewAll, lang)} <ArrowRight className="size-4" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          if (item.type === "campaign") {
            return renderCampaignCard(item, lang);
          }
          return renderProjectCard(item, lang);
        })}
      </div>
    </section>
  );
}

function renderCampaignCard(
  item: (typeof activitiesCopy.items)[number] & { type: "campaign" },
  lang: string,
) {
  const isCard1 = item.id === "campaign-1";
  const isCard2 = item.id === "campaign-2";
  const isCard3 = item.id === "campaign-3";

  if (isCard3) {
    return (
      <article key={item.id} className="brutal-border flex flex-col h-full">
        <div className="p-6 flex flex-col flex-grow bg-proletarian-red text-paper-white h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="bg-ink-black px-2 py-1 font-label-caps text-label-caps text-paper-white">
              {t(activitiesCopy.campaignBadge, lang)}
            </span>
            <span className="font-label-caps text-label-caps border border-paper-white px-2 py-1">
              {t(activitiesCopy.ongoing, lang)}
            </span>
          </div>
          <HeartHandshake className="size-10 mb-6" />
          <h3 className="font-headline text-headline-md uppercase mb-3">{t(item.title, lang)}</h3>
          <p className="font-body-md text-body-md mb-6 flex-grow">{t(item.description, lang)}</p>
          <a
            href={activityExternalUrls.contributeNow}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-paper-white text-proletarian-red font-button text-button uppercase px-4 py-3 brutal-border border-paper-white text-center hover:bg-ink-black hover:text-paper-white hover:border-ink-black transition-colors duration-100"
          >
            {t(item.contributeCta!, lang)}
          </a>
        </div>
      </article>
    );
  }

  const tags = isCard2 ? pickLocalized(item.tags!, lang) : null;

  return (
    <article
      key={item.id}
      className="bg-paper-white brutal-border border-t-4 border-t-proletarian-red flex flex-col h-full group hover:bg-concrete-gray transition-colors duration-200"
    >
      <div className="h-48 w-full relative overflow-hidden border-b-2 border-ink-black">
        <Image
          alt={t(item.alt!, lang)}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={item.imageSrc!}
        />
        {isCard1 && (
          <div className="absolute top-4 left-4 bg-ink-black text-paper-white font-label-caps text-label-caps px-2 py-1">
            {t(activitiesCopy.urgent, lang)}
          </div>
        )}
        <div className="absolute top-4 right-4 bg-proletarian-red text-paper-white font-label-caps text-label-caps px-2 py-1">
          {t(activitiesCopy.campaignBadge, lang)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline text-headline-md uppercase text-ink-black mb-3">
          {t(item.title, lang)}
        </h3>
        <p className="font-body-md text-body-md text-ink-black mb-6 flex-grow">
          {t(item.description, lang)}
        </p>
        {isCard1 && (
          <>
            <div className="w-full h-4 bg-concrete-gray brutal-border mb-4">
              <div className="h-full bg-proletarian-red" style={{ width: "75%" }}></div>
            </div>
            <div className="flex justify-between font-label-caps text-label-caps text-ink-black mb-6">
              <span>7,500 / 10,000 {t(activitiesCopy.signaturesLabel, lang)}</span>
            </div>
            <a
              href={activityExternalUrls.signPetition}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border text-center hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100"
            >
              {t(item.signCta!, lang)}
            </a>
          </>
        )}
        {isCard2 && (
          <>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags!.map((tag) => (
                <span
                  key={tag}
                  className="bg-ink-black text-paper-white font-label-caps text-label-caps px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/${lang}/activities/${item.slug}`}
              className="block w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border text-center hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100"
            >
              {t(activitiesCopy.readMoreCta, lang)}
            </Link>
          </>
        )}
      </div>
    </article>
  );
}

function renderProjectCard(
  item: (typeof activitiesCopy.items)[number] & { type: "project" },
  lang: string,
) {
  return (
    <article
      key={item.id}
      className="bg-paper-white brutal-border border-t-4 border-t-proletarian-red flex flex-col h-full group hover:bg-concrete-gray transition-colors duration-200"
    >
      <div className="h-48 w-full relative overflow-hidden border-b-2 border-ink-black bg-ink-black">
        <div className="absolute top-4 left-4 bg-proletarian-red text-paper-white font-label-caps text-label-caps px-2 py-1">
          {t(activitiesCopy.projectBadge, lang)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="font-label-caps text-label-caps text-ink-black/60 mb-2">
          {t(item.date, lang)}
        </p>
        <h3 className="font-headline text-headline-md uppercase text-ink-black mb-3">
          {t(item.title, lang)}
        </h3>
        <p className="font-body-md text-body-md text-ink-black mb-6 flex-grow">
          {t(item.description, lang)}
        </p>
        <Link
          href={`/${lang}/activities/${item.slug}`}
          className="block w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border text-center hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100"
        >
          {t(activitiesCopy.readMoreCta, lang)}
        </Link>
      </div>
    </article>
  );
}
