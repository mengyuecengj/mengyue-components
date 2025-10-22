# SelectDate
## 简易介绍
selectDate日期选择器组件，用于用户选择日期或日期范围。<br />
可以使用`<MYSelect-date></MYSelect-date>`或者`<MYSelect-date />`来实现一个日期选择器

## 基础用法
单日期选择器。
<ShowCode
  title="代码演示"
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

## 选择日期范围
使用`range`属性可以启用日期范围选择模式。
<ShowCode
  title="代码演示"
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

## 单月选择器
使用`month`属性可以只选择月份。
<ShowCode
  title="代码演示"
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

## 月份范围选择器
使用`range`属性可以启用月份范围选择模式。
<ShowCode
  title="代码演示"
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

## 年份选择器
使用`year`属性可以只选择年份。
<ShowCode
  title="代码演示"
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

## 年份范围选择器
使用`range`属性可以启用年份范围选择模式。
<ShowCode
  title="代码演示"
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

## 时间选择器
使用`time`属性可以启用时间选择。
<ShowCode
  title="代码演示"
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

## 组合使用
最后，实现个多种api组合使用实现个日期时间范围选择器：
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-date 
        v-model='datetimeRange' 
        range 
        time 
        placeholder='选择日期时间范围'
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
          placeholder="选择日期时间范围"
      />
    </div>
  </template>
</ShowCode>

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| modelValue | 绑定值       | string \| array | —                     | —      |
| year       | 是否选择年份 | boolean | —                               | `false` |
| month      | 是否选择月份 | boolean | —                               | `false` |
| range      | 是否选择范围 | boolean | —                               | `false` |
| time       | 是否选择时间 | boolean | —                               | `false` |
| placeholder| 占位文本     | string  | —                               | —      |

### 类型定义
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
import MYSelectDate from '../../packages/components/selectDate/src/selectDate.vue' 
const singleDate = ref(''); 
const dateRange = ref([]); 
const singleMonth = ref(''); 
const monthRange = ref([]); 
const singleYear = ref(''); 
const yearRange = ref([]); 
const datetime = ref(''); 
const datetimeRange = ref([]); 
</script>