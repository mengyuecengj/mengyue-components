# Button
## 简易介绍
button按钮，基础组件经典交互元素，常用的操作按钮，可以用于表单提交等地方。
可以使用`<MYButton></MYButton>`或者`<MYButton />`来实现一个按钮

## 关于颜色的使用
### type

在MYButton中使用type可以实现按钮的颜色定义，这些颜色是mengyue-components提供的基本颜色定义。例如使用type完成下面的颜色定义,如果不写type默认是透明颜色:

<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton>Default按钮</MYButton>
    <MYButton type='primary'>primary按钮</MYButton>
    <MYButton type='success'>Success按钮</MYButton>
    <MYButton type='warning'>Warning按钮</MYButton>
    <MYButton type='danger'>Danger按钮</MYButton>
    <MYButton type='info'>Info按钮</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>注意: 演示效果有一定的放大元素，具体尺寸请阅读下面<MYa href="#aboutSize" style="">关于尺寸</MYa>的描述</span>
    <ClientOnly>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; justify-content: center; margin-top: 20px;">
            <MYButton>Default按钮</MYButton>
            <MYButton type="primary">primary按钮</MYButton>
            <MYButton type="success">Success按钮</MYButton>
            <MYButton type="warning">Warning按钮</MYButton>
            <MYButton type="danger">Danger按钮</MYButton>
            <MYButton type="info">Info按钮</MYButton>
        </div>
    </ClientOnly>
  </template>
</ShowCode>

### colorBg
当然，如果上面的颜色不满足需求，还可以自定义颜色，使用colorBg自定义按钮背景颜色 例如这里使用红色背景：
<ShowCode
  title="代码演示"
  description="如果使用了colorBg api,那么type属性将会被colorBg属性覆盖掉"
  :code="`
<template>
    <MYButton colorBg='#ff0000'>十六进制自定义红色背景按钮</MYButton>
    <MYButton colorBg='red'>单词自定义红色背景按钮</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorBg="#ff0000">十六进制自定义红色背景按钮</MYButton>
            <MYButton colorBg="red">单词自定义红色背景按钮</MYButton>
        </ClientOnly>
    </div>
  </template>
</ShowCode>

### colorText
`MYButton`按钮也支持自定义文本颜色，这里使用colorText自定义按钮文字颜色
<ShowCode
    title="代码演示"
    :code="`
<template>
    <MYButton colorText='#ff0000'>十六进制自定义红色文本按钮</MYButton>
    <MYButton colorText='red'>单词自定义红色文本按钮</MYButton>
</template>
    `"
>
    <template #demo>
        <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorText="#ff0000">十六进制自定义红色背景按钮</MYButton>
            <MYButton colorText="red">单词自定义红色背景按钮</MYButton>
        </ClientOnly>
        </div>
    </template>
</ShowCode>

### colorBorder
自定义按钮边框颜色，这里使用colorBorder自定义按钮边框颜色
<ShowCode
    title="代码演示"
    :code="`
<template>
    <MYButton colorBorder='#FF7F50'>十六进制自定义橙色边框按钮</MYButton>
    <MYButton colorBorder='orange'>单词自定义橙色边框按钮</MYButton>
</template>
    `"
>
    <template #demo>
        <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorBorder='#FF7F50'>十六进制自定义橙色边框按钮</MYButton>
            <MYButton colorBorder='#FF7F50'>单词自定义橙色边框按钮</MYButton>
            </ClientOnly>
        </div>
    </template>
</ShowCode>

### plain
使用plain属性可以把按钮渲染为透明样式，配合上面的自定义颜色实现不一样的样式
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton plain>Default按钮</MYButton>
    <MYButton plain type='primary'>primary按钮</MYButton>
    <MYButton plain type='success'>Success按钮</MYButton>
    <MYButton plain type='warning'>Warning按钮</MYButton>
    <MYButton plain type='danger'>Danger按钮</MYButton>
    <MYButton plain type='info'>Info按钮</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>注意: 演示效果有一定的放大元素，具体尺寸请阅读下面<MYa href="#aboutSize" style="">关于尺寸</MYa>的描述</span>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; justify-content: center; margin-top: 20px;">
    <ClientOnly>
        <MYButton plain>Default按钮</MYButton>
        <MYButton type="primary" plain>primary按钮</MYButton>
        <MYButton type="success" plain>Success按钮</MYButton>
        <MYButton type="warning" plain>Warning按钮</MYButton>
        <MYButton type="danger" plain>Danger按钮</MYButton>
        <MYButton type="info" plain>Info按钮</MYButton>
    </ClientOnly>
    </div>
  </template>
</ShowCode>

## 关于圆角
### round
使用round可以把按钮变成圆角
<ShowCode
    title="代码演示"
    :code="`
