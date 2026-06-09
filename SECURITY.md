# Security Policy

The Maladaja Hramada website is an open, public-facing site operated
by a small team of volunteers. We take the security of our
infrastructure, our donors, and our visitors seriously.

This document describes how to report a security vulnerability to us
and what to expect from us in return.

---

## Supported versions

We provide security updates for the latest deployed version of the
`main` branch. There are no long-term-support releases.

| Branch  | Supported |
| ------- | --------- |
| `main`  | ✅ Yes    |
| older   | ❌ No     |

---

## Reporting a vulnerability

**Please do not file public issues for security problems.** Use one of
the following private channels:

1. **Email:** `info@mhramada.org` (subject line starting with
   `[SECURITY]` is appreciated).
2. **Encrypted:** PGP-encrypted reports are welcome. The team PGP
   fingerprint is published on the project contact page.
3. **GitHub Security Advisories:** open a
   [draft security advisory](https://github.com/hramadaeu/maladaja-hramada/security/advisories/new)
   on this repository.

### What to include

To help us triage, please include:

- A clear description of the issue and its impact.
- Steps to reproduce, ideally with a proof-of-concept.
- The affected URL(s), file(s), and commit SHA.
- Your name / handle if you would like to be credited.

---

## Security measures already in place

The codebase ships with the following baseline:

- **Strict TypeScript** (`strict: true`) and ESLint with
  `eslint-plugin-security` (recommended config, with
  `detect-object-injection` opt-out for the type-safe locale
  dictionary lookups).
- **Strict Content-Security-Policy** (CSP) on every route, with a
  stricter policy on the admin route.
- **HSTS** (`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`).
- **Clickjacking protection** (`X-Frame-Options: DENY` and
  `frame-ancestors 'none'` in CSP).
- **MIME-sniffing protection** (`X-Content-Type-Options: nosniff`).
- **Restrictive referrer policy** (`strict-origin-unsafe-cross-origin`).
- **Permissions-Policy** disabling camera, microphone, geolocation and
  FLoC.
- **Payload auth hardening** on the admin: 2-hour token expiration,
  10-attempt brute-force lockout, `SameSite=Strict` cookies, role-based
  access control.
- **Cookie hardening** on the locale cookie (`Secure` in production,
  `SameSite=Lax`).
- **Runtime env validation** in `payload.config.ts` — the application
  refuses to boot with a missing or placeholder `PAYLOAD_SECRET` /
  `DATABASE_URI`.
- **CORS / CSRF** scoped to the configured `SITE_URL` and Vercel
  preview URLs.
- **Payload media upload** restricted to `image/*` MIME types; the
  default Payload blocklist is additionally enforced for problematic
  formats.
- **Dependency hygiene**: `npm audit` is part of the developer
  workflow (`npm run audit:prod`).

---

## Known security issues

This section tracks security-relevant issues that we **know about** and
have **not yet fully remediated**, so that we — and the community —
can prioritise them. Each entry lists the issue, the impact, the
current mitigation, and the planned fix.

> Severity uses the GitHub Advisory scale: **Critical → High →
> Moderate → Low**.

### 🔴 High — `next@15.4.11` upstream advisories

- **Source:** `npm audit` (multiple GHSA IDs).
- **Affected advisories include:** middleware / proxy bypass
  (GHSA-26hh-7cqf-hhc6, GHSA-267c-6grr-h53f, GHSA-492v-c6pp-mqqv,
  GHSA-36qx-fr4f-26g5), cache poisoning
  (GHSA-3g8h-86w9-wvmq, GHSA-vfv6-92ff-j949, GHSA-wfc6-r584-vfw7,
  GHSA-mg66-mrh9-m8jx), XSS via CSP nonces
  (GHSA-ffhc-5mcf-pf4q, GHSA-gx5p-jg67-6x7h), SSRF via WebSocket
  (GHSA-c4j6-fc7j-m34r), DoS via image-optimizer remotePatterns
  (GHSA-9g9p-9gw9-jx7f, GHSA-h64f-5h5j-jqjh).
- **Impact:** varies per advisory. Cache poisoning and middleware
  bypass are most relevant to us.
- **Mitigation (current):** none beyond standard Next.js defaults.
  `images.remotePatterns` is locked to two known hosts (see
  `next.config.ts`).
- **Planned fix:** `npm audit fix --force` to upgrade to
  `next@15.5.19` (or newer) plus a regression test pass. Deferred
  because the upgrade is outside the pinned `15.4.11` range and may
  require adjustments to app code, middleware, or generated
  `payload-types.ts`.

### 🟠 Moderate — `dompurify <=3.3.3` (transitive)

- **Source:** `npm audit`.
- **Chain:** `dompurify` ← `monaco-editor` (Payload admin rich-text
  editor) ← `@payloadcms/richtext-lexical` ← `@payloadcms/next` ←
  `payload`.
- **Impact:** multiple XSS-bypass chains in DOMPurify (mutation-XSS,
  prototype-pollution via `USE_PROFILES`, function-based `ADD_TAGS`
  bypassing `FORBID_TAGS`).
- **Mitigation (current):** the admin is gated by Payload auth +
  brute-force lockout, and the admin CSP is strict
  (`cspAdmin` in `next.config.ts`). The vulnerable code path runs only
  in the rich-text editor in the admin panel.
- **Planned fix:** upgrade Payload (which will pull in newer
  `monaco-editor` and a patched `dompurify`). Tracked upstream.

### 🟠 Moderate — `esbuild <=0.24.2` (transitive, dev-only)

- **Source:** `npm audit`.
- **Chain:** `esbuild` ← `@esbuild-kit/core-utils` ←
  `@esbuild-kit/esm-loader` ← `drizzle-kit` ← `@payloadcms/db-postgres`.
- **Impact:** the dev server accepts requests from any website and
  reads the response. Affects only the local dev server, **not**
  production builds.
- **Mitigation (current):** developers are advised to bind
  `next dev` to `127.0.0.1` and not expose the dev port publicly.
- **Planned fix:** upgrade Payload / `drizzle-kit` (which will pull a
  patched `esbuild`).

### 🟠 Moderate — `postcss <8.5.10` (transitive)

- **Source:** `npm audit`.
- **Impact:** XSS via unescaped `</style>` in CSS stringify output.
  Reachable only when a downstream tool post-processes the build
  output.
- **Mitigation (current):** the project uses Tailwind v4 via the
  official PostCSS plugin; we do not run user-supplied CSS through
  PostCSS.
- **Planned fix:** transitively resolved by the `next@15.5.19` upgrade
  above.

### 🟡 Low — CSP allows `'unsafe-inline'` and `'unsafe-eval'` for `script-src`

- **Source:** original audit + runtime feedback
  (`EvalError: ... 'unsafe-eval' is not an allowed source of script`).
- **Impact:** the CSP includes two otherwise-broad sources on
  `script-src`:
  - `'unsafe-inline'` — only because of the theme-bootstrap inline
    `<script>` in `src/app/(frontend)/layout.tsx`.
  - `'unsafe-eval'` — because `@vercel/analytics` and
    `@vercel/speed-insights` bootstrap their beacons by calling
    `eval()`. Without it the browser blocks them with `EvalError`.
  With both sources allowed, an injected HTML string (e.g. via a
  future XSS sink) can run arbitrary JavaScript, including via
  `eval`.
- **Mitigation (current):**
  - `script-src` is locked to `'self'` for any external scripts; no
    remote hosts are allowed (e.g. no `https://cdn.example.com`).
  - The inline theme-bootstrap script is a static string with no user
    input.
  - No other `dangerouslySetInnerHTML` exists in user-input paths.
  - `eslint-plugin-security` flags any future `eval` / `new Function`
    use in our own code.
  - The admin route is gated by Payload auth + brute-force lockout.
- **Planned fix:**
  1. Refactor the theme bootstrap to use a per-request nonce
     (generate it in `middleware.ts` or in the layout) and add
     `'nonce-<value>'` to `script-src`, then drop `'unsafe-inline'`.
  2. Migrate `@vercel/analytics` and `@vercel/speed-insights` to the
     `next/script` `afterInteractive` strategy (which loads them as
     external scripts, not inline `eval`) so `'unsafe-eval'` can be
     dropped too. As a fallback, removing both packages entirely would
     also work — analytics is non-essential.

### 🟡 Low — CSP allows full `lh3.googleusercontent.com` host

- **Source:** original audit + runtime feedback
  (`Invalid src prop ... hostname "lh3.googleusercontent.com" is not
  configured`).
- **Impact:** CSP `img-src` permits any path on Google's user-content
  host. A compromised Google account could host malicious payloads on
  this host that would be served to our visitors.
- **Mitigation (current):** the URLs are **compiled into our static
  TypeScript dictionaries** (`src/lib/dictionaries/activities.ts`,
  `src/components/sections/home.tsx`) — they are not user-controllable.
  All remote images are re-encoded and re-sized by `next/image` (so
  pixel-flood DoS is bounded). The assets themselves are
  Google-published campaign materials.
- **Planned fix:** none immediate. A per-path allowlist via CSP is not
  possible; the only stronger option is to self-host the images via
  Payload's `Media` collection.

### 🟡 Low — `eslint-plugin-security` `detect-object-injection` disabled

- **Source:** original audit.
- **Impact:** the rule is disabled in `eslint.config.mjs` because it
  produces 30+ false positives on our `Record<Locale, T>` dictionary
  lookups. The threat it protects against (prototype pollution via
  user-controlled keys) does not apply to our code: every dictionary
  key is either a compile-time constant or a `lang` value that has
  been validated by `isValidLocale()`.
- **Mitigation (current):** `isValidLocale()` in `src/config/i18n.ts`
  is the runtime guard.
- **Planned fix:** none. The trade-off is documented inline in
  `eslint.config.mjs`.

### 🟡 Low — Public `Media` upload accepts any image

- **Source:** original audit.
- **Impact:** the Payload `Media` collection accepts any `image/*`
  upload from authenticated admins (and, on read, from anonymous
  visitors). A compromised admin account could upload malicious SVGs
  or polyglot files.
- **Mitigation (current):** `mimeTypes: ["image/*"]` + Payload's
  built-in `allowRestrictedFileTypes: false`; `sharp` re-encodes all
  images to WebP on the server (which strips EXIF and any embedded
  JavaScript); uploads are gated by Payload auth +
  `access.create: ({ req }) => Boolean(req.user)`.
- **Planned fix:** an explicit MIME-extension cross-check + a maximum
  file-size limit (Payload 3.67 does not expose a typed `maxSize`
  field in `UploadConfig`; this is tracked for a future Payload
  version).

### 🟡 Low — `donate-client.tsx` uses `dangerouslySetInnerHTML` for QR codes

- **Source:** original audit.
- **Impact:** the inline `__html` content is the output of the
  `qrcode` library (a static SVG data-URI), so no user input is
  reachable. Marked as reviewed.

---

## Future hardening (roadmap)

The items below are not security issues today, but they would
strengthen the project if addressed:

1. **Upgrade `next` to 15.5.19+** — closes the entire cluster of
   upstream `next` advisories in one shot.
2. **Upgrade Payload** — closes the `dompurify` and `esbuild`
   transitive advisories.
3. **Drop `'unsafe-eval'` from the frontend CSP** by migrating
   `@vercel/analytics` and `@vercel/speed-insights` to
   `next/script` `afterInteractive` (or remove them).
4. **Refactor theme bootstrap to a CSP nonce** — drops
   `'unsafe-inline'` from `script-src` and lets the strict CSP hold up
   even if a future XSS sink appears.
5. **Self-host Google user-content images** — removes the
   `lh3.googleusercontent.com` host from CSP entirely.
6. **Subresource Integrity (SRI)** for any future CDN scripts.
7. **Security.txt** at `/.well-known/security.txt` so automated
   scanners can find this policy without crawling.
8. **Per-PR `npm audit` GitHub Action** that fails the build on
   high/critical advisories.

---

## Hall of fame

We thank the following reporters for responsible disclosure:

- _No reports yet — be the first!_

---

## Contact

For anything that is not a security issue (typos, content updates,
general questions), please use the regular contact form on the
website or open a public GitHub issue.
