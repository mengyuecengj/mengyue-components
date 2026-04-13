# SelectDate

## Introduction

The selectDate date picker component is used for users to select a date or date range.<br />
You can use `<MYSelect-date></MYSelect-date>` or `<MYSelect-date />` to implement a date picker.

## Basic Usage

Single date picker.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='singleDate' />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-date v-model="singleDate" />
    </div>
  </template>
</ShowCode>

## Date Range Selection

Use the `range` prop to enable date range selection mode.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='dateRange' range />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-date v-model="dateRange" range />
    </div>
  </template>
</ShowCode>

## Single Month Picker

Use the `month` prop to select only the month.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='singleMonth' month />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-date v-model="singleMonth" month />
    </div>
  </template>
</ShowCode>

## Month Range Picker

Use the `range` prop to enable month range selection mode.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='monthRange' range month />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-date v-model="monthRange" range month />
    </div>
  </template>
</ShowCode>

## Year Picker

Use the `year` prop to select only the year.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='singleYear' year />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-date v-model="singleYear" year />
    </div>
  </template>
</ShowCode>

## Year Range Picker

Use the `range` prop to enable year range selection mode.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='yearRange' year range />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect-date v-model="yearRange" year range />
    </div>
  </template>
</ShowCode>

## Time Picker

Use the `time` prop to enable time selection.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date v-model='datetime' time />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000; min-height: 300px;">
      <MYSelect-date v-model="datetime" time />
    </div>
  </template>
</ShowCode>

## Combined Usage

Finally, here's an example combining multiple APIs to implement a date-time range picker:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSelect-date 
        v-model='datetimeRange' 
        range 
        time 
        placeholder='Select date and time range'
    />
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000; min-height: 300px;">
      <MYSelect-date 
          v-model="datetimeRange" 
          range 
          time 
          placeholder="Select date and time range"
      />
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| modelValue | Bound value | string \| array | — | — |
| year | Whether to select year | boolean | — | `false` |
| month | Whether to select month | boolean | — | `false` |
| range | Whether to select range | boolean | — | `false` |
| time | Whether to select time | boolean | — | `false` |
| placeholder | Placeholder text | string | — | — |

### Type Definitions

```typescript
interface SelectDateProps {
  modelValue?: string | string[];
  year?: boolean;
  month?: boolean;
  range?: boolean;
  time?: boolean;
  placeholder?: string;
}
```

<script setup> 
import { ref } from "vue"; 
import MYSelectDate from '../../../packages/components/selectDate/src/selectDate.vue' 
const singleDate = ref(''); 
const dateRange = ref([]); 
const singleMonth = ref(''); 
const monthRange = ref([]); 
const singleYear = ref(''); 
const yearRange = ref([]); 
const datetime = ref(''); 
const datetimeRange = ref([]); 
</script>
