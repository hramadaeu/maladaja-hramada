import Link from "next/link";

import { cn } from "@/lib/utils";

import { LogoMark } from "./logo-mark";
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
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-subtle p-1.5 ring-1 ring-brand-muted sm:size-11">
        <LogoMark />
      </span>
      <OrgNameWordmark className="hidden min-w-0 sm:block" />
    </Link>
  );
}
