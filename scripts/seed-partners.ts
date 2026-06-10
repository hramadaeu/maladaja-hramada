import sharp from "sharp";
import { getPayload } from "payload";
import config from "@payload-config";

const PARTNERS = [
  { name: { ru: "Рада", be: "Рада", en: "Belarusian National Youth Council RADA", pl: "Rada" }, order: 1 },
  { name: { ru: "Молодые европейские социалисты", be: "Маладыя еўрапейскія сацыялісты", en: "Young European Socialists", pl: "Młodzi Europejscy Socjaliści" }, order: 2 },
  { name: { ru: "Международный союз социалистической молодёжи", be: "Міжнародны саюз сацыялістычнай моладзі", en: "International Union of Socialist Youth", pl: "Międzynarodowy Związek Młodzieży Socjalistycznej" }, order: 3 },
  { name: { ru: "Международное движение соколов — МСE", be: "Міжнародны рух сокалаў — МСE", en: "International Falcon Movement — IFM-SEI", pl: "Międzynarodowy Ruch Sokoli — IFM-SEI" }, order: 4 },
  { name: { ru: "Белорусская социал-демократическая партия (Грамада)", be: "Беларуская сацыял-дэмакратычная партыя (Грамада)", en: "Belarusian Social Democratic Party (Hramada)", pl: "Białoruska Socjaldemokratyczna Partia (Hramada)" }, order: 5 },
];

async function main() {
  const payload = await getPayload({ config });

  // 1. Delete existing partners (by slug pattern or all)
  console.log("[seed] Cleaning up existing partner records...");
  const existing = await payload.find({
    collection: "partner" as never,
    pagination: false,
    depth: 0,
  });
  for (const doc of existing.docs) {
    const id = (doc as { id: number }).id;
    // Find linked media to clean up too
    const mediaId = (doc as { logo?: number }).logo;
    await payload.delete({ collection: "partner" as never, id: id as never });
    console.log(`[seed] Deleted partner id=${id}`);
    if (mediaId && typeof mediaId === "number") {
      try {
        await payload.delete({ collection: "media" as never, id: mediaId as never });
        console.log(`[seed] Deleted placeholder media id=${mediaId}`);
      } catch {
        // media might already be deleted or referenced elsewhere
      }
    }
  }

  // 2. Create partners with proper locale: 'all'
  console.log("[seed] Creating partner records with locale: 'all'...");
  for (const partner of PARTNERS) {
    const slug = `placeholder-${partner.order}`;

    const svgText = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
        <rect width="200" height="100" fill="#e5e5e5" rx="8"/>
        <text x="100" y="55" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">${partner.name.en}</text>
      </svg>`;

    const pngBuffer = await sharp(Buffer.from(svgText)).png().toBuffer();

    const media = await payload.create({
      collection: "media" as never,
      data: {
        alt: `${partner.name.en} logo`,
      } as never,
      file: {
        data: pngBuffer,
        name: `${slug}.png`,
        mimetype: "image/png",
        size: pngBuffer.length,
      },
    });

    const mediaId = typeof media === "object" && "id" in media ? (media as { id: number }).id : null;
    if (!mediaId) {
      console.error(`[seed] Failed to create media for ${partner.name.en}`);
      continue;
    }

    await payload.create({
      collection: "partner" as never,
      locale: "all" as never,
      data: {
        name: partner.name,
        logo: mediaId,
        alt: partner.name.en,
        order: partner.order,
      } as never,
    });

    console.log(`[seed] Created partner: ${partner.name.en}`);
  }

  console.log("[seed] Done.");
  process.exit(0);
}

main().catch((err) => {
  console.error("[seed] Failed:", err);
  process.exit(1);
});
