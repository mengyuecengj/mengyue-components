# PickColor 组件设计文档

## 概述

PickColor 组件是本组件库中用于颜色选择的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useInputStyle 等核心逻辑实现了一套完整且易用的颜色选择解决方案。

PickColor 组件专注于处理用户的颜色选择操作，为用户提供了一套直观、美观的颜色选择功能，支持自定义尺寸、透明度控制、圆形显示和全局主题应用等功能。

## 设计理念

### 分层架构

PickColor 组件严格按照三层架构设计：

1. **结构层** pickColor.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** pickColorComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** pickColor.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

PickColor 组件将复杂的逻辑抽象为核心函数：

- useInputStyle - 处理颜色选择器的样式计算

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

PickColor 组件的 props 设计简洁明了：

```typescript
export const pickColorProps = {
    modelValue: {
        type: String,
        default: '#000000'
    },
    size: {
        type: String,
        default: '50px'
    },
    rgba: {
        type: [String, Number],
        default: 1,
        validator: (value: string | number) => {
            const num = typeof value === 'string' ? parseFloat(value) : value
            return !isNaN(num) && num >= 0 && num <= 1
        }
    },
    noBorder: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    }
}
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 状态管理

PickColor 组件通过响应式数据管理核心状态：

```typescript
const localColor = ref<string>(props.modelValue)

watch(
  () => props.modelValue,
  (v) => {
    if (v !== localColor.value) {
      localColor.value = v
    }
  }
)

watch(
  localColor,
  (v) => {
    emit('update:modelValue', v)
    emit('change', v)
    applyGlobalColor(v)
  },
  { immediate: true }
)
```

这种设计确保了状态的一致性和响应性。

## 样式系统设计

### CSS 样式控制

PickColor 组件通过 useStyleComputed Hook 控制样式：

```typescript
export function useInputStyle(size: string, rgba: string) {
  return useStyleComputed(
    { size, rgba },
    {
      propToStyleMap: { size: 'width' },
      customStyleLogic(props, style) {
        const sizeMatch = String(props.size).match(/^(\d+)([a-zA-Z%]*)$/)
        const sizeValue = sizeMatch ? sizeMatch[1] : '50'
        const unit = sizeMatch ? sizeMatch[2] || 'px' : 'px'
        style.width = `${sizeValue}${unit}`
        style.height = `${sizeValue}${unit`

        const opacityValue = Math.min(Math.max(parseFloat(String(props.rgba)) || 1, 0), 1)
        style.opacity = String(opacityValue)
      }
    }
  )
}
```

### 尺寸系统

PickColor 组件支持灵活的尺寸控制：

1. **默认尺寸** - 50px × 50px
2. **自定义尺寸** - 支持 px、em、% 等单位
3. **正方形设计** - 宽高始终保持一致

### 形状控制

PickColor 组件支持两种形状：

1. **方形** - 默认形状
2. **圆形** - 通过 circle 属性控制

## 组件结构设计

PickColor 组件采用简洁的结构设计：

```html
<div class="color-picker">
  <input type="color" v-model="localColor" @input="onChange" />
</div>
```

这种结构利用了原生 color input 的功能，同时通过 CSS 样式实现了美观的外观。

## 交互设计

### 颜色选择

PickColor 组件使用原生 color input 实现颜色选择：

```typescript
function onChange() {
  // 已由 watch(localColor) 处理
}
```

### 全局主题应用

PickColor 组件支持将选择的颜色应用为全局主题：

```typescript
function applyGlobalColor(value: string) {
  if (!value) return
  const { r, g, b, a } = parseColor(value)
  const cssValue = `rgba(${r}, ${g}, ${b}, ${a})`

  document.documentElement.style.setProperty('--app-primary-color', cssValue)
  document.documentElement.style.setProperty('--el-color-primary', cssValue)
  document.documentElement.style.setProperty('--myswitch-active', cssValue)

  // 计算对比色
  const L = 0.299 * r + 0.587 * g + 0.114 * b
  const contrast = L > 186 ? '#000' : '#fff'
  document.documentElement.style.setProperty('--on-primary-text', contrast)
}
```

### 本地存储

PickColor 组件支持将选择的颜色保存到本地存储：

```typescript
// 保存到 localStorage
try {
  let settings = {}
  const layoutSetting = localStorage.getItem('layout-setting')
  if (layoutSetting) {
    settings = JSON.parse(layoutSetting)
  }
  Object.assign(settings, { theme: value })
  localStorage.setItem('layout-setting', JSON.stringify(settings))
} catch (e) {
  console.error('Failed to save theme to localStorage', e)
}
```

## 扩展性设计

PickColor 组件具备良好的扩展性：

1. **自定义尺寸**：通过 size 属性控制组件尺寸
2. **透明度控制**：通过 rgba 属性控制透明度
3. **形状控制**：通过 circle 属性控制形状
4. **边框控制**：通过 noBorder 属性控制边框显示
5. **全局主题**：支持将颜色应用为全局主题
6. **本地存储**：支持将选择的颜色持久化存储

## 样式细节

PickColor 组件在样式处理上有以下特点：

1. **原生基础**：基于原生 color input 实现核心功能
2. **样式定制**：通过 CSS 实现美观的外观
3. **响应式设计**：支持灵活的尺寸适配
4. **无障碍设计**：利用原生 input 的无障碍特性
5. **一致性**：与组件库其他表单组件保持样式一致性

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除

## 设计价值

PickColor 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Rate、Switch、Checkbox、Radio 等其他组件保持一致的设计语言
