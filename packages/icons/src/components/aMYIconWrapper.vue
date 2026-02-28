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
import { computed, type Component } from 'vue'

/** ======================
 * Props 定义
 ======================= */
export interface Props {
  name: string
  size?: string | number
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '1em',
  color: 'currentColor'
})

/** ======================
 * 动态获取图标组件
 ======================= */
const iconComponent = computed<Component | string | null>(() => {
  // name -> PascalCase
  const pascalCaseName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1)

  const componentName = `MY${pascalCaseName}`

  const components = window.__GLOBAL_COMPONENTS__ ?? {}

  return components[componentName] ?? componentName
})
</script>

<script lang="ts">
// 全局类型扩展必须在普通 script 中声明
declare global {
  interface Window {
    __GLOBAL_COMPONENTS__?: Record<string, Component>
  }
}

export default {
  name: 'MYIconWrapper'
}
</script>