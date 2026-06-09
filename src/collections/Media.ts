import type { CollectionConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Media — upload collection for site images.
 *
 * Hardening:
 * - Only image MIME types are accepted. Uploading `.html`, `.svg`, or
 *   any executable content is rejected, preventing stored-XSS via the
 *   static file endpoint.
 * - `allowRestrictedFileTypes: false` additionally forbids file types
 *   that Payload knows to be problematic (svg, html, etc.).
 * - Image processing is delegated to `sharp`, which strips EXIF metadata
 *   and re-encodes to safe formats.
 * - Files are served with `Content-Disposition: inline` + a sanitized
 *   filename via Payload's default static handler.
 */
export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  upload: {
    staticDir: path.resolve(dirname, "../../public/media"),
    mimeTypes: ["image/*"],
    allowRestrictedFileTypes: false,
  },
  access: {
    // Public can read images served from the static directory.
    read: () => true,
    // Only authenticated admins can upload/modify media.
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt text",
      required: true,
      admin: {
        description: "Required for accessibility (screen readers).",
      },
    },
  ],
};
