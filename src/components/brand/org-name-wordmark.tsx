import { brandAssets } from "@/config/brand";
import { cn } from "@/lib/utils";

type OrgNameWordmarkProps = {
  className?: string;
};

/** Alternates between Cyrillic and Latin organization name SVGs. */
export function OrgNameWordmark({ className }: OrgNameWordmarkProps) {
  return (
    <span
      className={cn("relative block h-7 w-[min(100%,220px)] sm:h-8 sm:w-[260px]", className)}
      aria-hidden
    >
      <img
        src={brandAssets.nameCyrillic}
        alt=""
        className="org-name-cyrillic absolute inset-0 h-full w-full object-contain object-left"
      />
      <img
        src={brandAssets.nameLatin}
        alt=""
        className="org-name-latin absolute inset-0 h-full w-full object-contain object-left"
      />
    </span>
  );
}
