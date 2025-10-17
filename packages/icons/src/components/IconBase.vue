<!-- packages/icons/src/components/IconBase.vue -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="finalWidth"
    :height="finalHeight"
    :viewBox="viewBox"
    fill="none"
    role="img"
    :aria-hidden="ariaHidden"
    v-bind="restAttrs"
    :style="svgStyle"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useIconSize } from '../../hooks/useIconSize'
import type { PropType } from 'vue'

const props = defineProps({
  size: { type: [String, Number] as PropType<string | number>, default: '1em' },
  color: { type: String, default: 'currentColor' },
  viewBox: { type: String, default: '0 0 24 24' },
  ariaHidden: { type: [Boolean, String] as PropType<boolean | string>, default: true }
})

const { finalWidth, finalHeight, ariaHidden, restAttrs } = useIconSize(props)

// 计算 SVG 样式，支持颜色控制
const svgStyle = computed(() => ({
  verticalAlign: 'middle',
  display: 'inline-block',
  lineHeight: '0',
  color: props.color,
  // 重要：将 stroke 设置为 currentColor 以便继承 color
  stroke: props.color
}))
</script>

<script lang="ts">
export default { name: 'MYIconBase' }
</script>