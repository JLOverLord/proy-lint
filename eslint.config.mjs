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
      "strict": ["error", "global"],               // Exigir 'use strict' global
      "no-var": "error",                           // Prohibir var
      "prefer-const": "error",                     // Preferir const si no se reasigna
      "eqeqeq": ["error", "always"],               // Usar === y !==
      "no-unused-vars": ["error", { args: "after-used", ignoreRestSiblings: true }],
      "no-console": "warn",                        // Advertencia por console.log
      "no-debugger": "error",                      // Evitar debugger
      "no-undef": "error",                         // Variables no definidas
      "curly": "error",                            // Siempre usar llaves
      "no-empty-function": "error",                // Evitar funciones vacías
      "no-magic-numbers": ["warn", { ignore: [0, 1] }],
      "prefer-arrow-callback": "error",           // Preferir arrow functions
      "semi": ["error", "always"],                 // Punto y coma obligatorio
      "quotes": ["error", "double"],              // Comillas dobles
      "indent": ["error", 2],                      // Indentación de 2 espacios
      "comma-dangle": ["error", "always-multiline"], // Comas al final en multilinea
      "max-len": ["warn", { code: 100 }]          // Longitud máxima de línea
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
]);
