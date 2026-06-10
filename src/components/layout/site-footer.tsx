import Link from "next/link";
import {
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa6";

import { OrgNameWordmark } from "@/components/brand/org-name-wordmark";
import { footerCopy } from "@/lib/dictionaries/footer";
import { resolveLocale, t } from "@/lib/translate";
import { navigation, externalLinks } from "@/config/site";
import { getSiteLinks } from "@/config/site-links";
import type { Locale } from "@/config/i18n";

const socialLinks = [
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    icon: FaInstagram,
    labelKey: footerCopy.socialInstagram,
  },
  {
    name: "Telegram",
    href: process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM,
    icon: FaTelegram,
    labelKey: footerCopy.socialTelegram,
  },
  {
    name: "TikTok",
    href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
    icon: FaTiktok,
    labelKey: footerCopy.socialTikTok,
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    icon: FaLinkedin,
    labelKey: footerCopy.socialLinkedIn,
  },
];

type SiteFooterProps = {
  lang: string;
};

export function SiteFooter({ lang }: SiteFooterProps) {
  const locale = resolveLocale(lang);
  const links = getSiteLinks();

  return (
    <footer className="bg-ink-black w-full border-t-8 border-proletarian-red">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-12 w-full max-w-container-max mx-auto">
        <Link
          href={`/${lang}`}
          className="mb-6 md:mb-0 inline-flex transition-opacity hover:opacity-90"
          aria-label={t(footerCopy.logoHomeLabel, lang)}
        >
          <OrgNameWordmark light className="h-7 w-[min(100%,200px)] sm:h-8 sm:w-[220px]" />
        </Link>

        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0 font-label-caps text-label-caps">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              className="text-paper-white/70 hover:text-paper-white hover:underline decoration-proletarian-red decoration-2 transition-opacity duration-200"
            >
              {item.label[locale]}
            </Link>
          ))}
          <Link
            href={links.pressKitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-white/70 hover:text-paper-white hover:underline decoration-proletarian-red decoration-2 transition-opacity duration-200"
          >
            {footerCopy.pressKit[locale]}
          </Link>
          <a
            href={externalLinks.email}
            className="text-paper-white/70 hover:text-paper-white hover:underline decoration-proletarian-red decoration-2 transition-opacity duration-200"
          >
            {footerCopy.contact[locale]}
          </a>
          <a
            href={links.joinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-white/70 hover:text-paper-white hover:underline decoration-proletarian-red decoration-2 transition-opacity duration-200"
          >
            {footerCopy.joinUs[locale]}
          </a>
        </div>

        <div className="flex items-center gap-3 mb-6 md:mb-0">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return social.href ? (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-9 w-9 items-center justify-center text-paper-white/70 transition-all hover:text-proletarian-red"
                aria-label={t(social.labelKey, lang)}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ) : null;
          })}
        </div>
      </div>
      <div className="font-label-caps text-label-caps text-proletarian-red text-center pb-4">
        &copy; {new Date().getFullYear()} {footerCopy.tagline[locale]}
      </div>
    </footer>
  );
}
