# Hooks 与工具函数

## withInstall：组件自动注册工具函数

### 痛点来源

在 Vue 3 组件库开发中，一个常见却繁琐的工作是：为每个组件手动编写 `install` 方法，以便支持全局注册（如 `app.use(Button)` 或 `app.use(MyComponent)`）。

典型代码重复如下：

```typescript
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
```

### 当组件数量增多时：

· 每个组件都需要重复写几乎相同的 install 逻辑 <br>
· 容易忘记添加 install，导致按需引入时无法全局注册<br>
· 组件名获取方式不统一（有些用 name，有些用 __name）<br>
· TypeScript 类型推导繁琐，Plugin 类型与组件类型难以优雅融合<br>

这些看似小的问题，会显著增加维护成本并降低组件库的专业度。

## 设计目标
withInstall 的目标是：提供一个极简、通用的工具函数，让所有组件只需一行代码即可获得完整的全局注册能力，同时保持完美的 TypeScript 类型支持与运行时安全性。

## 核心特性

| 特性                         | 说明                                                                 |
|------------------------------|----------------------------------------------------------------------|
| **一键增强**           | 通过 withInstall(Component) 包装，即可为组件添加标准 install 方法 |
| **自动名称获取**       | 优先使用 component.name，回退到 component.__name，覆盖大多数场景 |
| **运行时安全检查**        | 若组件无名称则抛出清晰错误，便于开发阶段及时发现问题      |
| **类型完美融合**             | 通过 SFCWithInstall类型，使包装后的组件同时具备原组件与 Plugin 类型        |
| **零运行时开销**             | 仅在 app.use 时执行注册逻辑，无额外性能负担             |
| **纯工具函数**                 | 无副作用、无依赖 Vue 运行时，可在任何构建阶段安全调用                       |

### 典型使用方式
```TypeScript
// 在组件定义文件中
import { withInstall } from '@/utils/withInstall'

const MyButton = defineComponent({
  name: 'MyButton',  // 或 __name: 'MyButton'（Vite 自动注入）
  // ...组件逻辑
})

export default withInstall(MyButton)

// 若为组合式组件导出多个，可分别包装或导出主组件
export const MyButtonPro = withInstall(defineComponent({ ... }))
```

### 在主入口统一导出：
```TypeScript
// index.ts
export { default as MyButton } from './src/button'
export { default as MyMessage } from './src/message'
// 无需手动添加 install，所有组件已具备全局注册能力
```
```typescript
用户使用方式（保持行业标准）：
TypeScriptimport { createApp } from 'vue'
import MengyueComponents from 'mengyue-components'

const app = createApp(App)
app.use(MengyueComponents)  // 自动注册所有带 install 的组件
```

或按需：
```TypeScript
import { MyButton } from 'mengyue-components'

app.use(MyButton)  // 单个组件全局注册
```

## 设计价值
withInstall 虽小，却解决了组件库开发中最常见的“重复劳动”之一：

彻底消除所有组件的 install 样板代码
强制组件命名规范（无名即报错），提升库的质量一致性
让组件导出方式高度统一，维护者只需关注组件本身逻辑
与 Vue 官方插件机制无缝对接，用户体验与 Element Plus、Naive UI 等主流库完全一致
TypeScript 类型安全完整，支持 IDE 智能提示 install 方法
