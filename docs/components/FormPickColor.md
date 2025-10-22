# PickColor
## 简易介绍
pickColor颜色选择器组件，用于用户选择颜色。<br />
可以使用`<MYSelect-color></MYSelect-color>`或者`<MYSelect-color />`来实现一个颜色选择器

## 基础用法
使用`v-model`绑定颜色值，默认颜色为黑色（`#000000`）。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSelect-color v-model='colorValue' />
</template>
  `.trim()"
>
  <template #demo>
      <ClientOnly>
    <MYSelect-color v-model="colorValue" />
        </ClientOnly>
  </template>
</ShowCode>

## API 参考

### Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| modelValue | 绑定值       | string  | —                               | `#000000` |

### 类型定义
```typescript
interface PickColorProps {
  modelValue?: string;
}
```
<script setup> 
import { ref, onMounted } from 'vue'
import MYSelectColor from '../../packages/components/pickColor/src/pickColor.vue'
import { useColorUtils } from '../../packages/hooks/useColorUtils'

const colorValue = ref('#409EFF')

// ✅ 完全移除 watch，只用 onMounted
onMounted(() => {
  const { applyGlobalColor } = useColorUtils()
  applyGlobalColor(colorValue.value, '--global-primary-color')
})
</script>
