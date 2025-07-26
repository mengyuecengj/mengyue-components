// vite.config.ts
import { defineConfig } from "file:///E:/leading/vue/mengyue-components/node_modules/.pnpm/vite@5.4.19_@types+node@22.15.34_sass@1.89.2/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/leading/vue/mengyue-components/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.19_@types+node@22.15.34_sass@1.89.2__vue@3.5.17_typescript@5.8.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///E:/leading/vue/mengyue-components/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@22.15.34_rollup@4.44.2_typescript@5.8.3_vite@5.4.19_@types+node@22.15.34_sass@1.89.2_/node_modules/vite-plugin-dts/dist/index.mjs";
import libCss from "file:///E:/leading/vue/mengyue-components/node_modules/.pnpm/vite-plugin-libcss@1.1.2_vite@5.4.19_@types+node@22.15.34_sass@1.89.2_/node_modules/vite-plugin-libcss/index.js";
import path from "path";
import svgLoader from "file:///E:/leading/vue/mengyue-components/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.17_typescript@5.8.3_/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "E:\\leading\\vue\\mengyue-components\\packages";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: "dist",
      insertTypesEntry: true,
      entryRoot: "components",
      include: ["components/**/*"],
      rollupTypes: true
    }),
    libCss(),
    svgLoader()
  ],
  build: {
    lib: {
      // entry: './components/button/index.ts', true
      entry: path.resolve(__vite_injected_original_dirname, "components/index.ts"),
      name: "MengyuePlusButton",
      fileName: (format) => `mengyue-plus.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "mengyue-plus.css";
          }
          return assetInfo.name || "assets/[name].[ext]";
        }
      }
    }
  },
  css: {
    preprocessorOption: {
      scss: {
        quietDeps: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxsZWFkaW5nXFxcXHZ1ZVxcXFxtZW5neXVlLWNvbXBvbmVudHNcXFxccGFja2FnZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGxlYWRpbmdcXFxcdnVlXFxcXG1lbmd5dWUtY29tcG9uZW50c1xcXFxwYWNrYWdlc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovbGVhZGluZy92dWUvbWVuZ3l1ZS1jb21wb25lbnRzL3BhY2thZ2VzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgbGliQ3NzIGZyb20gJ3ZpdGUtcGx1Z2luLWxpYmNzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBvdXREaXI6ICdkaXN0JyxcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICBlbnRyeVJvb3Q6ICdjb21wb25lbnRzJyxcbiAgICAgIGluY2x1ZGU6IFsnY29tcG9uZW50cy8qKi8qJ10sXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZSxcbiAgICB9KSxcbiAgICBsaWJDc3MoKSxcbiAgICBzdmdMb2FkZXIoKVxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgLy8gZW50cnk6ICcuL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnRzJywgdHJ1ZVxuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdjb21wb25lbnRzL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnTWVuZ3l1ZVBsdXNCdXR0b24nLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBtZW5neXVlLXBsdXMuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZT8uZW5kc1dpdGgoJy5jc3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdtZW5neXVlLXBsdXMuY3NzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIHx8ICdhc3NldHMvW25hbWVdLltleHRdJztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIHF1aWV0RGVwczogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxTQUFTLG9CQUFvQjtBQUN2VixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFDakIsT0FBTyxlQUFlO0FBTHRCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxNQUMzQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUNwRCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxnQkFBZ0IsTUFBTTtBQUFBLElBQzlDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxNQUFNLFNBQVMsTUFBTSxHQUFHO0FBQ3BDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVUsUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxvQkFBb0I7QUFBQSxNQUNsQixNQUFNO0FBQUEsUUFDSixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
