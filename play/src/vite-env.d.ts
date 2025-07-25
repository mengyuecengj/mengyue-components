/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
