/** Policy section URL segments (after `/[lang]/policy/`). */
export const policySlugs = {
  commonVision: "common-vision",
  civilPartnership: "civil-partnership",
  youthPolicy: "youth-policy",
  postUni: "post-uni",
} as const;

export type PolicySlug = (typeof policySlugs)[keyof typeof policySlugs];

export function policyHref(lang: string, slug?: PolicySlug): string {
  const base = `/${lang}/policy`;
  return slug ? `${base}/${slug}` : base;
}
