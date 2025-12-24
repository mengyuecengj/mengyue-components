# Border 组件设计

## 概述
Border 组件是本组件库中专注于边界和容器样式的基础组件。与 Button 组件类似，它采用了同样的"关注点分离"设计理念，将结构、样式和逻辑完全解耦，体现了组件库统一的设计哲学。

Border 组件通过 useClassComputed 和 useStyleComputed 两个核心 Hooks 实现了灵活的边框样式控制，能够轻松应对各种复杂的边界展示需求。

## 设计理念
### 分层架构
Border 组件严格按照三层架构设计：

1. 结构层 (border.vue) - 负责组件的 DOM 结构和基本布局
2. 逻辑层 (borderComputed.ts) - 通过 Hooks 处理复杂的响应式计算
3. 表现层 (border.scss) - 定义组件的视觉呈现和样式规则

## 逻辑抽象
Border 组件将复杂的样式逻辑抽象为两个核心 Hooks：

· useClassComputed - 处理动态类名生成<br>
· useStyleComputed - 处理动态样式生成<br>
这种设计使得组件本身只需要声明所需逻辑，而具体的计算由 Hooks 完成。

## 核心功能设计
### Props 结构化设计
Border 组件将 props 按照功能划分为多个逻辑组：

```typescript
// 边框基础属性
const baseBorderProps = {
  borderStyle: {
    type: String as PropType<'solid' | 'dashed' | 'dotted' | 'double'>,
    default: 'solid'
  },
  borderWidth: {
    type: String,
    default: '1px'
  },
  borderColor: {
    type: String,
    default: ''
  },
}

// 边框方向属性（支持四边独立设置）
const directionBorderProps = {
  topColor: { type: String, default: '' },
  bottomColor: { type: String, default: '' },
  leftColor: { type: String, default: '' },
  rightColor: { type: String, default: '' }
}

// 其他样式属性
const otherStyleProps = {
  width: { type: String, default: '' },
  height: { type: String, default: '' },
  round: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  paddingText: { type: String, default: '' },
  center: { type: Boolean, default: false },
  colorBg: { type: String, default: '' },
  textColor: { type: String, default: '' },
  boxShadow: { type: String, default: '' }
}
```
这种分组方式使得代码结构更加清晰，也方便后续的功能扩展。

### useClassComputed 的应用
Border 组件利用 useClassComputed Hook 来处理动态类名的生成：

```typescript
const borderClass = useClassComputed<BorderProps>({
  baseClass: 'my-border',
  flagClasses: {
    round: props.round,
    circle: props.circle,
    center: props.center,
  },
});
```
这种方式确保了类名生成的一致性和可维护性。

### useStyleComputed 的应用
Border 组件使用 useStyleComputed Hook 来处理动态样式生成：

```typescript
const borderStyle = useStyleComputed<BorderProps>(props, {
  propToStyleMap,
  customStyleLogic: (props, style) => {
    // 设置默认边框颜色
    if (!props.borderColor && !props.topColor && !props.bottomColor && 
        !props.leftColor && !props.rightColor) {
      Object.assign(style, { borderColor: '#000' });
    }
    
    // 四边独立颜色设置
    if (props.topColor) {
      Object.assign(style, {
        borderTopColor: props.topColor,
        borderTopStyle: 'solid',
        borderTopWidth: '1px'
      });
    }
  }
})
```
这种设计允许组件支持复杂的边框样式需求，包括四边独立的颜色设置。

## 样式系统设计
### BEM 命名规范
Border 组件采用 BEM 命名规范，确保类名语义清晰：

· 基础类名：.my-border <br >
· 修饰符类名：.my-border--round, .my-border--circle, .my-border--center <br >

### 边框样式控制
Border 组件支持多种边框样式控制：

1. 基础边框样式：solid、dashed、dotted、double
2. 边框宽度：可自定义任意宽度
3. 边框颜色：支持统一颜色或四边独立设置
4. 特殊形状：圆角、圆形、居中布局

## 响应式设计
Border 组件支持完全自定义的宽高设置，可以根据内容自适应或者指定固定尺寸。

## 扩展性设计
Border 组件具备良好的扩展性：

1. 自定义标签支持：可通过 tag prop 渲染为不同 HTML 元素
2. 全面样式控制：支持背景色、文字色、阴影等完整样式设置
3. 灵活布局：支持居中布局等常见排列方式
4. 主题适配：通过 CSS 变量支持主题定制

## 性能优化
通过以下方式优化性能：

使用 computed 属性缓存计算结果
1. 将复杂逻辑移至独立的 hooks 中
2. 避免不必要的重新渲染
3. 使用 Vue 3 Composition API 提高运行效率

## 设计价值
Border 组件延续了我们组件库的设计哲学：

1. 关注点分离：结构、样式、逻辑完全解耦
2. 高度复用：通过 hooks 抽象通用逻辑
3. 易于维护：清晰的代码结构和命名规范
4. 可扩展性强：支持丰富的定制选项
5. 一致性：与 Button 等其他组件保持一致的设计语言
