<template>
  <div ref="triggerRef" class="my-dropdown" @click="handleTriggerClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <slot />
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="visible"
          ref="menuRef"
          class="my-dropdown-menu-wrapper"
          :style="menuStyles"
          @mouseenter="handleMenuMouseEnter"
          @mouseleave="handleMenuMouseLeave"
        >
          <slot name="dropdown" />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useDropdown } from './dropdown'
import '../style/dropdown.scss'

defineOptions({
    name: 'MYDropdown'
})
const props = defineProps({
  trigger: {
    type: String,
    default: 'click', // 'click' | 'hover'
  },
  placement: {
    type: String,
    default: 'bottom-start', // 目前支持 'bottom-start' | 'bottom-end'
  }
})

const {
  visible,
  triggerRef,
  menuRef,
  menuStyles,
  handleTriggerClick,
  handleMouseEnter,
  handleMouseLeave,
  handleMenuMouseEnter,
  handleMenuMouseLeave,
} = useDropdown(props)
</script>
