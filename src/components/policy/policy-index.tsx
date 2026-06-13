import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { policyHref, type PolicySlug } from "@/config/policy-routes";
import { policyCopy, policySubsections } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";
import { Reveal } from "@/components/ui/reveal";

type PolicyIndexProps = {
  lang: string;
};

export function PolicyIndex({ lang }: PolicyIndexProps) {
  const featured = policySubsections.find((item) => item.featured);
  const rest = policySubsections.filter((item) => !item.featured);

  return (
    <div className="flex flex-col gap-12 py-12">
      <Reveal variant="fade-up">
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
      </Reveal>

      {featured ? (
        <Reveal variant="fade-up" delay={100}>
          <Link
            href={policyHref(lang, featured.slug as PolicySlug)}
            className="group"
          >
            <article className="brutal-border border-t-4 border-t-proletarian-red bg-background p-6 flex flex-col gap-4 h-full hover:bg-muted transition-colors duration-200">
              <span className="inline-block w-fit bg-foreground text-background font-label-caps text-label-caps px-2 py-1">
                {t(policyCopy.mainBadge, lang)}
              </span>
              <h2 className="font-headline text-headline-md uppercase text-foreground group-hover:text-proletarian-red transition-colors duration-200">
                {t(featured.title, lang)}
              </h2>
              <p className="font-body-md text-body-md text-foreground/80 flex-grow">
                {t(featured.description, lang)}
              </p>
              <span className="font-button text-button uppercase text-proletarian-red flex items-center gap-1">
                {t(policyCopy.readMore, lang)}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </article>
          </Link>
        </Reveal>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item, index) => {
          const isDisabled = "disabled" in item;

          if (isDisabled) {
            return (
              <Reveal key={item.slug} delay={index * 80}><article
                key={item.slug}
                className="brutal-border bg-background p-6 flex flex-col gap-4 h-full opacity-60 cursor-default select-none"
              >
                <h2 className="font-headline text-headline-md uppercase text-foreground">
                  {t(item.title, lang)}
                </h2>
                <p className="font-body-md text-body-md text-foreground/80 flex-grow">
                  {t(item.description, lang)}
                </p>
                <span className="inline-block w-fit bg-muted text-foreground/60 font-label-caps text-label-caps px-2 py-1">
                  {t(policyCopy.inProgressLabel, lang)}
                </span>
              </article></Reveal>
            );
          }

          return (
            <Reveal key={item.slug} delay={index * 80}>
              <Link
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
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </article>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
