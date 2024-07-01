import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
), {
  plugins: {
    "@typescript-eslint": typescriptEslint,
    prettier,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
  },

  rules: {
    "prettier/prettier": ["error", {
      printWidth: 80,
      trailingComma: "es5",
      semi: true,
      jsxSingleQuote: true,
      singleQuote: true,
      useTabs: true,
      endOfLine: "auto",

      "max-len": ["error", {
        code: 80,
      }],

      importOrder: [
        "^react(.*)$",
        "<THIRD_PARTY_MODULES>",
        "./types",
        "^[.](?!.*.(scss|css)$).*$",
        "(.*).(scss|css)$",
      ],

      importOrderSeparation: true,
      importOrderSortSpecifiers: true,
    }],

    "@typescript-eslint/no-namespace": "off",
    "no-duplicate-imports": "error",
  },
}];