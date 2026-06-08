import { notFound } from "next/navigation";
import { locales } from "@/config/i18n";
import { isValidLocale } from "@/config/i18n";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HashScroll } from "@/components/navigation/hash-scroll";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <>
      <HashScroll />
      <SiteHeader lang={lang} />
      <main className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
        {children}
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
