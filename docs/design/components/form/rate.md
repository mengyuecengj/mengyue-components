# Rate 组件设计文档

## 概述

Rate 组件是本组件库中用于星级评分的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useRateLogic等核心逻辑实现了一套完整且易用的评分解决方案。

Rate 组件专注于处理用户的评分操作，为用户提供了一套直观、美观的星级评分功能，支持半星评分、禁用状态、自定义颜色和文本显示等功能。

## 设计理念

### 分层架构

Rate 组件严格按照三层架构设计：

1. **结构层** rate.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** rateComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** rate.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Rate 组件将复杂的逻辑抽象为核心函数：

- useRateLogic - 处理评分组件的核心逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Rate 组件的 props 设计简洁明了：

```typescript
export const rateProps = {
  modelValue: {
    type: Number as PropType<number>,
    default: 0
  },
  max: {
    type: Number as PropType<number>,
    default: 5
  },
  colors: {
    type: Array as unknown as PropType<[string, string, string]>,
    default: () => ['#F7BA2A', '#F7BA2A', '#C6D1DE'] as [string, string, string]
  },
  showText: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  texts: {
    type: Array as PropType<string[]>,
    default: () => ['极差', '失望', '一般', '满意', '惊喜']
  },
  showHalf: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
}
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 状态管理

Rate 组件通过响应式数据管理核心状态：

```typescript
const hoverValue = ref(0)
const currentValue = ref(props.modelValue)

const maxStars = computed(() => props.max)
const displayValue = computed(() => hoverValue.value || currentValue.value)
const currentText = computed(() => {
  const index = Math.ceil(currentValue.value) - 1
  return props.texts[index] || ''
})
```

这种设计确保了状态的一致性和响应性。

## 样式系统设计

### CSS 类名控制

Rate 组件通过动态类名控制样式状态：

```html
<span
  v-for="star in maxStars"
  :key="star"
  class="MYRate__star"
  :class="{
    'is-active': star <= displayValue,
    'is-half': showHalf && star === Math.ceil(displayValue) && displayValue % 1 > 0,
    'is-disabled': disabled
  }"
>
```

### 星级样式

Rate 组件使用 SVG 实现星级图标：

```vue
<template>
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
      stroke="currentColor"
      stroke-width="1.5"
      fill="currentColor"
    />
  </svg>
</template>
```

### 颜色系统

Rate 组件支持三种颜色状态：

1. **激活颜色** - 已评分星的颜色
2. **未激活颜色** - 未评分星的颜色
3. **半星颜色** - 半星状态下的颜色

## 组件结构设计

Rate 组件采用灵活的结构设计：

```html
<div class="MYRate">
  <span
    v-for="star in maxStars"
    :key="star"
    class="MYRate__star"
    :class="{
      'is-active': star <= displayValue,
      'is-half': showHalf && star === Math.ceil(displayValue) && displayValue % 1 > 0,
      'is-disabled': disabled
    }"
    @click="handleClick(star)"
    @mousemove="handleMouseMove(star, $event)"
    @mouseleave="resetHover"
  >
    <span class="MYRate__star-inner" :style="getStarStyle(star)">
      <Star />
    </span>
  </span>
  <span v-if="showText" class="MYRate__text">{{ currentText }}</span>
</div>
```

这种结构支持动态数量的星级显示和文本提示。

## 交互设计

### 点击评分

Rate 组件支持点击进行评分：

```typescript
const handleClick = (star: number) => {
  if (props.disabled) return
  let newValue = star
  if (props.showHalf) {
    if (star === Math.ceil(currentValue.value) && currentValue.value % 1 > 0) {
      newValue = star - 0.5
    }
  }
  currentValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
```

### 悬停预览

Rate 组件支持悬停预览评分效果：

```typescript
const handleMouseMove = (star: number, event: MouseEvent) => {
  if (props.disabled) return
  if (props.showHalf) {
    const target = event.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    hoverValue.value = mouseX <= rect.width / 2 ? star - 0.5 : star
  } else {
    hoverValue.value = star
  }
}
```

### 半星评分

Rate 组件支持半星评分功能：

```typescript
const getStarStyle = (star: number) => {
  const isActive = star <= displayValue.value
  const isHalf = props.showHalf && star === Math.ceil(displayValue.value) && displayValue.value % 1 > 0
  return {
    color: isActive ? props.colors[0] : props.colors[2],
    width: isHalf ? '50%' : '100%'
  }
}
```

## 扩展性设计

Rate 组件具备良好的扩展性：

1. **自定义星级数量**：通过 `max` 属性控制星级数量
2. **自定义颜色**：通过 `colors` 属性控制不同状态的颜色
3. **文本显示**：通过 showText 和 texts 属性控制文本显示
4. **半星支持**：通过 showHalf 属性控制是否支持半星评分
5. **禁用状态**：通过 disabled 属性控制禁用状态
6. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

Rate 组件在样式处理上有以下特点：

1. **SVG 图标**：使用矢量图标保证清晰度
2. **过渡动画**：评分状态切换时具有平滑的过渡效果
3. **响应式设计**：支持灵活的尺寸适配
4. **无障碍设计**：支持键盘导航和屏幕阅读器
5. **一致性**：与组件库其他表单组件保持样式一致性

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除

## 设计价值

Rate 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Switch、Checkbox、Radio 等其他组件保持一致的设计语言
