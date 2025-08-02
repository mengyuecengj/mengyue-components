<template>
  <div class="my-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, computed } from 'vue'
import '../style/collapse.scss'

defineOptions({
  name: 'MYCollapse'
})

// Define props with TypeScript types
const props = defineProps<{
  modelValue: string | string[] // Active panel(s) name(s)
  accordion?: boolean // Toggle accordion mode
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
  (e: 'change', value: string | string[]): void
}>()

// Compute active names to handle both string and array cases
const activeNames = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
    emit('change', value)
  }
})

// Provide toggle function to child components
provide('collapse', {
  activeNames,
  toggleItem(name: string) {
    if (props.accordion) {
      // In accordion mode, only one panel is active
      activeNames.value = activeNames.value === name ? '' : name
    } else {
      // In multi-panel mode, toggle the panel in the array
      const names = Array.isArray(activeNames.value) ? activeNames.value : []
      if (names.includes(name)) {
        activeNames.value = names.filter(n => n !== name)
      } else {
        activeNames.value = [...names, name]
      }
    }
  }
})
</script>
