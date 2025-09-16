<template>
  <li
    class="my-menu-item"
    :class="{ active: isActive, disabled }"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import '../style/menuItem.scss'

defineOptions({
  name: 'MYMenu-item',
})

const props = defineProps({
  index: String,
  disabled: Boolean,
})

const menuContext = inject<{ activeIndex?: { value: string }; handleSelect: (index: string, indexPath: string[]) => void }>('menuContext')

const isActive = computed(() => menuContext?.activeIndex?.value === props.index)

function handleClick() {
  if (props.disabled) return
  menuContext?.handleSelect(props.index as string, [props.index as string])
}
</script>

