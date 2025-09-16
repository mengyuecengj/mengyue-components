import type { App, Plugin } from 'vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'
import Container from './src/container.vue'
import Header    from './src/header.vue'
import Main      from './src/main.vue'
import Footer    from './src/footer.vue'
import Aside     from './src/aside.vue'
import type { containerProps } from './src/container'

// 1. 把每个单文件组件都包成带 install 的插件
export const MYContainer = withInstall(Container)
export const MYHeader    = withInstall(Header)
export const MYMain      = withInstall(Main)
export const MYFooter    = withInstall(Footer)
export const MYAside     = withInstall(Aside)

// 2. 只在这里维护一次组件列表
const components = [
  MYContainer,
  MYHeader,
  MYMain,
  MYFooter,
  MYAside
]

// 3. 默认导出一个插件，批量注册所有组件
const LayoutPlugin: Plugin = {
  install(app: App) {
    components.forEach(comp => {
      app.use(comp)
    })
  }
}

// 4. 导出 props 类型，方便外部类型提示
export type { containerProps }

// 5. 导出默认插件
export default LayoutPlugin
