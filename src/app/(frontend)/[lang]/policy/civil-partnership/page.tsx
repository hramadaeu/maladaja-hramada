import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/config/i18n";
import { PolicyPageShell } from "@/components/policy/policy-page-shell";
import { PolicyProse } from "@/components/policy/policy-prose";
import { civilPartnershipText } from "@/content/policy/civil-partnership";
import { civilPartnershipPageCopy, policySubsections } from "@/lib/dictionaries/policy";
import { localeMetadata } from "@/config/seo";
import { t } from "@/lib/translate";
import { notFound } from "next/navigation";
import { ExternalLinkIcon } from "lucide-react";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const subsection = policySubsections[1];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return localeMetadata(lang, {
    title: t(subsection.title, lang),
    description: t(subsection.description, lang),
    path: `/policy/${subsection.slug}`,
  });
}

export default async function CivilPartnershipPage({ params }: PageProps) {
  const { lang } = await params;

  return (
    <PolicyPageShell
      lang={lang}
      title={t(subsection.title, lang)}
      description={t(subsection.description, lang)}
    >
      <div className="flex flex-col gap-12">
        <section>
          <PolicyProse text={t(civilPartnershipText, lang)} className="mt-4" />
          <Link
            href="https://docs.google.com/document/d/1h6jiy5jjtpE3rkYT6nkzDb7_tImcGXJs/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 font-button text-button uppercase text-proletarian-red hover:underline decoration-2 underline-offset-4"
          >
            {t(civilPartnershipPageCopy.fullVersionLink, lang)}
            <ExternalLinkIcon className="size-4" />
          </Link>
        </section>
      </div>
    </PolicyPageShell>
  );
}
