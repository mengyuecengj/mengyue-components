# Switch Component Design Document

## Overview

The Switch component is a form component in this component library used for binary state toggling. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It achieves powerful and flexible switch control functionality through core Hooks such as useClassComputed and useStyleComputed.

The Switch component focuses on handling users' binary state toggling operations, providing a complete and easy-to-use state switching solution that supports multiple sizes, disabled state, and text display.

## Design Philosophy

### Layered Architecture

The Switch component strictly follows a three-layer architecture design:

1. **Structure Layer** switch.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** switchComputed.ts - Handles complex reactive computations through Hooks
3. **Presentation Layer** switch.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Switch component abstracts complex logic into multiple core Hooks:

- useClassComputed - Handles dynamic class name generation
- useStyleComputed - Handles dynamic style generation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the Hooks.

## Core Feature Design

### Structured Props Design

The props design of the Switch component is concise and clear:

```typescript
export const switchProps = {
    modelValue: {
        type: Boolean,
        default: false
    },
    value: {
        type: [Boolean, String, Number],
        default: false
    },
    size: {
        type: String,
        default: undefined
    },
    text: {
        type: String,
        default: undefined
    },
    disabled: {
        type: Boolean,
        default: false 
    }
}
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### State Management

The Switch component manages core states through computed properties:

```typescript
// Basic state
const isChecked = computed(() => Boolean(props.modelValue))
const isDisabled = computed(() => Boolean(props.disabled))
```

This design ensures state consistency and reactivity.

### Form Integration

The Switch component supports integration with form components:

```typescript
// Form context injection
const formItemContext = inject<Partial<FormItemContext> | null>('myFormItemContext', null)

// Listen for prop changes, only used to clear validation
watch(() => props.modelValue, () => {
  formItemContext?.clearValidate?.()
})
```

## Style System Design

### CSS Variable Control

The Switch component implements style control through CSS variables:

1. `--my-switch-text` - Text content control

### Size System

The Switch component supports multiple sizes:

1. **mini** - Minimum size
2. **supersmall** - Extra small size
3. **small** - Small size
4. **medium** - Medium size (default)
5. **large** - Large size
6. **biglarge** - Extra large size
7. **superlarge** - Extra extra large size

### State Styles

The Switch component provides corresponding styles according to different states:

1. **Default State** - Style when turned off
2. **Checked State** - Style when turned on
3. **Disabled State** - Semi-transparent effect when disabled

## Component Structure Design

The Switch component adopts a classic switch structure:

```html
<label class="my-switch" :class="[classSwitch, { 'is-checked': isChecked }]" :style="styleSwitch">
  <input type="checkbox" hidden :checked="isChecked" :disabled="isDisabled" @change="onInput" />
  <span class="slider">
    <span v-if="props.text" class="slider-text">{{ props.text }}</span>
  </span>
  <span class="text">
    <slot />
  </span>
</label>
```

This structure leverages the semantic features of the native checkbox while achieving a beautiful visual effect through CSS.

## Interaction Design

### State Toggling

The Switch component supports clicking to toggle state:

```typescript
const onInput = () => {
  if (isDisabled.value) return
  
  const newValue = !isChecked.value
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
```

### Disabled State

The Switch component supports disabled state:

```scss
input:disabled + .slider {
  opacity: 0.5;
  cursor: not-allowed !important;
}
```

### Keyboard Navigation

The Switch component supports keyboard navigation:

1. **Tab Key** - Switch focus between components
2. **Space Key** - Toggle switch state

## Extensibility Design

The Switch component has excellent extensibility:

1. **Multiple Size Support**: Supports multiple sizes from mini to superlarge
2. **Text Display**: Supports displaying custom text on the switch
3. **Disabled State**: Supports disabled state control
4. **Slot Support**: Supports adding extra text through slots
5. **Theme Adaptation**: Supports theme customization through CSS variables
6. **Form Integration**: Seamlessly integrates with form components

## Style Details

The Switch component has the following characteristics in style handling:

1. **Smooth Animation**: Smooth transition animation when the switch toggles
2. **Responsive Design**: Supports multiple size adaptations
3. **Accessibility Design**: Supports keyboard navigation and screen readers
4. **Text Positioning**: Text on the switch moves with state changes
5. **Consistency**: Maintains style consistency with other form components in the component library

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent hooks
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners

## Design Value

The Switch component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through hooks
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Checkbox, Radio, and Input