<template>
    <MYButton round>圆角按钮</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton round>圆角按钮</MYButton>
    </ClientOnly>
    </template>
</ShowCode>

### circle
使用circle可以把按钮变成圆形
<ShowCode
    title="代码演示"
    description="circle属性和round属性不能同时使用"
    :code="`
<template>
    <MYButton circle>A</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton circle>A</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## 关于尺寸 {#aboutSize}
### size
使用size属性可以支持调整按钮大小
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton size='supersmall'>supersmall按钮</MYButton>
    <MYButton size='small'>small按钮</MYButton>
    <MYButton size='medium'>medium按钮</MYButton>
    <MYButton size='large'>large按钮</MYButton>
    <MYButton size='superbig'>superbig按钮</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>注意: 演示效果有一定的放大元素，具体尺寸请阅读下面<MYa href="#aboutSize" style="">关于尺寸</MYa>的描述</span>
    <div>
    <ClientOnly>
        <MYButton style="display: block; margin-top: 20px" size="supersmall">supersmall按钮</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="small">small按钮</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="medium">medium按钮</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="large">large按钮</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="superbig">superbig按钮</MYButton>
        </ClientOnly>
    </div>
  </template>
</ShowCode>

## 关于禁用
### disabled
使用disabled可以支持禁用按钮
<ShowCode
    title="代码演示"
    :code="`
<template>
    <MYButton disabled>禁用按钮</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton disabled>禁用按钮</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## 插入图标
使用icon属性可以支持插入图标
<ShowCode
    title='代码演示'
    :code='`
<template>
    <MYButton icon="MYPlus">带图标的按钮</MYButton>
</template>
    `'
>
    <template #demo>
        <ClientOnly>
<MYButton type="success">
    <MYPlus /> 带图标的按钮
</MYButton>
        </ClientOnly>
    </template>
</ShowCode>


最后，实现个多种api组合使用实现个按钮：
<ShowCode
    title="代码演示"
    :code="`
<template>
    <MYButton
        size='superbig'
        round
        plain
        colorBorder='#FF7F50'
        colorBg='#8d4dd1'
        colorText='red'
    >组合按钮</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton
            size='superbig'
            round
            plain
            colorBorder='#FF7F50'
            colorBg='#8d4dd1'
            colorText='red'
        >组合按钮</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| type  | 按钮类型      | string  | `primary`/`success`/`warning`/`danger`/`info` | —  |
| size  | 按钮尺寸      | string  | `supersmall`/`small`/`medium`/`large`/`superbig`        | `medium`  |
| plain  | 是否为朴素按钮      | boolean  | —           |    `false`   |
| round     | 是否为圆角按钮    | boolean  | —             | `false`      |
| circle  | 是否为圆形按钮    | boolean  | —                 | `false`      |
| disabled    | 是否禁用    | boolean  | —                  | `false`      |
| colorBg   | 背景色    | string  | 支持16进制颜色或单词颜色                  | —      |
| colorText        | 文字颜色    | string | 支持16进制颜色或单词颜色                                 | `false` |
| colorBorder       | 边框颜色    | string | 支持16进制颜色或单词颜色             | — |
| tag      | 渲染标签       | string  | 持所有 HTML 标签                 | `button`      |

### 类型定义
```typescript
interface ButtonProps {
  type?: string;
  size?: string;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  colorBg?: string;
  colorText?: string;
  colorBorder?: string;
  iconOnly?: boolean;
  tag?: string;
}
```

<script setup>
import MYButton from '../../packages/components/button/src/button.vue'
import MYa from '../../packages/components/a/src/a.vue'
import MYPlus from '../../packages/icons/src/components/plus.vue' // 新增这行
</script>