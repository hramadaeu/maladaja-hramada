import { getPayload } from "payload";
import config from "@payload-config";

import type { Locale } from "@/config/i18n";
import { activitiesCopy } from "@/lib/dictionaries/activities";
import { defaultLocale, isValidLocale } from "@/config/i18n";
import { pickLocalized, resolveLocale } from "@/lib/translate";
import { validateActivity } from "@/lib/activity-schema";

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
  } catch (e) {
    console.error("[activities.server] getActivities failed", e);
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
  } catch (e) {
    console.error(`[activities.server] getActivityBySlug failed (slug=${slug})`, e);
    const items = getStaticActivities(locale);
    return items.find((i) => i.slug === slug) ?? null;
  }
}

function mapActivity(doc: Record<string, unknown>): ActivityItem {
  const validated = validateActivity(doc);
  if (!validated) {
    return {
      id: String(doc.id ?? "unknown"),
      slug: String(doc.slug ?? "unknown"),
      type: "project",
      title: String(doc.title ?? ""),
      description: String(doc.description ?? ""),
    };
  }

  const imageSrc = (() => {
    if (!validated.image || typeof validated.image === "number") return undefined;
    return validated.image.url ?? (validated.image.filename ? `/media/${validated.image.filename}` : undefined);
  })();

  const progress = (() => {
    if (!validated.progress || validated.progress.current == null) return undefined;
    return {
      current: validated.progress.current,
      max: validated.progress.max ?? 0,
    };
  })();

  const cta = (() => {
    if (!validated.cta || !validated.cta.href || !validated.cta.label) return undefined;
    return {
      type: validated.cta.type ?? "external",
      href: validated.cta.href,
      label: validated.cta.label,
    };
  })();

  return {
    id: String(validated.id),
    slug: validated.slug,
    type: validated.type,
    title: validated.title,
    description: validated.description ?? "",
    imageSrc,
    imageAlt: validated.alt ?? undefined,
    badge: validated.badge ?? undefined,
    variant: validated.variant ?? undefined,
    progress,
    tags: validated.tags?.map((t) => t.tag).filter((t): t is string => t != null) ?? undefined,
    cta,
    date: validated.date ?? undefined,
    youtubePlaylistId: validated.youtubePlaylistId ?? undefined,
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
