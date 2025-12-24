# useCheckComputed

## 单选框与复选框专用逻辑 Hooks

### 痛点来源

单选框（Radio）和复选框（Checkbox）是表单中最常见的交互控件，但它们的实现往往伴随着大量重复逻辑：

- 是否选中（checked）的判断逻辑需同时兼容独立使用和 Group 包裹两种场景
- 禁用状态需合并组件自身 `disabled` 与 Group 的 `disabled`
- 值变更需正确处理数组（Checkbox）与单一值（Radio）的更新，并触发 `update:modelValue` 与 `change` 事件
- 与表单组件（如 Form / FormItem）集成时，需要注册字段、重置、清除校验等生命周期管理
- 类名状态（如 `--checked`、`--disabled`）需响应式更新

如果每个组件都独立实现这些逻辑，不仅代码冗余，还极易出现行为不一致、边界案例遗漏等问题。

## 设计目标

`useCheckComputed.ts` 文件集中封装了所有单选/复选框的通用逻辑，通过多个小型、专注的组合式 Hook，提供一套**统一、可复用、类型安全**的解决方案，让 Radio 和 Checkbox 组件的实现极度精简，同时完美支持：

- 独立使用
- Group 包裹使用
- Form / FormItem 集成
- v-model 双向绑定

## 核心 Hooks 组成

| Hook                | 职责                                                                 | 关键特性 |
|---------------------|----------------------------------------------------------------------|----------|
| **useFormField**    | 处理与 FormItem 的字段注册、重置、校验清除                           | 自动 onMounted 注册 / onBeforeUnmount 注销，支持 resetField |
| **useInputState**   | 计算 `isChecked` 和 `isDisabled` 状态，兼容 Group 与独立模式         | 优先使用 Group 的 modelValue/disabled，支持数组与单一值比较 |
| **useInputClasses** | 根据选中/禁用状态生成响应式类名数组                                 | 简洁、可复用，支持自定义前缀（如 `my-radio`、`my-checkbox`） |
| **useInputChange**  | 处理 change 事件，正确更新 modelValue（数组或单一值）并触发事件     | 区分 Checkbox（数组操作）和 Radio（直接赋值），防止禁用时触发 |

## 设计亮点

- **完美的 Group 兼容性**：通过 `inject` 获取 `radioGroup` 或 `checkboxGroup` 上下文，所有状态与变更逻辑优先走 Group，避免重复实现。
- **类型安全泛型设计**：`GroupContext<M>` 支持任意 modelValue 类型，`useInputState` 和 `useInputChange` 通过泛型精确推导 Radio（单一值）与 Checkbox（数组）的差异。
- **最小侵入性**：每个 Hook 职责单一，组件只需按需组合使用，无需关心底层实现细节。
- **与表单系统深度集成**：自动处理字段注册与重置，配合 FormItem 的校验与 reset 功能，无需额外代码。
- **边界处理严谨**：禁用时阻止变更、值比较使用 `String()` 避免类型陷阱、数组操作使用展开避免引用问题。

## 设计价值
useCheckComputed 将原本分散在 Radio 和 Checkbox 中的复杂状态管理、事件处理、表单集成逻辑，统一抽象为四个小型、可组合的 Hook，实现了：

行为高度一致（独立与 Group 模式无缝切换）
代码极简（组件逻辑不到 30 行）
易于维护与扩展（新增功能只需在此文件增强）
与组件库其他系统（如 Form、Class/Style Hooks）完美协同
