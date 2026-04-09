# Text
## 简易介绍
text 文本组件，用于显示文本内容，支持多种样式和尺寸。可以使用 `<MYText></MYText>` 或者 `<MYText />` 来实现一个文本组件。

## 关于颜色的使用
### type
在 `MYText` 中使用 `type` 可以实现文本的颜色定义，这些颜色是 mengyue-components 提供的基本颜色定义。
例如使用 type 完成下面的颜色定义，如果不写 type 默认是黑色文本：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYText>Default 文本</MYText>
  <MYText type='primary'>primary 文本</MYText>
  <MYText type='success'>Success 文本</MYText>
  <MYText type='warning'>Warning 文本</MYText>
  <MYText type='danger'>Danger 文本</MYText>
  <MYText type='info'>Info 文本</MYText>
</template>
  `.trim()"
>
  <template #demo>
      <MYRow :gutter="16">
        <MYCol :span="8">
          <MYText plain>Default文本</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="primary" plain>primary文本</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="success" plain>Success文本</MYText>
        </MYCol>
        <MYBorder borderColor="transparent" paddingText="10px" />
        <MYCol :span="8">
          <MYText type="warning" plain>Warning文本</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="danger" plain>Danger文本</MYText>
        </MYCol>
        <MYCol :span="8">
          <MYText type="info" plain>Info文本</MYText>
        </MYCol>
      </MYRow>
  </template>
</ShowCode>

## 自定义颜色
如果默认颜色不满足需求，还可以自定义颜色，使用 `color` 属性自定义文本颜色。
<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYText color='#ff0000'>自定义红色文本</MYText>
  <MYText color='pink'>自定义粉色文本</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px;">
      <MYText Tecolor="#ff0000">自定义红色文本</MYText>
      <MYText Tecolor="pink">自定义粉色文本</MYText>
    </div>
  </template>
</ShowCode>

## 关于尺寸
### size
使用 `size` 属性可以调整文本大小。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYText size='small'>small 文本</MYText>
  <MYText size='medium'>medium 文本</MYText>
  <MYText size='large'>large 文本</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYText size="small">small 文本</MYText>
      <MYText size="medium">medium 文本</MYText>
      <MYText size="large">large 文本</MYText>
    </div>
  </template>
</ShowCode>

### 自定义尺寸
也可以支持自定义文本大小：
<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYText size='20px'>自定义文本20px</MYText>
  <MYText :size='20'>自定义文本:20</MYText>
  <MYText size='5rem'>自定义文本5rem</MYText>
  <MYText size='5em'>自定义文本5em</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYText size="20px">自定义文本20px</MYText>
      <MYText :size="20">自定义文本:20</MYText>
      <MYText size="5rem">自定义文本5rem</MYText>
      <MYText size="5em">自定义文本5em</MYText>
    </div>
  </template>
</ShowCode>

### 组合使用
最后，实现多种 API 组合使用：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYText size='5em' color='blue'>组合使用medium和blue</MYText>
</template>
  `.trim()"
>
  <template #demo>
    <MYText size="5em" Tecolor="blue">组合使用medium和blue</MYText>
  </template>
</ShowCode>

## API 参考

### Props

| 参数   | 说明         | 类型     | 可选值                              | 默认值  |
|--------|-------------|---------|-----------------------------------|--------|
| type   | 文本类型      | string  | `primary`/`success`/`warning`/`danger`/`info` | —      |
| size   | 文本尺寸      | string  | `small`/`medium`/`large`/number/自定义    | `medium` |
| Tecolor  | 文本颜色      | string  | 支持16进制颜色或单词颜色            | —      |
| tag    | 渲染标签      | string  | 支持所有 HTML 标签                 | `span` |

### 类型定义

```typescript
interface TextProps {
  type?: string;
  size?: string | number;
  Tecolor?: string;
  tag?: string;
}
```

<script setup>
import MYText from '../../packages/components/text/src/text.vue'
import MYRow from '../../packages/components/layout/src/row.vue'
import MYCol from '../../packages/components/layout/src/col.vue'
</script>