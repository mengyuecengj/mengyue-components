# Button
## 简易介绍
button按钮，经典交互元素，常用的操作按钮，可以用于表单提交等地方。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYButton></MYButton>`或者`<MYButton />`来实现一个按钮

## 关于颜色的使用
### type
在MYButton中使用type可以实现按钮的颜色定义，这些颜色是mengyue-components提供的基本颜色定义。 例如使用type完成下面的颜色定义,如果不写type默认是透明颜色:
```vue
<MYButton>Default按钮</MYButton>
<MYButton type="primary">primary按钮</MYButton>
<MYButton type="success">Success按钮</MYButton>
<MYButton type="warning">Warning按钮</MYButton>
<MYButton type="danger">Danger按钮</MYButton>
<MYButton type="info">Info按钮</MYButton>
```
<div style="display: flex; gap: 10px;">
  <MYButton>Default按钮</MYButton>
  <MYButton type="primary">primary按钮</MYButton>
  <MYButton type="success">Success按钮</MYButton>
  <MYButton type="warning">Warning按钮</MYButton>
  <MYButton type="danger">Danger按钮</MYButton>
  <MYButton type="info">Info按钮</MYButton>
</div>

### 自定义颜色
当然，如果上面的颜色不满足需求，还可以自定义颜色，使用colorBg自定义按钮背景颜色 例如这里使用红色背景：
```vue
<MYButton colorBg="#ff0000">自定义红色背景按钮</MYButton>
```
<MYButton colorBg="#ff0000">自定义红色背景按钮</MYButton>
当然也支持下面这种方式来自定义背景颜色
```vue
<MYButton colorBg="red">自定义红色背景按钮</MYButton>
```
<MYButton colorBg="red">自定义红色背景按钮</MYButton>

### 自定义文本颜色
也可以自定义文本颜色，这里使用colorText自定义按钮文字颜色
```vue
<MYButton colorText="#ff0000">自定义红色文本按钮</MYButton>
```
<MYButton colorText="#ff0000">自定义红色文本按钮</MYButton>
当然也支持下面这种方式来自定义文字颜色
```vue
<MYButton colorText="red">自定义红色背景按钮</MYButton>
```
<MYButton colorText="red">自定义红色背景按钮</MYButton>

### 自定义边框颜色
自定义按钮边框颜色，这里使用colorBorder自定义按钮边框颜色
```vue
<MYButton colorBorder="#FF7F50">自定义珊瑚色边框按钮</MYButton>
```
<MYButton colorBorder="#FF7F50">自定义珊瑚色边框按钮</MYButton>
当然也支持下面这种方式来自定义边框颜色
```vue
<MYButton colorBorder="#FF7F50">自定义珊瑚色边框按钮</MYButton>
```
<MYButton colorBorder="#FF7F50">自定义珊瑚色边框按钮</MYButton>

### plain
使用plain属性可以把按钮渲染为透明样式，配合上面的自定义颜色实现不一样的样式
```vue
<MYButton plain>Default按钮</MYButton>
<MYButton type="primary" plain>primary按钮</MYButton>
<MYButton type="success" plain>Success按钮</MYButton>
<MYButton type="warning" plain>Warning按钮</MYButton>
<MYButton type="danger" plain>Danger按钮</MYButton>
<MYButton type="info" plain>Info按钮</MYButton>
```
运行后的效果
<div style="display: flex; gap: 10px;">
  <MYButton plain>Default按钮</MYButton>
  <MYButton type="primary" plain>primary按钮</MYButton>
  <MYButton type="success" plain>Success按钮</MYButton>
  <MYButton type="warning" plain>Warning按钮</MYButton>
  <MYButton type="danger" plain>Danger按钮</MYButton>
  <MYButton type="info" plain>Info按钮</MYButton>
</div>

## 关于圆角
### round
使用round可以把按钮变成圆角
```vue
<MYButton round>Default按钮</MYButton>
```
<MYButton round>Default按钮</MYButton>

### circle
使用circle可以把按钮变成圆形
```vue
<MYButton circle>A</MYButton>
```
<MYButton circle>A</MYButton>

## 关于尺寸
### size
使用size属性可以调整按钮大小
```vue
<MYButton size="supersmall">supersmall按钮</MYButton>
<MYButton size="small">small按钮</MYButton>
<MYButton size="medium">medium按钮</MYButton>
<MYButton size="large">large按钮</MYButton>
<MYButton size="superbig">superbig按钮</MYButton>
```
运行后的效果
<MYButton size="supersmall">supersmall按钮</MYButton>
<MYButton size="small">small按钮</MYButton>
<MYButton size="medium">medium按钮</MYButton>
<MYButton size="large">large按钮</MYButton>
<MYButton size="superbig">superbig按钮</MYButton>

## disabled
使用disabled来禁用按钮
```vue
<MYButton disabled>禁用按钮</MYButton>
```
<MYButton disabled>禁用按钮</MYButton>

最后，下面为多种进行组合使用：
```vue
<MYButton
    size="superbig"
    round
    plain
    colorBorder="#FF7F50"
    colorBg="#8d4dd1"
    colorText="red"
>组合按钮</MYButton>
```
<MYButton
    size="superbig"
    round
    plain
    colorBorder="#FF7F50"
    colorBg="#8d4dd1"
    colorText="red"
>组合按钮</MYButton>

## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| type  | 按钮类型      | string  | primary/success/warning/danger/info | —  |
| size  | 按钮尺寸      | string  | supersmall/small/medium/large/superbig        | `medium`  |
| plain  | 是否为朴素按钮      | boolean  | —           |    `false`   |
| round     | 是否为圆角按钮    | boolean  | —             | false      |
| circle  | 是否为圆形按钮    | boolean  | —                 | false      |
| disabled    | 是否禁用    | boolean  | —                  | false      |
| colorBg   | 背景色    | string  | 支持16进制颜色或单词颜色                  | —      |
| colorText        | 文字颜色    | string | —                                 | `false` |
| colorBorder       | 边框颜色    | string | 支持16进制颜色或单词颜色             | — |
| tag      | 渲染标签       | string  | 持所有 HTML 标签                 | button      |

### 类型定义
```vue
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
  tag?: string;
}
```