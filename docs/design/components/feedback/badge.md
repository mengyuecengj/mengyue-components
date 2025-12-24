# Badge 徽章组件设计

## 概述

Badge 组件是本组件库中用于展示徽章或小红点的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useBadgeComputed 等核心逻辑实现了一套完整且易用的徽章管理解决方案。

Badge 组件专注于处理徽章内容展示、位置控制、样式调整等功能，为用户提供了一套强大、灵活的徽章展示工具，支持动态内容绑定、位置调整、颜色自定义等功能。

## 设计理念

### 分层架构

Badge 组件严格按照三层架构设计：

1. **结构层** badge.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** badgeComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** badge.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Badge 组件将复杂的逻辑抽象为核心函数：

- useBadgeComputed - 处理徽章的核心逻辑
- useStyleComputed - 处理动态样式生成

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Badge 组件的 props 设计简洁明了：

```typescript
export const badgeProps = {
  /** 徽章内容 */
  content: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  /** 是否显示为小红点 */
  dot: {
    type: Boolean,
    default: false
  },
  /** 徽章背景颜色 */
  color: {
    type: String,
    default: '#ff4d4f'
  },
  /** 徽章位置 */
  position: {
    type: String as PropType<BadgeProps['position']>,
    default: 'top-right',
    validator: (value: string) => {
      return ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value);
    }
  },
  /** 最大显示值 */
  max: {
    type: Number,
    default: 99,
    validator: (value: number) => {
      return value >= 0;
    }
  }
};
```
这种设计提供了足够的灵活性，支持多种使用场景。

## 依赖注入机制

Badge 组件通过 Vue 的组合式 API 实现父子组件通信：

```typescript
const props = defineProps(badgeProps);

const {
  displayContent,
  badgeStyle,
  wrapperStyle
} = useBadgeComputed(props);
```
这种设计使得 Badge 组件能够与其父级容器无缝协作。

## 样式系统设计

CSS 变量控制
Badge 组件通过 CSS 变量实现样式控制：

--badge-color - 徽章背景颜色控制
布局系统
Badge 组件支持灵活的布局控制：

默认布局 - 默认右上角定位
位置调整 - 通过 position 属性控制四个角的位置
状态样式
Badge 组件根据不同状态提供相应的样式：

默认状态 - 标准徽章样式
小红点状态 - 纯圆点展示模式
最大值状态 - 超过最大值时显示 "max+" 格式
组件结构设计
整体结构
Badge 组件的整体结构如下：

```html
<div class="my-badge-wrapper" :style="wrapperStyle">
  <slot />
  <span v-if="(content !== null && content !== '') || dot" class="my-badge" :class="{ 'dot': dot }" :style="badgeStyle">
    {{ displayContent }}
  </span>
</div>
```

## 组件层次
Badge 组件包含两个主要部分：

容器 - .my-badge-wrapper - 包裹整个徽章及其内容
徽章 - .my-badge - 显示实际的徽章内容
小红点 - .my-badge.dot - 小红点模式下的特殊样式

## 交互设计
动态内容展示
Badge 组件支持多种内容展示方式：

```typescript
const displayContent = computed(() => {
  if (props.dot) return '';
  if (typeof props.content === 'number' && props.content > props.max) {
    return `${props.max}+`;
  }
  return props.content;
});
```

### 样式动态调整

Badge 组件支持动态样式调整：

```typescript
const badgeStyle = useStyleComputed(props, {
  propToStyleMap: {
    color: 'backgroundColor',
  },
  customStyleLogic: (props, style) => {
    switch (props.position) {
      case 'top-right':
        Object.assign(style, { top: '-5px', right: '-5px' });
        break;
      case 'top-left':
        Object.assign(style, { top: '-5px', left: '-5px' });
        break;
      case 'bottom-right':
        Object.assign(style, { bottom: '-5px', right: '-5px' });
        break;
      case 'bottom-left':
        Object.assign(style, { bottom: '-5px', left: '-5px' });
        break;
    }
  },
});
```

## 扩展性设计
Badge 组件具备良好的扩展性：

内容绑定：通过 content 属性实现动态内容绑定
位置控制：通过 position 属性定义徽章位置
颜色自定义：通过 color 属性控制徽章背景颜色
最大值限制：通过 max 属性控制最大显示值
小红点模式：通过 dot 属性切换小红点模式
样式细节
Badge 组件在样式处理上有以下特点：

响应式设计：支持灵活的布局适配
一致性：与组件库其他组件保持样式一致性
错误反馈：验证失败时有明确的视觉反馈
无障碍设计：支持键盘导航和屏幕阅读器
性能优化
通过以下方式优化性能：

使用 computed 属性缓存计算结果
将复杂逻辑移至独立的函数中
避免不必要的重新渲染
使用 Vue 3 Composition API 提高运行效率
合理使用事件监听器的添加和移除

## 设计价值
Badge 组件延续了我们组件库的设计哲学：

关注点分离：结构、样式、逻辑完全解耦
高度复用：通过函数抽象通用逻辑
易于维护：清晰的代码结构和命名规范
可扩展性强：支持丰富的定制选项
一致性：与 Button、Icon、Avatar 等其他组件保持一致的设计语言
