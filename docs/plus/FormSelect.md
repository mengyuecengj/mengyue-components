# Select
## 简易介绍
select选择器组件，用于用户从下拉列表中选择一个或多个选项。<br />
实现选择器有两种标签：
`<MYSelect />`或者`<MYSelect></MYSelect>`
`<MYOption />`或者`<MYOption></MYOption>`

## 基础用法
使用`v-model`绑定选中的值。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect v-model='selectedValue1' placeholder='请选择水果'>
        <MYOption value='apple' label='苹果' />
        <MYOption value='banana' label='香蕉' />
        <MYOption value='orange' label='橙子' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue1" placeholder="请选择水果">
          <MYOption value="apple" label="苹果" />
          <MYOption value="banana" label="香蕉" />
          <MYOption value="orange" label="橙子" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## 禁用状态
### 禁用整个选择器
使用`disabled`属性可以禁用选择器。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='禁用状态'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue2" disabled placeholder="禁用状态">
          <MYOption value="1" label="选项1" />
          <MYOption value="2" label="选项2" />
          <MYOption value="3" label="选项3" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

### 禁用某个选项
使用`disabled`属性可以禁用单个选项。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect v-model='selectedValue3' placeholder='禁用某个选项'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' disabled />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue3" placeholder="禁用某个选项">
          <MYOption value="1" label="选项1" />
          <MYOption value="2" label="选项2" disabled />
          <MYOption value="3" label="选项3" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## 自定义尺寸
使用`width`和`height`属性可以自定义选择器的宽度和高度。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect v-model='selectedValue4' placeholder='宽300px高50px' width='300px' height='50px'>
        <MYOption value='4' label='选项4' />
        <MYOption value='5' label='选项5' />
        <MYOption value='6' label='选项6' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect v-model="selectedValue4" placeholder="宽300px高50px" width="300px" height="50px">
          <MYOption value="4" label="选项4" />
          <MYOption value="5" label="选项5" />
          <MYOption value="6" label="选项6" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## 自定义颜色
使用`backgroundColor`、`hoverbackgroundColor`和`borderColor`属性可以自定义选择器的颜色。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect 
        v-model='selectedValue5' 
        placeholder='自定义颜色'
        backgroundColor='#f0f8ff'
        hoverbackgroundColor='#e6f3ff'
        borderColor='#409EFF'
    >
        <MYOption value='A' label='选项A' />
        <MYOption value='B' label='选项B' />
        <MYOption value='C' label='选项C' />
    </MYSelect>
</template>
  `.trim()"
>
  <template #demo>
    <div style="position: relative; z-index: 1000;">
      <MYSelect 
          v-model="selectedValue5" 
          placeholder="自定义颜色"
          backgroundColor="#f0f8ff"
          hoverbackgroundColor="#e6f3ff"
          borderColor="#409EFF"
      >
          <MYOption value="A" label="选项A" />
          <MYOption value="B" label="选项B" />
          <MYOption value="C" label="选项C" />
      </MYSelect>
    </div>
  </template>
</ShowCode>

## API 参考

### Select Props
| 参数                | 说明             | 类型               | 可选值        | 默认值      |
|--------------------|------------------|-------------------|-------------|------------|
| modelValue         | 绑定值           | string \| number  | —           | `''`       |
| placeholder        | 占位文本         | string            | —           | `'请选择'` |
| disabled           | 是否禁用         | boolean           | —           | `false`    |
| width              | 宽度             | string \| number  | —           | `'260px'`  |
| height             | 高度             | string \| number  | —           | `'40px'`   |
| backgroundColor    | 背景色           | string            | —           | `''`       |
| hoverbackgroundColor| 悬停背景色       | string            | —           | `''`       |
| borderColor        | 边框颜色         | string            | —           | `''`       |
| autoScrollbar      | 自动滚动条       | boolean           | —           | `true`     |

### Option Props
| 参数      | 说明         | 类型               | 可选值      | 默认值    |
|----------|-------------|-------------------|-----------|----------|
| value    | 选项值       | string \| number  | —         | —        |
| label    | 选项标签     | string            | —         | `''`     |
| disabled | 是否禁用     | boolean           | —         | `false`  |

### 类型定义
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
import MYSelect from '../../packages/components/select/src/select.vue'
import MYOption from '../../packages/components/select/src/option.vue' 
const selectedValue1 = ref('') 
const selectedValue2 = ref('') 
const selectedValue3 = ref('') 
const selectedValue4 = ref('') 
const selectedValue5 = ref('B') 
const selectedValue6 = ref('') 
</script>
