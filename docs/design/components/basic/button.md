# Button组件设计

## 概述

Button 组件是本组件库中最基础且最重要的交互组件之一。它不仅提供了丰富的样式和交互功能，更重要的是体现了我们组件库的整体设计理念：关注点分离和逻辑抽象。

Button 组件的设计充分运用了我们自研的 useClassComputed 和 useColorComputed Hooks，将复杂的样式逻辑从组件本身剥离，使组件更加轻量且易于维护。

## 设计理念
### 分层架构
Button 组件严格按照三层架构设计：

1. 结构层 (button.vue) - 负责组件的 DOM 结构和基本布局
2. 逻辑层 (computedStyle.ts) - 通过 Hooks 处理复杂的响应式计算
3. 表现层 (button.scss) - 定义组件的视觉呈现和样式规则

这种分离使得各层职责明确，便于维护和扩展。

## 逻辑抽象
Button 组件将复杂的逻辑抽象为两个核心 Hooks：

useClassComputed - 处理动态类名生成
useColorComputed - 处理颜色计算
这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计
### Props 结构化设计
为了提高可维护性和可读性，我们将 Button 的 props 按照功能划分为多个逻辑组：
```ts
// 类型相关 props
const buttonTypeProps = {
  type: {
    type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'default' as const,
  },
  size: {
    type: String as PropType<'supersmall' | 'small' | 'medium' | 'large' | 'superbig'>,
    default: 'medium',
  },
}

// 样式相关 props
const buttonStyleProps = {
  round: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
}

// 颜色相关 props
const buttonColorProps = {
  colorBg: { type: String, default: '' },
  colorText: { type: String, default: '' },
  colorBorder: { type: String, default: '' },
}

// 行为相关 props
const buttonBehaviorProps = {
  disabled: { type: Boolean, default: false },
  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
}
```

### useClassComputed 的应用
Button 组件充分利用了 useClassComputed Hook 来处理动态类名的生成。在 useButtonStyle 函数中：

```typescript
const btnClass = useClassComputed<ButtonProps>({
  baseClass: 'my-btn',
  propClasses: {
    type: props.type === '' ? 'default' : props.type ?? 'default',
    size: props.size ?? 'medium'
  },
  flagClasses: {
    round: props.round,
    circle: props.circle,
    disabled: props.disabled,
    plain: props.plain,
    iconOnly: props.iconOnly,
  }
})
```

这种设计带来了以下优势：

1. 统一的命名规范（BEM-like）
2. 响应式的类名更新
3. 高度可维护性和扩展性

## useColorComputed 的应用
Button 组件使用 useColorComputed Hook 来处理自定义颜色的计算：
```typescript
const customStyle = useColorComputed({
  colorBg: props.colorBg,
  colorText: props.colorText,
  colorBorder: props.colorBorder,
  plain: props.plain,
  isHovered: isHovered,
  isActive: isActive,
  disabled: props.disabled,
  type: props.type
})
```

## 样式系统设计
### BEM 命名规范
Button 组件采用 BEM 命名规范，确保类名语义清晰：

· 基础类名：.my-btn
· 修饰符类名：.my-btn--primary, .my-btn--large, .my-btn--round

## 状态管理
通过 CSS 类名和伪类管理各种交互状态：

· 悬停状态 (:hover)
· 激活状态 (:active)
· 禁用状态 (.my-btn--disabled)

## 响应式设计
支持五种尺寸规格：
· supersmall
· small
· medium (默认)
· large
· superbig
每种尺寸都有对应的内边距和字体大小定义。

## 交互设计
Button 组件支持完整的鼠标交互反馈：

1. 鼠标悬停时改变样式
2. 鼠标按下时提供激活反馈
3. 禁用状态下阻止交互并提供视觉反馈
通过 Vue 的响应式系统和事件处理机制，我们实现了这些交互效果：
```typescript
const isHovered = ref(false);
const isActive = ref(false);

const onMouseOver = () => { isHovered.value = true; };
const onMouseOut = () => { isHovered.value = false; isActive.value = false; };
const onMouseDown = () => { isActive.value = true; };
const onMouseUp = () => { isActive.value = false; };
```

## 可访问性设计
Button 组件考虑了可访问性设计：

· 使用语义化的 HTML 标签
· 支持原生 button 的 type 属性（button/submit/reset）
· 正确处理 disabled 状态
· 提供足够的对比度和清晰的视觉反馈

## 扩展性设计
Button 组件具备良好的扩展性：

1. 自定义标签支持：可通过 tag prop 渲染为不同 HTML 元素
2. 自定义颜色：支持完全自定义背景、文字和边框颜色
3. 图标支持：内置图标插槽支持和图标按钮模式
4. 主题适配：通过 CSS 变量支持主题定制


## 性能优化
通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率

## 设计价值
Button 组件作为组件库的基础组件，其设计体现了我们整体的设计哲学：

1. 关注点分离：结构、样式、逻辑完全解耦
2. 高度复用：通过 hooks 抽象通用逻辑
3. 易于维护：清晰的代码结构和命名规范
4. 可扩展性强：支持丰富的定制选项
5. 一致性：遵循统一的设计语言和交互模式