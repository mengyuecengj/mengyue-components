# Input
## 简易介绍
input 输入框组件，用于用户输入文本内容。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYInput></MYInput>` 来实现一个输入框。

## 基础用法
使用 `modelValue` 绑定输入框的值。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput v-model='inputValue' placeholder='请输入内容' @update:modelValue='forceUpdate' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput v-model="inputValue" placeholder="请输入内容" @update:modelValue="forceUpdate" />
  </template>
</ShowCode>

## 输入类型
通过 `type` 属性可以设置输入框的类型，如 `text`、`password` 等。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput type='password' placeholder='请输入密码' @update:modelValue='forceUpdate' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput type="password" placeholder="请输入密码" @update:modelValue="forceUpdate" />
  </template>
</ShowCode>

## 尺寸控制
使用 `width` 和 `height` 属性可以自定义输入框的尺寸。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput width='200px' height='40px' placeholder='自定义尺寸' @update:modelValue='forceUpdate' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput width="200px" height="40px" placeholder="自定义尺寸" @update:modelValue="forceUpdate" />
  </template>
</ShowCode>

## 状态控制
### disabled
禁用输入框：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput disabled placeholder='禁用状态' />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput disabled placeholder="禁用状态" />
  </template>
</ShowCode>

### clearable
显示清除按钮：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <MYInput 
      v-model='clearableValue'
      clearable 
      placeholder='可清除内容' 
    />
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const clearableValue = ref('')
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInput 
        v-model="clearableValue"
        clearable 
        placeholder="可清除内容" 
        @update:modelValue="forceUpdate"
      />
    </div>
  </template>
</ShowCode>

### showPassword
切换密码可见性：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput 
    v-model='passwordValue' 
    type='password' 
    showPassword 
    placeholder='切换密码可见性' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="passwordValue" 
      type="password" 
      showPassword 
      placeholder="切换密码可见性" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## 输入限制
### 长度限制
使用 `minlength` 和 `maxlength` 限制输入长度：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput 
    v-model='limitValue' 
    maxlength='10' 
    placeholder='最多输入10个字符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="limitValue" 
      maxlength="10" 
      placeholder="最多输入10个字符" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

### 字数统计
使用 `wordLimit` 显示字数统计：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <MYInput 
      v-model='wordLimitValue' 
      maxlength='20' 
      wordLimit 
      placeholder='显示字数统计' 
    />
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div>
      <MYInput 
        v-model="wordLimitValue" 
        maxlength="20" 
        wordLimit 
        placeholder="显示字数统计" 
        @update:modelValue="forceUpdate"
      />
    </div>
  </template>
</ShowCode>

## 自定义颜色
### textColor
自定义文本颜色：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput 
    v-model='textColorValue' 
    textColor='#ff0000' 
    placeholder='红色文本' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="textColorValue" 
      textColor="#ff0000" 
      placeholder="红色文本" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

### placeholderColor
自定义占位符颜色：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput 
    v-model='placeholderColorValue' 
    placeholderColor='#409EFF' 
    placeholder='蓝色占位符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="placeholderColorValue" 
      placeholderColor="#409EFF" 
      placeholder="蓝色占位符" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## 多行文本
使用 `tag="textarea"` 实现多行文本输入：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput 
    v-model='textareaValue' 
    tag='textarea' 
    width='300px' 
    height='100px' 
    placeholder='多行文本输入框' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="textareaValue" 
      tag="textarea" 
      width="300px" 
      height="100px" 
      placeholder="多行文本输入框" 
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## 组合使用
多种属性组合使用：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYInput 
    v-model='combinedValue'
    type='password'
    showPassword
    clearable
    maxlength='15'
    wordLimit
    width='250px'
    textColor='#2c2'
    placeholder='组合使用示例'
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()"
>
  <template #demo>
    <MYInput 
      v-model="combinedValue"
      type="password"
      showPassword
      clearable
      maxlength="15"
      wordLimit
      width="250px"
      textColor="#2c2"
      placeholder="组合使用示例"
      @update:modelValue="forceUpdate"
    />
  </template>
</ShowCode>

## API 参考

### Props

| 参数             | 说明             | 类型               | 可选值                      | 默认值     |
|------------------|------------------|--------------------|-----------------------------|------------|
| type             | 输入框类型       | string             | `text`/`password`等         | `text`     |
| tag              | 标签类型         | string             | `input`/`textarea`等        | `input`    |
| width            | 宽度             | string \| number   | —                           | `100%`     |
| height           | 高度             | string \| number   | —                           | `30px`     |
| disabled         | 是否禁用         | boolean            | —                           | `false`    |
| clearable        | 是否可清除       | boolean            | —                           | `false`    |
| showPassword     | 是否显示密码切换 | boolean            | —                           | `false`    |
| placeholder      | 占位文本         | string             | —                           | `''`       |
| modelValue       | 绑定值           | string             | —                           | `''`       |
| minlength        | 最小输入长度     | number             | —                           | —          |
| maxlength        | 最大输入长度     | number \| string   | —                           | —          |
| wordLimit        | 是否显示字数统计 | boolean            | —                           | `false`    |
| textColor        | 文本颜色         | string             | 支持16进制颜色或单词颜色    | —          |
| placeholderColor | 占位符颜色       | string             | 支持16进制颜色或单词颜色    | —          |

### 类型定义

```typescript
interface InputProps {
  type?: string;
  tag?: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  placeholder?: string;
  modelValue?: string;
  minlength?: number;
  maxlength?: number | string;
  wordLimit?: boolean;
  textColor?: string;
  placeholderColor?: string;
}
```
<script setup>
import MYInput from '../../packages/components/input/src/input.vue'
import { ref, watch, nextTick } from "vue";
const inputValue = ref("");
const passwordValue = ref("");
const clearableValue = ref("");
const limitValue = ref("");
const wordLimitValue = ref("");
const textColorValue = ref("");
const placeholderColorValue = ref("");
const textareaValue = ref("");
const combinedValue = ref("");
// 修复 Vitepress 中的响应式问题
const forceUpdate = () => {
    nextTick(() => { 
        // 强制重新渲染 
    });
}; 
// 监听所有输入值的变化，确保响应式更新
watch([inputValue, passwordValue, clearableValue, limitValue, wordLimitValue, textColorValue, placeholderColorValue, textareaValue, combinedValue], () => { 
    forceUpdate(); 
}); 
</script>