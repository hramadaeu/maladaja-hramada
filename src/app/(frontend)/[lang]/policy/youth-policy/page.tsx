import type { Metadata } from "next";
import { isValidLocale } from "@/config/i18n";
import { PolicyPageShell } from "@/components/policy/policy-page-shell";
import { YouthPolicyTabs } from "@/components/policy/youth-policy-tabs";
import { youthPolicySections } from "@/content/policy/youth-policy/sections";
import { policySubsections } from "@/lib/dictionaries/policy";
import { localeMetadata } from "@/config/seo";
import { t } from "@/lib/translate";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const subsection = policySubsections[2];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return localeMetadata(lang, {
    title: t(subsection.title, lang),
    description: t(subsection.description, lang),
    path: `/policy/${subsection.slug}`,
  });
}

export default async function YouthPolicyPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <PolicyPageShell
      lang={lang}
      title={t(subsection.title, lang)}
      description={t(subsection.description, lang)}
    >
      <YouthPolicyTabs sections={youthPolicySections} lang={lang} />
    </PolicyPageShell>
  );
}
