import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "./src/collections/Media";
import { News } from "./src/collections/News";
import { Projects } from "./src/collections/Projects";
import { Users } from "./src/collections/Users";
import { defaultLocale, locales } from "./src/config/locales";
import { GlobalSettings } from "./src/globals/GlobalSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, News, Projects],
  editor: lexicalEditor(),
  globals: [GlobalSettings],
  localization: {
    locales: [...locales],
    defaultLocale,
  },
  secret: process.env.PAYLOAD_SECRET as string,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
});
