import { defineConfig } from 'vitepress'
import { indexComponents } from '../components/Aindex'
import { indexGuide } from '../guide/Aindex'
import { indexDesign } from '../design/Aindex'
import { indexDevelopment } from '../development/Aindex'
import { indexVersion } from '../version/Aindex'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

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
    // 将 SSR 配置统一放在这里
    ssr: {
      noExternal: ['@vitepress-demo-preview/component']
    }
  },
  themeConfig: {
    outlineTitle: '引导目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '首页', link: '/' },
      { text: '组件', link: '/components/FastStart', activeMatch: '/components/' },
      { text: '参考', link: '/guide/overView', activeMatch: '/guide/' },
      { text: '设计', link: '/design/FastRead', activeMatch: '/design/' },
      { text: '研发', link: '/development/preface', activeMatch: '/development/' },
      { text: '关于', link: '/about/index', activeMatch: '/about/' },
      { text: '版本', link: '/version/0.0.10', activeMatch: '/version/' },
    ],

    sidebar: {
      '/components/': indexComponents,
      '/guide/': indexGuide,
      '/design/': indexDesign,
      '/development/': indexDevelopment,
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
        icon: 'npm', link: 'https://www.npmjs.com/package/mengyue-plus'
      }
    ],
  }
})
