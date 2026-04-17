import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { indexPlus } from '../plus/Aindex'
import { indexComponents } from '../components/Aindex'
import { indexDesign } from '../design/Aindex'
import { indexVersion } from '../version/Aindex'
import { indexPlugin } from '../plugin/index'
import { indexQuestion } from '../question/index'
import { enIndexQuestion } from '../en/question/en-Questionindex'
import { enIndexPlugin } from '../en/plugin/index'
import { enIndexVersion } from '../en/version/Aindex'
import { enIndexDesign } from '../en/design/Aindex'
import { enIndexPlus } from '../en/plus/Aindex'
import { enIndexComponents } from '../en/components/Aindex'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath } from 'url'
import pinyin from 'pinyin'

// 自动给侧边栏链接加语言前缀
function addPrefixToSidebar(sidebar: Record<string, any>, prefix: string = '/en') {
  const result: Record<string, any> = {}
  Object.entries(sidebar).forEach(([key, value]) => {
    const newKey = key.startsWith(prefix) ? key : `${prefix}${key.startsWith('/') ? '' : '/'}${key}`
    result[newKey] = Array.isArray(value)
      ? value.map(item => addPrefixToItem(item, prefix))
      : addPrefixToItem(value, prefix)
  })
  return result
}

function addPrefixToItem(item: any, prefix: string): any {
  if (!item || typeof item !== 'object') return item
  const newItem = { ...item }
  if (newItem.link && typeof newItem.link === 'string') {
    newItem.link = newItem.link.startsWith(prefix)
      ? newItem.link
      : `${prefix}${newItem.link.startsWith('/') ? '' : '/'}${newItem.link}`
  }
  if (Array.isArray(newItem.items)) {
    newItem.items = newItem.items.map((sub: any) => addPrefixToItem(sub, prefix))
  }
  return newItem
}

// 中文配置
const zhConfig = {
  title: 'mengyue-docs',
  description: '基于 Vue.js 的前端 UI 组件库',
  themeConfig: {
    outlineTitle: '引导目录',
    nav: [
      { text: '组件设计', link: '/design/FastRead', activeMatch: '/design/' },
      {
        text: '文档',
        items: [
          { text: 'mengyue-plus', link: '/plus/FastStart' },
          { text: 'mengyue-components', link: '/components/FastStart' }
        ]
      },
      { text: '常见问题', link: '/question/migration', activeMatch: '/question/' },
      { text: '插件概述', link: '/plugin/mengyuePlus', activeMatch: '/plugin/' },
      { text: '版本说明', link: '/version/0.0.1', activeMatch: '/version/' },
      { text: '关于', link: '/about/index', activeMatch: '/about/' },
    ],
    sidebar: {
      '/plus/': indexPlus,
      '/components/': indexComponents,
      '/design/': indexDesign,
      '/about/': [{ items: [{ text: '关于', link: '/about/index' }] }],
      '/question/': indexQuestion,
      '/plugin/': indexPlugin,
      '/version/': indexVersion
    },
    footer: {
      message: '基于 MIT 协议',
      copyright: 'Copyright © 2026-present mengyue & Contributors'
    }
  }
}

// 英文配置 
const enConfig = {
  title: 'mengyue-docs',
  description: 'Front-end UI components library using Vue.js',
  themeConfig: {
    outlineTitle: 'On this page',
    nav: [
      { text: 'Design', link: '/en/design/FastRead', activeMatch: '/en/design/' },
      {
        text: 'Docs',
        items: [
          { text: 'mengyue-plus', link: '/en/plus/FastStart' },
          { text: 'mengyue-components', link: '/en/components/FastStart' }
        ]
      },
      { text: 'FAQ', link: '/en/question/migration', activeMatch: '/en/question/' },
      { text: 'Plugins', link: '/en/plugin/mengyuePlus', activeMatch: '/en/plugin/' },
      { text: 'Versions', link: '/en/version/0.0.1', activeMatch: '/en/version/' },
      { text: 'About', link: '/en/about/index', activeMatch: '/en/about/' },
    ],
    sidebar: addPrefixToSidebar({
      '/plus/': enIndexPlus,
      '/components/': enIndexComponents,
      '/design/': enIndexDesign,
      '/about/': [{ items: [{ text: 'About', link: '/about/index' }] }],
      '/question/': enIndexQuestion,
      '/plugin/': enIndexPlugin,
      '/version/': enIndexVersion,
    }, '/en'),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present mengyue & Contributors'
    }
  }
}

export default defineConfig({
  base: '/mengyue-components/',
  markdown: {
    theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    lineNumbers: true,
    config(md) {
      const pinyinFn = (pinyin as any).default || pinyin
      md.use(groupIconMdPlugin)
      md.use(componentPreview, { alias: { '@': fileURLToPath(new URL('../../', import.meta.url)) } })
      md.use(containerPreview, { alias: { '@': fileURLToPath(new URL('../../', import.meta.url)) } })

      md.core.ruler.push('pinyin-title-only', (state) => {
        const Token = (state as any).Token
        state.tokens.forEach((token: any, index: number) => {
          if (token.type === 'heading_open') {
            const inlineToken = state.tokens[index + 1]
            if (!inlineToken || inlineToken.type !== 'inline' || !inlineToken.children) return
            if (inlineToken.children.some((c: any) => c.type === 'html_inline')) return
            const text = inlineToken.content
            if (!/[\u4e00-\u9fa5]/.test(text)) return

            const pyArr = pinyinFn(text, { style: pinyinFn.STYLE_NORMAL }).flat()
            const full = pyArr.join('')
            const spaced = pyArr.join(' ')
            const first = pyArr.map((i: string) => i[0]).join('')

            const pinyinToken = new Token('html_inline', '', 0)
            pinyinToken.content = `<span class="pagefind-pinyin">${full} ${spaced} ${first}</span>`
            inlineToken.children.push(pinyinToken)
          }
        })
      })
    },
  },
  vite: {
    plugins: [groupIconVitePlugin(), pagefindPlugin()],
    esbuild: { jsxFactory: 'h', jsxFragment: 'Fragment', jsxInject: `import { h } from 'vue'` },
    ssr: { noExternal: ['@vitepress-demo-preview/component'] },
    resolve: {
      alias: {
        '@icons': fileURLToPath(new URL('../../packages/icons/src/components', import.meta.url)),
        '@': fileURLToPath(new URL('../../', import.meta.url))
      }
    }
  },

  locales: {
    root: { label: '简体中文', lang: 'zh-CN', ...zhConfig },
    en: { label: 'English', lang: 'en', link: '/en/', ...enConfig }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengyuecengj/mengyue-components' },
      { icon: 'gitee', link: 'https://gitee.com/q62/mengyue-components' },
      { icon: 'npm', link: 'https://www.npmjs.com/~cengj' }
    ]
  }
})