# TODO

A living list of follow-up work for the Maladaja Hramada website. Items
are grouped by theme and tagged with priority:

- 🔴 **High** — visible to users or blocking real work.
- 🟠 **Medium** — improves quality / maintainability.
- 🟡 **Low** — nice-to-have / discovered during the audit.

> Status legend: `[ ]` todo · `[~]` in progress · `[x]` done.

---

## 1. 🎨 Animations — `🔴 High`

The site is currently almost entirely static. We need motion that
matches the brutalist aesthetic: **sharp, not soft**.

### Scope (what to animate)

- **Page-load reveal** for major sections on `/` (eyebrow, headline,
  body, CTAs) — staggered fade + 4–8px upward translate.
- **Scroll-reveal** for cards on `/[lang]/activities` and any future
  lists.
- **Hover micro-interactions** on all clickable elements
  (buttons, links, cards, nav items):
  - Buttons: 100 ms color/background swap, 100 ms `brutal-shadow`
    offset shift.
  - Cards: 100 ms translate-y `(-2px)` + shadow bump.
  - Links: underline grow-from-left in 150 ms (using a
    `::after` pseudo-element).
- **Roses separator**: a very slow horizontal drift (60 s loop) so the
  roses feel alive but not distracting. Respect `prefers-reduced-motion`
  and disable.
- **Theme toggle**: icon rotation + color crossfade (200 ms).
- **Header / nav**: small `bounce-down` on the active-link underline.

### Stack options (pick one)

- **Pure CSS** (`@keyframes` + `animation-timeline: view()` /
  `scroll-timeline` for scroll-reveal). Lightweight, no new deps.
- **Tailwind utilities only** (`transition-*`, `hover:scale-*`,
  `animate-*`). Same.
- **`framer-motion`** for the more involved stagger and shared-layout
  animations. ~30 kB gz.

**Recommendation:** start with **pure CSS + Tailwind** for everything
above. Add `framer-motion` only if/when a shared-layout transition
(e.g. card → detail) is needed.

### Accessibility guardrail

Wrap every animation in a `@media (prefers-reduced-motion: no-preference)`
block, or use Tailwind's `motion-safe:` / `motion-reduce:` variants.

### Definition of done

- [ ] Page-load stagger on `/` hero.
- [ ] Scroll-reveal on activity cards.
- [ ] Hover micro-interactions on buttons, cards, links.
- [ ] Roses-separator subtle drift.
- [ ] All animations gated on `prefers-reduced-motion`.
- [ ] Lighthouse "Avoid non-composited animations" → 0.

---

## 2. 🔴 Database / Payload content migration — `🔴 High`

**Status:** Unified `Activity` collection created, registered in config,
server adapter + frontend switchover done. Static `activitiesCopy.items` kept as
fallback (marked `@deprecated`).

### Remaining

- [x] Run seed script against dev DB (5 activities seeded).
- [ ] Remove `activitiesCopy.items` after verifying Payload data in production (2-week grace period).
- [ ] Add `publishedAt` field for manual sort order.

---

## 3. 📰 More content for Activities — `🔴 High`

### Editorial checklist (per entry)

