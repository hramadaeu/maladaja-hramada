import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { policyHref } from "@/config/policy-routes";
import { policyCopy } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

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
    <article className={cn("py-12", className)}>
      <Reveal variant="fade-in" duration={400}>
        <Link
          href={policyHref(lang)}
          className="inline-flex items-center gap-2 font-button text-button uppercase text-foreground hover:text-proletarian-red transition-colors duration-100"
        >
          <ArrowLeftIcon className="size-4" aria-hidden />
          {t(policyCopy.backToPolicy, lang)}
        </Link>

        <header className="mt-6 border-b-2 border-border pb-8">
          <div className="inline-block bg-foreground text-background font-label-caps text-label-caps px-2 py-1 mb-4">
            {t(policyCopy.sectionTitle, lang)}
          </div>
          <h1 className="font-headline text-headline-lg uppercase text-foreground">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl font-body-lg text-body-lg text-foreground/80">
              {description}
            </p>
          ) : null}
        </header>
      </Reveal>

      <Reveal variant="fade-up" delay={150}>
        <div className="mt-10">{children}</div>
      </Reveal>
    </article>
  );
}
