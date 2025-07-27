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

<style scoped lang="scss">
.my-menu-item {
  padding: 12px 20px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  color: var(--menu-text, #fff);
  user-select: none;

  &:hover {
    background-color: #409eff22;
  }
}

.my-menu-item.active {
  color: var(--menu-active-text, #ffd04b);
  font-weight: bold;
  background-color: #409eff44;
}

.my-menu-item.disabled {
  color: #999;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
