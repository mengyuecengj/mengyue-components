import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import { visualizer } from 'rollup-plugin-visualizer'

const isAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      entryRoot: 'components',
      include: ['components/**/*'],
      rollupTypes: true,
    }),
    ...(isAnalyze
      ? [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: 'stats.html',
          }),
        ]
      : []),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
      name: 'MengyueComponents',
      fileName: (format) => `mengyue-components.${format}.js`,
      formats: ['es', 'cjs'], // ✅ 只输出 es + cjs
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',

        // ✅ 禁止拆包（关键）
        inlineDynamicImports: true,

        // ✅ css 文件名固定
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'mengyue-components.css'
          }
          return assetInfo.name || 'assets/[name].[ext]'
        },
      },
    },

    minify: 'esbuild',
    cssMinify: 'esbuild',
  },

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})