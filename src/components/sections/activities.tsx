import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

import type { ActivityItem } from "@/lib/activities.server";
import { activitiesCopy, activitiesPageCopy } from "@/lib/dictionaries/activities";
import { t } from "@/lib/translate";
import { progressWidth } from "@/lib/utils";

type ActivitiesSectionProps = {
  lang: string;
  teaser?: boolean;
  items?: ActivityItem[];
};

export function ActivitiesSection({ lang, teaser, items }: ActivitiesSectionProps) {
  const displayItems = items ?? [];

  return (
    <section className="pt-6 md:pt-8 pb-10 md:pb-14 px-4 md:px-16 max-w-container-max mx-auto">
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
        {displayItems.length === 0 ? (
          <p className="col-span-full font-body text-body-md text-foreground/60 text-center py-12">
            {t(activitiesCopy.noActivities, lang)}
          </p>
        ) : (
          displayItems.map((item) => {
            if (item.type === "campaign") {
              return renderCampaignCard(item as ActivityItem & { type: "campaign" }, lang);
            }
            return renderProjectCard(item as ActivityItem & { type: "project" }, lang);
          })
        )}
      </div>
    </section>
  );
}

function renderCampaignCard(
  item: ActivityItem & { type: "campaign" },
  lang: string,
) {
  if (item.variant === "solid") {
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
          <h3 className="font-headline text-headline-md uppercase mb-3">{item.title}</h3>
          <p className="font-body-md text-body-md mb-6 flex-grow">{item.description}</p>
          <a
            href={item.cta!.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-paper-white text-proletarian-red font-button text-button uppercase px-4 py-3 brutal-border border-paper-white text-center hover:bg-ink-black hover:text-paper-white hover:border-ink-black transition-colors duration-100"
          >
            {item.cta!.label}
          </a>
        </div>
      </article>
    );
  }

  return (
    <article
      key={item.id}
      className="bg-paper-white brutal-border border-t-4 border-t-proletarian-red flex flex-col h-full group hover:bg-concrete-gray transition-colors duration-200"
    >
      <div className="h-48 w-full relative overflow-hidden border-b-2 border-ink-black bg-ink-black">
        {item.imageSrc && (
          <Image
            alt={item.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src={item.imageSrc}
          />
        )}
        {item.badge === "urgent" && (
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
          {item.title}
        </h3>
        <p className="font-body-md text-body-md text-ink-black mb-6 flex-grow">
          {item.description}
        </p>
        {item.progress && (
          <>
            <div className="w-full h-4 bg-concrete-gray brutal-border mb-4">
              <div
                className="h-full bg-proletarian-red"
                style={{ width: progressWidth(item.progress.current, item.progress.max) }}
              />
            </div>
            <div className="flex justify-between font-label-caps text-label-caps text-ink-black mb-6">
              <span>{item.progress.current.toLocaleString()} / {item.progress.max.toLocaleString()} {t(activitiesCopy.signaturesLabel, lang)}</span>
            </div>
          </>
        )}
        {item.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-ink-black text-paper-white font-label-caps text-label-caps px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {item.cta?.type === "external" && (
          <a
            href={item.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border text-center hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100"
          >
            {item.cta.label}
          </a>
        )}
        {item.cta?.type === "internal" && (
          <Link
            href={`/${lang}/activities/${item.cta.href}`}
            className="block w-full bg-transparent text-ink-black font-button text-button uppercase px-4 py-3 brutal-border text-center hover:bg-proletarian-red hover:text-paper-white transition-colors duration-100"
          >
            {item.cta.label}
          </Link>
        )}
      </div>
    </article>
  );
}

function renderProjectCard(
  item: ActivityItem & { type: "project" },
  lang: string,
) {
  return (
    <article
      key={item.id}
      className="bg-paper-white brutal-border border-t-4 border-t-proletarian-red flex flex-col h-full group hover:bg-concrete-gray transition-colors duration-200"
    >
      <div className="h-48 w-full relative overflow-hidden border-b-2 border-ink-black bg-ink-black">
        {item.imageSrc && (
          <Image
            alt={item.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src={item.imageSrc}
          />
        )}
        <div className="absolute top-4 left-4 bg-proletarian-red text-paper-white font-label-caps text-label-caps px-2 py-1">
          {t(activitiesCopy.projectBadge, lang)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {item.date && (
          <p className="font-label-caps text-label-caps text-ink-black/60 mb-2">
            {item.date}
          </p>
        )}
        <h3 className="font-headline text-headline-md uppercase text-ink-black mb-3">
          {item.title}
        </h3>
        <p className="font-body-md text-body-md text-ink-black mb-6 flex-grow">
          {item.description}
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
