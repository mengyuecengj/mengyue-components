# useOverallComputed

### useOverallComputed：布局与容器整体计算 Hooks

## 痛点来源

布局系统（Layout / Row / Col）和容器系统（Container / Header / Main / Aside / Footer）是组件库中最基础的结构组件，却常常伴随着大量重复的类名与样式计算逻辑：

- 需要根据 `gutter`、`justify`、`span`、`offset`、`push/pull` 等 props 生成大量修饰类
- 容器需支持 `fixed`、`position` 等布局属性，同时处理 header/footer 的固定定位
- 栅格系统需要将数字 props 精确转换为 CSS 变量（如 `calc(span / 24 * 100%)`）
- 宽度、高度、背景等尺寸样式需统一单位处理并注入 CSS 变量
- 每个子区域（如 header、main）都需要独立的类名与潜在的状态类

若在每个布局组件中单独实现这些逻辑，会导致代码高度冗余、命名不统一、样式变量难以维护。

## 设计目标

本文件集中封装了布局与容器组件的**整体类名与样式计算逻辑**，通过复用已有的 `useClassComputed` 和 `useStyleComputed`，提供高度一致、可配置的计算方案，让 Layout 和 Container 系列组件的实现极简且规范。

## 核心 Hooks 组成

| Hook                          | 职责                                       | 适用组件                     |
|-------------------------------|--------------------------------------------|------------------------------|
| **useContainerOverAllComputed** | 计算 Container 及其各区域（header/main/aside/footer）的类名 | Container、Header、Main 等   |
| **useContainerStyle**         | 计算 Container 的尺寸、背景等内联样式与 CSS 变量 | Container                    |
| **useLayoutOverAllComputed**  | 同时计算 Row 和 Col 的类名与样式（包括栅格变量计算） | Row、Col（常组合使用）       |

## 核心特性

| 特性                         | 说明                                                                 |
|------------------------------|----------------------------------------------------------------------|
| **深度复用通用 Hooks**       | 全面基于 `useClassComputed` 和 `useStyleComputed`，保持逻辑一致性     |
| **精准类名生成**             | 支持 BEM 规范的 `--modifier` 格式，自动处理 flag 与 prop 值类         |
| **智能 CSS 变量注入**        | 自动处理单位（数字 → px）、calc 计算（栅格百分比、偏移、推拉）         |
| **栅格系统完整支持**         | 精确实现 24 栅格的 `span`、`offset`、`pull`、`push` 等所有属性         |
| **容器布局灵活性**           | 支持 `fixed` 固定、右侧布局（`position-right`）等常见需求             |
| **类型安全组合**             | 通过接口合并（`CombinedProps`）实现 Row 与 Col props 的统一处理       |
| **零冗余设计**                | 所有重复逻辑集中于此，组件只需调用并绑定返回值                       |

## 设计价值

这些 Hooks 将布局系统中最为繁琐的类名爆炸与样式变量计算彻底集中管理，确保：

所有布局组件视觉与行为高度统一
栅格计算精准、无偏差
CSS 变量规范注入，便于主题覆盖与动态调整
组件代码极度精简（仅负责结构与插槽）
易于未来扩展（如响应式断点、更多 justify 模式）

它们与 useClassComputed、useStyleComputed 形成完整链路，完美体现了逻辑分层、复用至上的设计哲学：基础结构组件不应被琐碎的类名与样式逻辑拖累，而应专注于“布局的语义表达”。
用最统一的计算，支撑最灵活的布局系统。