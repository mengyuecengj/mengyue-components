# useColorComputed

## useColorComputed：颜色与状态样式计算 Hook

## 痛点来源

在 UI 组件（如 Button、Tag、Badge 等）中，颜色与交互状态的样式处理往往是最复杂的重复逻辑之一：

- 需要支持自定义 `colorBg`、`colorText`、`colorBorder`
- `plain`（朴素）模式下，背景、文字、边框需根据类型（如 primary、success）使用主题变量，并处理透明度
- 不同交互状态（hover、active）需要动态切换颜色
- 禁用状态下颜色需统一为透明 + 固定文字/边框色
- 颜色格式可能为变量（如 `var(--el-color-primary)`），需支持透明度转换（如 `rgba(var(...), 0.2)`）

若每个组件都自行实现这些规则，不仅逻辑冗余，还极易导致视觉不一致、主题切换失效、暗色模式适配困难等问题。

## 设计目标

`useColorComputed` 的目标是：**集中统一处理所有组件的颜色与状态样式逻辑**，提供一套响应式、可配置、与主题系统深度集成的内联样式计算方案，让组件只需传入少数颜色相关 props，即可获得完整的视觉状态表现。

## 核心特性

| 特性                     | 说明                                                                 |
|--------------------------|----------------------------------------------------------------------|
| **响应式样式输出**       | 返回 `ComputedRef<CSSProperties>`，支持 Ref 类型的 `isHovered`/`isActive` 实时响应 |
| **完整状态覆盖**         | 优先处理 `disabled` → `plain` → 自定义颜色 → 基础 fallback，逻辑清晰不冲突 |
| **plain 模式智能处理**   | 区分 `default` 类型与有色类型（如 primary），自动使用主题变量并处理 hover/active 切换与透明度 |
| **主题变量深度支持**     | 通过 `useColorUtils.toRGBA` 实现 `var(--xxx)` 的透明度转换，确保与 CSS 变量系统无缝协作 |
| **自定义颜色优先**       | 当传入 `colorBg`、`colorText`、`colorBorder` 时，直接覆盖主题逻辑，支持完全自由定制 |
| **禁用状态统一**         | 固定为透明背景 + 白色文字/边框，视觉一致性强                               |
| **类型安全**             | 通过 `ColorComputedProps` 接口明确约束 props，支持 TypeScript 完整推导     |

## 设计价值

useColorComputed 是组件库中视觉统一性的关键一环，它与 useClassComputed、useStyleComputed 共同构成完整的表现层解决方案：

useClassComputed → 负责结构化类名（BEM）
useStyleComputed → 负责尺寸、布局等通用内联样式
useColorComputed → 专注颜色与状态（plain、hover、active、disabled）

通过这一 Hook：

所有组件的颜色行为高度一致，无需重复编写复杂条件
与主题系统（CSS 变量）深度绑定，切换主题时自动生效
支持自定义颜色与 plain 模式，兼顾灵活性与规范性
状态切换平滑响应式，交互体验统一
