import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { policyHref } from "@/config/policy-routes";
import { policyCopy } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";
import { cn } from "@/lib/utils";

type PolicyPageShellProps = {
  lang: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function PolicyPageShell({
  lang,
  title,
  description,
  children,
  className,
}: PolicyPageShellProps) {
  return (
    <article className={cn("pb-12", className)}>
      <Link
        href={policyHref(lang)}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-4" aria-hidden />
        {t(policyCopy.backToPolicy, lang)}
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          {t(policyCopy.sectionTitle, lang)}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
        ) : null}
      </header>

      <div className="mt-10">{children}</div>
    </article>
  );
}
