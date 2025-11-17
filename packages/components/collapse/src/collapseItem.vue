<template>
  <div class="my-collapse-item">
    <div class="my-collapse-item__header" :aria-expanded="isActive" @click="toggle">
      <!-- 支持插槽标题，如果没有插槽则使用 title prop -->
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div v-show="isActive" class="my-collapse-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue'
import '../style/collapse.scss'

defineOptions({
  name: "MYCollapse-item"
})

const props = defineProps<{
  name: string // Unique identifier for the panel
  title?: string // Header text (改为可选)
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