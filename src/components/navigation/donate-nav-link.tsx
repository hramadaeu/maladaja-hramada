"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { donateCta } from "@/config/site";
import { cn } from "@/lib/utils";
import { resolveLocale } from "@/lib/translate";

type DonateNavLinkProps = {
  lang: string;
  className?: string;
};

export function DonateNavLink({ lang, className }: DonateNavLinkProps) {
  const pathname = usePathname();
  const href = donateCta.href(lang);
  const label = donateCta.label[resolveLocale(lang)];
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHome) {
      return;
    }

    event.preventDefault();
    const target = document.getElementById("donate");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={cn(className)}>
      {label}
    </Link>
  );
}
