import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { indexPlus } from '../plus/Aindex'
import { indexComponents } from '../components/Aindex'
import { indexDesign } from '../design/Aindex'
import { indexVersion } from '../version/Aindex'
import { indexPlugin } from '../plugin/index'
import { indexQuestion } from '../question/index'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath } from 'url'
import pinyin from 'pinyin'

export default defineConfig({
  title: 'mengyue-docs',
  base: '/mengyue-components/',
  description: 'front end ui components library using vue.js',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      const pinyinFn = (pinyin as any).default || pinyin

      md.use(groupIconMdPlugin)
      md.use(componentPreview)
      md.use(containerPreview)

      md.core.ruler.push('pinyin-enhance', (state) => {
        const Token = (state as any).Token

        state.tokens.forEach((token: any) => {
          if (token.type !== 'inline' || !Array.isArray(token.children) || token.children.length === 0) {
            return
          }

          const plainText = token.children
            .filter((child: any) => child.type === 'text')
            .map((child: any) => child.content)
            .join('')

          if (!/[\u4e00-\u9fff]/.test(plainText)) {
            return
          }

          const pyArr = pinyinFn(plainText, {
            style: pinyinFn.STYLE_NORMAL
          }).flat()

          if (!pyArr.length) {
            return
          }

          const full = pyArr.join('')
          const spaced = pyArr.join(' ')
          const first = pyArr.map((i: string) => i[0]).join('')

          const pinyinToken = new Token('html_inline', '', 0)
          pinyinToken.content = `<span class="pagefind-pinyin" aria-hidden="true">${full} ${spaced} ${first}</span>`

          token.children.push(pinyinToken)
        })
      })
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin(),
      pagefindPlugin()
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import { h } from 'vue'`
    },
    ssr: {
      noExternal: ['@vitepress-demo-preview/component']
    },
    resolve: {
      alias: {
        '@icons': fileURLToPath(new URL('../../packages/icons/src/components', import.meta.url))
      }
    }
  },
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
      '/about/': [
        {
          items: [
            { text: '关于', link: '/about/index' },
          ]
        }
      ],
      '/question/': indexQuestion,
      '/plugin/': indexPlugin,
      '/version/': indexVersion
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present mengyue & Contributors'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengyuecengj/mengyue-components' },
      { icon: 'gitee', link: 'https://gitee.com/q62/mengyue-components' },
      { icon: 'npm', link: 'https://www.npmjs.com/~cengj' }
    ],
  }
})