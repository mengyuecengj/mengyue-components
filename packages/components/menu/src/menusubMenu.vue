<template>
  <li class="my-submenu" :class="{ 'is-open': isOpen }">
    <div
      class="submenu-title"
      ref="titleRef"
      @click.stop="onTitleClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <span class="menu-icon"><slot name="icon" /></span>
      <span class="menu-label" v-show="showLabel"><slot name="title" /></span>
      <span class="submenu-arrow" v-show="!collapsed">
        <svg width="12" height="12" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M384 192l256 320-256 320z" />
        </svg>
      </span>
    </div>

    <!-- 折叠态浮层 -->
    <teleport v-if="collapsed" to="body">
      <ul
        v-show="showPopup"
        class="submenu-list teleported-list"
        ref="listRef"
        @mouseenter="onPopupEnter"
        @mouseleave="onPopupLeave"
        :style="popupStyle"
      >
        <slot />
      </ul>
    </teleport>

    <!-- 非折叠态 -->
    <transition name="slide">
      <ul v-show="!collapsed && isOpen" class="submenu-list">
        <slot />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { inject, computed, ref, watch, nextTick, provide } from 'vue'
import { subMenuProps } from './menusubMenu'
import '../style/menusubMenu.scss'

defineOptions({ name: 'MYSubMenu' })

const props = defineProps(subMenuProps)
// const props = defineProps({
//   index: { type: String, required: true },
//   trigger: { type: String as PropType<'click' | 'hover'>, default: undefined },
//   teleported: { type: Boolean, default: false }
// })

const menu = inject<any>('menuContext')
const parentPath = inject<string[]>('indexPath', [])
const subLevel = inject<number>('subLevel', 0)

// 提供下一级 subLevel
provide('subLevel', subLevel + 1)

// 构造 indexPath 并向下提供
const myPath = [...(parentPath || []), props.index]
provide('indexPath', myPath)

const collapsed = computed(() => !!menu?.collapse?.value)
const showLabel = computed(() => subLevel > 0 || !collapsed.value)
const effectiveTrigger = computed(() => {
  if (collapsed.value) return 'hover'
  return props.trigger ?? menu?.trigger?.value ?? 'click'
})
const isOpen = computed(() => (menu?.openedMenus?.value ?? []).includes(props.index))

const titleRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)
let closeTimer: ReturnType<typeof setTimeout> | null = null

// 折叠态浮层显示控制
const showPopup = ref(false)

// 浮层样式
const popupStyle = ref<Record<string, string>>({
  position: 'absolute',
  top: '0px',
  left: '0px',
  minWidth: '160px',
  background: menu?.backgroundColor ?? '#2f3b46',
  color: menu?.textColor ?? '#bfcbd9',
  boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
  borderRadius: '6px',
  border: '1px solid rgba(255,255,255,0.08)',
  zIndex: '9999',
  padding: '8px 0',
})

// 监听 showPopup，更新浮层位置
watch(showPopup, async val => {
  if (val && titleRef.value && listRef.value) {
    await nextTick()
    const rect = titleRef.value.getBoundingClientRect()
    popupStyle.value.top = `${rect.top}px`
    popupStyle.value.left = `${rect.right}px`
  }
})

function onTitleClick() {
  if (collapsed.value) {
    showPopup.value = !showPopup.value
  } else {
    menu?.toggleMenu(props.index, myPath)
  }
}

function onMouseEnter() {
  if (effectiveTrigger.value === 'hover') {
    if (collapsed.value) {
      if (closeTimer) clearTimeout(closeTimer)
      showPopup.value = true
    } else {
      if (closeTimer) clearTimeout(closeTimer)
      menu?.openMenu(props.index, myPath)
    }
  }
}

function onMouseLeave() {
  if (effectiveTrigger.value === 'hover') {
    closeTimer = setTimeout(() => {
      if (collapsed.value) showPopup.value = false
      else menu?.closeMenu(props.index)
      closeTimer = null
    }, 150)
  }
}

function onPopupEnter() {
  if (closeTimer) clearTimeout(closeTimer)
}

function onPopupLeave() {
  if (effectiveTrigger.value === 'hover') {
    closeTimer = setTimeout(() => {
      if (collapsed.value) showPopup.value = false
      else menu?.closeMenu(props.index)
      closeTimer = null
    }, 150)
  }
}
</script>
