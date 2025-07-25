<template>
  <nav class="my-breadcrumb" aria-label="Breadcrumb">
    <slot />
  </nav>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'

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

<style scoped>
.my-breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--el-text-color-regular, #606266);
}
</style>
