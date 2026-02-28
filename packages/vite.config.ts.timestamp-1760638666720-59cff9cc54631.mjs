// vite.config.ts
import { defineConfig } from "file:///C:/Users/ZY/Desktop/lower-code/mengyue-components/node_modules/.pnpm/vite@5.4.19_@types+node@24.8.0_sass@1.90.0_terser@5.44.0/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/ZY/Desktop/lower-code/mengyue-components/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.19_@types+node@24.8.0_sass@1.90.0_terser@5.44.0__vue@3.5.18_typescript@5.9.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/Users/ZY/Desktop/lower-code/mengyue-components/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@24.8.0_rollup@4.46.2_typescript@5.9.3_vite@5.4.19_@types+no_pfzrlly5sbz5sad6okuy6fkjwu/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import svgLoader from "file:///C:/Users/ZY/Desktop/lower-code/mengyue-components/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.18_typescript@5.9.3_/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "C:\\Users\\ZY\\Desktop\\lower-code\\mengyue-components\\packages";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    // 生成 .d.ts
    dts({
      outDir: "dist",
      insertTypesEntry: true,
      entryRoot: "components",
      include: ["components/**/*"],
      rollupTypes: true
    }),
    svgLoader()
  ],
  // test: {
  //   environment: 'happy-dom', // 或 'jsdom'
  //   // 模拟虚拟模块
  //   alias: {
  //     'virtual:svg-icons-register': path.resolve(__dirname, './src/mocks/svg-icons-register.ts'),
  //   },
  // },
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "components/index.ts"),
      name: "MengyuePlusButton",
      fileName: (format) => `mengyue-plus.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "mengyue-plus.css";
          }
          return assetInfo.name || "assets/[name].[ext]";
        }
      }
    },
    // 用 esbuild 做 JS+CSS 的压缩
    minify: "esbuild",
    cssMinify: "esbuild"
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
  }
});
export {
  vite_config_default as default
};
