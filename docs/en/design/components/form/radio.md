# Radio Component Design

## Overview

The Radio component is a form component in this component library used for single selection. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It achieves powerful and flexible radio control functionality through core Hooks such as useInputState and useInputClasses.

The Radio component focuses on handling users' single selection operations, providing a complete and easy-to-use selection solution that supports individual radio buttons, radio groups, and button-style radio buttons in various forms.

## Design Philosophy

### Layered Architecture

The Radio component strictly follows a three-layer architecture design:

1. **Structure Layer** radio.vue, radio-group.vue, radio-button.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** radioComputed.ts - Handles complex reactive computations through Hooks
3. **Presentation Layer** radio.scss, radio-group.scss, radio-button.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Radio component abstracts complex logic into multiple core Hooks:

- useInputState - Handles input state computation
- useInputClasses - Handles class name generation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the Hooks.

## Core Feature Design

### Component Architecture

The Radio component adopts a modular design and includes the following three core components:

1. **MYRadio** - Base radio component
2. **MYRadioGroup** - Radio group container component
3. **MYRadioButton** - Button-style radio component

### Structured Props Design

The props of the Radio component are divided into multiple logical groups by function:

```typescript
// Base radio properties
export const radioProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  name: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<string>,
    default: ''
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const;
```

```typescript
// Radio group properties
export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  gap: {
    type: String,
    default: '12px',
  },
} as const
```

### Dependency Injection Mechanism

The Radio component implements parent-child component communication through Vue's dependency injection mechanism:

```typescript
// Provide context
provide('radioGroup', {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  change: updateValue
})

// Inject context
const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)
```

This design enables seamless collaboration between the radio component and its parent group component.

## Style System Design

### Base Radio Styles

The base radio adopts a classic design:

```scss
.my-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &__inner {
    width: 14px;
    height: 14px;
    border: 1px solid #dcdfe6;
    border-radius: 50%;
    background: #fff;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
  }

  &--checked {
    .my-radio__inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
```

### Button-style Radio

Button-style radio provides a modern appearance:

```scss
.my-radio-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #dcdfe6;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0;
  padding: 0 16px;
  border-radius: 0;
  outline: none;
}
```

### Layout Control

Layout direction is controlled through the radio group:

1. **Horizontal Layout** - Default layout method
2. **Vertical Layout** - Implemented via `direction="vertical"`

## Component Structure Design

### Overall Structure

The overall structure of the Radio component is as follows:

```html
<!-- Base radio -->
<label class="my-radio">
  <span class="my-radio__input">
    <input class="my-radio__original" type="radio" />
    <span class="my-radio__inner"></span>
  </span>
  <span class="my-radio__label">
    <slot></slot>
  </span>
</label>

<!-- Radio group -->
<div class="my-radio-group">
  <slot></slot>
</div>
```

### Button-style Structure

Button-style radio has a special structure:

```html
<label class="my-radio-button">
  <input class="my-radio-button__original" type="radio" />
  <span class="my-radio-button__inner">
    <slot></slot>
  </span>
</label>
```

## Interaction Design

### Checked State Toggling

The Radio component supports clicking to toggle the checked state:

```typescript
function handleClick() {
  if (isDisabled.value) return

  if (isGroup.value) {
    radioGroup!.change?.(props.value)
  } else {
    emit('update:modelValue', props.value)
    emit('change', props.value)
  }
}
```

### Disabled State

The Radio component supports disabled state:

1. **Component-level disabling** - Controlled via the disabled property
2. **Group-level disabling** - Controlled via the disabled property of MYRadioGroup

### Keyboard Navigation

The Radio component supports keyboard navigation:

1. **Tab Key** - Switch focus between components
2. **Space Key** - Select the currently focused radio button

## Extensibility Design

The Radio component has excellent extensibility:

1. **Multiple Presentation Forms**: Supports base radio and button-style radio
2. **Flexible Layout Control**: Supports horizontal and vertical layouts
3. **Size Control**: Supports multiple size options
4. **State Control**: Supports disabled state
5. **Theme Adaptation**: Supports theme customization through CSS variables
6. **Combined Usage**: Seamlessly integrates with form components

## Style Details

The Radio component has the following characteristics in style handling:

1. **Standardized Design**: Adopts industry-standard radio styles
2. **Animation Effects**: Smooth animation when toggling checked state
3. **Responsive Design**: Supports flexible layout control
4. **Accessibility Design**: Supports keyboard navigation and screen readers
5. **Consistency**: Maintains style consistency with other form components in the component library

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent hooks
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably use dependency injection to reduce inter-component passing

## Design Value

The Radio component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through hooks
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Input and Form
