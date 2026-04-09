import { defineConfig } from 'vitepress'
import { indexPlus } from '../plus/Aindex'
import { indexComponents } from '../components/Aindex'
import { indexDesign } from '../design/Aindex'
import { indexVersion } from '../version/Aindex'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
import { fileURLToPath } from 'url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mengyue-docs",
  base: '/mengyue-components/',
  description: "front end ui components library using vue.js",
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(groupIconMdPlugin)
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin(),
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '组件', link: '/plus/FastStart', activeMatch: '/plus/' },
      { text: '设计', link: '/design/FastRead', activeMatch: '/design/' },
      { text: '关于', link: '/about/index', activeMatch: '/about/' },
      {
        text: '版本',
        items: [
          { text: 'mengyue-plus', link: '/plus/FastStart' },
          { text: 'mengyue-components', link: '/components/FastStart' }
        ]
      },
      { text: '说明', link: '/version/0.0.1', activeMatch: '/version/' },
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
      '/version/': indexVersion
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Your Name & Contributors'
    },
    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/mengyuecengj/mengyue-components',
      },
      {
        icon: 'gitee', link: 'https://gitee.com/q62/mengyue-components'
      },
      {
        icon: 'npm', link: 'https://www.npmjs.com/~cengj'
      }
    ],
  }
})
