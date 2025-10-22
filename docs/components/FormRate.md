# Rate
## 简易介绍
rate评分组件，用于用户对内容进行评分。<br />
可以使用`<MYRate></MYRate>`或者`<MYRate />`来实现一个评分组件

## 基础用法
使用`v-model`绑定评分值，默认评分范围为0-5分。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYRate v-model='rateValue' />
</template>
  `.trim()"
>
  <template #demo>
    <MYRate v-model="rateValue" />
  </template>
</ShowCode>

## 禁用状态
使用`disabled`属性可以禁用评分组件。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYRate v-model='rateValue' disabled />
</template>
  `.trim()"
>
  <template #demo>
    <MYRate v-model="rateValue" disabled />
  </template>
</ShowCode>

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| disabled   | 是否禁用     | boolean | —                               | `false` |

### 类型定义
```typescript
interface RateProps {
  disabled?: boolean;
}
```

<script setup>
import MYRate from '../../packages/components/rate/src/rate.vue'
</script>