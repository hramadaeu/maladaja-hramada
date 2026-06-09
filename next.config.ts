import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

/**
 * Content Security Policy.
 *
 * Notes:
 * - `script-src` keeps `'unsafe-inline'` because the theme bootstrap in
 *   `src/app/(frontend)/layout.tsx` is an inline <script>. A future
 *   refactor to a nonce-based script can drop it.
 * - `script-src` also has `'unsafe-eval'` because the @vercel/analytics
 *   and @vercel/speed-insights runtime scripts bootstrap via `eval()`.
 *   Without this the browser blocks their beacons. We tried removing
 *   the packages and the error went away, but the simpler trade-off is
 *   to allow `eval` and rely on the rest of the CSP (no remote script
 *   sources, frame-ancestors 'none', etc.) to limit the attack surface.
 *   See `SECURITY.md` → "Known security issues" for the trade-off.
 * - `frame-src` allows YouTube embeds used in activity detail pages.
 * - `connect-src` allows Vercel Analytics + Speed Insights beacons.
 * - `img-src` allows the full `lh3.googleusercontent.com` host. The
 *   actual assets live under `/aida-public/**` (Google's AI/Assist
 *   public-content path). CSP has no path-level filter, so we trust the
 *   hostname + `next/image` re-encoding. See `SECURITY.md` →
 *   "Known security issues" for the trade-off.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob: https://lh3.googleusercontent.com https://img.buymeacoffee.com",
  "media-src 'self'",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  // Inline + eval allowed:
  //  - 'unsafe-inline' for the theme bootstrap inline script
  //  - 'unsafe-eval'   for @vercel/analytics + @vercel/speed-insights
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "frame-src https://www.youtube.com",
  "connect-src 'self' https://*.vercel-insights.com https://*.vercel-analytics.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Stricter CSP for the Payload admin UI. Blocks all third-party origins.
 * (The admin still needs 'unsafe-eval' for the Lexical rich-text editor.)
 */
const cspAdmin = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "frame-src 'self'",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  // HSTS — only effective when served over HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-unsafe-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "off",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-site",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.buymeacoffee.com",
        // Only the badge/button API assets.
        pathname: "/button-api/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // The site's Google user-content assets live under `/aida-public/**`
        // (Google's AI/Assist public-content path). Next.js's `remotePatterns`
        // doesn't support multi-path matching cleanly here, and CSP has no
        // path-level filter at all, so we allow the whole hostname. See
        // `SECURITY.md` for the threat-model discussion.
      },
    ],
  },
  async headers() {
    return [
      // Admin route — stricter CSP, prevent embedding, no referrers.
      {
        source: "/admin/:path*",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: cspAdmin },
          { key: "Referrer-Policy", value: "no-referrer" },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
      // All other routes — standard CSP + bfcache-friendly Cache-Control.
      // Next.js 16 defaults to Cache-Control: private,no-cache,no-store for
      // dynamic pages, which blocks back/forward cache. We override it here
      // to remove `no-store` so browsers can preserve the page in bfcache.
      {
        source: "/:path((?!admin).*)",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: csp },
          { key: "Cache-Control", value: "private, no-cache, max-age=0, must-revalidate, no-transform" },
        ],
      },
    ];
  },
  turbopack: {
    root: path.resolve(dirname),
  },
};

// Reference `isProd` to prevent the variable from being tree-shaken
// (useful when the build system needs to know production intent).
void isProd;

export default withPayload(nextConfig, { devBundleServerPackages: false });
