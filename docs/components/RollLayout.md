# Layout
## 简易介绍
Layout 布局组件，用于快速构建页面布局结构。mengyue-components 提供了灵活的布局方案，支持栅格系统和多种对齐方式。
可以使用 `<MYRow></MYRow>` 和 `<MYCol></MYCol>` 来实现布局。

## 基本用法
### 基础网格布局
使用 `<MYRow></MYRow>` 和 `<MYCol></MYCol>` 标签来构建基础的网格布局系统。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRow>
    <MYCol :span='6'>
      <div style='background: red'>span=6</div>
    </MYCol>
    <MYCol :span='12'>
      <div style='background: #2c2'>span=12</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2828'>span=6</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow>
      <MYCol :span="6">
        <div style="background: red">span=6</div>
      </MYCol>
      <MYCol :span="12">
        <div style="background: #2c2">span=12</div>
      </MYCol>
      <MYCol :span="6">
        <div style="background: #2828">span=6</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### 间距控制
通过 `gutter` 属性可以设置栅格之间的间距。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRow :gutter='16'>
    <MYCol :span='8'>
      <div class='demo-box'>左侧</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>中间</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>右侧</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow :gutter="16">
      <MYCol :span="8">
        <div style="background: red;">左侧</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2c2">中间</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2828">右侧</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### 两端对齐
通过 `justify` 属性可以设置水平对齐方式。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRow justify='space-between'>
    <MYCol :span='6'>
      <div style='background: red'>左侧</div>
    </MYCol>
    <MYCol :span='6'>
      <div style='background: #2c2'>右侧</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow justify="space-between">
      <MYCol :span="6">
        <div style="background: red">左侧</div>
      </MYCol>
      <MYCol :span="6">
        <div style="background: #2c2">右侧</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### 垂直居中
通过 `align` 属性可以设置垂直居中，以及 `alignCenter` 可以设置水平垂直居中。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRow align>
    <MYCol :span='24'>
      <div class='demo-box'>顶部</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>中部</div>
    </MYCol>
    <MYCol :span='24'>
      <div class='demo-box'>底部</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow align>
      <MYCol :span="24">
        <div style="background: red">顶部</div>
      </MYCol>
      <MYCol :span="24">
        <div style="background: #2c2">中部</div>
      </MYCol>
      <MYCol :span="24">
        <div style="background: #2828">底部</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

### 方向反转
通过 `direction` 属性可以设置布局方向。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYRow direction='row-reverse'>
    <MYCol :span='8'>
      <div class='demo-box'>1 (视觉在右)</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>2</div>
    </MYCol>
    <MYCol :span='8'>
      <div class='demo-box'>3 (视觉在左)</div>
    </MYCol>
  </MYRow>
</template>
  `.trim()"
>
  <template #demo>
    <MYRow direction="row-reverse">
      <MYCol :span="8">
        <div style="background: red">1 (视觉在右)</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2c2">2</div>
      </MYCol>
      <MYCol :span="8">
        <div style="background: #2828">3 (视觉在左)</div>
      </MYCol>
    </MYRow>
  </template>
</ShowCode>

## API 参考

### MYRow Props

| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| gutter     | 栅格间距      | number/string | 0-24                           | `0`    |
| justify    | 水平对齐方式   | string  | `start`/`end`/`center`/`space-around`/`space-between` | —      |
| align      | 垂直对齐方式   | boolean | —                                 | `false` |
| alignCenter| 垂直水平居中      | boolean | —                                 | `false` |
| direction  | 布局方向      | string  | `row`/`column`/`row-reverse`/`column-reverse` | `row`  |
| tag        | 渲染标签      | string  | 支持所有 HTML 标签                 | `div`  |

### MYCol Props

| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| span       | 栅格宽度      | number  | 1-24                              | `24`   |
| offsetLeft | 左侧偏移      | number/string | 0-24                           | `0`    |
| offsetRight| 右侧偏移      | number/string | 0-24                           | `0`    |
| pull       | 向左移动      | number/string | 0-24                           | `0`    |
| push       | 向右移动      | number/string | 0-24                           | `0`    |
| tag        | 渲染标签      | string  | 支持所有 HTML 标签                 | `div`  |

### 类型定义

```typescript
interface RowProps {
  gutter?: number | string;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: boolean;
  alignCenter?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  tag?: string;
}

interface ColProps {
  span?: number;
  offsetLeft?: number | string;
  offsetRight?: number | string;
  pull?: number | string;
  push?: number | string;
  tag?: string;
}
```

<script setup>
import MYRow from '../../packages/components/layout/src/row.vue'
import MYCol from '../../packages/components/layout/src/col.vue'
</script>