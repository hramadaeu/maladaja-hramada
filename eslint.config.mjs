import next from "eslint-config-next";
import security from "eslint-plugin-security";

const { "security/detect-object-injection": _ignored, ...safeRules } =
  security.configs.recommended.rules ?? {};

const eslintConfig = [
  ...next,
  {
    plugins: { security },
    rules: safeRules,
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "src/payload-types.ts",
      "**/*.d.ts",
    ],
  },
];

export default eslintConfig;
