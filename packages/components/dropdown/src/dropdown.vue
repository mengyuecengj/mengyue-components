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
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { CSSProperties } from 'vue'

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

const visible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const menuStyles = reactive<CSSProperties>({
  position: 'absolute',
  top: '0px',
  left: '0px',
  minWidth: '0px',
  zIndex: 999,
})

let hoverTimeout: number | null = null

function updatePosition() {
  if (!triggerRef.value || !menuRef.value) return

  const triggerRect = triggerRef.value.getBoundingClientRect()
  const menu = menuRef.value

  menuStyles.minWidth = `100px`
  menuStyles.maxWidth = `300px`
  menuStyles.width = '200px'

  if (props.placement === 'bottom-end') {
    menuStyles.top = `${triggerRect.bottom + window.scrollY}px`
    menuStyles.left = `${triggerRect.right - menu.offsetWidth + window.scrollX}px`
  } else {
    menuStyles.top = `${triggerRect.bottom + window.scrollY}px`
    menuStyles.left = `${triggerRect.left + window.scrollX}px`
  }
}


function showMenu() {
  visible.value = true
  nextTick(() => {
    updatePosition()
  })
}

function hideMenu() {
  visible.value = false
}

function toggleMenu() {
  visible.value = !visible.value
  if (visible.value) {
    nextTick(() => updatePosition())
  }
}

// 触发器事件
function handleTriggerClick() {
  if (props.trigger === 'click') {
    toggleMenu()
  }
}

function handleMouseEnter() {
  if (props.trigger === 'hover') {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    showMenu()
  }
}

function handleMouseLeave() {
  if (props.trigger === 'hover') {
    hoverTimeout = window.setTimeout(() => {
      hideMenu()
    }, 200)
  }
}

function handleMenuMouseEnter() {
  if (hoverTimeout) clearTimeout(hoverTimeout)
}

function handleMenuMouseLeave() {
  if (props.trigger === 'hover') {
    hoverTimeout = window.setTimeout(() => {
      hideMenu()
    }, 200)
  }
}

// 点击外部关闭
function onClickOutside(event: MouseEvent) {
  if (!triggerRef.value || !menuRef.value) return
  const target = event.target as Node
  if (
    !triggerRef.value.contains(target) &&
    !menuRef.value.contains(target)
  ) {
    hideMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.my-dropdown {
  display: inline-block;
  position: relative;
  user-select: none;
}

.my-dropdown-menu-wrapper {
  width: 300px;
  background: white;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
