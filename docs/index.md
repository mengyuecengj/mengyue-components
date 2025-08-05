---
layout: home

# 英雄区域：页面头部
hero:
  name: Mengyue Components
  text: 一套简洁高效的 Vue 3 UI 组件库
  tagline: ✨ 轻量、易用、可扩展，助力开发者快速打造高质量现代界面
  image:
    # src: /logo.svg
    alt: Mengyue Components Logo
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/installation
    - theme: alt
      text: 组件一览
      link: /components/
    - theme: alt
      text: GitHub
      link: https://github.com/mengyuecengj/mengyue-components
      external: true

# 特性展示：三列卡片，增强视觉吸引力
features:
  - icon: 🌈
    title: 丰富组件
    details: 提供表单、布局、导航等多样化组件，覆盖常见业务场景，快速满足开发需求。
    link: /components/
  - icon: ⚙️
    title: TypeScript 全量支持
    details: 组件内置类型定义，享受类型安全与智能提示，提升开发效率与代码质量。
    link: /guide/typescript
  - icon: 📦
    title: 按需加载
    details: 支持基于 Vite 的自动导入与 Tree Shaking，优化打包体积，性能无忧。
    link: /guide/optimization
  - icon: 🎨
    title: 高度可定制
    details: 通过 SCSS 变量与 CSS 自定义属性，轻松实现主题切换与品牌风格适配。
    link: /guide/theming
  - icon: 🔧
    title: 详尽文档与示例
    details: 每个组件配有清晰的 API 文档、交互式示例与最佳实践，学习曲线平滑。
    link: /guide/
  - icon: 🧩
    title: 插件化架构
    details: 模块化设计，支持按需扩展功能，灵活适配复杂业务场景。
    link: /guide/plugins
---