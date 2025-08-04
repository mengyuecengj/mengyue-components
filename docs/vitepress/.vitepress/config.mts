import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/mengyue-plus/',
  title: "Mengyue Components",
  description: "Documentation for mengyue-components",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/test' },
      { text: '参考', link: '/reference/test' },
      { text: '示例', link: '/mengyue-plus/examples/markdown-examples' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/mengyue-plus/guide/getting-started' },
            { text: 'Advanced Usage', link: '/mengyue-plus/guide/advanced-usage' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/mengyue-plus/examples/markdown-examples' },
            { text: 'API Examples', link: '/mengyue-plus/examples/api-examples' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/mengyue-components' }
    ]
  },
  rewrites: {
    'index.md': 'index.html',
    'examples/api-examples.md': 'examples/api-examples.html',
    'examples/markdown-examples.md': 'examples/markdown-examples.html',
    'guide/getting-started.md': 'guide/getting-started.html',
    'guide/advanced-usage.md': 'guide/advanced-usage.html'
  }
})