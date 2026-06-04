# Policy content

Edit the text for each policy page in these files:

| Page | File | Export |
|------|------|--------|
| Common vision | `common-vision.ts` | `commonVisionText` |
| LGBTQ+ policy | `lgbtq-civil-partnership.ts` | `lgbtqPolicyText` |
| Civil partnership | `lgbtq-civil-partnership.ts` | `civilPartnershipText` |
| Youth policy | `youth-policy.ts` | `youthPolicyText` |
| Post-UNI | `post-uni.ts` | `postUniText` |

Each export is a `Record<Locale, string>` with keys `ru`, `be`, `en`, `pl`. Russian (`ru`) is the fallback if a locale is missing.
