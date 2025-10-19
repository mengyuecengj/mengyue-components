import { defineConfig } from 'vitepress'
import { createHighlighter } from 'shiki'
import { indexGuide } from '../guide/index'
import { indexReference } from '../reference/index'

// 定义 fallbackMap（从你的原代码推断）
const fallbackMap: Record<string, string> = {
  npm: 'txt',
  pnpm: 'txt',
  yarn: 'txt'
}

// 使用 top-level await 初始化 highlighter（VitePress 支持此模式）
const highlighter = await createHighlighter({
  langs: ['javascript', 'typescript', 'bash', 'html', 'css', 'txt', 'json'],
  themes: ['nord', 'dark-plus']
})

export default defineConfig({
  base: '/mengyue-components/',
  title: 'Mengyue Components',
  description: 'Documentation for mengyue-components',

  themeConfig: {
    outline: 'deep',
    nav: [
      { text: '指南', link: '/guide/mdGuide/start' },
      { text: '参考', link: '/reference/test' },
      { text: '历史版本', link: '' },
      { text: '公告', link: '' }
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

    // 现在是同步函数，匹配 VitePress 类型签名
    highlight(code: string, lang: string, attrs: string): string {
      const loaded = highlighter.getLoadedLanguages()
      const safe = fallbackMap[lang] || (loaded.includes(lang) ? lang : 'txt')

      let html = highlighter.codeToHtml(code, {
        lang: safe,
        theme: 'nord'
      })

      html = html.replace(/background-color:\s*#[0-9A-Fa-f]+;?/g, '')

      return html
    }
  }
})