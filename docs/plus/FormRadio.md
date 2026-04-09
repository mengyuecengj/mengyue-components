# Radio
## 简易介绍
radio 单选按钮，用于用户从多个选项中选择一个。实现单选框的标签有两种：
`<MYRadio />` 或者 `<MYRadio></MYRadio>`
`<MYRadio-group>` 或者 `<MYRadio-group></MYRadio-group>` 单选框组

## 基础用法
### 单个单选按钮
使用 `modelValue` 可以绑定单选按钮的值。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRadio v-model='singleSelected' value='option1'>选项1</MYRadio>
  <MYRadio v-model='singleSelected' value='option2'>选项2</MYRadio>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYRadio v-model="singleSelected" value="option1">选项1</MYRadio>
      <MYRadio v-model="singleSelected" value="option2">选项2</MYRadio>
    </div>
  </template>
</ShowCode>

### 单选按钮组
可以使用 radioGroup 将单选按钮放到一个组里面。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRadio-group v-model='groupSelected'>
    <MYRadio value='1'>选项1</MYRadio>
    <MYRadio value='2'>选项2</MYRadio>
    <MYRadio value='3'>选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="groupSelected">
      <MYRadio value="1">选项1</MYRadio>
      <MYRadio value="2">选项2</MYRadio>
      <MYRadio value="3">选项3</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

## 禁用状态
### 单个禁用
禁用特定的单选按钮。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRadio-group v-model='disabledSelected'>
    <MYRadio value='1'>正常选项</MYRadio>
    <MYRadio value='2' disabled>禁用选项</MYRadio>
    <MYRadio value='3'>正常选项</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="disabledSelected">
      <MYRadio value="1">正常选项</MYRadio>
      <MYRadio value="2" disabled>禁用选项</MYRadio>
      <MYRadio value="3">正常选项</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

### 全部禁用
禁用整个单选按钮组。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRadio-group v-model='groupDisabledSelected' disabled>
    <MYRadio value='1'>禁用选项1</MYRadio>
    <MYRadio value='2'>禁用选项2</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="groupDisabledSelected" disabled>
      <MYRadio value="1">禁用选项1</MYRadio>
      <MYRadio value="2">禁用选项2</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

## 布局方向
### 垂直排列
使用 `direction="vertical"` 实现垂直布局。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRadio-group v-model='verticalSelected' direction='vertical'>
    <MYRadio value='1'>垂直选项1</MYRadio>
    <MYRadio value='2'>垂直选项2</MYRadio>
    <MYRadio value='3'>垂直选项3</MYRadio>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="verticalSelected" direction="vertical">
      <MYRadio value="1">垂直选项1</MYRadio>
      <MYRadio value="2">垂直选项2</MYRadio>
      <MYRadio value="3">垂直选项3</MYRadio>
    </MYRadio-group>
  </template>
</ShowCode>

## 按钮样式
### 单选按钮样式
使用 `MYRadioButton` 实现按钮样式的单选按钮。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRadio-group v-model='buttonSelected'>
    <MYRadioButton value='1'>按钮1</MYRadioButton>
    <MYRadioButton value='2'>按钮2</MYRadioButton>
    <MYRadioButton value='3'>按钮3</MYRadioButton>
  </MYRadio-group>
</template>
  `.trim()"
>
  <template #demo>
    <MYRadio-group v-model="buttonSelected">
      <MYRadioButton value="1">按钮1</MYRadioButton>
      <MYRadioButton value="2">按钮2</MYRadioButton>
      <MYRadioButton value="3">按钮3</MYRadioButton>
    </MYRadio-group>
  </template>
</ShowCode>

### 按钮尺寸
按钮样式的单选按钮也支持尺寸控制。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <MYRadio-group v-model='buttonSizeSelected'>
      <MYRadioButton value='small' size='small'>小按钮</MYRadioButton>
      <MYRadioButton value='default' size='default'>默认按钮</MYRadioButton>
      <MYRadioButton value='large' size='large'>大按钮</MYRadioButton>
    </MYRadio-group>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <MYRadio-group v-model="buttonSizeSelected">
        <MYRadioButton value="small" size="small">小按钮</MYRadioButton>
        <MYRadioButton value="default" size="default">默认按钮</MYRadioButton>
        <MYRadioButton value="large" size="large">大按钮</MYRadioButton>
      </MYRadio-group>
    </div>
  </template>
</ShowCode>

## API 参考

### MYRadioGroup Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | string \| number \| boolean | — | `''` |
| direction    | 排列方向     | string  | `horizontal`/`vertical`           | `horizontal` |
| disabled     | 是否禁用     | boolean | —                                 | `false` |
| textColor    | 文本颜色     | string  | 支持16进制颜色或单词颜色          | `#fff` |

### MYRadio Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | string \| number | —                     | `''` |
| value        | 选项值       | string \| number | —                     | `''` |
| name         | 原生 name 属性 | string  | —                                 | `''` |
| disabled     | 是否禁用     | boolean | —                                 | `false` |

### MYRadioButton Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 绑定值       | string \| number | —                     | `''` |
| value        | 选项值       | string \| number | —                     | `''` |
| label        | 显示文本     | string  | —                                 | `''` |
| name         | 原生 name 属性 | string  | —                                 | `''` |
| size         | 尺寸         | string  | `small`/`default`/`large`         | `default` |
| disabled     | 是否禁用     | boolean | —                                 | `false` |

### 类型定义

```typescript
interface RadioGroupProps {
  modelValue?: string | number | boolean;
  disabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  textColor?: string;
}

interface RadioProps {
  modelValue?: string | number;
  value?: string | number;
  name?: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  modelValue?: string | number;
  value?: string | number;
  label?: string;
  name?: string;
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
}
```
<script setup>
import { ref, watch, nextTick } from 'vue'
import MYRadioButton from '../../packages/components/radio/src/radio-button.vue'
import MYRadioGroup from '../../packages/components/radio/src/radio-group.vue'
import MYRadio from '../../packages/components/radio/src/radio.vue'
// 响应式数据
const singleSelected = ref('option1')
const groupSelected = ref('2')
const disabledSelected = ref('1')
const groupDisabledSelected = ref('1')
const verticalSelected = ref('1')
const gapSelected = ref('1')
const sizeSelected = ref('default')
const buttonSelected = ref('1')
const buttonSizeSelected = ref('default')
const colorSelected = ref('1')
const combinedSelected = ref('1')
const combinedButtonSelected = ref('1') 
// 修复 Vitepress 中的响应式问题 
const forceUpdate = () => { 
    nextTick(() => { 
        // 强制重新渲染 
    })
} 
// 监听所有响应式数据的变化，确保响应式更新 
watch([ singleSelected, groupSelected, disabledSelected, groupDisabledSelected, verticalSelected, gapSelected, sizeSelected, buttonSelected, buttonSizeSelected, colorSelected, combinedSelected, combinedButtonSelected ], () => { 
    forceUpdate() 
}) 
</script>
