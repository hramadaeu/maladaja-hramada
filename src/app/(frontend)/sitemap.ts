import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { locales } from "@/config/i18n";
import { policySlugs } from "@/config/policy-routes";
import { siteUrl } from "@/config/seo";
import { activitiesCopy } from "@/lib/dictionaries/activities";

/**
 * Build-time timestamp used as `lastModified` for all sitemap entries.
 * Set via `SITEMAP_LAST_MODIFIED` (ISO 8601) at build, falling back to the
 * package.json mtime. Stable across rebuilds of the same release.
 */
const lastModified = new Date(
  process.env.SITEMAP_LAST_MODIFIED ??
    statSync(join(process.cwd(), "package.json")).mtime.toISOString(),
);

const staticRoutes = ["", "/about", "/policy", "/activities"] as const;

const policySubRoutes = Object.values(policySlugs).map(
  (slug) => `/policy/${slug}` as const,
);

const activitySubRoutes = activitiesCopy.items.map(
  (item) => `/activities/${item.slug}` as const,
);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    const base = `${siteUrl}/${lang}`;

    for (const route of staticRoutes) {
      entries.push({
        url: `${base}${route}`,
        lastModified,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales
              .filter((l) => l !== lang)
              .map((l) => [l, `${siteUrl}/${l}${route}`]),
          ),
        },
      });
    }

    for (const route of policySubRoutes) {
      entries.push({
        url: `${base}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales
              .filter((l) => l !== lang)
              .map((l) => [l, `${siteUrl}/${l}${route}`]),
          ),
        },
      });
    }

    for (const route of activitySubRoutes) {
      entries.push({
        url: `${base}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales
              .filter((l) => l !== lang)
              .map((l) => [l, `${siteUrl}/${l}${route}`]),
          ),
        },
      });
    }
  }

  return entries;
}
