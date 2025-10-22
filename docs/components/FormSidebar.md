# Slidebar
## 简易介绍
slidebar滑动条组件，用于用户通过拖动滑块来选择一个范围内的值。<br />
可以使用`<MYSlidebar></MYSlidebar>`或者`<MYSlidebar />`来实现一个滑动条

## 基础用法
使用`v-model`绑定滑块的值。
<ShowCode
  title="代码演示"
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

## 自定义滑块颜色
使用`thumbColor`属性可以自定义滑块的颜色。
<ShowCode
  title="代码演示"
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

## 自定义轨道颜色
使用`trackColor`属性可以自定义轨道的颜色。
<ShowCode
  title="代码演示"
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

## 禁用状态
使用`disabled`属性可以禁用滑动条。
<ShowCode
  title="代码演示"
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

## 隐藏数值
使用`noNum`属性可以隐藏滑动条的数值显示。
<ShowCode
  title="代码演示"
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

## 自定义尺寸
使用`size`属性可以自定义滑动条的尺寸。
<ShowCode
  title="代码演示"
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

## 组合使用
最后，实现个多种api组合使用实现个滑动条：
<ShowCode
  title="代码演示"
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

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | number  | —                               | `0`     |
| size         | 滑块大小     | string  | px/rem/em/%/动态绑定              | —      |
| thumbColor   | 滑块颜色     | string  | 支持16进制颜色或单词颜色          | —      |
| trackColor   | 轨道颜色     | string  | 支持16进制颜色或单词颜色          | —      |
| disabled     | 是否禁用     | boolean | —                               | `false` |
| noNum        | 是否隐藏数值 | boolean | —                               | `false` |

### 类型定义
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
import MYSlidebar from '../../packages/components/slidebar/src/slidebar.vue' 
const sliderValue1 = ref(0) 
const sliderValue2 = ref(0) 
const sliderValue3 = ref(0) 
const sliderValue4 = ref(0) 
const sliderValue5 = ref(0) 
const sliderValue6 = ref(0) 
const sliderValue7 = ref(0) 
</script>