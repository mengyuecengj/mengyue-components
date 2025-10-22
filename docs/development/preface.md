# 🧩 组件库研发

在构建 **mengyue-components** 之初希望这不仅仅是一个 UI 集合，而是一套完整的、可持续演化的组件生态。
每一个按钮、每一段动画、每一条工具函数，背后都承载着「抽象、统一、可复用」的设计哲学。

## ✨ 设计初衷

在众多 UI 库中，往往组件繁多但抽象层次混乱。我们希望通过更精细的“核心分层架构”来实现高内聚、低耦合：

- **视觉与逻辑解耦**：组件关注交互与表现，逻辑独立为 composables 或 hooks。
- **轻量与可控**：一切能力可按需引入，不浪费字节。
- **从复用到演化**：组件不仅能复用，还能成为业务中台 UI 的「构建基石」。

## 🧠 核心函数设计理念

核心函数是组件行为的底层基石。例如：
- 状态控制逻辑，如 `useToggle`、`useVisible`；
- 动画状态驱动，如 `useTransition`；
- DOM 事件封装，如 `useClickOutside`；
- 核心工具，如 `createNamespace`、`composeProps`。

我们在设计这些函数时遵循三条原则：

1. **独立性**：每个函数必须可以脱离组件使用；
2. **组合性**：多个 hook 可以在一个组件内部组合使用；
3. **可测试性**：所有逻辑均具备独立单元测试用例。

## ⚙️ 核心实现思路

### 🧩 模块分层架构

我们将组件库逻辑分为 4 层：

| 层级 | 说明 | 示例 |
|------|------|------|
| View 层 | 组件模板与样式 | `button.vue`、`dialog.vue` |
| Logic 层 | 状态与交互逻辑 | `useButton()`、`useDialog()` |
| Utils 层 | 通用工具与辅助函数 | `dom.ts`、`event.ts` |
| Core 层 | 框架核心定义 | `install.ts`、`createComponent.ts` |

这种结构让组件既能独立开发，也能在系统层面统一维护。

## 🪝 Hooks 的设计哲学

Hooks 是组件库的灵魂。
在 mengyue-components 中定义了三类 hooks：

- 逻辑类 Hooks：负责数据与状态，如 useFormState、usePagination。
- 交互类 Hooks：负责 DOM 与用户事件，如 useHover、useResizeObserver。
- 系统类 Hooks：如 useZIndex、useGlobalConfig，负责跨组件协调。

> “一个 Hook 只做一件事，并且可在任何地方独立使用。”
> 这意味着每一个组件的核心，都能通过 Hooks 被抽离、替换或二次封装。

## 📦 打包与体积优化

为了让包更小，我们在构建层面做了多层优化：

- 按需打包: 使用 vite-plugin-dts + unplugin-vue-components 实现自动导入与类型生成；

- Tree-shaking 彻底: 所有导出均为 ESM 格式，确保未使用的逻辑不会进入最终包；

- 样式隔离与复用: 采用 CSS Variables 实现主题动态切换，减少冗余样式；

- 构建分析: 集成 rollup-plugin-visualizer 定期分析体积结构；

- 压缩与代码分块: 按功能拆分 chunk 并使用 gzip/br 压缩，减少首屏负担。

在最终产物中，一个完整组件平均仅占 2~5KB（gzipped），性能与灵活性并存。

## 🧭 架构演进与未来计划

组件库不是一次性产物，而是长期演化的结果。接下来将继续：

重点优化 hooks 类型系统，提升开发智能提示体验；

拓展 Theme 主题系统，支持动态主题与多品牌皮肤等等；

## 🌌 结语
一个优秀的组件库，不是堆砌组件的合集，而是抽象与设计思维的沉淀。
mengyue-components 的目标，不仅是帮助开发者“写得快”，更是“写得稳、写得久、写得优雅”。

✨ “代码的美，在于抽象的克制与设计的秩序。”