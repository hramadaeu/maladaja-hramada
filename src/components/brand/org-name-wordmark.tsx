import Image from "next/image";

import { brandAssets } from "@/config/brand";
import { cn } from "@/lib/utils";

type OrgNameWordmarkProps = {
  className?: string;
  light?: boolean;
};

/** Alternates between Cyrillic and Latin organization name SVGs. */
export function OrgNameWordmark({ className, light }: OrgNameWordmarkProps) {
  return (
    <span
      className={cn("relative block h-7 w-[min(100%,220px)] sm:h-8 sm:w-[260px]", className)}
      aria-hidden
    >
      <Image
        src={brandAssets.nameCyrillic}
        alt=""
        fill
        sizes="(min-width: 640px) 260px, min(100%, 220px)"
        className={cn(
          "org-name-cyrillic object-contain object-left",
          light && "brightness-0 invert-[.85]",
        )}
      />
      <Image
        src={brandAssets.nameLatin}
        alt=""
        fill
        sizes="(min-width: 640px) 260px, min(100%, 220px)"
        className={cn(
          "org-name-latin object-contain object-left",
          light && "brightness-0 invert-[.85]",
        )}
      />
    </span>
  );
}
