import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      semi: ["error", "always"],       // obliga punto y coma
      quotes: ["error", "double"],     // obliga comillas dobles
      "no-var": "error"                // prohíbe 'var'
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" }
  }
]);
