# SelectTime
## 简易介绍
selectTime时间选择器组件，用于用户选择时间或时间范围。<br />
可以使用`<MYSelect-time></MYSelect-time>`或者`<MYSelect-time />`来实现一个时间选择器

## 基础用法
使用`v-model`绑定时间值。
<ShowCode
  title="代码演示"
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

## 选择时间范围
使用`range`属性可以启用时间范围选择模式。
<ShowCode
  title="代码演示"
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

## 自定义小时选项
使用`hourOptions`属性可以自定义小时选项。
<ShowCode
  title="代码演示"
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

## 自定义分钟选项
使用`minuteOptions`属性可以自定义分钟选项。
<ShowCode
  title="代码演示"
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

## 组合使用
最后，实现个多种api组合使用实现个时间选择器：
<ShowCode
  title="代码演示"
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

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | string \| array | —                     | —      |
| range        | 是否选择范围 | boolean | —                               | `false` |
| hourOptions  | 小时选项     | number[] | —                               | `[0-23]` |
| minuteOptions| 分钟选项     | number[] | —                               | `[0-59]` |

### 类型定义
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
import MYSelectTime from '../../packages/components/selectTime/src/selectTime.vue' 
const timePoint = ref('00:00') 
const timePoint2 = ref('09:00') 
const timePoint3 = ref('00:00') 
const timeRange = ref([]) 
const timeRange2 = ref([]) 
</script>