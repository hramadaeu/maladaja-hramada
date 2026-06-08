import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@/config/i18n";
import { notFound } from "next/navigation";
import { Scale, HeartHandshake, Users, Sparkles } from "lucide-react";

import { t } from "@/lib/translate";
import { getSiteLinks } from "@/config/site-links";
import { localeMetadata } from "@/config/seo";
import { aboutCopy, aboutValues } from "@/lib/dictionaries/about";

type AboutUsProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: AboutUsProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  return localeMetadata(lang, {
    title: aboutCopy.whoWeAre[locale],
    description: aboutCopy.mission[locale],
    path: "/about",
  });
}

const valueIcons = {
  freedom: Sparkles,
  justice: Scale,
  solidarity: HeartHandshake,
  equality: Users,
} as const;

export default async function AboutUs({ params }: AboutUsProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const links = getSiteLinks();

  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-y-0 right-0 w-[500px] pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] bg-proletarian-red"
          style={{
            maskImage: "url(/brand/roses-pattern-red-mask.svg)",
            maskSize: "400px 100%",
            maskRepeat: "no-repeat",
            maskPosition: "right top",
            WebkitMaskImage: "url(/brand/roses-pattern-red-mask.svg)",
            WebkitMaskSize: "400px 100%",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "right top",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] bg-foreground"
          style={{
            maskImage: "url(/brand/roses-pattern-black-mask.svg)",
            maskSize: "400px 100%",
            maskRepeat: "no-repeat",
            maskPosition: "right top",
            WebkitMaskImage: "url(/brand/roses-pattern-black-mask.svg)",
            WebkitMaskSize: "400px 100%",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "right top",
          }}
        />
      </div>
      
      <div className="relative z-10 flex flex-col gap-16 py-12">
        <section>
          <div className="inline-block bg-foreground text-background font-label-caps text-label-caps px-2 py-1 mb-6">
            {t(aboutCopy.badge, lang)}
          </div>
          <h1 className="font-headline text-headline-lg uppercase text-foreground mb-6">
            {t(aboutCopy.whoWeAre, lang)}
          </h1>
          <div className="max-w-3xl border-l-4 border-proletarian-red pl-6">
            <p className="font-body-lg text-body-lg text-foreground mb-4">
              {t(aboutCopy.mission, lang)}
            </p>
            <p className="font-body-md text-body-md text-foreground/80">
              {t(aboutCopy.founded, lang)}
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-headline text-headline-md uppercase text-foreground mb-8 border-b-2 border-border pb-4">
            {t(aboutCopy.valuesTitle, lang)}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutValues.map((value) => {
              const Icon = valueIcons[value.key as keyof typeof valueIcons];
              return (
                <article key={value.key} className="brutal-border bg-background p-6 flex flex-col gap-4 hover:bg-muted transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 bg-proletarian-red text-paper-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-headline text-headline-md uppercase text-foreground">
                      {t(value.title, lang)}
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-foreground/80">
                    {t(value.description, lang)}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-proletarian-red text-paper-white brutal-border p-8 md:p-12">
          <h2 className="font-headline text-headline-lg uppercase mb-4">
            {t(aboutCopy.ctaTitle, lang)}
          </h2>
          <p className="font-body-lg text-body-lg text-paper-white/90 max-w-2xl mb-8">
            {t(aboutCopy.ctaText, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={links.joinFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-proletarian-red font-button text-button uppercase px-8 py-4 brutal-border border-paper-white hover:bg-foreground hover:text-background hover:border-border transition-all duration-100 inline-flex items-center justify-center"
            >
              {t(aboutCopy.getInvolved, lang)}
            </a>
            <a
              href="#"
              className="bg-transparent text-paper-white font-button text-button uppercase px-8 py-4 border-2 border-paper-white hover:bg-background hover:text-proletarian-red transition-all duration-100 inline-flex items-center justify-center"
            >
              {t(aboutCopy.contactUs, lang)}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
