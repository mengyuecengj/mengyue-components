# PickColor Component Design Document

## Overview

The PickColor component is an interactive component in this component library used for color selection. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use color selection solution through core logic such as useInputStyle.

The PickColor component focuses on handling users' color selection operations, providing an intuitive and visually appealing color selection feature that supports custom sizes, opacity control, circular display, and global theme application.

## Design Philosophy

### Layered Architecture

The PickColor component strictly follows a three-layer architecture design:

1. **Structure Layer** pickColor.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** pickColorComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** pickColor.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The PickColor component abstracts complex logic into core functions:

- useInputStyle - Handles style computation for the color picker

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the PickColor component is concise and clear:

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

This design provides sufficient flexibility and supports multiple usage scenarios.

### State Management

The PickColor component manages core states through reactive data:

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

This design ensures state consistency and reactivity.

## Style System Design

### CSS Style Control

The PickColor component controls styles through the useStyleComputed Hook:

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
        style.height = `${sizeValue}${unit}`

        const opacityValue = Math.min(Math.max(parseFloat(String(props.rgba)) || 1, 0), 1)
        style.opacity = String(opacityValue)
      }
    }
  )
}
```

### Size System

The PickColor component supports flexible size control:

1. **Default Size** - 50px × 50px
2. **Custom Size** - Supports px, em, % and other units
3. **Square Design** - Width and height are always kept consistent

### Shape Control

The PickColor component supports two shapes:

1. **Square** - Default shape
2. **Circle** - Controlled by the circle property

## Component Structure Design

The PickColor component adopts a clean structure design:

```html
<div class="color-picker">
  <input type="color" v-model="localColor" @input="onChange" />
</div>
```

This structure leverages the native color input functionality while achieving a beautiful appearance through CSS styling.

## Interaction Design

### Color Selection

The PickColor component uses the native color input to implement color selection:

```typescript
function onChange() {
  // Already handled by watch(localColor)
}
```

### Global Theme Application

The PickColor component supports applying the selected color as a global theme:

```typescript
function applyGlobalColor(value: string) {
  if (!value) return
  const { r, g, b, a } = parseColor(value)
  const cssValue = `rgba(${r}, ${g}, ${b}, ${a})`

  document.documentElement.style.setProperty('--app-primary-color', cssValue)
  document.documentElement.style.setProperty('--el-color-primary', cssValue)
  document.documentElement.style.setProperty('--myswitch-active', cssValue)

  // Calculate contrast color
  const L = 0.299 * r + 0.587 * g + 0.114 * b
  const contrast = L > 186 ? '#000' : '#fff'
  document.documentElement.style.setProperty('--on-primary-text', contrast)
}
```

### Local Storage

The PickColor component supports saving the selected color to local storage:

```typescript
// Save to localStorage
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

## Extensibility Design

The PickColor component has excellent extensibility:

1. **Custom Size**: Control component size through the size property
2. **Opacity Control**: Control opacity through the rgba property
3. **Shape Control**: Control shape through the circle property
4. **Border Control**: Control border display through the noBorder property
5. **Global Theme**: Supports applying color as global theme
6. **Local Storage**: Supports persisting the selected color

## Style Details

The PickColor component has the following characteristics in style handling:

1. **Native Foundation**: Implements core functionality based on native color input
2. **Style Customization**: Achieves beautiful appearance through CSS
3. **Responsive Design**: Supports flexible size adaptation
4. **Accessibility Design**: Utilizes native input accessibility features
5. **Consistency**: Maintains style consistency with other form components in the component library

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners

## Design Value

The PickColor component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Rate, Switch, Checkbox, and Radio
