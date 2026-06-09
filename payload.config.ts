import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Activity } from "./src/collections/Activity";
import { Media } from "./src/collections/Media";
import { Users } from "./src/collections/Users";
import { defaultLocale, locales } from "./src/config/locales";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Runtime environment validation.
 *
 * Payload's `secret` and `db.postgresAdapter` connection string are both
 * required. Failing fast at boot prevents the app from starting with an
 * insecure default secret and surfaces clearer errors than a runtime
 * connection failure.
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(
      `[payload.config] Missing required environment variable: ${name}`,
    );
  }
  return value;
}

const payloadSecret = requireEnv("PAYLOAD_SECRET");
const databaseUri = requireEnv("DATABASE_URI");

/**
 * Reject the placeholder secret shipped in `.env.example`. The application
 * must not boot with a known/weak secret in any environment.
 */
if (
  process.env.NODE_ENV === "production" &&
  (payloadSecret === "change-me-to-a-long-random-string" ||
    payloadSecret.length < 32)
) {
  throw new Error(
    "[payload.config] PAYLOAD_SECRET is using a placeholder or is too short. " +
      "Generate a random secret of at least 32 characters for production.",
  );
}

/**
 * Trusted origins for CORS and CSRF protection. The admin panel and the
 * REST/GraphQL APIs only accept requests from these origins.
 */
const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";
const trustedOrigins = Array.from(
  new Set([
    siteUrl,
    // Vercel preview URLs share the production cookies, so allow them
    // explicitly when running on Vercel.
    ...(process.env.VERCEL_ENV === "production"
      ? [siteUrl]
      : process.env.VERCEL_URL
        ? [`https://${process.env.VERCEL_URL}`]
        : []),
  ]),
);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Disable the admin meta image fetch on the dashboard — it makes a
    // request to the site URL, which can be abused for SSRF against
    // internal services on misconfigured deployments.
    meta: {
      titleSuffix: " — Payload",
    },
  },
  collections: [Users, Media, Activity],
  editor: lexicalEditor(),
  localization: {
    locales: [...locales],
    defaultLocale,
  },
  secret: payloadSecret,
  db: postgresAdapter({
    pool: {
      connectionString: databaseUri,
      // Neon serverless pools recommend ssl; require it.
      ssl: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    },
  }),
  // Lock the API surface to the same origin and known previews.
  cors: trustedOrigins,
  csrf: trustedOrigins,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
});
