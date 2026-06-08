import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeSectionCopy } from "@/lib/dictionaries/home";
import { t } from "@/lib/translate";

type HomeSectionProps = {
  lang: string;
};

export function HomeSection({ lang }: HomeSectionProps) {
  return (
    <section className="relative w-full min-h-[819px] flex flex-col justify-center border-b-8 border-proletarian-red overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center grayscale opacity-20"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpiUpWxXKuxpPA8eXvKL90zZ2xJVKlYZ8syIQ87YgsPF2tmxKto2n8NxmsIAxGtOUFSoV4txswaobN3y4PldBBV200u8NJpy9uvGZ_Yz5lxJBtAOqS8zBLJmLOjdY7aNAyqA7m3jo_NjJ2RrQ9i1kyTQ5R2kkc_i3agnkWUav4ViLDGOMsv9KWyPwMLxl6atWvzznfhyVwBKlnEyLXNhf07v3IPX6G33TQFG4UZDqRA75Sy0fVjg2jhj2QYRStWPhUo-VL9cBjcjUk')",
          }}
        />
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-16 py-20 w-full">
        <div className="max-w-4xl">
          <div className="inline-block bg-foreground text-background font-label-caps text-label-caps px-2 py-1 mb-6">
            {t(homeSectionCopy.eyebrow, lang)}
          </div>
          <h1 className="font-display-lg text-display-lg text-foreground uppercase leading-none mb-8 mix-blend-multiply max-w-4xl">
            {t(homeSectionCopy.headlineLead, lang)}
            <br />
            <span className="text-proletarian-red">
              {t(homeSectionCopy.headlineHighlight, lang)}
            </span>
            <br />
            {t(homeSectionCopy.headlineTail, lang)}
          </h1>
          <p className="font-body-lg text-body-lg text-foreground max-w-2xl mb-10 border-l-4 border-proletarian-red pl-4 bg-background/80 p-4 brutal-border">
            {t(homeSectionCopy.body, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}/about`}
              className="bg-proletarian-red text-paper-white font-button text-button uppercase px-8 py-4 brutal-shadow transition-all duration-100 border-2 border-transparent hover:border-ink-black inline-flex items-center justify-center gap-2"
            >
              {t(homeSectionCopy.ctaPrimary, lang)}
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href={`/${lang}/policy`}
              className="bg-transparent text-foreground font-button text-button uppercase px-8 py-4 brutal-border transition-all duration-100 hover:bg-concrete-gray inline-flex items-center justify-center"
            >
              {t(homeSectionCopy.ctaSecondary, lang)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
