# SelectTime

## Brief Introduction
The `selectTime` time picker component is used for users to select a time or time range.<br />
You can use `<MYSelect-time></MYSelect-time>` or `<MYSelect-time />` to implement a time picker.

## Basic Usage
Use `v-model` to bind the time value.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-time v-model='timePoint' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-time v-model="timePoint" />
    </div>
  </template>
</ShowCode>

## Select Time Range
Use the `range` property to enable time range selection mode.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-time v-model='timeRange' range />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-time v-model="timeRange" range />
    </div>
  </template>
</ShowCode>

## Custom Hour Options
Use the `hourOptions` property to customize the hour options.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-time v-model='timePoint2' :hourOptions='[9, 10, 11, 12, 13, 14, 15, 16, 17]' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-time v-model="timePoint2" :hourOptions="[9, 10, 11, 12, 13, 14, 15, 16, 17]" />
    </div>
  </template>
</ShowCode>

## Custom Minute Options
Use the `minuteOptions` property to customize the minute options.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-time v-model='timePoint3' :minuteOptions='[0, 15, 30, 45]' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-time v-model="timePoint3" :minuteOptions="[0, 15, 30, 45]" />
    </div>
  </template>
</ShowCode>

## Combined Usage
Finally, combine multiple APIs to create a customized time picker:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-time 
        v-model='timeRange2' 
        range 
        :hourOptions='[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]'
        :minuteOptions='[0, 30]'
    />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-time 
          v-model="timeRange2" 
          range 
          :hourOptions="[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]"
          :minuteOptions="[0, 30]"
      />
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter     | Description         | Type            | Options   | Default   |
|---------------|---------------------|-----------------|-----------|-----------|
| modelValue    | Bound value         | string \| array | —         | —         |
| range         | Whether range mode  | boolean         | —         | `false`   |
| hourOptions   | Hour options        | number[]        | —         | `[0-23]`  |
| minuteOptions | Minute options      | number[]        | —         | `[0-59]`  |

### Type Definition

```typescript
interface SelectTimeProps {
  modelValue?: string | string[];
  range?: boolean;
  hourOptions?: number[];
  minuteOptions?: number[];
}
```

<script setup> 
import { ref } from 'vue' 
import MYSelectTime from '../../../packages/components/selectTime/src/selectTime.vue' 
const timePoint = ref('00:00') 
const timePoint2 = ref('09:00') 
const timePoint3 = ref('00:00') 
const timeRange = ref([]) 
const timeRange2 = ref([]) 
</script>
