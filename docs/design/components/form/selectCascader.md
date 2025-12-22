# SelectCascader 组件设计文档

## 概述

SelectCascader 组件是本组件库中用于级联选择的交互组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 useSelectCascader 等核心逻辑实现了一套完整且易用的级联选择解决方案。

SelectCascader 组件专注于处理用户的级联选择操作，为用户提供了一套直观、美观的多级联动选择功能，支持自定义尺寸、禁用状态、多级菜单和选项高亮等功能。

## 设计理念

### 分层架构

SelectCascader 组件严格按照三层架构设计：

1. **结构层** selectCascader.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** selectCascaderComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** selectCascader.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

SelectCascader 组件将复杂的逻辑抽象为核心函数：

- useSelectCascader - 处理级联选择器的核心逻辑
- useStyleComputed - 处理样式计算

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

SelectCascader 组件的 props 设计简洁明了：

```typescript
export const selectCascaderProps = {
    modelValue: {
        type: [String, Number] as PropType<string | number>,
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
        type: [String, Number] as PropType<string | number>,
        default: '260px'
    },
    height: {
        type: [String, Number] as PropType<string | number>,
        default: '40px'
    },
    options: {  // 添加 options 属性
        type: Array as PropType<Option[]> | undefined,
        required: true
    }
};
```

这种设计提供了足够的灵活性，支持多种使用场景。

### 数据结构设计

SelectCascader 组件使用树形数据结构：

```typescript
export interface Option {
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: Option[];
}
```

这种结构支持无限层级的级联选择。

## 样式系统设计

### CSS 样式控制

SelectCascader 组件通过 SCSS 实现样式控制：

1. **深色主题** - 默认采用深色背景和浅色文本
2. **悬停效果** - 鼠标悬停时的背景色变化
3. **聚焦效果** - 获得焦点时的边框高亮
4. **禁用状态** - 选项禁用时的视觉效果

### 尺寸系统

SelectCascader 组件支持灵活的尺寸控制：

1. **默认尺寸** - 260px × 40px
2. **自定义尺寸** - 支持 px、em、% 等单位
3. **响应式设计** - 支持不同屏幕尺寸适配

### 状态样式

SelectCascader 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准下拉框样式
2. **悬停状态** - 鼠标悬停时的样式
3. **聚焦状态** - 获得焦点时的样式
4. **禁用状态** - 要用时的半透明效果
5. **展开状态** - 下拉框展开时的箭头旋转效果

## 组件结构设计

### 整体结构

SelectCascader 组件的整体结构如下：

```html
<div class="select-e" :class="{ 'is-focused': isFocused, 'is-disabled': disabled }" tabindex="0"
    :style="selectStyle" @focus="handleFocus" @blur="handleBlur">
    <div class="select-trigger" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
        <span class="selected-value">{{ selectedLabel || placeholder }}</span>
        <span class="arrow-icon" :class="{ 'is-open': dropdownVisible }">
            <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M7 10l5 5 5-5z" />
            </svg>
        </span>
    </div>
    <div ref="dropdownContainer" class="dropdown-container" @mouseleave="handleContainerMouseleave">
        <Transition name="slide-fade">
            <div v-show="dropdownVisible" ref="selectDropdown" class="select-dropdown" :style="dropdownPosition">
                <MYScrollbar height="200px" thumbColor="#4C4D4F" thumbHoverColor="#2a2a2e"
                    trackColor="#2a2a2e">
                    <div v-for="item in options" :key="item.value" class="select-option"
                        :class="{ 'is-disabled': item.disabled || disabled }" @mouseenter="() => handleMouseenter(item)">
                        <div class="label" @click="() => handleClick(item)">
                            {{ item.label }}
                            <span v-if="item.children" class="arrow-icon">▶</span>
                        </div>
                    </div>
                </MYScrollbar>
            </div>
        </Transition>
        <!-- 二级菜单 -->
        <Transition name="slide-fade">
            <div v-if="activeSubMenu" class="sub-menu" :style="subMenuPosition">
                <div v-for="child in activeSubMenuItems" :key="child.value" class="select-option"
                    :class="{ 'is-disabled': child.disabled || disabled }" @click.stop="handleClick(child)" @mouseenter="() => handleSecondLevelEnter(child)">
                    <div class="label">
                        {{ child.label }}
                        <span v-if="child.children" class="arrow-icon">▶</span>
                    </div>
                </div>
            </div>
        </Transition>
        <!-- 三级菜单 -->
        <Transition name="slide-fade">
            <div v-if="activeThirdMenu" class="third-menu" :style="thirdMenuPosition">
                <div v-for="third in activeThirdMenuItems" :key="third.value" class="select-option"
                    :class="{ 'is-disabled': (third as any).disabled || disabled }" @click.stop="handleClick(third)">
                    <div class="label">{{ third.label }}</div>
                </div>
            </div>
        </Transition>
    </div>
</div>
```

