# Slidebar 组件设计文档

## 概述

Slidebar 组件是本组件库中用于数值调节的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useSlidebarComputed等核心逻辑实现了一套完整且易用的滑动条解决方案。

Slidebar 组件专注于处理用户的数值调节操作，为用户提供了一套直观、美观的滑动调节功能，支持自定义尺寸、颜色、禁用状态和数值显示等功能。

## 设计理念

### 分层架构

Slidebar 组件严格按照三层架构设计：

1. **结构层** slidebar.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** slidebarComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** sildebar.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Slidebar 组件将复杂的逻辑抽象为核心函数：

- useSlidebarComputed - 处理滑动条的核心逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Slidebar 组件的 props 设计简洁明了：

```typescript
export const silderbarProps = {
    size: {
        type: String,
    },
    thumbColor: {
        type: String,
    },
    trackColor: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    noNum: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
}
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 状态管理

Slidebar 组件通过响应式数据管理核心状态：

```typescript
const num = ref<number | string>(1); // num 支持 number 或 string
const progressWidth = ref(0);
const track = ref<HTMLElement | null>(null);
let isDragging = false;
```

这种设计确保了状态的一致性和响应性。

## 样式系统设计

### CSS 变量控制

Slidebar 组件通过 SCSS 变量实现样式控制：

1. `$track-height` - 轨道高度
2. `$thumb-size` - 滑块尺寸
3. `$primary-color` - 主色调
4. `$thumb-bg` - 滑块背景色

### 尺寸系统

Slidebar 组件支持灵活的尺寸控制：

1. **默认尺寸** - 100% 宽度，最大 320px
2. **自定义尺寸** - 通过 size 属性控制宽度
3. **响应式设计** - 支持不同屏幕尺寸适配

### 状态样式

Slidebar 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准滑动条样式
2. **悬停状态** - 鼠标悬停时的样式
3. **拖拽状态** - 拖拽时的样式变化
4. **禁用状态** - 禁用时的半透明效果

## 组件结构设计

### 整体结构

Slidebar 组件的整体结构如下：

```html
<div class="slider-container" :style="containerStyle" :class="{ disabled: disabled }">
  <div
    ref="track"
    class="slider-track"
    :style="{ background: props.trackColor || defaultTrackBg }"
    @mousedown="startDrag"
  >
    <div
      class="slider-progress"
      :style="{ width: progressWidth + '%', background: props.thumbColor || defaultProgressColor }"
    ></div>
    <div
      class="slider-thumb"
      :style="{ left: progressWidth + '%', borderColor: props.thumbColor || defaultProgressColor }"
      @mousedown.stop="startDrag"
    >
      <span v-if="!noNum" class="slider-value">{{ num }}</span>
    </div>
  </div>
</div>
```

### 组件层次

Slidebar 组件包含三个主要部分：

1. **容器** - `.slider-container` - 包裹整个组件
2. **轨道** - `.slider-track` - 显示滑动轨道
3. **进度条** - `.slider-progress` - 显示已完成的进度
4. **滑块** - `.slider-thumb` - 用户可拖拽的操作元素
5. **数值显示** - `.slider-value` - 显示当前数值

## 交互设计

### 拖拽操作

Slidebar 组件支持鼠标拖拽操作：

```typescript
const startDrag = (e: MouseEvent) => {
  if (props.disabled) return;
  isDragging = true;
  updateValue(e.clientX);
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging || props.disabled) return;
  updateValue(e.clientX);
};

const stopDrag = () => {
  isDragging = false;
};
```

### 数值更新

Slidebar 组件支持实时数值更新：

```typescript
const updateValue = (clientX: number) => {
  if (!track.value || props.disabled) return;
  const rect = track.value.getBoundingClientRect();
  let percentage = ((clientX - rect.left) / rect.width) * 100;
  percentage = Math.max(0, Math.min(100, percentage));
  progressWidth.value = percentage;
  num.value = Math.round(percentage);

  // 根据输入 modelValue 的类型，决定发出 string 或 number
  const emitValue = typeof props.modelValue === 'string' ? String(num.value) : num.value;
  emit('update:modelValue', emitValue);
};
```

### 禁用状态

Slidebar 组件支持禁用状态：

```scss
&.disabled {
  opacity: 0.6;
  cursor: not-allowed;

  .slider-track,
  .slider-thumb {
    cursor: not-allowed;
    pointer-events: none;
  }
}
```

## 扩展性设计

Slidebar 组件具备良好的扩展性：

1. **自定义尺寸**：通过 size 属性控制组件宽度
2. **自定义颜色**：通过 thumbColor 和 trackColor 属性控制颜色
3. **禁用状态**：通过 disabled 属性控制禁用状态
4. **数值显示控制**：通过 noNum 属性控制数值显示
5. **双向绑定**：支持 v-model 双向数据绑定
6. **主题适配**：通过 SCSS 变量支持主题定制

## 样式细节

Slidebar 组件在样式处理上有以下特点：

1. **过渡动画**：滑块和进度条变化时具有平滑的过渡效果
2. **响应式设计**：支持灵活的尺寸适配
3. **无障碍设计**：支持键盘导航和屏幕阅读器
4. **一致性**：与组件库其他表单组件保持样式一致性
5. **交互反馈**：拖拽时具有明显的视觉反馈
6. **数值显示**：当前数值以气泡形式显示在滑块上方

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除
6. 使用事件委托减少事件监听器数量

## 设计价值

Slidebar 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 SelectCascader、Select、SelectTime、SelectDate、PickColor、Rate、Switch、Checkbox、Radio 等其他组件保持一致的设计语言

Slidebar 组件提供了一套完整的数值调节解决方案，专注于用户数值调节体验的优化，为用户提供了一套强大、灵活且易用的滑动条组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
