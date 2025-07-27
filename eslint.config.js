import { defineFlatConfig } from "eslint-define-config";
import js from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser"; // 显式导入 vue-eslint-parser
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import markdownPlugin from "eslint-plugin-markdown";
import globals from "globals";

export default defineFlatConfig([
  // 忽略配置
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "**/coverage/",
      ".vitepress/cache/",
      "**/*.json",
      "**/docs/.vitepress/",
      "**/*.d.ts",
    ],
  },

  // JavaScript 和 TypeScript 文件配置
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn", // 将 no-explicit-any 改为警告
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // Vue 文件配置
  {
    files: ["**/*.vue"],
    plugins: {
      vue: vuePlugin,
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: vueParser, // 显式使用 vue-eslint-parser
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: {
          ts: tsParser, // 为 <script lang="ts"> 使用 TypeScript 解析器
        },
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      ...vuePlugin.configs["vue3-recommended"].rules,
      ...tsPlugin.configs.recommended.rules,
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "warn", // 将 no-explicit-any 改为警告
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // Markdown 文件配置
  {
    files: ["**/*.md"],
    plugins: {
      markdown: markdownPlugin,
    },
    processor: "markdown/markdown",
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "off",
    },
  },
]);