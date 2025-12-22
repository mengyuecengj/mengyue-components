# SelectDate 组件设计文档

## 概述

SelectDate 组件是本组件库中用于日期选择的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useSelectDate等核心逻辑实现了一套完整且易用的日期选择解决方案。

SelectDate 组件专注于处理用户的日期选择操作，为用户提供了一套直观、美观的日期选择功能，支持多种日期模式（日期、月份、年份）、范围选择、时间选择和自定义样式等功能。

## 设计理念

### 分层架构

SelectDate 组件严格按照三层架构设计：

1. **结构层** selectDate.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** selectDateComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** selectDate.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

SelectDate 组件将复杂的逻辑抽象为核心函数：

- useSelectDate - 处理日期选择器的核心逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

SelectDate 组件的 props 设计简洁明了：

```typescript
export const selectDateProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  type: {
    type: String,
    default: 'date'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  year: {
    type: Boolean,
    default: false
  },
  month: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  time: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number] as PropType<SelectSize>,
    default: '260px'
  },
  height: {
    type: [String, Number] as PropType<SelectSize>,
    default: '20px'
  },
};
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 模式系统

SelectDate 组件支持多种模式：

1. **日期模式** - 选择具体日期
2. **月份模式** - 选择月份
3. **年份模式** - 选择年份
4. **范围模式** - 选择日期范围
5. **时间模式** - 选择时间

## 样式系统设计

### CSS 变量控制

SelectDate 组件通过 SCSS 变量实现样式控制：

1. `$bg` - 背景色
2. `$border` - 边框色
3. `$text` - 文本色
4. `$hover` - 悬停色
5. `$sel` - 选中色
6. `$today` - 今日标识色

### 尺寸系统

SelectDate 组件支持灵活的尺寸控制：

1. **默认尺寸** - 350px × 20px
2. **自定义尺寸** - 支持 px、em、% 等单位
3. **响应式设计** - 支持不同屏幕尺寸适配

### 状态样式

SelectDate 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准输入框样式
2. **悬停状态** - 鼠标悬停时的样式
3. **聚焦状态** - 获得焦点时的样式
4. **禁用状态** - 要用时的半透明效果
5. **选中状态** - 日期选中时的高亮效果
6. **范围状态** - 日期范围内的标识效果

## 组件结构设计

### 整体结构

SelectDate 组件的整体结构如下：

```html
<div class="date-picker-container">
  <div class="input-container">
    <input :value="formattedDateTime" class="my-selectDate" :placeholder="placeholderText" readonly
      @click="toggleDropdown" :style="selectStyle" />
    <date-range-icon class="date-range-icon" />
  </div>

  <div v-if="showDropdown" class="date-picker-dropdown">
    <!-- 时间选择器 -->
    <div v-if="props.time" class="time-picker-container">
      <!-- ... -->
    </div>

    <!-- 范围选择器 -->
    <div v-if="mode.startsWith('range')" class="range-container">
      <!-- ... -->
    </div>

    <!-- 单一选择器 -->
    <div v-else-if="mode === 'year'" class="year-picker">
      <!-- ... -->
    </div>

    <div v-else-if="mode === 'month'" class="month-picker">
      <!-- ... -->
    </div>

    <div v-else class="date-picker-default">
      <!-- ... -->
    </div>
  </div>
</div>
```

### 日历网格结构

日期选择网格结构如下：

```html
<div class="date-grid grid-date">
  <div v-for="d in daysOfWeek" :key="d" class="day-header">{{ d }}</div>
  <div v-for="cell in calendarCells" :key="cell.key" class="day-cell">
    <button type="button" v-if="cell.date" :class="{
      selected: isSelected(cell.date),
      disabled: !cell.isCurrentMonth,
      today: isToday(cell.date)
    }" :disabled="!cell.isCurrentMonth" @click="selectDate(cell.date)">
      {{ cell.date.getDate() }}
      <span v-if="isToday(cell.date)" class="today-badge">今</span>
    </button>
  </div>
</div>
```

## 交互设计

### 下拉展开/收起

SelectDate 组件支持点击展开/收起下拉框：

```typescript
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) initFromModelValue();
}
```

### 日期选择

SelectDate 组件支持多种日期选择方式：

```typescript
function selectDate(date: Date) {
  const val = formatDateTime(date, false, false);
  emit('update:modelValue', val);
  emit('change', val);
  showDropdown.value = false;
}

function selectRangeDate(date: Date) {
  if (isSelectingStart.value) {
    startDate.value = date;
    isSelectingStart.value = false;
    emit('update:modelValue', [formatDateTime(date, true, true)]);
  } else {
    endDate.value = date;
    const s = formatDateTime(startDate.value!, true, true);
    const e = formatDateTime(date, true, false);
    emit('update:modelValue', [s, e]);
    emit('change', [s, e]);
    showDropdown.value = false;
    isSelectingStart.value = true;
  }
}
```

### 外部点击关闭

SelectDate 组件支持外部点击关闭下拉框：

```typescript
function handleOutsideClick(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('.date-picker-container')) {
    showDropdown.value = false;
  }
}
```

## 扩展性设计

SelectDate 组件具备良好的扩展性：

1. **多种模式支持**：支持日期、月份、年份、范围和时间选择
2. **自定义尺寸**：通过 width 和 height 属性控制组件尺寸
3. **禁用状态**：通过 disabled 属性控制禁用状态
4. **时间选择**：通过 time 属性控制时间选择功能
5. **今日标识**：通过 showToday 属性控制今日标识显示
6. **样式定制**：通过 CSS 变量支持样式定制
7. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

SelectDate 组件在样式处理上有以下特点：

1. **过渡动画**：下拉框展开/收起时具有平滑的过渡效果
2. **响应式设计**：支持灵活的尺寸适配
3. **无障碍设计**：支持键盘导航和屏幕阅读器
4. **一致性**：与组件库其他表单组件保持样式一致性
5. **高亮显示**：选中日期和范围具有明显的高亮效果
6. **今日标识**：今日日期具有特殊标识

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除
6. 延迟初始化状态以提升首次渲染性能

## 设计价值

SelectDate 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Select、PickColor、Rate、Switch、Checkbox、Radio 等其他组件保持一致的设计语言

SelectDate 组件提供了一套完整的日期选择解决方案，专注于用户日期选择体验的优化，为用户提供了一套强大、灵活且易用的日期选择组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
