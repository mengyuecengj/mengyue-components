# Radio

## Introduction

The radio component is used for users to select one option from multiple choices. There are two tags for implementing radio buttons:
`<MYRadio />` or `<MYRadio></MYRadio>`
`<MYRadio-group>` or `<MYRadio-group></MYRadio-group>` for radio button groups

## Basic Usage

### Single Radio Button
Use `modelValue` to bind the value of the radio button.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRadio v-model='singleSelected' value='option1'>Option 1</MYRadio>
  <MYRadio v-model='singleSelected' value='option2'>Option 2</MYRadio>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYRadio v-model="singleSelected" value="option1">Option 1</MYRadio>
      <MYRadio v-model="singleSelected" value="option2">Option 2</MYRadio>
    </div>
  </template>
</ShowCode>

### Radio Button Group
Use radioGroup to group radio buttons together.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRadio-group v-model='groupSelected'>
    <MYRadio value='1'>Option 1</MYRadio>
    <MYRadio value='2'>Option 2</MYRadio>
    <MYRadio value='3'>Option 3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="groupSelected">
      <MYRadio value="1">Option 1</MYRadio>
      <MYRadio value="2">Option 2</MYRadio>
      <MYRadio value="3">Option 3</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

## Disabled State

### Individual Disabled
Disable specific radio buttons.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRadio-group v-model='disabledSelected'>
    <MYRadio value='1'>Normal Option</MYRadio>
    <MYRadio value='2' disabled>Disabled Option</MYRadio>
    <MYRadio value='3'>Normal Option</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="disabledSelected">
      <MYRadio value="1">Normal Option</MYRadio>
      <MYRadio value="2" disabled>Disabled Option</MYRadio>
      <MYRadio value="3">Normal Option</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

### Group Disabled
Disable the entire radio button group.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRadio-group v-model='groupDisabledSelected' disabled>
    <MYRadio value='1'>Disabled Option 1</MYRadio>
    <MYRadio value='2'>Disabled Option 2</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="groupDisabledSelected" disabled>
      <MYRadio value="1">Disabled Option 1</MYRadio>
      <MYRadio value="2">Disabled Option 2</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

## Layout Direction

### Vertical Layout
Use `direction="vertical"` to achieve vertical layout.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRadio-group v-model='verticalSelected' direction='vertical'>
    <MYRadio value='1'>Vertical Option 1</MYRadio>
    <MYRadio value='2'>Vertical Option 2</MYRadio>
    <MYRadio value='3'>Vertical Option 3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="verticalSelected" direction="vertical">
      <MYRadio value="1">Vertical Option 1</MYRadio>
      <MYRadio value="2">Vertical Option 2</MYRadio>
      <MYRadio value="3">Vertical Option 3</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

## Button Style

### Radio Button Style
Use `MYRadioButton` to implement button-style radio buttons.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYRadio-group v-model='buttonSelected'>
    <MYRadioButton value='1'>Button 1</MYRadioButton>
    <MYRadioButton value='2'>Button 2</MYRadioButton>
    <MYRadioButton value='3'>Button 3</MYRadioButton>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="buttonSelected">
      <MYRadioButton value="1">Button 1</MYRadioButton>
      <MYRadioButton value="2">Button 2</MYRadioButton>
      <MYRadioButton value="3">Button 3</MYRadioButton>
    </MYRadio-group>
  </template>
</ShowCode>

### Button Size
Button-style radio buttons also support size control.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <MYRadio-group v-model='buttonSizeSelected'>
      <MYRadioButton value='small' size='small'>Small Button</MYRadioButton>
      <MYRadioButton value='default' size='default'>Default Button</MYRadioButton>
      <MYRadioButton value='large' size='large'>Large Button</MYRadioButton>
    </MYRadio-group>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <MYRadio-group v-model="buttonSizeSelected">
        <MYRadioButton value="small" size="small">Small Button</MYRadioButton>
        <MYRadioButton value="default" size="default">Default Button</MYRadioButton>
        <MYRadioButton value="large" size="large">Large Button</MYRadioButton>
      </MYRadio-group>
    </div>
  </template>
</ShowCode>

## API Reference

### MYRadioGroup Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Bound value | string \| number \| boolean | — | `''` |
| direction | Layout direction | string | `horizontal`/`vertical` | `horizontal` |
| disabled | Whether disabled | boolean | — | `false` |
| textColor | Text color | string | Supports hex colors or color names | `#fff` |

### MYRadio Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Bound value | string \| number | — | `''` |
| value | Option value | string \| number | — | `''` |
| name | Native name attribute | string | — | `''` |
| disabled | Whether disabled | boolean | — | `false` |

### MYRadioButton Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Bound value | string \| number | — | `''` |
| value | Option value | string \| number | — | `''` |
| label | Display text | string | — | `''` |
| name | Native name attribute | string | — | `''` |
| size | Size | string | `small`/`default`/`large` | `default` |
| disabled | Whether disabled | boolean | — | `false` |

### Type Definitions

```typescript
interface RadioGroupProps {
  modelValue?: string | number | boolean;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  textColor?: string;
}

interface RadioProps {
  modelValue?: string | number;
  value?: string | number;
  name?: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  modelValue?: string | number;
  value?: string | number;
  label?: string;
  name?: string;
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
}
```

<script setup>
import { ref, watch, nextTick } from 'vue'
import MYRadioButton from '../../../packages/components/radio/src/radio-button.vue'
import MYRadioGroup from '../../../packages/components/radio/src/radio-group.vue'
import MYRadio from '../../../packages/components/radio/src/radio.vue'
const singleSelected = ref('option1')
const groupSelected = ref('2')
const disabledSelected = ref('1')
const groupDisabledSelected = ref('1')
const verticalSelected = ref('1')
const gapSelected = ref('1')
const sizeSelected = ref('default')
const buttonSelected = ref('1')
const buttonSizeSelected = ref('default')
const colorSelected = ref('1')
const combinedSelected = ref('1')
const combinedButtonSelected = ref('1') 
const forceUpdate = () => { 
    nextTick(() => { 
    })
} 
// Watch all reactive data changes to ensure reactive updates
watch([ singleSelected, groupSelected, disabledSelected, groupDisabledSelected, verticalSelected, gapSelected, sizeSelected, buttonSelected, buttonSizeSelected, colorSelected, combinedSelected, combinedButtonSelected ], () => { 
    forceUpdate() 
}) 
</script>
