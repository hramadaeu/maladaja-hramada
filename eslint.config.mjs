import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import security from "eslint-plugin-security";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * Start from the recommended config and then turn off
 * `security/detect-object-injection`, which produces high volumes of
 * false positives on type-safe `Record<Locale, T>` dictionary lookups
 * (e.g. `t(dictionary, lang)` and `dict[lang]`). The threat model it
 * protects against — prototype pollution via user-controlled keys —
 * does not apply to our code: every dictionary key is either a compile
 * time constant or a `lang` value that has already been validated by
 * `isValidLocale()`.
 *
 * All other security rules remain active.
 */
const { "security/detect-object-injection": _ignored, ...safeRules } =
  security.configs.recommended.rules ?? {};

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: { security },
    rules: safeRules,
  },
  {
    // Project-wide ignores.
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "src/payload-types.ts", // generated, not authored
      "**/*.d.ts",
    ],
  },
];

export default eslintConfig;
