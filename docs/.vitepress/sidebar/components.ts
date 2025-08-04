import type { DefaultTheme } from 'vitepress'

export default [
  {
    text: '基础组件',
    items: [
      { text: '按钮 Button', link: '/components/button/' },
      { text: '图标 Icon', link: '/components/icon/' }
    ]
  }
] satisfies DefaultTheme.SidebarItem[]
