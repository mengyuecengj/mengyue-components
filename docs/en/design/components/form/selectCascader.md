# SelectCascader Component Design Document

## Overview

The SelectCascader component is an interactive component in this component library used for cascader selection. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use cascader selection solution through core logic such as useSelectCascader.

The SelectCascader component focuses on handling users' cascader selection operations, providing an intuitive and visually appealing multi-level linked selection feature that supports custom sizes, disabled state, multi-level menus, and option highlighting.

## Design Philosophy

### Layered Architecture

The SelectCascader component strictly follows a three-layer architecture design:

1. **Structure Layer** selectCascader.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** selectCascaderComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** selectCascader.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The SelectCascader component abstracts complex logic into core functions:

- useSelectCascader - Handles the core logic of the cascader selector
- useStyleComputed - Handles style computation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the SelectCascader component is concise and clear:

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
    options: {  // Added options property
        type: Array as PropType<Option[]> | undefined,
        required: true
    }
};
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### Data Structure Design

The SelectCascader component uses a tree data structure:

```typescript
export interface Option {
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: Option[];
}
```

This structure supports unlimited levels of cascader selection.

## Style System Design

### CSS Style Control

The SelectCascader component implements style control through SCSS:

1. **Dark Theme** - Default dark background and light text
2. **Hover Effect** - Background color change when mouse hovers
3. **Focus Effect** - Border highlight when focused
4. **Disabled State** - Visual effect when option is disabled

### Size System

The SelectCascader component supports flexible size control:

1. **Default Size** - 260px × 40px
2. **Custom Size** - Supports px, em, % and other units
3. **Responsive Design** - Supports adaptation to different screen sizes

### State Styles

The SelectCascader component provides corresponding styles according to different states:

1. **Default State** - Standard dropdown style
2. **Hover State** - Style when mouse hovers
3. **Focus State** - Style when focused
4. **Disabled State** - Semi-transparent effect when disabled
5. **Expanded State** - Arrow rotation effect when the dropdown is expanded

## Component Structure Design

### Overall Structure

The overall structure of the SelectCascader component is as follows:

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
        <!-- Second-level menu -->
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
        <!-- Third-level menu -->
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

### Menu Structure

The menu structure at all levels is unified:

```html
<div v-for="item in options" :key="item.value" class="select-option"
    :class="{ 'is-disabled': item.disabled || disabled }" @mouseenter="() => handleMouseenter(item)">
    <div class="label" @click="() => handleClick(item)">
        {{ item.label }}
        <span v-if="item.children" class="arrow-icon">▶</span>
    </div>
</div>
```

## Interaction Design

### Dropdown Expand/Collapse

The SelectCascader component supports clicking to expand/collapse the dropdown:

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

### Cascader Selection

The SelectCascader component supports multi-level linked selection:

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

### Option Selection

The SelectCascader component supports clicking to select an option:

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

## Extensibility Design

The SelectCascader component has excellent extensibility:

1. **Custom Size**: Control component size through width and height properties
2. **Disabled State**: Control disabled state through the disabled property
3. **Data Driven**: Drive multi-level menu display through the options property
4. **Style Customization**: Support style customization through CSS variables
5. **Theme Adaptation**: Supports theme customization through CSS variables

## Style Details

The SelectCascader component has the following characteristics in style handling:

1. **Transition Animation**: Smooth transition effects when the dropdown expands/collapses
2. **Responsive Design**: Supports flexible size adaptation
3. **Accessibility Design**: Supports keyboard navigation and screen readers
4. **Consistency**: Maintains style consistency with other form components in the component library
5. **Highlighting**: Selected options have obvious highlight effects
6. **Cascader Indication**: Sub-menu items have clear indicator arrows

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners
6. Delay menu position calculation

## Design Value

The SelectCascader component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Select, SelectTime, SelectDate, PickColor, Rate, Switch, Checkbox, and Radio
