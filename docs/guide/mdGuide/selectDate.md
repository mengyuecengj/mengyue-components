# SelectDate
## 简易介绍
selectDate日期选择器组件，用于用户选择日期或日期范围。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYSelect-date></MYSelect-date>`或者`<MYSelect-date />`来实现一个日期选择器

## 基础用法
单日期选择器，例如`singleDate`已经定义过了`const singleDate = ref('')`
```vue
<MYSelect-date v-model="singleDate" />
```
<MYSelect-date v-model="singleDate" />

## 选择日期范围
使用`range`属性可以启用日期范围选择模式。例如`dateRange`已经定义过了`const dateRange = ref([])`
```vue
<MYSelect-date v-model="dateRange" range  />
```
<MYSelect-date v-model="dateRange" range  />

## 单月选择器
使用`month`属性可以只选择月份。例如`singleMonth`已经定义过了`const singleMonth = ref(['2022-10'])`
```vue
<MYSelect-date v-model="monthRange" month />
```
<MYSelect-date v-model="monthRange" month />

## 月份范围选择器
使用`range`属性可以启用月份范围选择模式。例如`monthRanges`已经定义过了`const monthRanges = ref(['1990-12', '2090-12'])`
```vue
<MYSelect-date v-model="monthRanges" range month />
```
<MYSelect-date v-model="monthRanges" range month />

## 年份选择器
使用`year`属性可以只选择年份。例如`singleYear`已经定义过了`const singleYear = ref([1990, 1993])`
```vue
<MYSelect-date v-model="singleYear" year />
```
<MYSelect-date v-model="singleYear" year />

## 年份范围选择器
使用`range`属性可以启用年份范围选择模式。
例如`singleYears`已经定义过了`const singleYears = ref([1990, 1993])`
```vue
<MYSelect-date v-model="singleDate" year range  />
```
<MYSelect-date v-model="singleDate" year range />

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| year       | 是否选择年份 | boolean | —                               | `false` |
| month      | 是否选择月份 | boolean | —                               | `false` |
| range      | 是否选择范围 | boolean | —                               | `false` |
| time       | 是否选择时间 | boolean | —                               | `false` |

### 类型定义
```vue
interface SelectDateProps {
  year?: boolean;
  month?: boolean;
  range?: boolean;
  time?: boolean;
}
```

<script setup>
import { ref } from "vue";
const singleDate = ref();
const dateRange = ref();
const monthRange = ref();
const monthRanges = ref();
const singleYear = ref();
const singleYears = ref();
</script>