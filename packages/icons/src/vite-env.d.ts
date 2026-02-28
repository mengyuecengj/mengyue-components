import type { Component } from 'vue';

interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean }) => Record<string, { default: Component }>;
}