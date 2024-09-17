import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginNext from "@next/eslint-plugin-next";

export default {
  root: true,
  plugins: ["@next"],
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    ...tseslint.configs.recommended,
  ],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
  ],
};
