import type { Locale } from "@/config/i18n";

export type YouthPolicyProposal = {
  title: Record<Locale, string>;
  body: Record<Locale, string>;
};

export type YouthPolicySection = {
  number: number;
  title: Record<Locale, string>;
  proposals: YouthPolicyProposal[];
};
