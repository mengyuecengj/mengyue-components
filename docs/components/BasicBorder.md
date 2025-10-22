# Border
## 简易介绍
Border 组件用于为元素添加边框样式，支持多种边框风格、颜色和方向。
可以使用`<MYBorder></MYBorder>`或者`<MYBorder />`可以实现边框的配置。

## 关于基本边框
### borderStyle
使用 `borderStyle` 定义边框的基本样式。<br />
默认为黑色，此处使用`borderColor`配了个清晰的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYBorder borderStyle="solid" borderColor="#2c2">边框为solid</MYBorder>
      <MYBorder borderStyle="dashed" borderColor="#2c2">边框为dashed</MYBorder>
      <MYBorder borderStyle="dotted" borderColor="#2c2">边框为dotted</MYBorder>
    </div>
  </template>
</ShowCode>

### borderWidth
使用 `borderWidth` 定义边框的厚度，默认为 `1px`。此处使用`borderColor`配了个清晰的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <MYBorder borderWidth="2px" borderColor="#2c2">厚度为2px</MYBorder>
      <MYBorder borderWidth="4vh" borderColor="#2c2">厚度为4vh</MYBorder>
      <MYBorder borderWidth="6rem" borderColor="#2c2">厚度为6rem</MYBorder>
      <MYBorder borderWidth="8vw" borderColor="#2c2">厚度为8vw</MYBorder>
    </div>
  </template>
</ShowCode>

### borderColor
使用 `borderColor` 定义边框的颜色。默认值为黑色，此处使用`borderStyle`配了`borderStyle="dashed"`。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
      <MYBorder borderColor="#ff0000" borderStyle="dashed">红色边框</MYBorder>
      <MYBorder borderColor="#409EFF" borderStyle="dashed">蓝色边框</MYBorder>
      <MYBorder borderColor="red" borderStyle="dashed">红色边框</MYBorder>
      <MYBorder borderColor="blue" borderStyle="dashed">蓝色边框</MYBorder>
    </div>
  </template>
</ShowCode>

## 边框方向
可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder 
    topColor='red' 
    bottomColor='blue' 
    leftColor='green' 
    rightColor='yellow'
  >
    这是一个带有不同方向颜色的边框
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder topColor="red" bottomColor="blue" leftColor="green" rightColor="yellow">
      上下左右分别为红色和蓝色绿色黄色
    </MYBorder>
  </template>
</ShowCode>

## 边框内容居中
使用 `center` 将边框中的内容居中。此处使用`borderColor`配了个清晰的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder center borderColor="#2c2">居中的文字</MYBorder>
  </template>
</ShowCode>

## 边框圆角
使用 `round` 属性为边框添加圆角。此处使用`borderColor`配了个清晰的颜色。为了效果更直观这里使用了`paddingText`移动了文本的位置。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder round borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder round borderColor="#2c2" paddingText="10px">这是一个圆角边框</MYBorder>
  </template>
</ShowCode>

## 边框圆形
使用 `circle` 属性将边框变为圆形。此处使用`borderColor`配了个清晰的颜色。为了效果更直观这里使用了`paddingText`移动了文本的位置。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder circle borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder circle borderColor="#2c2" paddingText="10px">这是一个圆形边框</MYBorder>
  </template>
</ShowCode>

## 边框内部背景颜色
使用 `colorBg` 设置边框内部的背景色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder colorBg='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder colorBg="#2c2">这是一个带有背景色的边框</MYBorder>
  </template>
</ShowCode>

## 边框内部文本颜色
使用 `textColor` 设置边框内文本的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder textColor="red">这是一个红色文本的边框</MYBorder>
  </template>
</ShowCode>

## 阴影
使用 `boxShadow` 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder boxShadow="10px 2px 8px red">这是一个带有阴影的边框</MYBorder>
  </template>
</ShowCode>

