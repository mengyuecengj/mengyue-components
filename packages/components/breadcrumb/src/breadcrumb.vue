<template>
  <nav class="my-breadcrumb" aria-label="Breadcrumb">
    <slot v-if="$slots.default" />
  </nav>
</template>

<script setup lang="ts">
import { provide, computed, useSlots } from 'vue'
import '../style/breadcrumb.scss'

defineOptions({
    name: 'MYBreadcrumb'
})

const props = defineProps({
  separator: {
    type: String,
    default: '/',
  },
  separatorIcon: {
    type: [Object, Function],
    default: null,
  },
})

const slots = useSlots()
const children = slots.default?.() || []

provide('breadcrumbSeparator', computed(() => props.separator))
provide('breadcrumbSeparatorIcon', computed(() => props.separatorIcon))

// 为每个子组件提供 isLast 属性
children.forEach((child, index) => {
  if (child.props) {
    child.props.isLast = index === children.length - 1
  }
})
</script>
