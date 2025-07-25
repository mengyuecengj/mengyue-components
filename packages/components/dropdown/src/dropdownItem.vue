<template>
  <li
    class="my-dropdown-item"
    :class="{ disabled, divided }"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineOptions({
    name: 'MYDropdown-item'
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  divided: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.stopPropagation()
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.my-dropdown-item {
  padding: 8px 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
  user-select: none;
}

.my-dropdown-item:hover {
  background-color: #f5f7fa;
}

.my-dropdown-item.disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.my-dropdown-item.divided {
  border-top: 1px solid #ebeef5;
}
</style>
