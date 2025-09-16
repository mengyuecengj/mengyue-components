<template>
  <nav class="my-breadcrumb" aria-label="Breadcrumb">
    <slot v-if="$slots.default" />
  </nav>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'
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

provide('breadcrumbSeparator', computed(() => props.separator))
provide('breadcrumbSeparatorIcon', computed(() => props.separatorIcon))
</script>
