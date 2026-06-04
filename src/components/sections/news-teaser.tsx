import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockNewsItems, teaserCopy } from "@/lib/dictionaries/teasers";
import { t } from "@/lib/translate";

type NewsTeaserSectionProps = {
  lang: string;
};

export function NewsTeaserSection({ lang }: NewsTeaserSectionProps) {
  return (
    <section id="news" className="border-b border-border bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t(teaserCopy.newsTitle, lang)}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              {t(teaserCopy.newsSubtitle, lang)}
            </p>
          </div>
          <Button
            nativeButton={false}
            variant="outline"
            render={<Link href={`/${lang}/news`} />}
            className="w-fit gap-2"
          >
            {t(teaserCopy.readMore, lang)}
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {mockNewsItems.map((item) => (
            <li key={item.id}>
              <Card className="h-full border-border/80 bg-card">
                <CardHeader>
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    {t(item.date, lang)}
                  </p>
                  <CardTitle className="text-xl leading-snug">{t(item.title, lang)}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {t(item.excerpt, lang)}
                  </CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
