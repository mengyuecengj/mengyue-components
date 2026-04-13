# PickColor
## Brief Introduction
The `pickColor` color picker component is used for users to select a color.<br />
You can use `<MYSelect-color></MYSelect-color>` or `<MYSelect-color />` to implement a color picker.

## Basic Usage
Use `v-model` to bind the color value. The default color is black (`#000000`).
<ShowCode
  title="Code Demo"
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

## API Reference

### Props
| Parameter   | Description      | Type     | Options   | Default   |
|-------------|------------------|----------|-----------|-----------|
| modelValue  | Bound value      | string   | —         | `#000000` |

### Type Definition
```typescript
interface PickColorProps {
  modelValue?: string;
}
```
<script setup> 
import { ref, onMounted } from 'vue'
import MYSelectColor from '../../../packages/components/pickColor/src/pickColor.vue'
import { useColorUtils } from '../../../packages/hooks/useColorUtils'

const colorValue = ref('#409EFF')

// ✅ Completely removed watch, only using onMounted
onMounted(() => {
  const { applyGlobalColor } = useColorUtils()
  applyGlobalColor(colorValue.value, '--global-primary-color')
})
</script>