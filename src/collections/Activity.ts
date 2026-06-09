import type { CollectionConfig } from "payload";

export const Activity: CollectionConfig = {
  slug: "activity",
  labels: {
    singular: "Activity",
    plural: "Activities",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "updatedAt"],
  },
  fields: [
    {
      name: "type",
      type: "select",
      options: ["campaign", "project"],
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      localized: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      localized: true,
    },
    {
      name: "alt",
      type: "text",
      localized: true,
    },
    {
      name: "badge",
      type: "select",
      options: ["urgent", "ongoing"],
    },
    {
      name: "variant",
      type: "select",
      options: ["solid", "card"],
    },
    {
      name: "progress",
      type: "group",
      fields: [
        { name: "current", type: "number" },
        { name: "max", type: "number" },
      ],
    },
    {
      name: "tags",
      type: "array",
      localized: true,
      fields: [
        { name: "tag", type: "text" },
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: [
        {
          name: "type",
          type: "select",
          options: ["external", "internal"],
        },
        { name: "href", type: "text" },
        {
          name: "label",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      name: "date",
      type: "text",
      localized: true,
    },
    {
      name: "youtubePlaylistId",
      type: "text",
    },
  ],
};
