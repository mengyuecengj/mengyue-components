# Border
## 简易介绍
Border 组件用于为元素添加边框样式，支持多种边框风格、颜色和方向。mengyue-components 对其进行了封装并完成了vitest测试，并提供了丰富的配置选项。<br />
可以使用`<MYBorder></MYBorder>`或者`<MYBorder />`可以实现边框的配置。


## 关于基本边框
### borderStyle
使用 `borderStyle` 定义边框的基本样式。<br />
默认为黑色，此处使用`borderColor`配了个清晰的颜色。
```vue
<MYBorder borderStyle="solid">边框为solid</MYBorder>
<MYBorder borderStyle="dashed">边框为dashed</MYBorder>
<MYBorder borderStyle="dotted">边框为dotted</MYBorder>
```
运行后的效果依次如下
<MYBorder borderStyle="solid" borderColor="#2c2" />
<MYBorder borderStyle="dashed" borderColor="#2c2" />
<MYBorder borderStyle="dotted" borderColor="#2c2" />

### borderWidth
使用 `borderWidth` 定义边框的厚度，默认为 `1px`。此处使用`borderColor`配了个清晰的颜色。
```vue
<MYBorder borderWidth="2px">厚度为2px</MYBorder>
<MYBorder borderWidth="4vh">厚度为4px</MYBorder>
<MYBorder borderWidth="6rem">厚度为6rem</MYBorder>
<MYBorder borderWidth="8vw">厚度为8vw</MYBorder>
```
<MYBorder borderWidth="2px" borderColor="#2c2" />
<MYBorder borderWidth="4vh" borderColor="#2c2" />
<MYBorder borderWidth="6rem" borderColor="#2c2" />
<MYBorder borderWidth="8vw" borderColor="#2c2" />



### borderColor
使用 `borderColor` 定义边框的颜色。默认值为黑色，此处使用`borderStyle`配了`borderStyle="dashed"`。
```vue
<MYBorder borderColor="#ff0000">红色边框</MYBorder>
<MYBorder borderColor="#409EFF">蓝色边框</MYBorder>
```
<MYBorder borderColor="#ff0000"></MYBorder>
<MYBorder borderColor="#409EFF"></MYBorder>
当然也支持下面这种方式来自定义文字颜色
```vue
<MYBorder borderColor="red">红色边框</MYBorder>
<MYBorder borderColor="blue">蓝色边框</MYBorder>
```
<MYBorder borderColor="red"></MYBorder>
<MYBorder borderColor="blue"></MYBorder>

### 边框方向
可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。
```html
<MYBorder topColor="red" bottomColor="blue" leftColor="green" rightColor="yellow">
    这是一个带有不同方向颜色的边框
</MYBorder>
```
<MYBorder topColor="red" bottomColor="blue" leftColor="green" rightColor="yellow">上下左右分别为红色和蓝色绿色黄色</MYBorder>

## 其他样式
### center
使用 `center` 将边框中的内容居中。此处使用`borderColor`配了个清晰的颜色。
```html
<MYBorder center borderColor="#2c2">居中的文字</MYBorder>
```
<MYBorder center borderColor="#2c2">居中的文字</MYBorder>

### round
使用 `round` 属性为边框添加圆角。此处使用`borderColor`配了个清晰的颜色。为了效果更直观这里使用了`paddingText`移动了文本的位置。
```html
<MYBorder round>这是一个圆角边框</MYBorder>
```
<MYBorder round borderColor="#2c2" paddingText="10px">这是一个圆角边框</MYBorder>

### circle
使用 `circle` 属性将边框变为圆形。此处使用`borderColor`配了个清晰的颜色。为了效果更直观这里使用了`paddingText`移动了文本的位置。
```html
<MYBorder circle>这是一个圆形边框</MYBorder>
```
<MYBorder circle borderColor="#2c2" paddingText="10px">这是一个圆形边框</MYBorder>

### colorBg
使用 `colorBg` 设置边框内部的背景色。
```html
<MYBorder colorBg="#2c2">这是一个带有背景色的边框</MYBorder>
```
<MYBorder colorBg="#2c2">这是一个带有背景色的边框</MYBorder>

### textColor
使用 `textColor` 设置边框内文本的颜色。
```html
<MYBorder textColor="red">这是一个红色文本的边框</MYBorder>
```
<MYBorder textColor="red">这是一个红色文本的边框</MYBorder>

### boxShadow
使用 `boxShadow` 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。
```html
<MYBorder boxShadow="10px 2px 8px red">这是一个带有阴影的边框</MYBorder>
```
<MYBorder boxShadow="10px 2px 8px red">这是一个带有阴影的边框</MYBorder>

### 自定义宽高
使用`width`和`height`属性进行宽高的设置。为了效果更直观这里使用了`paddingText`和`borderColor`移动了文本的位置和设置颜色。这个宽和高也可以单独使用
```vue
<MYBorder width="300px" height="100px">高100px宽300px</MYBorder>
```
<MYBorder width="300px" height="100px" borderColor="#2c2" paddingText="20px">高100px宽300px</MYBorder>

### paddingText
使用`paddingText`设置边框内容与边框之间的距离，其效果相当于原生css的`padding`属性。也与css原生的padding使用方法是一致的。<br />
为了效果更直观这里使用了`borderColor`设置了清晰的颜色。
```html
<MYBorder width="300px" height="100px" paddingText="100px" borderColor="#2c2">paddingText为100px</MYBorder>
```
<MYBorder width="300px" height="100px" paddingText="100px" borderColor="#2c2">paddingText为100px</MYBorder>

最后，下面为多种进行组合使用：
```vue
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
>组合使用</MYBorder>
```
<MYBorder round topColor="red" bottomColor="blue" leftColor="green" rightColor="yellow" width="300px" height="100px" textColor="#ff00ff" paddingText="100px" colorBg="#2c2" boxShadow="10px 2px 8px red">组合使用</MYBorder>

<strong>注意: </strong>
<br />
如果使用了边框方向设置了颜色,那么`borderStyle`和`borderWidth`会被覆盖，使borderStyle不再生效。
<br />
`borderColor`和边框方向的颜色值同时设置了，那么边框方向会覆盖`borderColor`设置的颜色。所以它们指南同时使用一种样式。
<br />
如果设置了`cricle`，`round`将不会生效，`cricle`和`round`只能同时使用一种样式。
<br />

## API 参考

### Props

| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| borderStyle  | 边框样式      | string  | `solid`/`dashed`/`dotted`/`double` | `solid` |
| borderWidth  | 边框厚度      | string  | 支持px/rem/vh/vw                  | `1px`  |
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
| width         | 边框宽度     | string  | 支持px/rem/vh/vw                  | —      |
| height        | 边框高度    | string  | 支持px/rem/vh/vw                   | —      |
| paddingText | 内容与边框间距 | string| 支持px/rem/vh/vw          | — |
| tag    | 渲染标签      | string  | 支持所有 HTML 标签                 | `div` |

### 类型定义

```vue
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