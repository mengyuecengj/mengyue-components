# SelectTime 组件设计文档

## 概述

SelectTime 组件是本组件库中用于时间选择的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useSelectTimeComputed 等核心逻辑实现了一套完整且易用的时间选择解决方案。

SelectTime 组件专注于处理用户的时间选择操作，为用户提供了一套直观、美观的时间选择功能，支持单时间选择和时间范围选择两种模式，并具有良好的可定制性。

## 设计理念

### 分层架构

SelectTime 组件严格按照三层架构设计：

1. **结构层** selectTime.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** selectTimeComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** selectTime.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

SelectTime 组件将复杂的逻辑抽象为核心函数：

- useSelectTimeComputed - 处理时间选择器的核心逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

SelectTime 组件的 props 设计简洁明了：

```typescript
export const selectTimeProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  range: { type: Boolean, default: false },
  hourOptions: {
    type: Array as PropType<number[]>,
    default: () => Array.from({ length: 24 }, (_, i) => i),
  },
  minuteOptions: {
    type: Array as PropType<number[]>,
    default: () => Array.from({ length: 60 }, (_, i) => i),
  },
};
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 模式系统

SelectTime 组件支持两种模式：

1. **单时间模式** - 选择单一时间点（默认模式）
2. **时间范围模式** - 选择时间范围（通过 range 属性启用）

## 样式系统设计

### CSS 样式控制

SelectTime 组件通过 SCSS 实现样式控制：

1. **深色主题** - 默认采用深色背景和浅色文本
2. **悬停效果** - 鼠标悬停时的背景色变化
3. **聚焦效果** - 获得焦点时的边框高亮
4. **自定义滚动条** - 下拉列表的滚动条样式定制

### 尺寸系统

SelectTime 组件具有固定的尺寸设计：

1. **高度** - 30px 的标准高度
2. **宽度** - 自适应内容宽度
3. **内边距** - 8px 上下，12px 左右的内边距

### 状态样式

SelectTime 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准下拉框样式
2. **悬停状态** - 鼠标悬停时的背景色变化
3. **聚焦状态** - 获得焦点时的蓝色边框高亮
4. **禁用状态** - 选项禁用时的视觉效果

## 组件结构设计

### 整体结构

SelectTime 组件的整体结构如下：

```html
<div class="time-picker">
  <div v-if="range" class="time-range-picker">
    <!-- 起始时间选择 -->
    <div class="time-input-group">
      <div class="custom-time-picker">
        <select v-model="selectedHourStart" class="time-select">...</select>
        <span class="time-separator">:</span>
        <select v-model="selectedMinuteStart" class="time-select">...</select>
      </div>
    </div>

    <span class="time-range-separator">至</span>

    <!-- 结束时间选择 -->
    <div class="time-input-group">
      <div class="custom-time-picker">
        <select v-model="selectedHourEnd" class="time-select">...</select>
        <span class="time-separator">:</span>
        <select v-model="selectedMinuteEnd" class="time-select">...</select>
      </div>
    </div>
  </div>

  <div v-else class="time-input-group single">
    <!-- 单时间选择 -->
    <div class="custom-time-picker single-picker">
      <select v-model="selectedHour" class="time-select">...</select>
      <span class="time-separator">:</span>
      <select v-model="selectedMinute" class="time-select">...</select>
    </div>
  </div>
</div>
```

### 下拉选择结构

时间选择下拉框结构如下：

```html
<select v-model="selectedHour" class="time-select">
  <option value="" disabled hidden>时</option>
  <option v-for="h in hourOptions" :key="`hour-${h}`" :value="h">
    {{ String(h).padStart(2, '0') }}
  </option>
</select>
```

## 交互设计

### 时间选择

SelectTime 组件支持时间选择：

```typescript
// 单时间模式
const t = formatTime(selectedHour.value, selectedMinute.value);
if (t) emit('update:modelValue', t);

// 时间范围模式
const t1 = formatTime(selectedHourStart.value, selectedMinuteStart.value);
const t2 = formatTime(selectedHourEnd.value, selectedMinuteEnd.value);
if (t1 && t2) emit('update:modelValue', [t1, t2]);
```

### 时间格式化

SelectTime 组件支持时间格式化：

```typescript
function formatTime(h: string | number, m: string | number): string {
  if (h === '' || m === '') return '';
  const hh = typeof h === 'string' ? parseInt(h) : h;
  const mm = typeof m === 'string' ? parseInt(m) : m;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}
```

### 模式切换

SelectTime 组件支持模式切换时的状态重置：

```typescript
watch(
  () => props.range,
  (newRange) => {
    emit('update:modelValue', newRange ? ['', ''] : '');
  }
);
```

## 扩展性设计

SelectTime 组件具备良好的扩展性：

1. **自定义时间选项**：通过 hourOptions 和 minuteOptions 属性自定义可选时间
2. **双模式支持**：支持单时间选择和时间范围选择
3. **双向绑定**：支持 v-model 双向数据绑定
4. **样式定制**：通过 CSS 变量支持样式定制
5. **主题适配**：默认采用深色主题，易于适配其他主题

## 样式细节

SelectTime 组件在样式处理上有以下特点：

1. **下拉箭头**：使用 SVG 图标实现自定义下拉箭头
2. **滚动条样式**：自定义滚动条样式以匹配整体设计风格
3. **响应式设计**：组件尺寸适合各种布局环境
4. **无障碍设计**：支持键盘导航和屏幕阅读器
5. **一致性**：与组件库其他表单组件保持样式一致性

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用 watch 和 watchEffect 进行状态监听

## 设计价值

SelectTime 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 SelectDate、Select、PickColor、Rate、Switch、Checkbox、Radio 等其他组件保持一致的设计语言

SelectTime 组件提供了一套完整的时间选择解决方案，专注于用户时间选择体验的优化，为用户提供了一套强大、灵活且易用的时间选择组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。