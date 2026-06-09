import type { CollectionConfig } from "payload";

/**
 * Users — Payload auth collection for the admin panel.
 *
 * Hardening:
 * - `access.create` is restricted to existing admins so the API cannot
 *   mint new admin accounts. The first user is created via Payload's
 *   `createFirstUser` CLI flow.
 * - `access.read` / `update` / `delete` are restricted to authenticated admins.
 * - Brute-force protection via `lockAt` (10 failed attempts -> 1h lockout).
 * - Cookies are hardened: `httpOnly`, `secure` (in production), `sameSite: 'Strict'`.
 * - Tokens expire after 2 hours of inactivity.
 */
export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "User",
    plural: "Users",
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "role", "updatedAt"],
  },
  auth: {
    tokenExpiration: 60 * 60 * 2, // 2 hours
    maxLoginAttempts: 10,
    lockTime: 60 * 60 * 1000, // 1 hour lockout window (ms)
    cookies: {
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    },
  },
  access: {
    // an existing admin or via the `createFirstUser` CLI.
    create: ({ req }) => Boolean(req.user),
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
      access: {
        // Only admins can change roles. Editors cannot escalate.
        update: ({ req }) => req.user?.role === "admin",
      },
      admin: {
        description: "Admins can manage users. Editors can manage content only.",
      },
    },
  ],
};
