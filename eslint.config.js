// eslint.config.js
import { defineFlatConfig } from "eslint-define-config";
import js from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import markdownPlugin from "eslint-plugin-markdown";
import globals from "globals";

export default defineFlatConfig([
  js.configs.recommended,
  {
    // TypeScript 和 Vue 配置
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
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    // Markdown 文件特殊处理
    files: ["**/*.md"],
    plugins: {
      markdown: markdownPlugin
    },
    processor: "markdown/markdown",
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "off"
    }
  },
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "**/coverage/",
      ".vitepress/cache/",
      "**/*.json",
      "**/docs/.vitepress/"
    ],
  },
]);
