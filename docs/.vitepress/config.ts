// docs/.vitepress/config.js
// export default {
//   base: '/mengyue-components/', // 必须与 GitHub 仓库名一致
//   vite: {
//     build: {
//       assetsDir: 'assets', // 资源输出目录（默认值，可省略）
//     }
//   }
// }
// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'
import { themeConfig } from './theme'

export default defineConfig({
  base: '/mengyue-components/',
  assetsDir: 'assets',
  title: 'MengYue plus',
  description: '一个轻量且现代的 Vue 3 组件库',
  lang: 'zh-CN',
  themeConfig
})
