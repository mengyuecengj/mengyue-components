# Progress 组件设计文档

## 概述

Progress 组件是本组件库中用于展示进度条的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过响应式计算和动态样式控制实现了一套完整且易用的进度条解决方案。

Progress 组件专注于处理进度条的展示、状态管理和文本格式化功能，支持多种状态（成功、警告、异常）和动态百分比显示，为用户提供了一套强大、灵活的进度条管理工具。

## 设计理念

### 分层架构

Progress 组件严格按照三层架构设计：

1. **结构层** progress.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** progress.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** progress.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Progress 组件将复杂的逻辑抽象为核心函数和计算属性：

- normalizedPercentage - 处理百分比的范围限制（0-100）
- statusClass - 动态生成状态类名
- displayText - 动态生成显示文本

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Progress 组件的 props 设计简洁明了：

```typescript
export const progressProps = {
  /** 当前进度百分比 */
  percentage: {
    type: [Number, String],
    default: 50,
  },
  /** 进度条状态 */
  status: {
    type: String as PropType<ProgressStatus | ''>,
    default: '',
  },
  /** 自定义文本格式化函数 */
  format: {
    type: Function as PropType<ProgressFormat>,
    default: undefined,
  },
}
```

#### 参数说明：
- ercentage：支持数字或字符串类型，默认值为 `50`。
- status：支持 `'success'`、`'warning'`、`'exception'` 或空字符串。
- format：允许用户自定义进度条文本格式。


### 百分比规范化

Progress 组件通过计算属性对百分比进行规范化处理：

```typescript
const normalizedPercentage = computed(() =>
  Math.min(100, Math.max(0, Number(props.percentage)))
)
```

该逻辑确保百分比始终在 `0-100` 的范围内，避免无效值导致的显示问题。

## 样式系统设计

### CSS 变量控制

Progress 组件通过 SCSS 实现样式控制：

1. `--bar-height` - 进度条高度
2. `--bar-radius` - 进度条圆角
3. `--text-color` - 文本颜色

### 布局系统

Progress 组件支持灵活的布局控制：

1. **水平布局** - 默认使用 Flexbox 布局
2. **内边距控制** - 通过 SCSS 变量调整间距

### 状态样式

Progress 组件根据不同状态提供相应的样式：

1. **默认状态** - 蓝色进度条（`#409eff`）
2. **成功状态** - 绿色进度条（`#67c23a`）
3. **警告状态** - 黄色进度条（`#e6a23c`）
4. **异常状态** - 红色进度条（`#f56c6c`）

## 组件结构设计

### 整体结构

Progress 组件的整体结构如下：

```html
<div class="my-progress">
  <div class="my-progress__bar">
    <div class="my-progress__bar-inner" :style="{ width: `${normalizedPercentage}%` }" :class="statusClass"></div>
  </div>
  <div class="my-progress__text">{{ displayText }}</div>
</div>
```

### 组件层次

Progress 组件包含两个主要部分：

1. **容器** - `.my-progress` - 包裹整个进度条
2. **进度条** - `.my-progress__bar` - 包含进度条背景和内部填充
3. **进度条内部填充** - `.my-progress__bar-inner` - 动态宽度和状态颜色
4. **文本区域** - `.my-progress__text` - 显示当前进度文本

---

## 交互设计

### 动态文本格式化

Progress 组件支持通过 format 属性自定义文本格式：

```typescript
const displayText = computed(() =>
  typeof props.format === 'function'
    ? props.format(normalizedPercentage.value)
    : `${normalizedPercentage.value}%`
)
```

### 状态切换

Progress 组件支持通过 status 属性动态切换状态：

```typescript
const statusClass = computed(() => ({
  'my-progress__bar-inner--success': props.status === 'success',
  'my-progress__bar-inner--warning': props.status === 'warning',
  'my-progress__bar-inner--exception': props.status === 'exception',
}))
```

## 扩展性设计

Progress 组件具备良好的扩展性：

1. **数据绑定**：通过 percentage属性动态更新进度
2. **状态管理**：通过 status属性控制进度条颜色
3. **文本格式化**：通过 format 属性自定义显示文本
4. **样式定制**：通过 SCSS 变量调整组件样式

## 样式细节

Progress 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **动画效果**：进度条宽度变化时有平滑的过渡效果
4. **无障碍设计**：支持屏幕阅读器识别进度信息


## 性能优化

通过以下方式优化性能：

1. 使用 `computed` 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率


## 设计价值

Progress 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Button、Alert 等其他组件保持一致的设计语言
