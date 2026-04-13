# Checkbox
## Brief Introduction
The `checkbox` component is used for users to select one or more options from multiple choices. `mengyue-components` has encapsulated it and performed `vitest` testing.
There are two ways to implement checkbox tags:
`<MYCheckbox />` or `<MYCheckbox></MYCheckbox>`
`<MYCheckbox-group />` or `<MYCheckbox-group></MYCheckbox-group>` for checkbox groups.

## Basic Usage
### Single Checkbox
Use `modelValue` to bind the value of a single checkbox.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCheckbox v-model='singleChecked'>Single Checkbox</MYCheckbox>
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYCheckbox v-model="singleChecked">Single Checkbox</MYCheckbox>
    </div>
  </template>
</ShowCode>

### Checkbox Group
Use `<MYCheckbox-group></MYCheckbox-group>` to group checkboxes together.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues1'>
    <MYCheckbox value='option1'>Option 1</MYCheckbox>
    <MYCheckbox value='option2'>Option 2</MYCheckbox>
    <MYCheckbox value='option3'>Option 3</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues1">
      <MYCheckbox value="option1">Option 1</MYCheckbox>
      <MYCheckbox value="option2">Option 2</MYCheckbox>
      <MYCheckbox value="option3">Option 3</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## Layout Direction
### Vertical Arrangement
Use `direction="vertical"` to arrange checkboxes vertically.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues2' direction='vertical'>
    <MYCheckbox value='apple'>Apple</MYCheckbox>
    <MYCheckbox value='banana'>Banana</MYCheckbox>
    <MYCheckbox value='orange'>Orange</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues2" direction="vertical">
      <MYCheckbox value="apple">Apple</MYCheckbox>
      <MYCheckbox value="banana">Banana</MYCheckbox>
      <MYCheckbox value="orange">Orange</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## Disabled State
### Disable Entire Group
Disable the entire checkbox group.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues3' disabled>
    <MYCheckbox value='red'>Red</MYCheckbox>
    <MYCheckbox value='green'>Green</MYCheckbox>
    <MYCheckbox value='blue'>Blue</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues3" disabled>
      <MYCheckbox value="red">Red</MYCheckbox>
      <MYCheckbox value="green">Green</MYCheckbox>
      <MYCheckbox value="blue">Blue</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## Custom Spacing
Use the `gap` property to control the spacing between checkboxes.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues5' gap='72px'>
    <MYCheckbox value='cat'>Cat</MYCheckbox>
    <MYCheckbox value='dog'>Dog</MYCheckbox>
    <MYCheckbox value='bird'>Bird</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues5" gap="72px">
      <MYCheckbox value="cat">Cat</MYCheckbox>
      <MYCheckbox value="dog">Dog</MYCheckbox>
      <MYCheckbox value="bird">Bird</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## API Reference

### MYCheckboxGroup Props

| Parameter   | Description        | Type     | Options                           | Default      |
|-------------|--------------------|----------|-----------------------------------|--------------|
| modelValue  | Bound value        | array    | —                                 | `[]`         |
| direction   | Layout direction   | string   | `horizontal` / `vertical`         | `horizontal` |
| disabled    | Whether disabled   | boolean  | —                                 | `false`      |
| gap         | Spacing            | string   | Supports CSS units                | `12px`       |

### MYCheckbox Props
| Parameter   | Description        | Type               | Options   | Default |
|-------------|--------------------|--------------------|-----------|---------|
| modelValue  | Bound value        | boolean            | —         | `false` |
| value       | Option value       | string \| number   | —         | —       |
| disabled    | Whether disabled   | boolean            | —         | `false` |

### Type Definitions

```typescript
interface CheckboxGroupProps {
  modelValue?: (string | number)[];
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  gap?: string;
}

interface CheckboxProps {
  modelValue?: boolean;
  value?: string | number;
  disabled?: boolean;
}
```
<script setup>
import { ref, watch, nextTick } from 'vue'
import MYCheckboxGroup from '../../../packages/components/checkbox/src/checkbox-group.vue'
import MYCheckbox from '../../../packages/components/checkbox/src/checkbox.vue'
// Reactive data
const singleChecked = ref(true)
const selectedValues1 = ref(['option1'])
const selectedValues2 = ref([])
const selectedValues3 = ref(['red'])
const selectedValues4 = ref(['mon'])
const selectedValues5 = ref([])
const sizeSelected = ref(['default'])
const borderSelected = ref(['option1'])
const combinedSelected = ref(['1'])
const combinedBorderSelected = ref(['default']) 
// Fix reactivity issues in Vitepress
const forceUpdate = () => { 
    nextTick(() => { 
        // Force re-render
    }) 
} 
// Watch all reactive data changes to ensure reactive updates
watch([ singleChecked, selectedValues1, selectedValues2, selectedValues3, selectedValues4, selectedValues5, sizeSelected, borderSelected, combinedSelected, combinedBorderSelected ], 
() => {
     forceUpdate() 
})
</script>
