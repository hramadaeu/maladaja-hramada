import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, locales } from "@/config/i18n";
import { defaultMetadata } from "@/config/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HashScroll } from "@/components/navigation/hash-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const siteTitle = defaultMetadata(lang).title as string;
  return {
    ...defaultMetadata(lang),
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
    icons: {
      icon: [{ url: "/brand/logo.svg", type: "image/svg+xml" }],
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <HashScroll />
      <SiteHeader lang={lang} />
      <main id="main-content" className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 flex-1">
        {children}
      </main>
      <SiteFooter lang={lang} />
      <BackToTop />
    </div>
  );
}
