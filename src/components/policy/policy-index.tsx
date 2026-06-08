import Link from "next/link";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

import { policyHref, type PolicySlug } from "@/config/policy-routes";
import { policyCopy, policySubsections } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";

type PolicyIndexProps = {
  lang: string;
};

export function PolicyIndex({ lang }: PolicyIndexProps) {
  const featured = policySubsections.find((item) => item.featured);
  const rest = policySubsections.filter((item) => !item.featured);

  return (
    <div className="flex flex-col gap-12 py-12">
      <header className="max-w-2xl">
        <div className="inline-block bg-foreground text-background font-label-caps text-label-caps px-2 py-1 mb-6">
          {t(policyCopy.sectionTitle, lang)}
        </div>
        <h1 className="font-headline text-headline-lg uppercase text-foreground mb-6">
          {t(policyCopy.indexTitle, lang)}
        </h1>
        <p className="font-body-lg text-body-lg text-foreground/80">
          {t(policyCopy.indexIntro, lang)}
        </p>
      </header>

      {featured ? (
        <article className="brutal-border border-t-4 border-t-proletarian-red bg-background p-6 flex flex-col gap-4">
          <span className="inline-block w-fit bg-foreground text-background font-label-caps text-label-caps px-2 py-1">
            {t(policyCopy.mainBadge, lang)}
          </span>
          <h2 className="font-headline text-headline-md uppercase text-foreground">
            {t(featured.title, lang)}
          </h2>
          <p className="font-body-md text-body-md text-foreground/80">
            {t(featured.description, lang)}
          </p>
          <Link
            href={policyHref(lang, featured.slug as PolicySlug)}
            className="self-start font-button text-button uppercase text-proletarian-red flex items-center gap-2 hover:underline decoration-2 underline-offset-4"
          >
            {t(policyCopy.readMore, lang)}
            <ArrowRight className="size-4" />
          </Link>
        </article>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <Link
            key={item.slug}
            href={policyHref(lang, item.slug as PolicySlug)}
            className="group"
          >
            <article className="brutal-border bg-background p-6 flex flex-col gap-4 h-full hover:bg-muted transition-colors duration-200">
              <h2 className="font-headline text-headline-md uppercase text-foreground group-hover:text-proletarian-red transition-colors duration-200">
                {t(item.title, lang)}
              </h2>
              <p className="font-body-md text-body-md text-foreground/80 flex-grow">
                {t(item.description, lang)}
              </p>
              <span className="font-button text-button uppercase text-proletarian-red flex items-center gap-1">
                {t(policyCopy.readMore, lang)}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
