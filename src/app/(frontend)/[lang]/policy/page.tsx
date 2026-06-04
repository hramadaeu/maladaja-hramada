import { isValidLocale } from "@/config/i18n";
import { PolicyIndex } from "@/components/policy/policy-index";
import { notFound } from "next/navigation";

type PolicyPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <PolicyIndex lang={lang} />;
}
