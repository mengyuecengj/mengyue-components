# Select 组件设计文档

## 概述

Select 组件是本组件库中用于下拉选择的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useStyleComputed等核心逻辑实现了一套完整且易用的下拉选择解决方案。

Select 组件专注于处理用户的选项选择操作，为用户提供了一套直观、美观的下拉选择功能，支持自定义尺寸、禁用状态、滚动条控制和选项高亮等功能。

## 设计理念

### 分层架构

Select 组件严格按照三层架构设计：

1. **结构层** select.vue, option.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** select.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** select.scss, option.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Select 组件将复杂的逻辑抽象为核心函数：

- useStyleComputed - 处理样式计算
- 依赖注入机制 - 实现父子组件通信

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Select 组件的 props 设计简洁明了：

```typescript
export const selectProps = {
    modelValue: {
        type: [String, Number] as PropType<SelectValue>,
        default: ''
    },
    placeholder: {
        type: String,
        default: '请选择'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    width: {
        type: [String, Number] as PropType<SelectSize>,
        default: '260px'
    },
    height: {
        type: [String, Number] as PropType<SelectSize>,
        default: '40px'
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    hoverbackgroundColor: {
        type: String,
        default: ''
    },
    borderColor: {
        type: String,
        default: ''
    },
    autoScrollbar: {
        type: Boolean,
        default: true
    }
};
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 依赖注入机制

Select 组件通过 Vue 的依赖注入机制实现父子组件通信：

```typescript
// 提供上下文
provide('select', {
    selectOption,
    currentValue: computed(() => props.modelValue),
    disabled: computed(() => props.disabled),
    width: computed(() => props.width),
    height: computed(() => props.height)
})

// 注入上下文
const ctx = inject<SelectContext>('select')
if (!ctx) {
    throw new Error('MYOption must be used inside MYSelect')
}
```

这种设计使得 Option 组件能够与其父级 Select 组件无缝协作。

## 样式系统设计

### CSS 变量控制

Select 组件通过 CSS 变量实现样式控制：

1. `--text-color` - 文本颜色
2. `--dropdown-bg-color` - 下拉框背景色
3. `--hover-bg-color` - 悬停背景色
4. `--active-color` - 激活状态颜色
5. `--option-bg-color` - 选项背景色
6. `--option-hover-bg-color` - 选项悬停背景色

### 尺寸系统

Select 组件支持灵活的尺寸控制：

1. **默认尺寸** - 260px × 40px
2. **自定义尺寸** - 支持 px、em、% 等单位
3. **响应式设计** - 支持不同屏幕尺寸适配

### 状态样式

Select 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准下拉框样式
2. **悬停状态** - 鼠标悬停时的样式
3. **聚焦状态** - 获得焦点时的样式
4. **禁用状态** - 禁用时的半透明效果
5. **展开状态** - 下拉框展开时的箭头旋转效果

## 组件结构设计

### 整体结构

Select 组件的整体结构如下：

```html
<div class="select-e" :class="{
    'is-disabled': disabled,
    'is-focused': isFocused
}" tabindex="0" :style="selectStyle" @focus="handleFocus" @blur="handleBlur">
    <div class="select-trigger" @click="toggleDropdown">
        <span class="selected-value">{{ selectedLabel || placeholder }}</span>
        <span class="arrow-icon" :class="{ 'is-open': dropdownVisible }">
            <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5z" />
            </svg>
        </span>
    </div>
    <Transition name="slide-fade">
        <div v-if="dropdownVisible" ref="dropdownRef" class="select-dropdown">
            <MYScrollbar v-if="showScrollbar" height="200px" thumbColor="#4C4D4F" thumbHoverColor="#2a2a2e"
                trackColor="#2a2a2e">
                <slot></slot>
            </MYScrollbar>
            <div v-else class="select-dropdown-content">
                <slot></slot>
            </div>
        </div>
    </Transition>
</div>
```

### 选项结构

Option 组件的结构如下：

```html
<div
    class="select-option" 
    :class="{
        'is-selected': isSelected,
        'is-disabled': disabled
    }"
    :data-value="value"
    :data-label="label || value"
    @click="handleClick"
>
    <slot>{{ label }}</slot>
</div>
```

## 交互设计

### 下拉展开/收起

Select 组件支持点击展开/收起下拉框：

```typescript
const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
    if (dropdownVisible.value) {
        checkScrollbarVisibility()
        // 当下拉框打开时，重新计算选中标签
        updateSelectedLabel()
    }
}
```

### 选项选择

Option 组件支持点击选择选项：

```typescript
const handleClick = () => {
    if (!props.disabled && !selectDisabled.value) {
        selectOption(props.value, props.label || String(props.value))
    }
}
```

### 滚动条控制

Select 组件支持自动滚动条控制：

```typescript
const checkScrollbarVisibility = () => {
    nextTick(() => {
        if (!props.autoScrollbar) {
            showScrollbar.value = false
            return
        }

        if (dropdownRef.value) {
            const content = dropdownRef.value.querySelector('.select-dropdown-content') || dropdownRef.value
            const contentHeight = (content as HTMLElement).scrollHeight
            showScrollbar.value = contentHeight > 190
        }
    }
}
```

## 扩展性设计

Select 组件具备良好的扩展性：

1. **自定义尺寸**：通过 width 和 height 属性控制组件尺寸
2. **禁用状态**：通过 disabled 属性控制禁用状态
3. **滚动条控制**：通过 autoScrollbar属性控制滚动条显示
4. **样式定制**：通过 backgroundColor、hoverbackgroundColor、borderColor 等属性控制样式
5. **选项定制**：通过插槽支持自定义选项内容
6. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

Select 组件在样式处理上有以下特点：

1. **过渡动画**：下拉框展开/收起时具有平滑的过渡效果
2. **响应式设计**：支持灵活的尺寸适配
3. **无障碍设计**：支持键盘导航和屏幕阅读器
4. **一致性**：与组件库其他表单组件保持样式一致性
5. **高亮显示**：选中选项具有明显的高亮效果

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除
6. 延迟计算滚动条可见性

## 设计价值

Select 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 PickColor、Rate、Switch、Checkbox、Radio 等其他组件保持一致的设计语言

Select 组件提供了一套完整的下拉选择解决方案，专注于用户选项选择体验的优化，为用户提供了一套强大、灵活且易用的下拉选择组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
