# Slidebar
## Brief Introduction
The `slidebar` slider component is used for users to select a value within a range by dragging a slider.<br />
You can use `<MYSlidebar></MYSlidebar>` or `<MYSlidebar />` to implement a slider.

## Basic Usage
Use `v-model` to bind the slider's value.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar v-model='sliderValue1' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar v-model="sliderValue1" />
  </template>
</ShowCode>

## Custom Thumb Color
Use the `thumbColor` property to customize the color of the slider thumb.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar v-model='sliderValue2' thumbColor='#ff0000' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar v-model="sliderValue2" thumbColor="#ff0000" />
  </template>
</ShowCode>

## Custom Track Color
Use the `trackColor` property to customize the color of the slider track.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar v-model='sliderValue3' trackColor='#00ff00' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar v-model="sliderValue3" trackColor="#00ff00" />
  </template>
</ShowCode>

## Disabled State
Use the `disabled` property to disable the slider.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar v-model='sliderValue4' disabled />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar v-model="sliderValue4" disabled />
  </template>
</ShowCode>

## Hide Numeric Value
Use the `noNum` property to hide the slider's numeric value display.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar v-model='sliderValue5' noNum />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar v-model="sliderValue5" noNum />
  </template>
</ShowCode>

## Custom Size
Use the `size` property to customize the size of the slider.
<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar v-model='sliderValue6' size='500px' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar v-model="sliderValue6" size="500px" />
  </template>
</ShowCode>

## Combined Usage
Finally, combine multiple APIs to create a customized slider:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYSlidebar 
        v-model='sliderValue7' 
        size='400px'
        thumbColor='#8d4dd1'
        trackColor='#e6f3ff'
        noNum
    />
</template>
  `.trim()"
>
  <template #demo>
    <MYSlidebar 
        v-model="sliderValue7" 
        size="400px"
        thumbColor="#8d4dd1"
        trackColor="#e6f3ff"
        noNum
    />
  </template>
</ShowCode>

## API Reference

### Props
| Parameter    | Description            | Type     | Options                               | Default |
|--------------|------------------------|----------|---------------------------------------|---------|
| modelValue   | Bound value            | number   | —                                     | `0`     |
| size         | Slider size            | string   | px / rem / em / % / dynamic binding   | —       |
| thumbColor   | Thumb color            | string   | Supports hex colors or named colors   | —       |
| trackColor   | Track color            | string   | Supports hex colors or named colors   | —       |
| disabled     | Whether disabled       | boolean  | —                                     | `false` |
| noNum        | Whether to hide number | boolean  | —                                     | `false` |

### Type Definition
```typescript
interface SlidebarProps {
  modelValue?: number;
  size?: string;
  thumbColor?: string;
  trackColor?: string;
  disabled?: boolean;
  noNum?: boolean;
}
```

<script setup> 
import { ref } from 'vue' 
import MYSlidebar from '../../../packages/components/slidebar/src/slidebar.vue' 
const sliderValue1 = ref(0) 
const sliderValue2 = ref(0) 
const sliderValue3 = ref(0) 
const sliderValue4 = ref(0) 
const sliderValue5 = ref(0) 
const sliderValue6 = ref(0) 
const sliderValue7 = ref(0) 
</script>