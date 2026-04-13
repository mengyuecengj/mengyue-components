# Switch

## Introduction

The switch component is used for users to toggle between two states. mengyue-components has encapsulated this component and conducted vitest testing.
You can use `<MYSwitch></MYSwitch>` or `<MYSwitch />` to implement a switch.

## Basic Usage

Use `v-model` to bind the switch state.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYSwitch v-model='value1' />
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSwitch v-model="value1" />
    </div>
  </template>
</ShowCode>

## Switch with Text

Use `text` to define the text displayed on the switch.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYSwitch v-model='value2' text='T' />
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSwitch v-model="value2" text="T" />
    </div>
  </template>
</ShowCode>

## Custom Text Content

Use slots to customize the text content of the switch.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYSwitch v-model='slotValue'>
    Custom Text
  </MYSwitch>
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSwitch v-model="slotValue">
        Custom Text
      </MYSwitch>
    </div>
  </template>
</ShowCode>

## Sizing

Use `size` to define the size, with multiple sizes provided by mengyue-components.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px; align-items: flex-start;'>
    <MYSwitch v-model='sizeMini' size='mini' text='S' />
    <MYSwitch v-model='sizeSupersmall' size='supersmall' text='S' />
    <MYSwitch v-model='sizeSmall' size='small' text='M' />
    <MYSwitch v-model='sizeMedium' size='medium' text='L' />
    <MYSwitch v-model='sizeLarge' size='large' text='XL' />
    <MYSwitch v-model='sizeBiglarge' size='biglarge' text='XL' />
    <MYSwitch v-model='sizeSuperlarge' size='superlarge' text='XL' />
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px; align-items: flex-start;">
      <MYSwitch v-model="sizeMini" size="mini" text="S" />
      <MYSwitch v-model="sizeSupersmall" size="supersmall" text="S" />
      <MYSwitch v-model="sizeSmall" size="small" text="M" />
      <MYSwitch v-model="sizeMedium" size="medium" text="L" />
      <MYSwitch v-model="sizeLarge" size="large" text="XL" />
      <MYSwitch v-model="sizeBiglarge" size="biglarge" text="XL" />
      <MYSwitch v-model="sizeSuperlarge" size="superlarge" text="XL" />
    </div>
  </template>
</ShowCode>

## Disabled State

### Disabled Switch

Use `disabled` to disable the switch.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 20px;'>
    <MYSwitch v-model='disabledValue1' disabled />
    <MYSwitch v-model='disabledValue2' disabled :modelValue='true' />
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYSwitch v-model="disabledValue1" disabled />
      <MYSwitch v-model="disabledValue2" disabled :modelValue="true" />
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Switch state value | boolean | — | `false` |
| value | Custom value | boolean \| string \| number | — | `false` |
| size | Size | string | `mini`/`supersmall`/`small`/`medium`/`large`/`biglarge`/`superlarge` | — |
| text | Text | string | — | — |
| disabled | Disabled state | boolean | — | `false` |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| update:modelValue | Triggered when state changes | (value: boolean) |

### Type Definitions

```typescript
interface SwitchProps {
  modelValue?: boolean;
  value?: boolean | string | number;
  size?: string;
  text?: string;
  disabled?: boolean;
}
```

<script setup>
import MYSwitch from '../../../packages/components/switch/src/switch.vue'
import { ref, watch, nextTick } from 'vue' 
const value1 = ref(true) 
const value2 = ref(true) 
const slotValue = ref(false) 
const sizeMini = ref(false) 
const sizeSupersmall = ref(false) 
const sizeSmall = ref(true) 
const sizeMedium = ref(false) 
const sizeLarge = ref(true) 
const sizeBiglarge = ref(false) 
const sizeSuperlarge = ref(true) 
const disabledValue1 = ref(false) 
const disabledValue2 = ref(true) 
const customValue = ref(true) 
const combinedValue1 = ref(true) 
const combinedValue2 = ref(false) 
const combinedValue3 = ref(true) 
const forceUpdate = () => { 
    nextTick(() => { 
    }) 
} 
watch([ value1, value2, slotValue, sizeMini, sizeSupersmall, sizeSmall, sizeMedium, sizeLarge, sizeBiglarge, sizeSuperlarge, disabledValue1, disabledValue2, customValue, combinedValue1, combinedValue2, combinedValue3 ], () => { 
    forceUpdate() 
})
</script>