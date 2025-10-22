# Switch
## 简易介绍
switch 开关，用于用户在两种状态之间切换。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYSwitch></MYSwitch>` 或者 `<MYSwitch />` 来实现一个开关。

## 基础用法
使用 `v-model` 绑定开关的状态。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYSwitch v-model='value1' />
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSwitch v-model="value1" />
    </div>
  </template>
</ShowCode>

## 带文本的 Switch
使用 `text` 可以定义开关状态下的文本。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYSwitch v-model='value2' text='T' />
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSwitch v-model="value2" text="T" />
    </div>
  </template>
</ShowCode>

## 自定义文本内容
使用插槽来自定义开关的文本内容。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYSwitch v-model='slotValue'>
    自定义文本
  </MYSwitch>
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYSwitch v-model="slotValue">
        自定义文本
      </MYSwitch>
    </div>
  </template>
</ShowCode>

## 关于尺寸
使用 `size` 定义尺寸，可以使用 mengyue-components 提供的多种尺寸。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px; align-items: flex-start;'>
    <MYSwitch v-model='sizeMini' size='mini' text='S' />
    <MYSwitch v-model='sizeSupersmall' size='supersmall' text='S' />
    <MYSwitch v-model='sizeSmall' size='small' text='M' />
    <MYSwitch v-model='sizeMedium' size='medium' text='L' />
    <MYSwitch v-model='sizeLarge' size='large' text='XL' />
    <MYSwitch v-model='sizeBiglarge' size='biglarge' text='XL' />
    <MYSwitch v-model='sizeSuperlarge' size='superlarge' text='XL' />
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px; align-items: flex-start;">
      <MYSwitch v-model="sizeMini" size="mini" text="S" />
      <MYSwitch v-model="sizeSupersmall" size="supersmall" text="S" />
      <MYSwitch v-model="sizeSmall" size="small" text="M" />
      <MYSwitch v-model="sizeMedium" size="medium" text="L" />
      <MYSwitch v-model="sizeLarge" size="large" text="XL" />
      <MYSwitch v-model="sizeBiglarge" size="biglarge" text="XL" />
      <MYSwitch v-model="sizeSuperlarge" size="superlarge" text="XL" />
    </div>
  </template>
</ShowCode>

## 关于禁用状态
### 禁用开关
使用 `disabled` 可以禁用开关。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 20px;'>
    <MYSwitch v-model='disabledValue1' disabled />
    <MYSwitch v-model='disabledValue2' disabled :modelValue='true' />
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYSwitch v-model="disabledValue1" disabled />
      <MYSwitch v-model="disabledValue2" disabled :modelValue="true" />
    </div>
  </template>
</ShowCode>

## API 参考
### Props

| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| modelValue | 开关状态值   | boolean | —                                 | `false` |
| value      | 自定义值     | boolean \| string \| number | —          | `false` |
| size       | 尺寸         | string  | `mini`/`supersmall`/`small`/`medium`/`large`/`biglarge`/`superlarge` | —      |
| text       | 文本         | string  | —                                 | —      |
| disabled   | 禁用         | boolean | —                                 | `false` |

### 事件

| 事件名             | 说明         | 参数                |
|-------------------|-------------|---------------------|
| update:modelValue | 状态变化时触发 | (value: boolean)    |


### 类型定义

```typescript
interface SwitchProps {
  modelValue?: boolean;
  value?: boolean | string | number;
  size?: string;
  text?: string;
  disabled?: boolean;
}
```

<script setup>
import MYSwitch from '../../packages/components/switch/src/switch.vue'
import { ref, watch, nextTick } from 'vue' 
// 基础用法 
const value1 = ref(true) 
const value2 = ref(true) 
// 插槽用法 
const slotValue = ref(false) 
// 尺寸示例 
const sizeMini = ref(false) 
const sizeSupersmall = ref(false) 
const sizeSmall = ref(true) 
const sizeMedium = ref(false) 
const sizeLarge = ref(true) 
const sizeBiglarge = ref(false) 
const sizeSuperlarge = ref(true) 
// 禁用状态 
const disabledValue1 = ref(false) 
const disabledValue2 = ref(true) 
// 自定义值 
const customValue = ref(true) 
// 组合使用 
const combinedValue1 = ref(true) 
const combinedValue2 = ref(false) 
const combinedValue3 = ref(true) 
// 修复 Vitepress 中的响应式问题 
const forceUpdate = () => { 
    nextTick(() => { 
        // 强制重新渲染 
    }) 
} 
// 监听所有响应式数据的变化，确保响应式更新 
watch([ value1, value2, slotValue, sizeMini, sizeSupersmall, sizeSmall, sizeMedium, sizeLarge, sizeBiglarge, sizeSuperlarge, disabledValue1, disabledValue2, customValue, combinedValue1, combinedValue2, combinedValue3 ], () => { 
    orceUpdate() 
})
</script>
