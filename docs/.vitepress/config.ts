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

export default defineConfig({
  title: 'MengYue plus',
  description: '一个轻量且现代的 Vue 3 组件库',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/你的仓库' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/install' },
            { text: '快速上手', link: '/guide/quick-start' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '按钮 Button', link: '/components/button' },
            { text: '图标 Icon', link: '/components/icon' },
          ],
        },
      ],
    },
  },
})
