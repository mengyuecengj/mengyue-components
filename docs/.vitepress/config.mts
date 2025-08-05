import { defineConfig } from 'vitepress'
import { indexGuide } from '../guide/index'
import { indexReference } from '../reference/index'

export default defineConfig({
  base: '/mengyue-components/',
  title: "Mengyue Components",
  description: "Documentation for mengyue-components",

  themeConfig: {
    outline: 'deep',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/mdGuide/start' },
      { text: '参考', link: '/reference/test' },
    ],
    sidebar: {
      '/guide/': indexGuide,
      '/reference/': indexReference
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengyuecengj/mengyue-components' }
    ]
  },
})
