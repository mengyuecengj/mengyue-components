import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: './',       // 显式指定根目录为 play/
  build: {
    outDir: '../dist' // 输出到项目根目录的 dist/ 文件夹
  },
  plugins: [vue()]
})
