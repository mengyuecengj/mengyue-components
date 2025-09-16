<!-- packages/icons/src/MYIconBase.vue -->
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
    style="vertical-align: middle; display: inline-block; line-height: 0;"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
import { useIconSize } from '../../hooks/useIconSize'
import type { PropType } from 'vue'

const props = defineProps({
  size: { type: [String, Number] as PropType<string | number>, default: '1em' },
  viewBox: { type: String, default: '0 0 24 24' },
  ariaHidden: { type: [Boolean, String] as PropType<boolean | string>, default: true }
})

const { finalWidth, finalHeight, ariaHidden, restAttrs } = useIconSize(props)
</script>

<script lang="ts">
export default { name: 'MYIconBase' }
</script>
