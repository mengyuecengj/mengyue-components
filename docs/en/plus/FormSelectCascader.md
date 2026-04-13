# SelectCascader

## Brief Introduction
The SelectCascader component is used for users to select one or more options from a multi-level dropdown list.<br />
You can use `<MYSelect-cascader></MYSelect-cascader>` or `<MYSelect-cascader />` to implement a cascader selector.

## Basic Usage
Use `v-model` to bind the selected value and pass cascading data via the `options` prop.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue1' :options='options1' placeholder='Please select' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue1" :options="options1" placeholder="Please select" />
    </div>
  </template>
</ShowCode>

## Disabled State

### Disable Entire Selector
Use the `disabled` prop to disable the selector.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue2' :options='options2' placeholder='Disabled state' disabled />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="Disabled state" disabled />
    </div>
  </template>
</ShowCode>

### Disable a Specific Option
Use the `disabled` prop to disable a single option.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue3' :options='options3' placeholder='Disable a specific option' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="Disable a specific option" />
    </div>
  </template>
</ShowCode>

## Multi-level Menu
Multi-level menu, pass multi-level data via the `options` prop.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue4' :options='options4' placeholder='Multi-level menu' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue4" :options="options4" placeholder="Multi-level menu" />
    </div>
  </template>
</ShowCode>

## Custom Size
Use the `width` and `height` props to customize the selector's width and height.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-cascader v-model='selectedValue5' :options='options4' placeholder='Custom size' height='50px' width='500px' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader v-model="selectedValue5" :options="options4" placeholder="Custom size" height="50px" width="500px" />
    </div>
  </template>
</ShowCode>

## Combined Usage
Finally, here is a combination of multiple APIs to create a cascader selector:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-cascader 
        v-model='selectedValue6' 
        :options='options4' 
        placeholder='Combined usage example'
        height='45px'
        width='400px'
    />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-cascader 
          v-model="selectedValue6" 
          :options="options4" 
          placeholder="Combined usage example"
          height="45px"
          width="400px"
      />
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Prop         | Description                    | Type            | Options | Default        |
|--------------|--------------------------------|-----------------|---------|----------------|
| modelValue   | Bound value                    | string \| array | —       | —              |
| options      | Cascading data                 | Array           | —       | `[]`           |
| placeholder  | Placeholder text               | string          | —       | `'Please select'` |
| disabled     | Whether to disable             | boolean         | —       | `false`        |
| width        | Width                          | string \| number| —       | `'260px'`      |
| height       | Height                         | string \| number| —       | `'40px'`       |

### Type Definitions

```typescript
interface OptionCascaderProps {
  label: string;
  value: string;
  disabled?: boolean;
  children?: OptionCascaderProps[];
}

interface SelectCascaderProps {
  modelValue?: string | string[];
  options?: OptionCascaderProps[];
  placeholder?: string;
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
}
```

<script setup> 
import { ref } from 'vue' 
import MYSelectCascader from '../../../packages/components/selectCascader/src/selectCascader.vue' 
const selectedValue1 = ref(''); 
const selectedValue2 = ref(''); 
const selectedValue3 = ref(''); 
const selectedValue4 = ref(''); 
const selectedValue5 = ref(''); 
const selectedValue6 = ref(''); 
const options1 = [ 
    { value: 'option1', label: 'Option 1' }, 
    { value: 'option2', label: 'Option 2' }, 
    { value: 'option3', label: 'Option 3' }, 
    { value: 'option4', label: 'Option 4' }, 
]; 
const options2 = [ 
    { value: 'option1', label: 'Option 1' }, 
    { value: 'option2', label: 'Option 2' }, 
]; 
const options3 = [ 
    { value: 'option1', label: 'Option 1' }, 
    { value: 'option2', label: 'Option 2', disabled: true }, 
]; 
const options4 = [ 
    { value: 'group1', label: 'Group 1', children: [ 
        { value: 'option1-1', label: 'Option 1-1' }, 
        { value: 'option1-2', label: 'Option 1-2' }, 
    ]}, 
    { 
        value: 'group2', label: 'Group 2', children: [ 
            { value: 'option2-1', label: 'Option 2-1' }, 
            { value: 'option2-2', label: 'Option 2-2', children: [ 
                { value: 'option2-2-1', label: 'Option 2-2-1' }, 
                { value: 'option2-2-2', label: 'Option 2-2-2' }, 
            ] 
        }, 
    ] 
}, 
]; 
</script>
