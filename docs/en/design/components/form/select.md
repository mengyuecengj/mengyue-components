# Select Component Design Document

## Overview

The Select component is an interactive component in this component library used for dropdown selection. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use dropdown selection solution through core logic such as useStyleComputed.

The Select component focuses on handling users' option selection operations, providing an intuitive and visually appealing dropdown selection feature that supports custom sizes, disabled state, scrollbar control, and option highlighting.

## Design Philosophy

### Layered Architecture

The Select component strictly follows a three-layer architecture design:

1. **Structure Layer** select.vue, option.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** select.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** select.scss, option.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Select component abstracts complex logic into core functions:

- useStyleComputed - Handles style computation
- Dependency injection mechanism - Implements parent-child component communication

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the Select component is concise and clear:

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

This design provides sufficient flexibility and supports multiple usage scenarios.

### Dependency Injection Mechanism

The Select component implements parent-child component communication through Vue's dependency injection mechanism:

```typescript
// Provide context
provide('select', {
    selectOption,
    currentValue: computed(() => props.modelValue),
    disabled: computed(() => props.disabled),
    width: computed(() => props.width),
    height: computed(() => props.height)
})

// Inject context
const ctx = inject<SelectContext>('select')
if (!ctx) {
    throw new Error('MYOption must be used inside MYSelect')
}
```

This design enables seamless collaboration between the Option component and its parent Select component.

## Style System Design

### CSS Variable Control

The Select component implements style control through CSS variables:

1. `--text-color` - Text color
2. `--dropdown-bg-color` - Dropdown background color
3. `--hover-bg-color` - Hover background color
4. `--active-color` - Active state color
5. `--option-bg-color` - Option background color
6. `--option-hover-bg-color` - Option hover background color

### Size System

The Select component supports flexible size control:

1. **Default Size** - 260px × 40px
2. **Custom Size** - Supports px, em, % and other units
3. **Responsive Design** - Supports adaptation to different screen sizes

### State Styles

The Select component provides corresponding styles according to different states:

1. **Default State** - Standard dropdown style
2. **Hover State** - Style when mouse hovers
3. **Focus State** - Style when focused
4. **Disabled State** - Semi-transparent effect when disabled
5. **Expanded State** - Arrow rotation effect when the dropdown is expanded

## Component Structure Design

### Overall Structure

The overall structure of the Select component is as follows:

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

### Option Structure

The structure of the Option component is as follows:

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

## Interaction Design

### Dropdown Expand/Collapse

The Select component supports clicking to expand/collapse the dropdown:

```typescript
const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
    if (dropdownVisible.value) {
        checkScrollbarVisibility()
        // Recalculate selected label when dropdown is opened
        updateSelectedLabel()
    }
}
```

### Option Selection

The Option component supports clicking to select an option:

```typescript
const handleClick = () => {
    if (!props.disabled && !selectDisabled.value) {
        selectOption(props.value, props.label || String(props.value))
    }
}
```

### Scrollbar Control

The Select component supports automatic scrollbar control:

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
    })
}
```

## Extensibility Design

The Select component has excellent extensibility:

1. **Custom Size**: Control component size through width and height properties
2. **Disabled State**: Control disabled state through the disabled property
3. **Scrollbar Control**: Control scrollbar display through the autoScrollbar property
4. **Style Customization**: Control styles through properties such as backgroundColor, hoverbackgroundColor, and borderColor
5. **Option Customization**: Support custom option content through slots
6. **Theme Adaptation**: Supports theme customization through CSS variables

## Style Details

The Select component has the following characteristics in style handling:

1. **Transition Animation**: Smooth transition effects when the dropdown expands/collapses
2. **Responsive Design**: Supports flexible size adaptation
3. **Accessibility Design**: Supports keyboard navigation and screen readers
4. **Consistency**: Maintains style consistency with other form components in the component library
5. **Highlighting**: Selected options have obvious highlight effects

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners
6. Delay scrollbar visibility calculation

## Design Value

The Select component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as PickColor, Rate, Switch, Checkbox, and Radio
