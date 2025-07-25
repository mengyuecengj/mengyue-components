<!-- MYCollapseItem.vue -->
<template>
  <div class="my-collapse-item">
    <div class="my-collapse-item__header" @click="toggle" :aria-expanded="isActive">
      {{ title }}
    </div>
    <div class="my-collapse-item__content" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue'

defineOptions({
  name: "MYCollapse-item"
})

const props = defineProps<{
  name: string // Unique identifier for the panel
  title: string // Header text
}>()

const collapse = inject('collapse') as {
  activeNames: { value: string | string[] }
  toggleItem: (name: string) => void
}

// Determine if this panel is active
const isActive = computed(() =>
  Array.isArray(collapse.activeNames.value)
    ? collapse.activeNames.value.includes(props.name)
    : collapse.activeNames.value === props.name
)

// Toggle the panel's state
const toggle = () => {
  collapse.toggleItem(props.name)
}
</script>

<style scoped>
.my-collapse-item {
  border-bottom: 1px solid #ebeef5;
}

.my-collapse-item__header {
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
}

.my-collapse-item__header:hover {
  background-color: #f5f7fa;
}

.my-collapse-item__content {
  padding: 0 15px 10px;
  transition: height 0.3s ease;
}
</style>