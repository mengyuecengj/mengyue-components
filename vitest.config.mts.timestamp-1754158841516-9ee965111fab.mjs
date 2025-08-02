// vitest.config.mts
import { defineConfig } from "file:///C:/Users/22383/Desktop/mengyue-components/node_modules/.pnpm/vitest@2.1.9_@types+node@22.15.34_@vitest+ui@2.1.9_happy-dom@17.6.3_jsdom@16.4.0_sass@1.89.2_terser@5.43.1/node_modules/vitest/dist/config.js";
import Vue from "file:///C:/Users/22383/Desktop/mengyue-components/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@6.3.5_@types+node@22.15.34_jiti@2.4.2_sass@1.89.2_terser@5.43.1_jbgfgq7pmeglyhlunapulwso2y/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///C:/Users/22383/Desktop/mengyue-components/node_modules/.pnpm/@vitejs+plugin-vue-jsx@1.3.10/node_modules/@vitejs/plugin-vue-jsx/index.js";
import VueMacros from "file:///C:/Users/22383/Desktop/mengyue-components/node_modules/.pnpm/unplugin-vue-macros@2.14.5_@vueuse+core@10.11.1_vue@3.5.17_typescript@5.5.4___esbuild@0.25.5__6zlin4c3pbcruxhhqv7dqnkxxq/node_modules/unplugin-vue-macros/dist/vite.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\22383\\Desktop\\mengyue-components";
var vitest_config_default = defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx()
      }
    })
  ],
  optimizeDeps: {
    disabled: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 确保 Vite 处理 <style lang="scss"> 时用 Dart‑Sass 新 API
        // implementation: sass,
        silenceDeprecations: ["legacy-js-api"]
        // 静默所有来自依赖的 deprecation 警告
        // sassOptions: {
        //   quietDeps: true
        // }
      }
    }
  },
  test: {
    clearMocks: true,
    environment: "jsdom",
    // 确保测试环境也加载 SVG 注册
    setupFiles: [
      "./vitest.setup.ts"
      // 'virtual:svg-icons-register' // 新增
    ],
    reporters: ["default"],
    testTransformMode: {
      web: ["*.{ts,tsx}"]
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "json"],
      exclude: [
        "play/**",
        "**/lang/**",
        "packages/components/*/style/**",
        "scripts/**",
        "ssr-testing/**"
      ]
    },
    // 解决测试环境 SVG 加载问题
    server: {
      deps: {
        inline: ["vite-plugin-svg-icons"]
      }
    }
  },
  // 确保测试环境能正确解析路径
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "~icons": path.resolve(__vite_injected_original_dirname, "packages/components/icon/src/icons")
    }
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwyMjM4M1xcXFxEZXNrdG9wXFxcXG1lbmd5dWUtY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMjIzODNcXFxcRGVza3RvcFxcXFxtZW5neXVlLWNvbXBvbmVudHNcXFxcdml0ZXN0LmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzIyMzgzL0Rlc2t0b3AvbWVuZ3l1ZS1jb21wb25lbnRzL3ZpdGVzdC5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlTWFjcm9zKHtcbiAgICAgIHNldHVwQ29tcG9uZW50OiBmYWxzZSxcbiAgICAgIHNldHVwU0ZDOiBmYWxzZSxcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgdnVlOiBWdWUoKSxcbiAgICAgICAgdnVlSnN4OiBWdWVKc3goKSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIC8vIFx1Nzg2RVx1NEZERCBWaXRlIFx1NTkwNFx1NzQwNiA8c3R5bGUgbGFuZz1cInNjc3NcIj4gXHU2NUY2XHU3NTI4IERhcnRcdTIwMTFTYXNzIFx1NjVCMCBBUElcbiAgICAgICAgLy8gaW1wbGVtZW50YXRpb246IHNhc3MsXG4gICAgICAgIHNpbGVuY2VEZXByZWNhdGlvbnM6IFsnbGVnYWN5LWpzLWFwaSddLFxuICAgICAgICAvLyBcdTk3NTlcdTlFRDhcdTYyNDBcdTY3MDlcdTY3NjVcdTgxRUFcdTRGOURcdThENTZcdTc2ODQgZGVwcmVjYXRpb24gXHU4QjY2XHU1NDRBXG4gICAgICAgIC8vIHNhc3NPcHRpb25zOiB7XG4gICAgICAgIC8vICAgcXVpZXREZXBzOiB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBjbGVhck1vY2tzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIC8vIFx1Nzg2RVx1NEZERFx1NkQ0Qlx1OEJENVx1NzNBRlx1NTg4M1x1NEU1Rlx1NTJBMFx1OEY3RCBTVkcgXHU2Q0U4XHU1MThDXG4gICAgc2V0dXBGaWxlczogW1xuICAgICAgJy4vdml0ZXN0LnNldHVwLnRzJyxcbiAgICAgIC8vICd2aXJ0dWFsOnN2Zy1pY29ucy1yZWdpc3RlcicgLy8gXHU2NUIwXHU1ODlFXG4gICAgXSxcbiAgICByZXBvcnRlcnM6IFsnZGVmYXVsdCddLFxuICAgIHRlc3RUcmFuc2Zvcm1Nb2RlOiB7XG4gICAgICB3ZWI6IFsnKi57dHMsdHN4fSddLFxuICAgIH0sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHByb3ZpZGVyOiAndjgnLFxuICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdqc29uLXN1bW1hcnknLCAnanNvbiddLFxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAncGxheS8qKicsXG4gICAgICAgICcqKi9sYW5nLyoqJyxcbiAgICAgICAgJ3BhY2thZ2VzL2NvbXBvbmVudHMvKi9zdHlsZS8qKicsXG4gICAgICAgICdzY3JpcHRzLyoqJyxcbiAgICAgICAgJ3Nzci10ZXN0aW5nLyoqJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAvLyBcdTg5RTNcdTUxQjNcdTZENEJcdThCRDVcdTczQUZcdTU4ODMgU1ZHIFx1NTJBMFx1OEY3RFx1OTVFRVx1OTg5OFxuICAgIHNlcnZlcjoge1xuICAgICAgZGVwczoge1xuICAgICAgICBpbmxpbmU6IFsndml0ZS1wbHVnaW4tc3ZnLWljb25zJ11cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIFx1Nzg2RVx1NEZERFx1NkQ0Qlx1OEJENVx1NzNBRlx1NTg4M1x1ODBGRFx1NkI2M1x1Nzg2RVx1ODlFM1x1Njc5MFx1OERFRlx1NUY4NFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAnfmljb25zJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzL2NvbXBvbmVudHMvaWNvbi9zcmMvaWNvbnMnKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlQsU0FBUyxvQkFBb0I7QUFDMVYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sd0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLEtBQUssSUFBSTtBQUFBLFFBQ1QsUUFBUSxPQUFPO0FBQUEsTUFDakI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBO0FBQUE7QUFBQSxRQUdKLHFCQUFxQixDQUFDLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3ZDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQTtBQUFBLElBRWIsWUFBWTtBQUFBLE1BQ1Y7QUFBQTtBQUFBLElBRUY7QUFBQSxJQUNBLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDckIsbUJBQW1CO0FBQUEsTUFDakIsS0FBSyxDQUFDLFlBQVk7QUFBQSxJQUNwQjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVSxDQUFDLFFBQVEsZ0JBQWdCLE1BQU07QUFBQSxNQUN6QyxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSixRQUFRLENBQUMsdUJBQXVCO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsVUFBVSxLQUFLLFFBQVEsa0NBQVcsb0NBQW9DO0FBQUEsSUFDeEU7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
