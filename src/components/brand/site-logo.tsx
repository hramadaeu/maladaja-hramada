import Link from "next/link";

import { cn } from "@/lib/utils";

import { OrgNameWordmark } from "./org-name-wordmark";

type SiteLogoProps = {
  lang: string;
  className?: string;
};

export function SiteLogo({ lang, className }: SiteLogoProps) {
  return (
    <Link
      href={`/${lang}`}
      className={cn(
        "flex min-w-0 shrink items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3",
        className,
      )}
    >
      <OrgNameWordmark className="hidden min-w-0 sm:block" />
    </Link>
  );
}
