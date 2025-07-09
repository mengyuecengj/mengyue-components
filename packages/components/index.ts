// // src/index.ts
// import { App, Plugin } from 'vue'
// import MYButton from './button/src/button.vue'
// import MYBorder from './border/src/border.vue'

// // 所有组件统一收集
// const components = [MYButton, MYBorder]

// // 插件的 install 方法
// const install: Plugin['install'] = (app: App) => {
//   components.forEach(comp => {
//     app.component(comp.name!, comp)
//   })
// }

// // 这里必须 default 导出 install 对象
// const MengyuePlus: Plugin = { install }

// export default MengyuePlus
// export { MengyuePlus }


// src/index.ts  ← 唯一入口
import type { App, Plugin } from 'vue'
import MYButton from './button/src/button.vue'
import MYBorder from './border/src/border.vue'
import MYText from './text/src/text.vue'
import MYa from './a/src/a.vue'
import { MYScroll } from './scroll'
import { MYScrollbar } from './scrollbar'

// 所有组件
const components = [
  MYButton, 
  MYBorder, 
  MYText, 
  MYa,
  MYScroll,
  MYScrollbar
]

// install 方法
const install: Plugin['install'] = (app: App) => {
  components.forEach(comp => {
    const name = comp.name || (comp.__name as string) || 'UnnamedComponent'
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
  MYScrollbar
}
