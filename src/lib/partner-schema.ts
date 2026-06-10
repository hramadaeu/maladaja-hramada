import { z } from "zod";

const mediaSchema = z.object({
  url: z.string().nullable().optional(),
  filename: z.string().nullable().optional(),
}).passthrough();

const rawPartnerSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.union([z.number(), mediaSchema]),
  alt: z.string().nullish(),
  url: z.string().nullish(),
  order: z.number().nullish(),
}).passthrough();

export type RawPartner = z.infer<typeof rawPartnerSchema>;

export function validatePartner(doc: Record<string, unknown>) {
  const result = rawPartnerSchema.safeParse(doc);
  if (!result.success) {
    console.error(
      `[partners.server] Failed to validate partner doc (name=${doc.name ?? "unknown"}):`,
      result.error.flatten(),
    );
    return null;
  }
  return result.data;
}
