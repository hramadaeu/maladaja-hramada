import type { CollectionConfig } from "payload";

export const Partner: CollectionConfig = {
  slug: "partner",
  labels: {
    singular: "Partner",
    plural: "Partners",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order", "updatedAt"],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "alt",
      type: "text",
    },
    {
      name: "url",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
