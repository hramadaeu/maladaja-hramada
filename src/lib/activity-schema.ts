import { z } from "zod";

const mediaSchema = z.object({
  url: z.string().nullable().optional(),
  filename: z.string().nullable().optional(),
}).passthrough();

const rawActivitySchema = z.object({
  id: z.number(),
  type: z.enum(["campaign", "project"]),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  image: z.union([z.number(), mediaSchema]).nullish(),
  alt: z.string().nullish(),
  badge: z.enum(["urgent", "ongoing"]).nullish(),
  variant: z.enum(["solid", "card"]).nullish(),
  progress: z.object({
    current: z.number().nullish(),
    max: z.number().nullish(),
  }).nullish(),
  tags: z.array(z.object({
    tag: z.string().nullish(),
    id: z.string().nullish(),
  })).nullish(),
  cta: z.object({
    type: z.enum(["external", "internal"]).nullish(),
    href: z.string().nullish(),
    label: z.string().nullish(),
  }).nullish(),
  date: z.string().nullish(),
  youtubePlaylistId: z.string().nullish(),
}).passthrough();

export type RawActivity = z.infer<typeof rawActivitySchema>;

export function validateActivity(doc: Record<string, unknown>) {
  const result = rawActivitySchema.safeParse(doc);
  if (!result.success) {
    console.error(
      `[activities.server] Failed to validate activity doc (slug=${doc.slug ?? "unknown"}):`,
      result.error.flatten(),
    );
    return null;
  }
  return result.data;
}
