# Scroll
## 简易介绍
scroll 滚动条组件，用于实现自定义滚动条样式和功能。
可以使用 `<MYScroll></MYScroll>` 或者 `<MYScroll />` 来实现一个自定义滚动条。

注意：这个样式会改变全局滚动条，所以代码演示并没有效果, 可以直接观察右侧滚动条效果。

## 关于颜色的使用
### thumbColor
在 `MYScroll` 中使用 `thumbColor` 可以定义滚动条滑块的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYScroll thumbColor='#ff0000'>自定义红色滑块滚动条</MYScroll>
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
    <MYScroll thumbColor="#ff0000" style="height: 100px; overflow-y: auto;">
      <div style="height: 500px">滚动内容</div>
    </MYScroll>
  </ClientOnly>
  </template>
</ShowCode>

### thumbHoverColor
使用 `thumbHoverColor` 可以定义滑块在悬停时的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYScroll thumbHoverColor='#00ff00'>悬停时绿色滑块滚动条</MYScroll>
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
      <MYScroll thumbHoverColor="#00ff00" style="height: 100px; overflow-y: auto;">
        <div style="height: 500px">滚动内容</div>
      </MYScroll>
    </ClientOnly>
  </template>
</ShowCode>

### trackColor
使用 `trackColor` 可以定义滚动条轨道的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYScroll trackColor='#0000ff'>蓝色轨道滚动条</MYScroll>
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
      <MYScroll trackColor="#0000ff" style="height: 100px; overflow-y: auto;">
        <div style="height: 500px">滚动内容</div>
      </MYScroll>
    </ClientOnly>
  </template>
</ShowCode>

## API 参考

### Props

| 参数            | 说明                 | 类型     | 可选值                              | 默认值  |
|----------------|---------------------|---------|-----------------------------------|--------|
| thumbColor     | 滑块颜色             | string  | 支持16进制颜色或单词颜色           | —      |
| thumbHoverColor| 滑块悬停颜色         | string  | 支持16进制颜色或单词颜色           | —      |
| trackColor     | 轨道颜色             | string  | 支持16进制颜色或单词颜色           | —      |
| width          | 滚动条宽度           | string  | 支持 CSS 宽度单位（如 px, em）     | —      |
| tag            | 容器标签             | string  | 支持所有 HTML 标签                 | `div`  |

### 类型定义

```typescript
interface ScrollProps {
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  width?: string;
  tag?: string;
}
```
<script setup>
import MYScroll from '../../packages/components/scroll/src/scroll.vue'
</script>
