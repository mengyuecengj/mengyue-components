import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      entryRoot: 'components',
      include: ['components/**/*'],
      rollupTypes: true,
    }),
    libCss(),
    svgLoader()
  ],
  build: {
    lib: {
      // entry: './components/button/index.ts', true
      entry: path.resolve(__dirname, 'components/index.ts'),
      name: 'MengyuePlusButton',
      fileName: (format) => `mengyue-plus.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'mengyue-plus.css';
          }
          return assetInfo.name || 'assets/[name].[ext]';
        },
      },
    },
  },
});