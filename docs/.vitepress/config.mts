// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'
import { createHighlighter } from 'shiki'
import { indexGuide } from '../guide/index'
import { indexReference } from '../reference/index'

// 1. 初始化 Shiki 高亮器（顶层 await，仅在 ESM 模式下可用）
//    使用 createHighlighter 代替已弃用的 getHighlighter
// 2. 生成带内联样式的 HTML，再用正则去除所有 inline background-color
const highlighter = await createHighlighter({
  langs: ['javascript', 'typescript', 'bash', 'html', 'css', 'txt', 'json'],
  themes: ['nord', 'dark-plus']
})

const fallbackMap = {
  npm: 'txt',
  pnpm: 'txt',
  yarn: 'txt'
}

export default defineConfig({
  base: '/mengyue-components/',
  title: 'Mengyue Components',
  description: 'Documentation for mengyue-components',

  themeConfig: {
    outline: 'deep',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/mdGuide/start' },
      { text: '参考', link: '/reference/test' }
    ],
    sidebar: {
      '/guide/': indexGuide,
      '/reference/': indexReference
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengyuecengj/mengyue-components' }
    ]
  },

  markdown: {
    lineNumbers: false,

    // 同步 highlight：返回 string
    highlight(code, lang) {
      const loaded = highlighter.getLoadedLanguages()
      const safe = fallbackMap[lang] || (loaded.includes(lang) ? lang : 'txt')

      // 先生成带内联样式的 HTML
      let html = highlighter.codeToHtml(code, {
        lang: safe,
        theme: 'nord'
      })

      // 删除所有 inline 的 background-color: #xxxxxx;
      html = html.replace(/background-color:\s*#[0-9A-Fa-f]+;?/g, '')

      return html
    }
  }
})
