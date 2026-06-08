import type { Locale } from "@/config/i18n";

export type CommonVisionPoint = {
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  cta?: {
    label: Record<Locale, string>;
    href: string;
  };
};

export type CommonVisionSection = {
  number: number;
  title: Record<Locale, string>;
  points: CommonVisionPoint[];
};
