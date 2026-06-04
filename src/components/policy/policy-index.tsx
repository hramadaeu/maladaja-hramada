import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { policyHref, type PolicySlug } from "@/config/policy-routes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { policyCopy, policySubsections } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";
type PolicyIndexProps = {
  lang: string;
};

export function PolicyIndex({ lang }: PolicyIndexProps) {
  const featured = policySubsections.find((item) => item.featured);
  const rest = policySubsections.filter((item) => !item.featured);

  return (
    <div className="pb-12">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          {t(policyCopy.sectionTitle, lang)}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t(policyCopy.indexTitle, lang)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {t(policyCopy.indexIntro, lang)}
        </p>
      </header>

      {featured ? (
        <Card className="mt-10 border-primary/20 bg-card ring-1 ring-primary/10">
          <CardHeader>
            <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {t(policyCopy.mainBadge, lang)}
            </span>
            <CardTitle className="text-2xl">{t(featured.title, lang)}</CardTitle>
            <CardDescription className="text-base">
              {t(featured.description, lang)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              nativeButton={false}
              render={
                <Link href={policyHref(lang, featured.slug as PolicySlug)} />
              }
              className="gap-2"
            >
              {t(policyCopy.readMore, lang)}
              <ArrowRightIcon className="size-4" />
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <li key={item.slug}>
            <Link
              href={policyHref(lang, item.slug as PolicySlug)}
              className="group block h-full"
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary">
                    {t(item.title, lang)}
                  </CardTitle>
                  <CardDescription>{t(item.description, lang)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {t(policyCopy.readMore, lang)}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
