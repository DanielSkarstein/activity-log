import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security";

export default [
  // Skip generated code and installed packages
  { ignores: ["dist/**", "node_modules/**"] },

  // ESLint's recommended rules: likely bugs and bad practice
  js.configs.recommended,

  // Security rules: unsafe patterns such as eval or unsafe file paths
  security.configs.recommended,

  // Tell ESLint this is modern JavaScript running in Node.js
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
  },
];