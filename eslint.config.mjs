import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigSolid from "eslint-plugin-solid";
import * as tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...eslintConfigSolid.configs["flat/typescript"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "warn",
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            // un-ban a type that's banned by default
            "{}": false,
          },
          extendDefaults: true,
        },
      ],
    },
  },
];
