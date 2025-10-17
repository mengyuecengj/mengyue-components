import type { App } from 'vue'

// 自动导入 components 目录下的 .vue 文件（Vite 环境）
const modules = import.meta.glob('./components/*.vue', { eager: true })
const components: Record<string, any> = {}

Object.entries(modules).forEach(([path, mod]) => {
  const comp = (mod as any).default || mod
  // 优先使用组件内部 name（你在 viewHide.vue 里用了 defineOptions({ name: 'ViewHide' }）
  const name = comp.name || path.split('/').pop()!.replace(/\.vue$/, '')
  components[name] = comp
})

// install：全局注册（同时按 PascalCase 和 kebab-case 注册，方便模板使用）
export function install(app: App) {
  Object.entries(components).forEach(([name, comp]) => {
    if (!app.component(name)) app.component(name, comp)
    // 注册 kebab-case（view-hide）
    const kebab = name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
    if (!app.component(kebab)) app.component(kebab, comp)
  })
}

// 默认导出为插件
export default { install }

// 命名导出单个组件，方便按需 import（示例：ViewHide）
/*
  手动导出你已有的组件或让脚本自动生成这些导出。
  下面示例单个导出，添加更多时按需扩展或用生成脚本自动生成 index-exports。
*/
export { default as ViewHide } from './components/viewHide.vue'
export { default as MYIconWrapper } from './components/aMYIconWrapper.vue'