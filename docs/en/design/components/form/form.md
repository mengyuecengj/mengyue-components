# Form Component Design Document

## Overview

The Form component is the core component in this component library for form management and validation. It continues the consistent design philosophy of our component library, adopting the principles of "separation of concerns" and "logic abstraction." It implements a complete and easy-to-use form management solution through core logic such as useFormComputed and useFormItemComputed.

The Form component focuses on handling form data collection, validation, and submission operations, providing users with a powerful and flexible form management functionality that supports data binding, validation rules, error prompts, and form control.

## Design Philosophy

### Layered Architecture

The Form component strictly follows a three-layer architecture design:

1. **Structure Layer** form.vue, formItem.vue - Responsible for the component's DOM structure and basic layout
2. **Logic Layer** formComputed.ts, formItemComputed.ts - Handles complex reactive computations and interaction logic
3. **Presentation Layer** form.scss, formItem.scss - Defines the component's visual presentation and style rules

### Logic Abstraction

The Form component abstracts complex logic into core functions:

- useFormComputed - Handles the core logic of the form
- useFormItemComputed - Handles the core logic of form items
- useClassComputed - Handles dynamic class name generation

This design allows the component itself to only declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design of the Form component is concise and clear:

```typescript
export const formProps = {
  /** Form binding data */
  modelValue: {
    type: Object as PropType<FormModelValue>,
    default: getDefaultModelValue,
    required: true,
  },
  /** Validation rules */
  rules: {
    type: Object as PropType<FormRules>,
    default: getDefaultRules,
    validator: validateRules,
  },
  /** Label width, supports pixel values and `auto` */
  labelWidth: {
    type: [String, Number] as PropType<LabelWidth>,
    default: 'auto',
    validator: validateLabelWidth,
  },
  /** Whether to use inline layout */
  inline: {
    type: Boolean,
    default: false,
  },
  /** Size, optional large, medium, small, mini */
  size: {
    type: String as PropType<FormSize>,
    default: 'medium',
  },
  /** Whether to disable */
  disabled: {
    type: Boolean,
    default: false,
  },
}
```

FormItem component props design:

```typescript
export const formItemProps = {
  ...formProps,
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  validateTrigger: {
    type: String as PropType<ValidateTrigger>,
    default: 'blur'
  },
  // ...
}
```

This design provides sufficient flexibility and supports multiple usage scenarios.

### Dependency Injection Mechanism

The Form component implements parent-child component communication through Vue's dependency injection mechanism:

```typescript
// Provide context
provide('form', reactive({
  ...toRefs(props),
  emit,
  formRef,
  validate,
  validateField,
  resetFields,
  clearValidate,
  emitter,
  formClass,
  updateFieldValue,
}))

// Inject context
const form = inject<FormContext>('form')
if (!form) {
  throw new Error('FormItem must be used inside Form component')
}
```

This design enables seamless collaboration between the FormItem component and its parent Form component.

## Style System Design

### CSS Variable Control

The Form component implements style control through CSS variables:

1. `--label-width` - Label width control

### Layout System

The Form component supports flexible layout control:

1. **Block-level layout** - Default vertical arrangement
2. **Inline layout** - Horizontal arrangement controlled by the inline property

### State Styles

The Form component provides corresponding styles according to different states:

1. **Default state** - Standard form style
2. **Disabled state** - Semi-transparent effect when disabled
3. **Error state** - Red border when validation fails

## Component Structure Design

### Overall Structure

The overall structure of the Form component is as follows:

```html
<form ref="formRef" :class="formClass" :style="{ '--label-width': labelWidth }">
  <slot />
</form>
```

FormItem component structure:

```html
<div ref="formItemRef" :class="formItemClass">
  <label v-if="props.label" :for="props.prop" class="my-form-item__label" :style="{ width: labelWidth }">
    {{ props.label }}
  </label>
  <div class="my-form-item__control">
    <slot />
    <div v-if="errorMessage" class="my-form-item__error">{{ errorMessage }}</div>
  </div>
</div>
```

### Component Hierarchy

The Form component contains two main parts:

1. **Container** - `.my-form` - Wraps the entire form
2. **Form Item** - `.my-form-item` - Form item containing label and control
3. **Label** - `.my-form-item__label` - Form item label
4. **Control Container** - `.my-form-item__control` - Contains the actual control and error message
5. **Error Message** - `.my-form-item__error` - Displays validation error messages

## Interaction Design

### Form Validation

The Form component supports multiple validation methods:

```typescript
async function validateField(prop: string) {
  if (!props.rules || !props.rules[prop]) return true

  const rules = props.rules[prop] as FormRule[]
  const model = props.modelValue as Record<string, any>
  const value = model[prop]

  for (const rule of rules) {
    if (typeof rule === 'object') {
      const { required, message, validator, len } = rule

      // Required validation
      if (required && (value === undefined || value === null || value === '')) {
        throw new Error(message || `${prop} is required`)
      }

      // Length validation
      if (len !== undefined && value !== undefined && value !== null) {
        if (typeof value === 'string' && value.length !== len) {
          throw new Error(message || `${prop} length must be ${len}`)
        }
      }

      // Custom validator
      if (validator) {
        const result = await validator(rule, value)
        if (!result) throw new Error(message || `${prop} validation failed`)
      }
    }
  }
  return true
}
```

### Form Reset

The Form component supports form reset:

```typescript
function resetFields() {
  const model = props.modelValue as unknown as Record<string, string>
  const newModel = { ...model } // Shallow copy is sufficient if fields are primitive types
  Object.keys(newModel).forEach(key => {
    newModel[key] = ''
  })
  emit('update:modelValue', newModel)
  clearValidate()
  emit('reset-fields')
}
```

### Clear Validation

The Form component supports clearing validation status:

```typescript
function clearValidate(field?: string) {
  emitter.emit('clear-validate', field)
  emit('clear-validate', field)
}
```

## Extensibility Design

The Form component has excellent extensibility:

1. **Data Binding**: Two-way data binding through the modelValue property
2. **Validation Rules**: Define validation rules through the rules property
3. **Layout Control**: Control layout method through the inline property
4. **Size Control**: Control component size through the size property
5. **Disabled State**: Control disabled state through the disabled property
6. **Label Width**: Control label width through the labelWidth property
7. **Validation Trigger**: Control validation trigger timing through the validateTrigger property

## Style Details

The Form component has the following characteristics in style handling:

1. **Responsive Design**: Supports flexible layout adaptation
2. **Consistency**: Maintains style consistency with other form components in the component library
3. **Error Feedback**: Clear visual feedback when validation fails
4. **Accessibility Design**: Supports keyboard navigation and screen readers

## Performance Optimization

Performance is optimized through the following methods:

1. Use computed properties to cache calculation results
2. Move complex logic to independent functions
3. Avoid unnecessary re-renders
4. Use Vue 3 Composition API to improve runtime efficiency
5. Reasonably add and remove event listeners
6. Use mitt to implement an event bus to reduce direct communication between components

## Design Value

The Form component continues the design philosophy of our component library:

1. **Separation of concerns**: Structure, styles, and logic are completely decoupled
2. **High reusability**: Abstract common logic through functions
3. **Easy maintenance**: Clear code structure and naming conventions
4. **Strong extensibility**: Supports rich customization options
5. **Consistency**: Maintains a consistent design language with other form components such as Input, Select, Switch, Checkbox, and Radio
