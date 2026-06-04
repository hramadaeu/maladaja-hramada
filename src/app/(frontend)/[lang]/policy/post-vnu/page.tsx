import { isValidLocale } from "@/config/i18n";
import { PolicyPageShell } from "@/components/policy/policy-page-shell";
import { PolicyProse } from "@/components/policy/policy-prose";
import { postUniText } from "@/content/policy/post-uni";
import { policySubsections } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const subsection = policySubsections[3];

export default async function postUniPage({ params }: PageProps) {
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
      <PolicyProse text={t(postUniText, lang)} />
    </PolicyPageShell>
  );
}
