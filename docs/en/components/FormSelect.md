# Select
## Brief Introduction
The `select` component is used for users to choose one or more options from a dropdown list.<br />
There are two ways to implement the selector tags:
`<MYSelect />` or `<MYSelect></MYSelect>`
`<MYOption />` or `<MYOption></MYOption>`

## Basic Usage
Use `v-model` to bind the selected value.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect v-model='selectedValue1' placeholder='Please select a fruit'>
        <MYOption value='apple' label='Apple' />
        <MYOption value='banana' label='Banana' />
        <MYOption value='orange' label='Orange' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue1" placeholder="Please select a fruit">
          <MYOption value="apple" label="Apple" />
          <MYOption value="banana" label="Banana" />
          <MYOption value="orange" label="Orange" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## Disabled State
### Disable Entire Selector
Use the `disabled` property to disable the selector.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='Disabled state'>
        <MYOption value='1' label='Option 1' />
        <MYOption value='2' label='Option 2' />
        <MYOption value='3' label='Option 3' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue2" disabled placeholder="Disabled state">
          <MYOption value="1" label="Option 1" />
          <MYOption value="2" label="Option 2" />
          <MYOption value="3" label="Option 3" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

### Disable a Specific Option
Use the `disabled` property to disable a single option.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect v-model='selectedValue3' placeholder='Disable an option'>
        <MYOption value='1' label='Option 1' />
        <MYOption value='2' label='Option 2' disabled />
        <MYOption value='3' label='Option 3' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue3" placeholder="Disable an option">
          <MYOption value="1" label="Option 1" />
          <MYOption value="2" label="Option 2" disabled />
          <MYOption value="3" label="Option 3" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## Custom Size
Use the `width` and `height` properties to customize the selector's width and height.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect v-model='selectedValue4' placeholder='Width 300px Height 50px' width='300px' height='50px'>
        <MYOption value='4' label='Option 4' />
        <MYOption value='5' label='Option 5' />
        <MYOption value='6' label='Option 6' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue4" placeholder="Width 300px Height 50px" width="300px" height="50px">
          <MYOption value="4" label="Option 4" />
          <MYOption value="5" label="Option 5" />
          <MYOption value="6" label="Option 6" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## Custom Colors
Use the `backgroundColor`, `hoverbackgroundColor`, and `borderColor` properties to customize the selector's colors.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect 
        v-model='selectedValue5' 
        placeholder='Custom colors'
        backgroundColor='#f0f8ff'
        hoverbackgroundColor='#e6f3ff'
        borderColor='#409EFF'
    >
        <MYOption value='A' label='Option A' />
        <MYOption value='B' label='Option B' />
        <MYOption value='C' label='Option C' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect 
          v-model="selectedValue5" 
          placeholder="Custom colors"
          backgroundColor="#f0f8ff"
          hoverbackgroundColor="#e6f3ff"
          borderColor="#409EFF"
      >
          <MYOption value="A" label="Option A" />
          <MYOption value="B" label="Option B" />
          <MYOption value="C" label="Option C" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## API Reference

### Select Props
| Parameter           | Description             | Type               | Options     | Default      |
|---------------------|-------------------------|--------------------|-------------|--------------|
| modelValue          | Bound value             | string \| number   | —           | `''`         |
| placeholder         | Placeholder text        | string             | —           | `'Please select'` |
| disabled            | Whether disabled        | boolean            | —           | `false`      |
| width               | Width                   | string \| number   | —           | `'260px'`    |
| height              | Height                  | string \| number   | —           | `'40px'`     |
| backgroundColor     | Background color        | string             | —           | `''`         |
| hoverbackgroundColor | Hover background color | string             | —           | `''`         |
| borderColor         | Border color            | string             | —           | `''`         |
| autoScrollbar       | Auto scrollbar          | boolean            | —           | `true`       |

### Option Props
| Parameter | Description      | Type               | Options   | Default |
|-----------|------------------|--------------------|-----------|---------|
| value     | Option value     | string \| number   | —         | —       |
| label     | Option label     | string             | —         | `''`    |
| disabled  | Whether disabled | boolean            | —         | `false` |

### Type Definitions
```typescript
interface SelectProps {
  modelValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  hoverbackgroundColor?: string;
  borderColor?: string;
  autoScrollbar?: boolean;
}

interface OptionProps {
  value: string | number;
  label?: string;
  disabled?: boolean;
}
```
<script setup>
import { ref } from 'vue'
import MYSelect from '../../../packages/components/select/src/select.vue'
import MYOption from '../../../packages/components/select/src/option.vue' 
const selectedValue1 = ref('') 
const selectedValue2 = ref('') 
const selectedValue3 = ref('') 
const selectedValue4 = ref('') 
const selectedValue5 = ref('B') 
const selectedValue6 = ref('') 
</script>