- [ ] Title, description, tags all 4-locale translated.
- [ ] Image uploaded via Payload (after TODO #2 is done) or
      `lh3.googleusercontent.com/aida-public/...` URL if external.
- [ ] Date / progress / CTA filled in where applicable.
- [ ] Slug unique, kebab-case, ASCII-only.

---

## 4. 🟠 Discovered extras (worth tracking, optional)

These are items I noticed during the audit and previous tasks. None
are urgent, but they would round out the project.

- [x] **News index page** — `src/collections/News.ts` is wired in
      Payload but has no frontend route. Add
      `src/app/(frontend)/[lang]/news/page.tsx` and
      `src/app/(frontend)/[lang]/news/[slug]/page.tsx`.
      *(Collection removed 2026-06-09 — item obsolete.)*
- [ ] **Robots.txt** — confirm `/admin` is disallowed (it currently
      isn't in the project — Payload serves its own).
- [ ] **OG image** — `public/brand/og-image.png` is referenced in
      `src/config/seo.ts` but doesn't exist. Create a 1200×630
      brutalist OG card using the rose mark + wordmark.
- [ ] **`favicon.ico`** — currently only `/icon.svg` is wired.
      Add a 32×32 fallback `.ico` for older browsers.
- [ ] **Dark-mode polish** — the `ThemeProvider` is wired but several
      components (e.g. the policy tabs) don't yet have dark variants.
- [ ] **Lighthouse pass** — run a full Lighthouse audit on `/`,
      `/about`, `/activities`, and `/policy/common-vision` and
      address any red metric.
- [ ] **Visual regression tests** — add Playwright + `pixelmatch` or
      Chromatic for the homepage and activity pages.
- [ ] **Per-PR `npm audit` Action** — already in `SECURITY.md` →
      "Future hardening" #8.
- [ ] **`/.well-known/security.txt`** — already in `SECURITY.md` →
      "Future hardening" #7.
- [ ] **OG card for OG image variants per locale** — 4× 1200×630 PNGs
      (one per locale) with the locale-specific tagline.
- [ ] **Open Graph / Twitter card test** — share a page on
      Twitter/LinkedIn/Facebook and screenshot the preview to confirm.

---

## 5. 👥 About Us — page extensions `🟡 Medium`

- [ ] **Our partners** — add a partner logos / descriptions section to the About page.
- [ ] **History timeline** — add a chronological timeline of the organisation's milestones to the About page.

---

## 6. 🔴 Lighthouse & audit findings

Open items from the code audit. M8 (OG image) is already tracked in #4.

### 🟠 Major
- [ ] **M2 — Env var startup validation** — `JOIN_FORM_URL`, `DONATION_*`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SOCIAL_*` silently default to empty strings. Add startup check that logs a warning. (`src/config/site-links.ts:2-15`)
- [ ] **M6 — Color contrast** — `text-foreground/50` (~3.5:1) and `/40` (~2.8:1) on TOC headings, section numbers, inactive tab labels fails WCAG AA. Raise opacity to ≥60%. (`vision-toc.tsx:64,76,80`, `youth-policy-tabs.tsx:31,34`)

### 🟡 Moderate
- [ ] **N4 — HashScroll scope** — loaded on every page via `[lang]/layout.tsx` but only useful on homepage (`#donate`). Move into `[lang]/page.tsx` or add conditional. (`src/app/(frontend)/[lang]/layout.tsx:50`)
- [ ] **N6 — Mask CSS duplication** — `about/page.tsx` and `roses-separator.tsx` have repeated vendor-prefixed `mask-image`/`mask-size` inline styles. Extract to shared constant or CSS utility.
- [ ] **N9 — Dependency category** — `cross-env` and `shadcn` listed in `dependencies` but are dev-only. Move to `devDependencies`. (`package.json`)

---

## Process

- Each item above gets its own branch (or its own sub-PR) so reviews
  stay small.
- Update this file as items are completed (check the box).
- When a section is fully done, move it to a "Completed" log below.

---

## Completed

- ✅ 2026-06-09 — SEO audit + fixes (CSP, OG image, viewport, sitemap,
     not-found).
- ✅ 2026-06-09 — Security audit + fixes (User auth, Media
     restrictions, env validation, middleware cookies, eslint-plugin-security).
- ✅ 2026-06-09 — `lh3.googleusercontent.com` host allowlist in CSP
     and `next/image` (Google user-content path is `/aida-public/**`).
- ✅ 2026-06-09 — Added `'unsafe-eval'` to frontend CSP for
     `@vercel/analytics` and `@vercel/speed-insights` (documented in
     `SECURITY.md`).
- ✅ 2026-06-09 — `SECURITY.md` (disclosure policy + known-issues
     catalogue + roadmap).
- ✅ 2026-06-09 — Surface `logo.svg` on the homepage.
- ✅ 2026-06-09 — Reduce empty space around the roses separator
- ✅ 2026-06-09 — News, Projects, GlobalSettings collections removed
- ✅ 2026-06-09 — Payload types regenerated after collection removals
- ✅ 2026-06-09 — i18n audit: all component hardcoded strings replaced with dictionary lookups (layout skip-link, header/footer labels, theme-toggle, mobile-menu, dialog close, donate QR, vision-toc, not-found, language-switcher)
- ✅ 2026-06-09 — CLS fix: Inter + JetBrains_Mono set to `display: optional`
- ✅ 2026-06-10 — Audit fixes: error boundaries (C1), Suspense streaming (M1), `<nav>` aria-label (M3), `<a href="#">` → button (M4), ARIA tabs (M5), zod Payload validation (M7), dialog closeLabel (N1), `lang as Locale` → `resolveLocale()` (N2), theme-toggle fallback (N3), `progressWidth()` helper (N5), silent catch logging (N7), YouTube embed fallback (N8), dynamic analytics (N10), dev SITE_URL (N11), 404 meta (N12), dedup locale checks (N13), empty activities message (N14), `.env` secrets verified safe (C2)

---

## Please check that everything works for
- 🔵 Security
- 🔵 SEO/metadata
- 🟡 Accessibility *(M6 color contrast still open)*
- Mobile/responsive
- 🔵 Error handling/resilience
- 🔵 Dead code / imports
- 🔵 Dependencies
- 🔵 Bundle analysis
- 🔵 Analytics
- 🟡 Lighthouse *(bfcache, CLS, fetchpriority fixed — full audit not run)*
