"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    icon: FaInstagram,
  },
  {
    name: "Telegram",
    href: process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM,
    icon: FaTelegram,
  },
  {
    name: "TikTok",
    href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
    icon: FaTiktok,
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    icon: FaLinkedin,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return social.href ? (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                aria-label={social.name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ) : null;
          })}
        </div>

        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Maladaja Hramada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
