import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/mengyuecomponents-docs/',
  title: "Mengyue Components",
  description: "Documentation for mengyue-components",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/test' },
      { text: '参考', link: '/reference/test' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/test' },
            { text: 'Advanced Usage', link: '/guide/test' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/reference/test' },
            { text: 'API Examples', link: '/reference/test' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/mengyue-components' }
    ]
  }
})
