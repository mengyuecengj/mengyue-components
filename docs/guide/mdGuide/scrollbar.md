# Scrollbar
## 简易介绍
scrollbar 是一个滚动条组件，用于在内容超出容器时提供滚动功能。mengyue-components 对其进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYScrollbar></MYScrollbar>` 或者 `<MYScrollbar />` 来实现一个滚动条。

## 关于局部滚动条的使用
### 横向和纵向都有滚动条
```vue
<MYScrollbar widthX ScrollWidth="20px" corner>
    <MYText size="30rem">11111111111111111111111111111</MYText>
</MYScrollbar>
```
<MYScrollbar widthX ScrollWidth="20px" corner>
    <MYText size="30rem">11111111111111111111111111111</MYText>
</MYScrollbar>

### 纵向滚动条的颜色
改变滚动条的滑块，滑轨，鼠标点击或者触碰滑块时的颜色
```vue
<MYScrollbar height="500px" thumbColor="#ff0000" thumbHoverColor="#2c2" trackColor="#797">
        <MYText size="30rem">111</MYText>
        <MYText size="30rem">111</MYText>
</MYScrollbar>
```
<MYScrollbar height="500px" thumbColor="#ff0000" thumbHoverColor="#2c2" trackColor="#797">
        <MYText size="30rem">111</MYText>
        <MYText size="30rem">111</MYText>
</MYScrollbar>

### 取消滚动条禁止滚动
```vue
<MYScrollbar height="500px" Maxheight="800px" disabledScroll>
    <MYText size="30rem">222</MYText>
    <MYText size="30rem">222</MYText>
</MYScrollbar>
```
<MYScrollbar height="500px" Maxheight="800px" disabledScroll>
    <MYText size="30rem">222</MYText>
    <MYText size="30rem">222</MYText>
</MYScrollbar>

### 设置最大高度为800px
```vue
<MYScrollbar height="500px" Maxheight="800px">
    <MYText size="30rem">333</MYText>
    <MYText size="30rem">333</MYText>
</MYScrollbar>
```
<MYScrollbar height="500px" Maxheight="800px">
    <MYText size="30rem">333</MYText>
    <MYText size="30rem">333</MYText>
</MYScrollbar>

### 组合使用
```vue
<MYScrollbar height="600px" Maxheight="1000px" thumbColor="#fff" thumbHoverColor="#191919" trackColor="#2c2" >
    <MYText size="30rem">444</MYText>
    <MYText size="30rem">444</MYText>
</MYScrollbar>
```
<MYScrollbar height="600px" Maxheight="1000px" thumbColor="#fff" thumbHoverColor="#191919" trackColor="#2c2" >
    <MYText size="30rem">444</MYText>
    <MYText size="30rem">444</MYText>
</MYScrollbar>

## API 参考

### Props

| 参数             | 说明                 | 类型      | 可选值                              | 默认值  |
|------------------|----------------------|-----------|-----------------------------------|--------|
| height           | 滚动条高度           | string    | px/em/rem/动态                                 | —      |
| maxHeight        | 滚动条最大高度       | string    | px/em/rem/动态                                 | —      |
| ScrollWidth      | 滚动条宽度     | —      | string | px/em/rem/动态                                 | —      |
| widthX           | 是否启用水平滚动条   | boolean   | —                                 | `false` |
| thumbColor       | 滑块颜色             | string    | 支持16进制颜色或单词颜色             | —      |
| thumbHoverColor  | 滑块悬停颜色         | string    | 支持16进制颜色或单词颜色             | —      |
| trackColor       | 轨道颜色             | string    | 支持16进制颜色或单词颜色             | —      |
| disabledHeight   | 禁用垂直滚动条       | boolean   | —                                 | `false` |
| disabledWidth    | 禁用水平滚动条       | boolean   | —                                 | `false` |
| disabledScroll   | 禁用滚动功能         | boolean   | —                                 | `false` |
| corner           | 启用横向和纵向滚动条时边缘是否连接         | boolean   | —                                 | `false` |
| tag              | 容器标签             | string    | 支持所有 HTML 标签                 | `div`  |

### 类型定义

```vue
interface ScrollbarProps {
  height?: string;
  maxHeight?: string;
  ScrollWidth?: string;
  widthX?: boolean;
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  disabledHeight?: boolean;
  disabledWidth?: boolean;
  disabledScroll?: boolean;
  corner?: boolean;
  tag?: string;
}
```