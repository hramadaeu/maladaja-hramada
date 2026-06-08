import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake } from "lucide-react";

import { activitiesCopy, activityExternalUrls } from "@/lib/dictionaries/activities";
import { pickLocalized, t } from "@/lib/translate";

type ActivityDetailProps = {
  lang: string;
  item: (typeof activitiesCopy.items)[number];
};

export function ActivityDetail({ lang, item }: ActivityDetailProps) {
  const isCampaign = item.type === "campaign";
  const isCard1 = item.id === "campaign-1";
  const isCard2 = item.id === "campaign-2";
  const isCard3 = item.id === "campaign-3";

  const showImage = isCard1 || (isCard2 && item.imageSrc);

  return (
    <article className="py-12 px-4 md:px-16 max-w-container-max mx-auto">
      <Link
        href={`/${lang}/activities`}
        className="inline-flex items-center gap-2 font-button text-button uppercase text-foreground hover:text-proletarian-red transition-colors duration-100"
      >
        <ArrowLeft className="size-4" aria-hidden />
        {t(activitiesCopy.viewAll, lang)}
      </Link>

      <header className="mt-6 border-b-2 border-border pb-8">
        <div className="inline-block bg-foreground text-background font-label-caps text-label-caps px-2 py-1 mb-4">
          {isCampaign
            ? t(activitiesCopy.campaignBadge, lang)
            : t(activitiesCopy.projectBadge, lang)}
        </div>
        <h1 className="font-headline text-headline-lg uppercase text-foreground">
          {t(item.title, lang)}
        </h1>
      </header>

      {showImage ? (
        <div className="mt-8 h-64 md:h-96 w-full relative overflow-hidden brutal-border">
          <Image
            alt={t(item.alt!, lang)}
            fill
            className="object-cover grayscale"
            src={item.imageSrc!}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      ) : null}

      <div className="mt-10">
        <p className="font-body-lg text-body-lg text-foreground/80 max-w-3xl">
          {t(item.description, lang)}
        </p>

        {isCard1 ? (
          <div className="mt-10">
            <div className="w-full h-4 bg-concrete-gray brutal-border mb-4 max-w-md">
              <div className="h-full bg-proletarian-red" style={{ width: "75%" }} />
            </div>
            <p className="font-label-caps text-label-caps text-foreground/60 mb-8">
              7,500 / 10,000 {t(activitiesCopy.signaturesLabel, lang)}
            </p>
            <a
              href={activityExternalUrls.signPetition}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-proletarian-red text-paper-white font-button text-button uppercase px-6 py-3 brutal-border hover:bg-foreground hover:text-background transition-colors duration-100"
            >
              {t(item.signCta!, lang)}
            </a>
          </div>
        ) : null}

        {isCard2 ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {pickLocalized(item.tags!, lang).map((tag) => (
              <span
                key={tag}
                className="bg-foreground text-background font-label-caps text-label-caps px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {isCard3 ? (
          <div className="mt-10">
            <HeartHandshake className="size-12 mb-4 text-proletarian-red" />
            <a
              href={activityExternalUrls.contributeNow}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-proletarian-red text-paper-white font-button text-button uppercase px-6 py-3 brutal-border hover:bg-foreground hover:text-background transition-colors duration-100"
            >
              {t(item.contributeCta!, lang)}
            </a>
          </div>
        ) : null}

        {item.type === "project" ? (
          <p className="font-label-caps text-label-caps text-foreground/60 mt-8">
            {t(item.date, lang)}
          </p>
        ) : null}
      </div>
    </article>
  );
}
