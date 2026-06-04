import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  upload: true,
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt text",
    },
  ],
};
