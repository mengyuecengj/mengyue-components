// src/index.ts  ← 唯一入口
import type { App, Plugin } from 'vue'
import MYButton from './button/src/button.vue'
import MYBorder from './border/src/border.vue'
import MYText from './text/src/text.vue'
import MYa from './a/src/a.vue'
import { MYScroll } from './scroll'
import { MYScrollbar } from './scrollbar'
import {
  MYContainer,
  MYHeader,
  MYMain,
  MYFooter,
  MYAside
} from './container'
import { MYRow, MYCol } from './layout'

interface ComponentWithName {
  name?: string;
  __name?: string;
}

// 所有组件
const components = [
  MYButton,
  MYBorder,
  MYText,
  MYa,
  MYScroll,
  MYScrollbar,
  MYContainer,
  MYHeader,
  MYMain,
  MYFooter,
  MYAside,
  MYRow,
  MYCol
]

// install 方法
const install: Plugin['install'] = (app: App) => {
  components.forEach(comp => {
    const name = (comp as ComponentWithName).name || (comp as ComponentWithName).__name || 'UnnamedComponent'
    app.component(name, comp)
  })
}

// 插件对象
const MengyuePlus: Plugin = { install }

// ───── 导出 ─────
export default MengyuePlus
export {
  MYButton,
  MYBorder,
  MYText,
  MYa,
  MYScroll,
  MYScrollbar,
  MYContainer,
  MYHeader,
  MYMain,
  MYFooter,
  MYAside,
  MYRow,
  MYCol
}
