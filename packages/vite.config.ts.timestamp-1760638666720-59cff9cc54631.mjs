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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaWVxcXFxEZXNrdG9wXFxcXGxvd2VyLWNvZGVcXFxcbWVuZ3l1ZS1jb21wb25lbnRzXFxcXHBhY2thZ2VzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxaWVxcXFxEZXNrdG9wXFxcXGxvd2VyLWNvZGVcXFxcbWVuZ3l1ZS1jb21wb25lbnRzXFxcXHBhY2thZ2VzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9aWS9EZXNrdG9wL2xvd2VyLWNvZGUvbWVuZ3l1ZS1jb21wb25lbnRzL3BhY2thZ2VzL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZS5jb25maWcudHNcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuLy8gaW1wb3J0IHNhc3MgZnJvbSAnc2Fzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIC8vIFx1NzUxRlx1NjIxMCAuZC50c1xuICAgIGR0cyh7XG4gICAgICBvdXREaXI6ICdkaXN0JyxcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICBlbnRyeVJvb3Q6ICdjb21wb25lbnRzJyxcbiAgICAgIGluY2x1ZGU6IFsnY29tcG9uZW50cy8qKi8qJ10sXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZSxcbiAgICB9KSxcblxuICAgIHN2Z0xvYWRlcigpLFxuICBdLFxuICAvLyB0ZXN0OiB7XG4gIC8vICAgZW52aXJvbm1lbnQ6ICdoYXBweS1kb20nLCAvLyBcdTYyMTYgJ2pzZG9tJ1xuICAvLyAgIC8vIFx1NkEyMVx1NjJERlx1ODY1QVx1NjJERlx1NkEyMVx1NTc1N1xuICAvLyAgIGFsaWFzOiB7XG4gIC8vICAgICAndmlydHVhbDpzdmctaWNvbnMtcmVnaXN0ZXInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbW9ja3Mvc3ZnLWljb25zLXJlZ2lzdGVyLnRzJyksXG4gIC8vICAgfSxcbiAgLy8gfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnY29tcG9uZW50cy9pbmRleC50cycpLFxuICAgICAgbmFtZTogICdNZW5neXVlUGx1c0J1dHRvbicsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYG1lbmd5dWUtcGx1cy4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczogeyB2dWU6ICdWdWUnIH0sXG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lPy5lbmRzV2l0aCgnLmNzcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21lbmd5dWUtcGx1cy5jc3MnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgfHwgJ2Fzc2V0cy9bbmFtZV0uW2V4dF0nO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gXHU3NTI4IGVzYnVpbGQgXHU1MDVBIEpTK0NTUyBcdTc2ODRcdTUzOEJcdTdGMjlcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICBjc3NNaW5pZnk6ICdlc2J1aWxkJyxcbiAgfSxcblxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIC8vIFx1Nzg2RVx1NEZERCBWaXRlIFx1NTkwNFx1NzQwNiA8c3R5bGUgbGFuZz1cInNjc3NcIj4gXHU2NUY2XHU3NTI4IERhcnRcdTIwMTFTYXNzIFx1NjVCMCBBUElcbiAgICAgICAgLy8gaW1wbGVtZW50YXRpb246IHNhc3MsXG4gICAgICAgIHNpbGVuY2VEZXByZWNhdGlvbnM6IFsnbGVnYWN5LWpzLWFwaSddLFxuICAgICAgICAvLyBcdTk3NTlcdTlFRDhcdTYyNDBcdTY3MDlcdTY3NjVcdTgxRUFcdTRGOURcdThENTZcdTc2ODQgZGVwcmVjYXRpb24gXHU4QjY2XHU1NDRBXG4gICAgICAgIC8vIHNhc3NPcHRpb25zOiB7XG4gICAgICAgIC8vICAgcXVpZXREZXBzOiB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFFaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZUFBZTtBQU50QixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUE7QUFBQSxJQUVKLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxNQUMzQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFFRCxVQUFVO0FBQUEsRUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUNwRCxNQUFPO0FBQUEsTUFDUCxVQUFVLENBQUMsV0FBVyxnQkFBZ0IsTUFBTTtBQUFBLElBQzlDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVMsRUFBRSxLQUFLLE1BQU07QUFBQSxRQUN0QixTQUFTO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxNQUFNLFNBQVMsTUFBTSxHQUFHO0FBQ3BDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVUsUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQTtBQUFBO0FBQUEsUUFHSixxQkFBcUIsQ0FBQyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUt2QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
