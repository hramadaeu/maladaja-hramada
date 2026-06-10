import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, Play } from "lucide-react";

import type { ActivityItem } from "@/lib/activities.server";
import { activitiesCopy } from "@/lib/dictionaries/activities";
import { t } from "@/lib/translate";
import { progressWidth } from "@/lib/utils";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";

type ActivityDetailProps = {
  lang: string;
  item: ActivityItem;
};

export function ActivityDetail({ lang, item }: ActivityDetailProps) {
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
          {item.type === "campaign"
            ? t(activitiesCopy.campaignBadge, lang)
            : t(activitiesCopy.projectBadge, lang)}
        </div>
        <h1 className="font-headline text-headline-lg uppercase text-foreground">
          {item.title}
        </h1>
      </header>

      {item.imageSrc ? (
        <div className="mt-8 h-64 md:h-96 w-full relative overflow-hidden brutal-border">
          <Image
            alt={item.imageAlt ?? ""}
            fill
            className="object-cover grayscale"
            src={item.imageSrc}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      ) : null}

      <div className="mt-10">
        <p className="font-body-lg text-body-lg text-foreground/80 max-w-3xl">
          {item.description}
        </p>

        {item.youtubePlaylistId ? (
          <div className="mt-10 max-w-3xl">
            <div className="relative brutal-border overflow-hidden">
              <YouTubeEmbed playlistId={item.youtubePlaylistId} title={item.title} />
            </div>
            <a
              href={`https://www.youtube.com/playlist?list=${item.youtubePlaylistId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-button text-button uppercase text-proletarian-red hover:underline decoration-2 underline-offset-4"
            >
              <Play className="size-4" />
              {t(activitiesCopy.readMoreCta, lang)}
            </a>
          </div>
        ) : null}

        {item.progress ? (
          <div className="mt-10">
            <div className="w-full h-4 bg-concrete-gray brutal-border mb-4 max-w-md">
              <div
                className="h-full bg-proletarian-red"
                style={{ width: progressWidth(item.progress.current, item.progress.max) }}
              />
            </div>
            <p className="font-label-caps text-label-caps text-foreground/60 mb-8">
              {item.progress.current.toLocaleString()} / {item.progress.max.toLocaleString()} {t(activitiesCopy.signaturesLabel, lang)}
            </p>
            {item.cta ? (
              <a
                href={item.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-proletarian-red text-paper-white font-button text-button uppercase px-6 py-3 brutal-border hover:bg-foreground hover:text-background transition-colors duration-100"
              >
                {item.cta.label}
              </a>
            ) : null}
          </div>
        ) : null}

        {item.tags ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-foreground text-background font-label-caps text-label-caps px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {item.variant === "solid" && item.cta ? (
          <div className="mt-10">
            <HeartHandshake className="size-12 mb-4 text-proletarian-red" />
            <a
              href={item.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-proletarian-red text-paper-white font-button text-button uppercase px-6 py-3 brutal-border hover:bg-foreground hover:text-background transition-colors duration-100"
            >
              {item.cta.label}
            </a>
          </div>
        ) : null}

        {item.date ? (
          <p className="font-label-caps text-label-caps text-foreground/60 mt-8">
            {item.date}
          </p>
        ) : null}
      </div>
    </article>
  );
}
