# BackTop

## 简易介绍
BackTop 返回顶部组件，用于快速返回页面顶部。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYBackTop></MYBackTop>` 或者 `<MYBackTop />` 来实现一个返回顶部组件。

## 基本用法

### visibilityHeight
使用 `visibilityHeight` 属性设置滚动高度阈值，当页面滚动超过该值时显示返回顶部按钮。默认值为 `200`。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBacktop :right='50' :bottom='80' />
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
    <MYBacktop :right="50" :bottom="80" />
    </ClientOnly>
  </template>
</ShowCode>

### 自定义位置
通过 `right` 和 `bottom` 属性可以自定义组件在页面中的位置。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBacktop :right='100' :bottom='100' />
</template>
  `.trim()"
>
  <template #demo>
  <ClientOnly>
    <MYBacktop :right="100" :bottom="100" />
     </ClientOnly> 
  </template>
</ShowCode>

### 自定义插槽用法
使用插槽可以完全自定义返回顶部按钮的内容和样式。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBacktop :bottom='140' :right='110'>
    <div
      style='
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        font-weight: bold;
      '
    >
      UP
    </div>
  </MYBacktop>
</template>
  `.trim()"
>
  <template #demo>
    <ClientOnly>
    <MYBacktop :bottom="140" :right="110">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
          font-weight: bold;
        "
      >
        UP
      </div>
    </MYBacktop>
      </ClientOnly>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| visibilityHeight  | 滚动高度阈值，超过该值显示按钮 | number  | — | `200`  |
| right  | 距离右侧的距离 | number \| string  | — | `40`  |
| bottom  | 距离底部的距离 | number \| string  | — | `40`  |
| target  | 监听滚动的目标元素 | string  | — | `''`  |

### 类型定义
```typescript
interface BackTopProps {
  visibilityHeight?: number;
  right?: string | number;
  bottom?: string | number;
  target?: string;
}
```
<script setup>
import MYBacktop from '../../packages/components/backtop/src/backtop.vue'
</script>