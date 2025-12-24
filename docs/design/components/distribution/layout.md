# Layout 组件设计

## 概述

Layout 组件是本组件库中用于创建响应式栅格布局的组件集合。它包含两个核心组件：MYRow（行组件）和 MYCol（列组件），共同构成了一个基于 Flexbox 的强大栅格系统。这套组件延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useLayoutOverAllComputed 等核心 Hooks 实现了强大而灵活的布局控制功能。

Layout 组件专注于处理页面的栅格布局结构，为用户提供了一套完整且易用的响应式布局解决方案，适用于各种复杂的页面布局需求。

## 设计理念

### 分层架构

Layout 组件严格按照三层架构设计：

1. **结构层** (row.vue, col.vue) - 负责组件的 DOM 结构和基本布局
2. **逻辑层** (computedLayout.ts) - 通过 Hooks 处理复杂的响应式计算
3. **表现层** (row.scss, col.scss) - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Layout 组件将复杂的样式逻辑抽象为核心 Hook：

- useLayoutOverAllComputed - 处理布局类名和样式生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计

### 组件体系结构

Layout 组件采用模块化设计，包含以下两个核心组件：

1. **MYRow** - 行组件，作为列组件的容器
2. **MYCol** - 列组件，作为内容的实际容器

### Props 结构化设计

Layout 组件的 props 按照功能划分为多个逻辑组：

#### Row 组件 Props

```typescript
export const layoutProps = {
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  justify: {
    type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
    default: undefined,
  },
  align: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'row' | 'column' | 'row-reverse' | 'column-reverse'>,
    default: 'row',
  },
} as const;
```

#### Col 组件 Props

```typescript
export const colProps = {
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
  },
  offsetLeft: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  offsetRight: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  pull: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  push: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
} as const;
```

### 数据验证

Layout 组件包含完善的 props 验证机制：

1. **Gutter 验证**：确保间距值在 0-24 范围内
2. **Span 验证**：确保跨度值为 1-24 的整数
3. **Offset 验证**：确保偏移值在 0-24 范围内
4. **Direction 验证**：确保方向值为合法的 Flexbox 方向值

## 样式系统设计

### 24 栅格系统

Layout 组件采用业界标准的 24 栅格系统：

```scss
@for $i from 1 through 24 {
  &--span-#{$i} {
    width: calc(#{$i} / 24 * 100%);
  }
}
```

### Flexbox 布局

Row 组件基于 Flexbox 实现布局：

```scss
.my-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  position: relative;
}
```

### 间距控制

通过 CSS 变量实现灵活的间距控制：

```scss
margin-left: calc(var(--row-gutter, 0px) / -2);
margin-right: calc(var(--row-gutter, 0px) / -2);
```

### 对齐方式

支持多种对齐方式：

1. **水平对齐**：start、end、center、space-around、space-between
2. **垂直对齐**：align、alignCenter
3. **方向控制**：row、column、row-reverse、column-reverse

## 组件结构设计

### 整体结构

Layout 组件的整体结构如下：

```html
<MYRow :gutter="20" justify="center">
  <MYCol :span="6">内容1</MYCol>
  <MYCol :span="6">内容2</MYCol>
  <MYCol :span="6">内容3</MYCol>
</MYRow>
```

### 组件设计

每个组件都采用类似的结构：

```html
<component :is="props.tag" :class="classComponent" :style="styleComponent">
    <slot />
</component>
```

这种设计允许通过 tag 属性自定义渲染的 HTML 标签。

## 扩展性设计

Layout 组件具备良好的扩展性：

1. **自定义标签支持**：每个组件都可通过 tag prop 渲染为不同 HTML 元素
2. **全面布局控制**：支持跨度、偏移、推拉等多种布局控制
3. **灵活间距控制**：支持自定义间距值
4. **对齐方式多样**：支持多种水平和垂直对齐方式
5. **方向控制**：支持 Flexbox 的各种方向控制
6. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

Layout 组件在样式处理上有以下特点：

1. **标准化栅格**：采用 24 栅格系统，符合业界标准
2. **响应式设计**：通过百分比宽度实现响应式布局
3. **间距控制**：通过负边距和内边距巧妙实现列间距
4. **灵活偏移**：支持左右偏移控制
5. **推拉效果**：支持列的相对位置调整
6. **对齐控制**：支持多种对齐方式

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的 hooks 中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用 CSS 变量减少样式计算

## 设计价值

Layout 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过 hooks 抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Container、Button 等其他组件保持一致的设计语言