### 菜单结构

各级菜单结构统一：

```html
<div v-for="item in options" :key="item.value" class="select-option"
    :class="{ 'is-disabled': item.disabled || disabled }" @mouseenter="() => handleMouseenter(item)">
    <div class="label" @click="() => handleClick(item)">
        {{ item.label }}
        <span v-if="item.children" class="arrow-icon">▶</span>
    </div>
</div>
```

## 交互设计

### 下拉展开/收起

SelectCascader 组件支持点击展开/收起下拉框：

```typescript
const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
    if (!dropdownVisible.value) {
        activeSubMenu.value = ''
        activeThirdMenu.value = null
    } else {
        nextTick(() => {
            updateSubMenuPosition()
            updateThirdMenuPosition()
        })
    }
}
```

### 级联选择

SelectCascader 组件支持多级联动选择：

```typescript
const handleMouseenter = (item: Option) => {
    if (props.disabled || item.disabled) return
    if (item.children) {
        activeSubMenu.value = item.value.toString()
        activeOption.value = item
        nextTick(() => updateSubMenuPosition())
    } else {
        activeSubMenu.value = ''
        activeThirdMenu.value = null
        activeOption.value = null
    }
}
```

### 选项选择

SelectCascader 组件支持点击选择选项：

```typescript
const handleClick = (item: Option) => {
    if (props.disabled || item.disabled) return
    selectedLabel.value = item.label
    dropdownVisible.value = false
    activeSubMenu.value = ''
    activeThirdMenu.value = null
    emit('update:modelValue', item.value)
}
```

## 扩展性设计

SelectCascader 组件具备良好的扩展性：

1. **自定义尺寸**：通过 width 和 height 属性控制组件尺寸
2. **禁用状态**：通过 disabled 属性控制禁用状态
3. **数据驱动**：通过 option 属性驱动多级菜单显示
4. **样式定制**：通过 CSS 变量支持样式定制
5. **主题适配**：通过 CSS 变量支持主题定制

## 样式细节

SelectCascader 组件在样式处理上有以下特点：

1. **过渡动画**：下拉框展开/收起时具有平滑的过渡效果
2. **响应式设计**：支持灵活的尺寸适配
3. **无障碍设计**：支持键盘导航和屏幕阅读器
4. **一致性**：与组件库其他表单组件保持样式一致性
5. **高亮显示**：选中选项具有明显的高亮效果
6. **级联指示**：子菜单项具有明确的指示箭头

## 性能优化

通过以下方式优化性能：

1. 使用 computed 属性缓存计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 合理使用事件监听器的添加和移除
6. 延迟计算菜单位置

## 设计价值

SelectCascader 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Select、SelectTime、SelectDate、PickColor、Rate、Switch、Checkbox、Radio 等其他组件保持一致的设计语言

SelectCascader 组件提供了一套完整的级联选择解决方案，专注于用户级联选择体验的优化，为用户提供了一套强大、灵活且易用的级联选择组件。通过合理的抽象和分层设计，组件具备了良好的可维护性和扩展性。
