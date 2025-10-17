<template>
  <component 
    :is="iconComponent" 
    :size="size" 
    :color="color"
    v-if="iconComponent"
  />
  <div v-else>Icon not found: {{ name }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// 将 Props 移到 script setup 外部
export interface Props {
  name: string  
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '1em',
  color: 'currentColor'
})

// 动态获取已注册的组件
const iconComponent = computed(() => {
  // 将 name 转换为 PascalCase
  const pascalCaseName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
  const componentName = `MY${pascalCaseName}`
  
  // 检查组件是否已注册（在全局组件中查找）
  const components = (window as any).__GLOBAL_COMPONENTS || {}
  return components[componentName] || componentName
})
</script>

<script lang="ts">
export default { name: 'MYIconWrapper' }
</script>
