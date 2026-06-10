import { getPayload } from "payload";
import config from "@payload-config";

import { validatePartner } from "./partner-schema";

export interface PartnerItem {
  id: number;
  name: string;
  logoUrl: string;
  alt: string | null;
  url: string | null;
}

export async function getPartners(locale?: string): Promise<PartnerItem[]> {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "partner" as never,
      depth: 1,
      sort: "order",
      pagination: false,
      ...(locale ? { locale: locale as never } : {}),
    });

    return result.docs
      .map((doc) => validatePartner(doc as Record<string, unknown>))
      .filter((p): p is NonNullable<typeof p> => p !== null)
      .map(mapPartnerItem);
  } catch (err) {
    console.error("[partners.server] Failed to fetch partners:", err);
    return [];
  }
}

function mapPartnerItem(validated: NonNullable<ReturnType<typeof validatePartner>>): PartnerItem {
  const logoUrl = (() => {
    if (typeof validated.logo === "number") return "";
    return validated.logo.url ?? (validated.logo.filename ? `/media/${validated.logo.filename}` : "");
  })();

  return {
    id: validated.id,
    name: validated.name,
    logoUrl,
    alt: validated.alt ?? null,
    url: validated.url ?? null,
  };
}
