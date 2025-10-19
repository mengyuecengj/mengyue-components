# Scroll
## 简易介绍
scroll 滚动条组件，用于实现自定义滚动条样式和功能。mengyue-components 对其进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYScroll></MYScroll>` 或者 `<MYScroll />` 来实现一个自定义滚动条。
这个样式会改变全局滚动条，所以暂时不做示例展示，直接可以参考 API 部分。

## 关于颜色的使用
### thumbColor
在 `MYScroll` 中使用 `thumbColor` 可以定义滚动条滑块的颜色。
例如：
```vue
<MYScroll thumbColor="#ff0000">自定义红色滑块滚动条</MYScroll>
```

### thumbHoverColor
使用 `thumbHoverColor` 可以定义滑块在悬停时的颜色。
例如：
```vue
<MYScroll thumbHoverColor="#00ff00">悬停时绿色滑块滚动条</MYScroll>
```

### trackColor
使用 `trackColor` 可以定义滚动条轨道的颜色。
例如：
```vue
<MYScroll trackColor="#0000ff">蓝色轨道滚动条</MYScroll>
```

## 关于尺寸
### width
使用 `width` 可以定义滚动条的宽度。
例如：
```vue
<MYScroll width="10px">宽度为 10px 的滚动条</MYScroll>
```

## API 参考

### Props

| 参数            | 说明                 | 类型     | 可选值                              | 默认值  |
|----------------|---------------------|---------|-----------------------------------|--------|
| thumbColor     | 滑块颜色             | string  | 支持16进制颜色或单词颜色                 | —      |
| thumbHoverColor| 滑块悬停颜色         | string  | 支持16进制颜色或单词颜色                 | —      |
| trackColor     | 轨道颜色             | string  | 支持16进制颜色或单词颜色                 | —      |
| width          | 滚动条宽度           | string  | 支持 CSS 宽度单位（如 px, em）          | —      |
| tag            | 容器标签             | string  | 支持所有 HTML 标签                 | `div`  |

### 类型定义

```vue
interface ScrollProps {
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  width?: string;
  tag?: string;
}
```