## 自定义宽高
使用`width`和`height`属性进行宽高的设置。为了效果更直观这里使用了`paddingText`和`borderColor`移动了文本的位置和设置颜色。这个宽和高也可以单独使用。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    borderColor='#2c2' 
    paddingText='20px'
  >
    高100px宽300px
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder width="300px" height="100px" borderColor="#2c2" paddingText="20px">
      高100px宽300px
    </MYBorder>
  </template>
</ShowCode>

## 边框内容与边框之间距离
使用`paddingText`设置边框内容与边框之间的距离，其效果相当于原生css的`padding`属性。也与css原生的padding使用方法是一致的。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    paddingText='100px' 
    borderColor='#2c2'
  >
    paddingText为100px
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder width="300px" height="100px" paddingText="100px" borderColor="#2c2">
      paddingText为100px
    </MYBorder>
  </template>
</ShowCode>

最后，下面为多种进行组合使用：

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBorder 
    round
    topColor='red'
    bottomColor='blue'
    leftColor='green'
    rightColor='yellow'
    width='300px'
    height='100px'
    textColor='#ff00ff'
    paddingText='100px'
    colorBg='#2c2'
    boxShadow='10px 2px 8px red'
  >
    组合使用
  </MYBorder>
</template>
  `.trim()"
>
  <template #demo>
    <MYBorder 
      round
      topColor="red"
      bottomColor="blue"
      leftColor="green"
      rightColor="yellow"
      width="300px"
      height="100px"
      textColor="#ff00ff"
      paddingText="100px"
      colorBg="#2c2"
      boxShadow="10px 2px 8px red"
    >
      组合使用
    </MYBorder>
  </template>
</ShowCode>

<strong>注意: </strong>
<br />
> · 如果使用了边框方向设置了颜色,那么`borderStyle`和`borderWidth`会被覆盖，使borderStyle不再生效。
<br />
· `borderColor`和边框方向的颜色值同时设置了，那么边框方向会覆盖`borderColor`设置的颜色。所以它们指南同时使用一种样式。
<br />
· 如果设置了`cricle`，`round`将不会生效，`cricle`和`round`只能同时使用一种样式。
<br />

## API 参考

### Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| borderStyle  | 边框样式      | string  | `solid`/`dashed`/`dotted`/`double` | `solid` |
| borderWidth  | 边框厚度      | string  | `px`/`rem`/`vh`/`vw`                  | `1px`  |
| borderColor  | 边框颜色      | string  | 支持16进制颜色或单词颜色           | —      |
| topColor     | 上边框颜色    | string  | 支持16进制颜色或单词颜色             | —      |
| bottomColor  | 下边框颜色    | string  | 支持16进制颜色或单词颜色                 | —      |
| leftColor    | 左边框颜色    | string  | 支持16进制颜色或单词颜色                  | —      |
| rightColor   | 右边框颜色    | string  | 支持16进制颜色或单词颜色                  | —      |
| round        | 是否为圆角    | boolean | —                                 | `false` |
| circle       | 是否为圆形    | boolean | —                                 | `false` |
| colorBg      | 背景色       | string  | 支持16进制颜色或单词颜色                 | —      |
| textColor    | 文本颜色     | string  | 支持16进制颜色或单词颜色                 | —      |
| boxShadow    | 阴影效果     | string  | 支持所有CSS阴影格式                 | —      |
| width         | 边框宽度     | string  | `px`/`rem`/`vh`/`vw`                  | —      |
| height        | 边框高度    | string  | `px`/`rem`/`vh`/`vw`                   | —      |
| paddingText | 内容与边框间距 | string| `px`/`rem`/`vh`/`vw`          | — |
| tag    | 渲染标签      | string  | 支持所有 HTML 标签                 | `div` |

### 类型定义

```typescript
interface BorderProps {
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double';
  borderWidth?: string;
  borderColor?: string;
  topColor?: string;
  bottomColor?: string;
  leftColor?: string;
  rightColor?: string;
  round?: boolean;
  circle?: boolean;
  colorBg?: string;
  textColor?: string;
  boxShadow?: string;
  width?: string;
  height?: string;
  paddingText?: string;
  tag?: string;
}
```

<script setup>
import MYBorder from '../../packages/components/border/src/border.vue'
</script>