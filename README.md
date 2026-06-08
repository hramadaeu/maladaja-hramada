# Maladaja Hramada

Website for Maladaja Hramada based on Next.js 15 (App Router) with TypeScript, Tailwind CSS v4, and locale-based routing.

## Locales
Supported languages: `be` (default), `en`, `pl`, `ru`.
URLs are prefixed with the locale, e.g. `/ru`, `/en/about`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware redirects to the detected or default locale.

## Project structure

```
src/
  app/[lang]/     # Locale-scoped pages and layout
  components/ui/  # shadcn/ui components (empty)
  components/sections/
  config/         # i18n, site config, navigation
middleware.ts     # Locale detection and redirects
```
