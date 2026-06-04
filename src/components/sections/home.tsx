import { Scale, HeartHandshake, Users, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSiteLinks } from "@/config/site-links";
import { homeCopy, homeValues } from "@/lib/dictionaries/home";
import { t } from "@/lib/translate";

const valueIcons = {
  freedom: Sparkles,
  justice: Scale,
  solidarity: HeartHandshake,
  equality: Users,
} as const;

type HomeSectionProps = {
  lang: string;
};

export function HomeSection({ lang }: HomeSectionProps) {
  const { joinFormUrl } = getSiteLinks();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t(homeCopy.eyebrow, lang)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t(homeCopy.headline, lang)}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t(homeCopy.mission, lang)}
          </p>
          {joinFormUrl ? (
            <div className="mt-10">
              <Button
                nativeButton={false}
                render={
                  <Link href={joinFormUrl} target="_blank" rel="noopener noreferrer" />
                }
                size="lg"
                className="h-11 px-6 text-base"
              >
                {t(homeCopy.cta, lang)}
              </Button>
            </div>
          ) : null}
        </div>

        <div className="mt-16 lg:mt-20">
          <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            {t(homeCopy.valuesTitle, lang)}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {homeValues.map((value) => {
              const Icon = valueIcons[value.key as keyof typeof valueIcons];

              return (
                <li key={value.key}>
                  <Card className="h-full border-border/80 bg-card/80 shadow-none transition-shadow hover:shadow-md">
                    <CardHeader className="gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <CardTitle className="text-lg">{t(value.title, lang)}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed">
                        {t(value.description, lang)}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
