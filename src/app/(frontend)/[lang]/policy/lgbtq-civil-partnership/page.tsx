import { isValidLocale } from "@/config/i18n";
import { PolicyPageShell } from "@/components/policy/policy-page-shell";
import { PolicyProse } from "@/components/policy/policy-prose";
import {
  civilPartnershipText,
  lgbtqPolicyText,
} from "@/content/policy/lgbtq-civil-partnership";
import { lgbtqPageCopy, policySubsections } from "@/lib/dictionaries/policy";
import { t } from "@/lib/translate";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const subsection = policySubsections[1];

export default async function LgbtqCivilPartnershipPage({ params }: PageProps) {
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
      <div className="flex flex-col gap-12">
        <section>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {t(lgbtqPageCopy.lgbtqHeading, lang)}
          </h2>
          <PolicyProse text={t(lgbtqPolicyText, lang)} className="mt-4" />
        </section>

        <section className="border-t border-border pt-12">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {t(lgbtqPageCopy.civilPartnershipHeading, lang)}
          </h2>
          <PolicyProse text={t(civilPartnershipText, lang)} className="mt-4" />
        </section>
      </div>
    </PolicyPageShell>
  );
}
