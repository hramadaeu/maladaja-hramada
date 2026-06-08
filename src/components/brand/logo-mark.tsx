import Image from "next/image";

import { brandAssets } from "@/config/brand";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  light?: boolean;
};

/** Decorative rose mark rendered from /brand/logo.svg. */
export function LogoMark({ className, light }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "relative block h-7 w-7 shrink-0 sm:h-8 sm:w-8",
        className,
      )}
      aria-hidden
    >
      <Image
        src={brandAssets.logo}
        alt=""
        fill
        priority
        sizes="(min-width: 640px) 32px, 28px"
        className={cn(
          "object-contain",
          light && "brightness-0 invert-[.85]",
        )}
      />
    </span>
  );
}
