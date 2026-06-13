"use client";

import { useParams } from "next/navigation";
import { OrgNameWordmark } from "@/components/brand/org-name-wordmark";
import { errorCopy } from "@/lib/dictionaries/error";
import { t } from "@/lib/translate";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function LangErrorPage({ error, reset }: ErrorPageProps) {
  const params = useParams();
  const lang = (params.lang as string) ?? "be";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b-2 border-ink-black bg-paper-white px-4 md:px-16 py-4">
        <OrgNameWordmark className="h-7 w-[min(100%,200px)] sm:h-8 sm:w-[220px]" />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="brutal-border border-l-8 border-l-proletarian-red bg-background w-full max-w-lg p-8 text-center md:p-12">
          <p className="font-headline text-headline-md text-foreground mt-4 mb-2 uppercase">
            {t(errorCopy.title, lang)}
          </p>
          <p className="font-body text-body-md text-foreground/60 mb-8">
            {process.env.NODE_ENV === "development" ? error.message : t(errorCopy.subtitle, lang)}
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-block border-2 border-transparent bg-proletarian-red px-8 py-4 font-button text-button uppercase text-paper-white brutal-shadow transition-all duration-100 hover:border-ink-black dark:hover:border-paper-white"
          >
            {t(errorCopy.cta, lang)}
          </button>
        </div>
      </main>

      <footer className="w-full border-t-2 border-ink-black bg-ink-black px-4 py-4 text-center md:px-16">
        <p className="font-label-caps text-label-caps text-paper-white/60">
          &copy; {new Date().getFullYear()} Maladaja Hramada
        </p>
      </footer>
    </div>
  );
}
