import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const simpleSort = [{
  plugins: {
    "simple-import-sort": eslintPluginSimpleImportSort,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
}]

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...simpleSort,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
