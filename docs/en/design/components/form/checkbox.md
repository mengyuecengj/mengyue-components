# Checkbox Component Design

## Overview

The Checkbox component is a form component in this component library used for multiple selections. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It achieves powerful and flexible checkbox control functionality through core Hooks such as useInputState and useInputClasses.

The Checkbox component focuses on handling users' multiple selection operations, providing a complete and easy-to-use selection solution that supports individual checkboxes, checkbox groups, and other forms.

## Design Philosophy

### Layered Architecture

The Checkbox component strictly follows a three-layer architecture design:

1. **Structure Layer** checkbox.vue, checkbox-group.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** checkboxComputed.ts - Handles complex reactive computations through Hooks
3. **Presentation Layer** checkbox.scss, checkbox-group.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Checkbox component abstracts complex logic into multiple core Hooks:

- useInputState - Handles input state computation
- useInputClasses - Handles class name generation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the Hooks.

## Core Feature Design

### Component Architecture

The Checkbox component adopts a modular design and includes the following two core components:

1. **MYCheckbox** - Base checkbox component
2. **MYCheckboxGroup** - Checkbox group container component

### Structured Props Design

The props of the Checkbox component are divided into multiple logical groups by function:

```typescript
// Base checkbox properties
export const checkboxProps = {
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    required: true
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  indeterminate: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const
```

```typescript
// Checkbox group properties
export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<Array<string | number | boolean>>,
    default: () => []
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  gap: {
    type: String as PropType<string>,
    default: '12px'
  },
} as const
```

### Dependency Injection Mechanism

The Checkbox component implements parent-child component communication through Vue's dependency injection mechanism:

```typescript
// Provide context
provide('checkboxGroup', {
  modelValue, // Keep as Ref object
  disabled: props.disabled,
  change: (value: string[]) => {
    emit('update:modelValue', value)
  }
})

// Inject context
const checkboxGroup = inject<{
  modelValue: import('vue').Ref<Array<string | number | boolean>>,
  disabled?: boolean,
  change: (val: Array<string | number | boolean>) => void
} | null>('checkboxGroup', null)
```

This design enables seamless collaboration between the checkbox component and its parent group component.

## Style System Design

### Base Checkbox Styles

The base checkbox adopts a classic design:

```scss
.my-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  .my-checkbox__inner {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    background-color: #fff;
    transition: all 0.2s;

    &::after {
      content: "";
      position: absolute;
      top: 1px;
      left: 4px;
      width: 3px;
      height: 7px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg) scale(0);
      transition: transform .15s ease-in;
    }
  }
}

.my-checkbox--checked {
  .my-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;

    &::after {
      transform: rotate(45deg) scale(1);
    }
  }
}
```

### Checkbox Group Styles

The checkbox group supports flexible layout control:

```scss
.my-checkbox-group {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;

  // Horizontal arrangement (default)
  &.is-horizontal {
    flex-direction: row;
    align-items: center;
    gap: var(--checkbox-group-gap, 12px);
  }

  // Vertical arrangement
  &.is-vertical {
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--checkbox-group-gap, 12px) * 0.8);
  }
}
```

## Component Structure Design

### Overall Structure

The overall structure of the Checkbox component is as follows:

```html
<!-- Base checkbox -->
<label class="my-checkbox">
  <span class="my-checkbox__input">
    <input type="checkbox" class="my-checkbox__original" />
    <span class="my-checkbox__inner"></span>
  </span>
  <span class="my-checkbox__label">
    <slot></slot>
  </span>
</label>

<!-- Checkbox group -->
<div class="my-checkbox-group">
  <slot></slot>
</div>
```

## Interaction Design

### Checked State Toggling

The Checkbox component supports clicking to toggle the checked state:

```typescript
const isChecked = computed<boolean>({
  get() {
    if (isGroup.value) {
      return checkboxGroup!.modelValue.value.includes(props.value)
    }
    return !!props.modelValue
  },
  set(val: boolean) {
    if (isGroup.value) {
      const groupValues = [...checkboxGroup!.modelValue.value]
      const index = groupValues.indexOf(props.value)

      if (val && index === -1) {
        groupValues.push(props.value)
      } else if (!val && index > -1) {
        groupValues.splice(index, 1)
      }

      checkboxGroup!.change(groupValues)
      emit('change', groupValues)
    } else {
      emit('update:modelValue', val)
      emit('change', val)
    }
  }
})
```

### Disabled State

The Checkbox component supports disabled state:

1. **Component-level disabling** - Controlled via the disabled prop
2. **Group-level disabling** - Controlled via the disabled prop of MYCheckboxGroup

### Indeterminate State

The Checkbox component supports indeterminate state:

```html
<span class="my-checkbox__inner" :class="{ 'is-indeterminate': indeterminate }"></span>
```

## Extensibility Design

The Checkbox component has excellent extensibility:

1. **Flexible layout control**: Supports horizontal and vertical layouts
2. **Spacing control**: Controls checkbox spacing via CSS variables
3. **State control**: Supports disabled and indeterminate states
4. **Theme adaptation**: Supports theme customization through CSS variables
5. **Combined usage**: Seamlessly integrates with form components

## Style Details

The Checkbox component has the following characteristics in style handling:

1. **Standardized design**: Adopts industry-standard checkbox styles
2. **Animation effects**: Smooth animation when toggling checked state
3. **Responsive design**: Supports flexible layout control
4. **Accessibility design**: Supports keyboard navigation and screen readers
5. **Consistency**: Maintains style consistency with other form components in the component library

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent hooks
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably use dependency injection to reduce inter-component passing

## Design Value

The Checkbox component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through hooks
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Radio, Input, and Form
