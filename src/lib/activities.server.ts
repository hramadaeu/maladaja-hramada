import { getPayload } from "payload";
import config from "@payload-config";

import type { Locale } from "@/config/i18n";
import { activitiesCopy } from "@/lib/dictionaries/activities";
import { defaultLocale, isValidLocale } from "@/config/i18n";
import { pickLocalized, resolveLocale } from "@/lib/translate";

export type ActivityItem = {
  id: string;
  slug: string;
  type: "campaign" | "project";
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: "urgent" | "ongoing";
  variant?: "solid" | "card";
  progress?: { current: number; max: number };
  tags?: string[];
  cta?: { type: "external" | "internal"; href: string; label: string };
  date?: string;
  youtubePlaylistId?: string;
};

export async function getActivities(locale?: string): Promise<ActivityItem[]> {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "activity" as never,
      depth: 1,
      pagination: false,
      sort: "-createdAt",
      ...(locale ? { locale: locale as never } : {}),
    });

    return result.docs.map(mapActivity);
  } catch {
    return getStaticActivities(locale);
  }
}

export async function getActivityBySlug(
  slug: string,
  locale?: string,
): Promise<ActivityItem | null> {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "activity" as never,
      depth: 1,
      where: { slug: { equals: slug } },
      limit: 1,
      ...(locale ? { locale: locale as never } : {}),
    });

    return result.docs.length > 0 ? mapActivity(result.docs[0]) : null;
  } catch {
    const items = getStaticActivities(locale);
    return items.find((i) => i.slug === slug) ?? null;
  }
}

function mapActivity(doc: Record<string, unknown>): ActivityItem {
  const tagsArr = doc.tags as Array<{ tag: string }> | null | undefined;
  return {
    id: doc.id as string,
    slug: doc.slug as string,
    type: doc.type as "campaign" | "project",
    title: doc.title as string,
    description: (doc.description as string) ?? "",
    imageSrc: (() => {
      const img = doc.image as Record<string, unknown> | null;
      return (img?.url as string | undefined) ?? (img?.filename ? `/media/${img.filename}` : undefined);
    })(),
    imageAlt: (doc.alt as string | undefined) ?? undefined,
    badge: (doc.badge as "urgent" | "ongoing" | undefined) ?? undefined,
    variant: (doc.variant as "solid" | "card" | undefined) ?? undefined,
    progress:
      doc.progress != null && (doc.progress as Record<string, unknown>).current != null
        ? {
            current: (doc.progress as Record<string, number>).current,
            max: (doc.progress as Record<string, number>).max,
          }
        : undefined,
    tags: tagsArr?.map((t) => t.tag).filter(Boolean) ?? undefined,
    cta:
      doc.cta != null && (doc.cta as Record<string, unknown>).type != null
        ? {
            type: (doc.cta as Record<string, string>).type as "external" | "internal",
            href: (doc.cta as Record<string, string>).href,
            label: (doc.cta as Record<string, string>).label,
          }
        : undefined,
    date: (doc.date as string | undefined) ?? undefined,
    youtubePlaylistId: (doc.youtubePlaylistId as string | undefined) ?? undefined,
  };
}

function getStaticActivities(locale?: string): ActivityItem[] {
  const lang = locale && isValidLocale(locale) ? locale : defaultLocale;

  return activitiesCopy.items.map((raw) => {
    const item = raw as Record<string, unknown>;

    const titleDict = item.title as Record<Locale, string>;
    const descDict = item.description as Record<Locale, string>;

    const ctaRaw = item.cta as
      | { type: string; href: string; label: Record<Locale, string> }
      | undefined;

    return {
      id: item.id as string,
      slug: item.slug as string,
      type: item.type as "campaign" | "project",
      title: titleDict[resolveLocale(lang)] ?? titleDict[defaultLocale],
      description: descDict[resolveLocale(lang)] ?? descDict[defaultLocale],
      imageSrc: (item.imageSrc as string | undefined) ?? undefined,
      imageAlt:
        item.alt != null
          ? pickLocalized(item.alt as Record<Locale, string>, lang)
          : undefined,
      badge: (item.badge as "urgent" | "ongoing" | undefined) ?? undefined,
      variant: (item.variant as "solid" | "card" | undefined) ?? undefined,
      progress:
        item.progress != null
          ? {
              current: (item.progress as { current: number }).current,
              max: (item.progress as { max: number }).max,
            }
          : undefined,
      tags:
        item.tags != null
          ? pickLocalized(item.tags as Record<Locale, readonly string[]>, lang).map(
              (t: string) => t,
            )
          : undefined,
      cta: ctaRaw
        ? {
            type: ctaRaw.type as "external" | "internal",
            href: ctaRaw.href,
            label:
              ctaRaw.label[resolveLocale(lang)] ?? ctaRaw.label[defaultLocale],
          }
        : undefined,
      date:
        item.date != null
          ? pickLocalized(item.date as Record<Locale, string>, lang)
          : undefined,
      youtubePlaylistId: (item.youtubePlaylistId as string | undefined) ?? undefined,
    };
  });
}
