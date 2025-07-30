// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// import sass from 'sass';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),

    // 生成 .d.ts
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      entryRoot: 'components',
      include: ['components/**/*'],
      rollupTypes: true,
    }),

    svgLoader(),
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
      entry: path.resolve(__dirname, 'components/index.ts'),
      name:  'MengyuePlusButton',
      fileName: (format) => `mengyue-plus.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'mengyue-plus.css';
          }
          return assetInfo.name || 'assets/[name].[ext]';
        },
      },
    },

    // 用 esbuild 做 JS+CSS 的压缩
    minify: 'esbuild',
    cssMinify: 'esbuild',
  },

  css: {
    preprocessorOptions: {
      scss: {
        // 确保 Vite 处理 <style lang="scss"> 时用 Dart‑Sass 新 API
        // implementation: sass,
        silenceDeprecations: ['legacy-js-api'],
        // 静默所有来自依赖的 deprecation 警告
        // sassOptions: {
        //   quietDeps: true
        // }
      }
    }
  }
});
