import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
  optimizeDeps: {
    disabled: true,
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
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    // 确保测试环境也加载 SVG 注册
    setupFiles: [
      './vitest.setup.ts',
      // 'virtual:svg-icons-register' // 新增
    ],
    reporters: ['default'],
    testTransformMode: {
      web: ['*.{ts,tsx}'],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json'],
      exclude: [
        'play/**',
        '**/lang/**',
        'packages/components/*/style/**',
        'scripts/**',
        'ssr-testing/**',
      ],
    },
    // 解决测试环境 SVG 加载问题
    server: {
      deps: {
        inline: ['vite-plugin-svg-icons']
      }
    }
  },
  // 确保测试环境能正确解析路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~icons': path.resolve(__dirname, 'packages/components/icon/src/icons')
    }
  }
})
