# Checkbox
## 简易介绍
checkbox 复选框，用于用户从多个选项中选择一个或多个。mengyue-components 进行了封装并进行了 vitest 测试。
实现复选框的标签有两种：
`<MYCheckbox />` 或者 `<MYCheckbox></MYCheckbox>`
`<MYCheckbox-group />` 或者 `<MYCheckbox-group></MYCheckbox-group>` 复选框组

## 基础用法
### 单个复选框
使用 `modelValue` 可以绑定单个复选框的值。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCheckbox v-model='singleChecked'>单个复选框</MYCheckbox>
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYCheckbox v-model="singleChecked">单个复选框</MYCheckbox>
    </div>
  </template>
</ShowCode>

### 复选框组
使用 `<MYCheckbox-group></MYCheckbox-group>` 可以将复选框分组。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues1'>
    <MYCheckbox value='option1'>选项1</MYCheckbox>
    <MYCheckbox value='option2'>选项2</MYCheckbox>
    <MYCheckbox value='option3'>选项3</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues1">
      <MYCheckbox value="option1">选项1</MYCheckbox>
      <MYCheckbox value="option2">选项2</MYCheckbox>
      <MYCheckbox value="option3">选项3</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## 布局方向
### 垂直排列
使用 `direction="vertical"` 将复选框垂直排列。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues2' direction='vertical'>
    <MYCheckbox value='apple'>苹果</MYCheckbox>
    <MYCheckbox value='banana'>香蕉</MYCheckbox>
    <MYCheckbox value='orange'>橙子</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues2" direction="vertical">
      <MYCheckbox value="apple">苹果</MYCheckbox>
      <MYCheckbox value="banana">香蕉</MYCheckbox>
      <MYCheckbox value="orange">橙子</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## 禁用状态
### 整个组禁用
禁用整个复选框组。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues3' disabled>
    <MYCheckbox value='red'>红色</MYCheckbox>
    <MYCheckbox value='green'>绿色</MYCheckbox>
    <MYCheckbox value='blue'>蓝色</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues3" disabled>
      <MYCheckbox value="red">红色</MYCheckbox>
      <MYCheckbox value="green">绿色</MYCheckbox>
      <MYCheckbox value="blue">蓝色</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## 自定义间距
使用 `gap` 属性控制复选框之间的间距。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCheckbox-group v-model='selectedValues5' gap='72px'>
    <MYCheckbox value='cat'>猫</MYCheckbox>
    <MYCheckbox value='dog'>狗</MYCheckbox>
    <MYCheckbox value='bird'>鸟</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYCheckbox-group v-model="selectedValues5" gap="72px">
      <MYCheckbox value="cat">猫</MYCheckbox>
      <MYCheckbox value="dog">狗</MYCheckbox>
      <MYCheckbox value="bird">鸟</MYCheckbox>
    </MYCheckbox-group>
  </template>
</ShowCode>

## API 参考

### MYCheckboxGroup Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | array   | —                                 | `[]`   |
| direction    | 布局方向     | string  | `horizontal`/`vertical`           | `horizontal` |
| disabled     | 是否禁用     | boolean | —                                 | `false` |
| gap          | 间距         | string  | 支持 CSS 单位                     | `12px` |

### MYCheckbox Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | boolean | —                                 | `false` |
| value        | 选项值       | string \| number | —                     | —      |
| disabled     | 是否禁用     | boolean | —                                 | `false` |

### 类型定义

```typescript
interface CheckboxGroupProps {
  modelValue?: (string | number)[];
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  gap?: string;
}

interface CheckboxProps {
  modelValue?: boolean;
  value?: string | number;
  disabled?: boolean;
}
```
<script setup>
import { ref, watch, nextTick } from 'vue'
import MYCheckboxGroup from '../../packages/components/checkbox/src/checkbox-group.vue'
import MYCheckbox from '../../packages/components/checkbox/src/checkbox.vue'
// 响应式数据 
const singleChecked = ref(true)
const selectedValues1 = ref(['option1'])
const selectedValues2 = ref([])
const selectedValues3 = ref(['red'])
const selectedValues4 = ref(['mon'])
const selectedValues5 = ref([])
const sizeSelected = ref(['default'])
const borderSelected = ref(['option1'])
const combinedSelected = ref(['1'])
const combinedBorderSelected = ref(['default']) 
// 修复 Vitepress 中的响应式问题 
const forceUpdate = () => { 
    nextTick(() => { 
        // 强制重新渲染 
    }) 
} 
// 监听所有响应式数据的变化，确保响应式更新 
watch([ singleChecked, selectedValues1, selectedValues2, selectedValues3, selectedValues4, selectedValues5, sizeSelected, borderSelected, combinedSelected, combinedBorderSelected ], 
() => {
     forceUpdate() 
})
</script>
