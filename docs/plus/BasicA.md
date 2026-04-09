# A
## 简易介绍
a 链接组件，用于显示超链接内容，支持多种样式和交互行为。可以使用 `<MYa></MYa>` 或者 `<MYa />` 来实现一个链接组件。

## 关于颜色的使用
### type
在 `MYa` 中使用 `type` 可以实现链接的颜色定义，这些颜色是 mengyue-components 提供的基本颜色定义。
例如使用 type 完成下面的颜色定义，如果不写 type 默认是蓝色链接：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYa type='primary'>primary 类型</MYa>
  <MYa type='success'>success 类型</MYa>
  <MYa type='warning'>warning 类型</MYa>
  <MYa type='danger'>danger 类型</MYa>
  <MYa type='info'>info 类型</MYa>
  <MYa>默认类型</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa type="primary">primary 类型</MYa>
      <MYa type="success">success 类型</MYa>
      <MYa type="warning">warning 类型</MYa>
      <MYa type="danger">danger 类型</MYa>
      <MYa type="info">info 类型</MYa>
      <MYa>默认类型</MYa>
    </div>
  </template>
</ShowCode>

### 自定义颜色
如果默认颜色不满足需求，还可以自定义颜色，使用 `color` 属性自定义链接颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYa color='#ff0000'>自定义红色链接</MYa>
  <MYa color='red'>自定义红色链接</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa color="#ff0000">自定义红色链接</MYa>
      <MYa color="red">自定义红色链接</MYa>
    </div>
  </template>
</ShowCode>

## 关于交互行为
### disabled
使用 `disabled` 属性可以禁用链接。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYa disabled>禁用链接</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <MYa disabled>禁用链接</MYa>
  </template>
</ShowCode>

### underline
使用 `underline` 属性可以控制链接下划线的显示。

<ShowCode
  title="代码演示"
  :code="`
<template>
      <MYa underline>不带下划线的链接</MYa>
      <MYa :underline='false'>带下划线的链接</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa underline>不带下划线的链接</MYa>
      <MYa :underline="false">带下划线的链接</MYa>
    </div>
  </template>
</ShowCode>

## 关于尺寸
### size
使用 `size` 属性可以调整链接大小。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYa size='large'>large 尺寸</MYa>
  <MYa size='medium'>medium 尺寸</MYa>
  <MYa size='small'>small 尺寸</MYa>
  <MYa size='mini'>mini 尺寸</MYa>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYa size="large">large 尺寸</MYa>
      <MYa size="medium">medium 尺寸</MYa>
      <MYa size="small">small 尺寸</MYa>
      <MYa size="mini">mini 尺寸</MYa>
    </div>
  </template>
</ShowCode>

### 组合使用
最后，实现多种 API 组合使用：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYa 
    size='large' 
    color='#ff0000' 
    underline
  >
    组合: large + 红色 + 下划线
  </MYa>
</template>
  `.trim()"
>
  <template #demo>
    <MYa size="large" color="#ff0000" underline>
      组合: large + 红色 + 下划线
    </MYa>
  </template>
</ShowCode>

<strong>注意:</strong>
如果使用了 `type` 属性，请不要在组件上定义 `color` 属性，不然 `color` 会覆盖 `type`，最终生效 `color` 的配置。

## API 参考

### Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| type  | 链接类型      | string  | `primary`/`success`/`warning`/`danger`/`info` | —      |
| color  | 颜色      | string  | 支持16进制颜色或单词颜色                  | —  |
| disabled  | 禁用      | boolean  | —     | `false`      |
| underline     | 下划线    | boolean  | —             | `true`      |
| size  | 尺寸    | string  | `mini`/`small`/`medium`/`large`/自定义     | `medium`      |
| tag    | 渲染标签      | string  | 支持所有 HTML 标签                 | `a` |

### 类型定义

```typescript
interface AProps {
  type?: string;
  color?: string;
  disabled?: boolean;
  underline?: boolean;
  size?: string;
  tag?: string;
}
```

<script setup>
import MYa from '../../packages/components/a/src/a.vue'
</script>
