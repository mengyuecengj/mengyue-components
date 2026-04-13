# Input Component Design

## Overview

The Input component is a basic form component in this component library used for data input. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It achieves powerful and flexible input control functionality through core Hooks such as useClassComputed and useStyleComputed.

The Input component focuses on handling users' text input operations, providing a complete and easy-to-use data entry solution that supports multiple input types, state control, and interaction features.

## Design Philosophy

### Layered Architecture

The Input component strictly follows a three-layer architecture design:

1. **Structure Layer** input.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** inputComputed.ts - Handles complex reactive computations through Hooks
3. **Presentation Layer** input.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Input component abstracts complex style logic into multiple core Hooks:

- useClassComputed - Handles dynamic class name generation
- useStyleComputed - Handles dynamic style generation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the Hooks.

## Core Feature Design

### Structured Props Design

The props of the Input component are divided into multiple logical groups by function:

```typescript
// Input type and tag
const typeAndTagProps = {
  type: {
    type: String as PropType<string>,
    default: 'text'
  },
  tag: {
    type: String as PropType<string>,
    default: 'input'
  },
  textColor: {
    type: String as PropType<string>,
    default: ''
  }
}

// Size related
const sizeProps = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '100%'
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: '30px'
  }
}

// State control
const stateProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
}
```

This grouping method makes the code structure clearer and facilitates subsequent feature extensions.

### Input Type Support

The Input component supports multiple input types:

1. **Text Input** - Default text input box
2. **Password Input** - Supports password visibility toggling
3. **Multi-line Text** - Implemented via `tag="textarea"`
4. **Number Input** - Implemented via `type="number"`

### State Control Features

The Input component provides rich state control features:

1. **Clear Function** - Enable clear button via the clearable property
2. **Password Visibility Toggle** - Enable password visibility toggle via the showPassword property
3. **Disabled State** - Control disabled state via the disabled property
4. **Word Count** - Implement word count via wordLimit and maxlength properties

## Style System Design

### CSS Variable Control

The Input component implements style control through CSS variables:

1. `--my-input-placeholder` - Placeholder color control

### Size Control

The Input component supports flexible size control:

1. **Width Control** - Supports pixel values, percentages, and other units
2. **Height Control** - Supports pixel values, percentages, and other units

### State Styles

The Input component provides corresponding styles according to different states:

1. **Default State** - Standard input box style
2. **Focus State** - Border and shadow effects when focused
3. **Hover State** - Border effect when mouse hovers
4. **Disabled State** - Semi-transparent effect when disabled

## Component Structure Design

The Input component adopts a wrapper pattern design:

```html
<div class="my-input-wrapper">
  <component :is="props.tag" class="my-input" />
  <div v-if="hasAnySuffix" class="my-input__suffix">
    <!-- Suffix icons -->
  </div>
</div>
```

This design allows the component to support multiple input types (input, textarea, etc.) and display functional icons through the suffix area.

## Interaction Design

### Clear Function

The Input component supports one-click clear functionality:

1. Show clear button when mouse hovers
2. Click the clear button to clear input content
3. Automatically focus the input box after clearing

### Password Visibility Toggle

The Input component supports password visibility toggle:

1. Click the eye icon to toggle password visibility
2. Control input type through showView state

### Word Count

The Input component supports word count functionality:

1. Display current input character count and maximum limit
2. Highlight when approaching the limit

## Extensibility Design

The Input component has excellent extensibility:

1. **Custom Tag Support**: Can render as different HTML elements through the tag prop
2. **Comprehensive Style Control**: Supports full style settings such as width, height, and text color
3. **State Control**: Supports multiple state controls such as disabled, clearable, and password visibility
4. **Feature Extension**: Supports additional features such as word count and placeholder color
5. **Theme Adaptation**: Supports theme customization through CSS variables

## Style Details

The Input component has the following characteristics in style handling:

1. **Standardized Design**: Adopts industry-standard input box styles
2. **Responsive Design**: Supports flexible width and height control
3. **Interaction Feedback**: Provides interaction state feedback such as focus and hover
4. **Accessibility Design**: Supports keyboard navigation and screen readers
5. **Icon Layout**: Reasonably layouts functional icons through the suffix area

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent hooks
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners

## Design Value

The Input component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through hooks
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other components such as Form and Button
