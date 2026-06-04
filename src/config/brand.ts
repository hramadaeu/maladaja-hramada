/**
 * Brand asset paths in /public/brand (source: src/assets/svg).
 * Run `npm run sync:brand` after editing SVGs. Header logo is inlined via `LogoMark`.
 */
export const brandAssets = {
  logo: "/brand/logo.svg",
  nameCyrillic: "/brand/mh-cyrilic.svg",
  nameLatin: "/brand/mh-latin.svg",
} as const;
