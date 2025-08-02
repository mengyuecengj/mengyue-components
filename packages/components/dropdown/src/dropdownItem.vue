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
import '../style/dropdownItem.scss'
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
