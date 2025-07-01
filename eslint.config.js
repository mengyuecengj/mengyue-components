// eslint.config.js
import { defineFlatConfig } from "eslint-define-config";
import js from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default defineFlatConfig([
  js.configs.recommended,
  {
    // TypeScript 配置
    plugins: {
      "@typescript-eslint": tsPlugin,
      vue: vuePlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: vuePlugin.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      // 自定义规则
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "**/coverage/",
      ".vitepress/cache/",
      "**/*.json"
    ],
  },
]);
