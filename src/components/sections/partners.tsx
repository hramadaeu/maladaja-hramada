import Image from "next/image";
import type { PartnerItem } from "@/lib/partners.server";

type PartnersSectionProps = {
  items: PartnerItem[];
};

export function PartnersSection({ items }: PartnersSectionProps) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((partner) => (
        <a
          key={partner.id}
          href={partner.url ?? "#"}
          target={partner.url ? "_blank" : undefined}
          rel={partner.url ? "noopener noreferrer" : undefined}
          className="brutal-border bg-background p-6 flex flex-col items-center justify-center gap-4 hover:bg-muted transition-colors duration-200 group"
        >
          <div className="size-24 relative grayscale group-hover:grayscale-0 transition-all duration-300">
            {partner.logoUrl ? (
              <Image
                src={partner.logoUrl}
                alt={partner.alt ?? partner.name}
                fill
                sizes="96px"
                className="object-contain"
              />
            ) : null}
          </div>
          <span className="font-label-caps text-label-caps text-foreground/70 uppercase text-center">
            {partner.name}
          </span>
        </a>
      ))}
    </div>
  );
}
