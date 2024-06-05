import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigSolid from "eslint-plugin-solid/configs/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigSolid,
  eslintConfigPrettier,
  { rules: { "no-console": "warn" } },
];
