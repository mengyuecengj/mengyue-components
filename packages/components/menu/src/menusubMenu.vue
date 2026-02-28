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

interface MenuContext {
  activeIndex: { value: string | undefined }
  collapse?: { value: boolean }
  trigger?: { value: 'hover' | 'click' }
  openedMenus?: { value: string[] }

  handleSelect: (index: string, indexPath: string[]) => void
  toggleMenu: (index: string, indexPath: string[]) => void
  openMenu: (index: string, indexPath: string[]) => void
  closeMenu: (index: string) => void

  backgroundColor?: string
  textColor?: string
}

defineOptions({ name: 'MYSubMenu' })

const props = defineProps(subMenuProps)

const menu = inject<MenuContext>('menuContext')
const parentPath = inject<string[]>('indexPath', [])
const subLevel = inject<number>('subLevel', 0)

provide('subLevel', subLevel + 1)

// ⚠️ 关键：确保 index 存在，否则无法正常工作
if (props.index == null) {
  console.error('[MYSubMenu] Missing required prop "index". SubMenu will not function correctly.')
}

// 使用非空断言或默认值保证 myPath 和后续调用安全
const safeIndex = props.index ?? '__invalid_index__'
const myPath = [...(parentPath || []), safeIndex]
provide('indexPath', myPath)

const collapsed = computed(() => !!menu?.collapse?.value)
const showLabel = computed(() => subLevel > 0 || !collapsed.value)
const effectiveTrigger = computed(() => {
  if (collapsed.value) return 'hover'
  return props.trigger ?? menu?.trigger?.value ?? 'click'
})

// 🔧 修复点 1: 过滤掉 undefined，只比较有效字符串
const isOpen = computed(() => {
  if (props.index == null) return false
  return (menu?.openedMenus?.value ?? []).includes(props.index)
})

const titleRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)
let closeTimer: ReturnType<typeof setTimeout> | null = null

const showPopup = ref(false)

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

watch(showPopup, async val => {
  if (val && titleRef.value && listRef.value) {
    await nextTick()
    const rect = titleRef.value.getBoundingClientRect()
    popupStyle.value.top = `${rect.top}px`
    popupStyle.value.left = `${rect.right}px`
  }
})

function onTitleClick() {
  if (props.index == null) return // 🔒 安全防护
  if (collapsed.value) {
    showPopup.value = !showPopup.value
  } else {
    menu?.toggleMenu(props.index, myPath)
  }
}

function onMouseEnter() {
  if (props.index == null) return
  if (effectiveTrigger.value === 'hover') {
    if (closeTimer) clearTimeout(closeTimer)
    if (collapsed.value) {
      showPopup.value = true
    } else {
      menu?.openMenu(props.index, myPath)
    }
  }
}

function onMouseLeave() {
  const index = props.index
  if (index == null) return
  if (effectiveTrigger.value === 'hover') {
    closeTimer = setTimeout(() => {
      if (collapsed.value) {
        showPopup.value = false
      } else {
        menu?.closeMenu(index)
      }
      closeTimer = null
    }, 150)
  }
}

function onPopupEnter() {
  if (closeTimer) clearTimeout(closeTimer)
}

function onPopupLeave() {
  const index = props.index
  if (index == null) return
  if (effectiveTrigger.value === 'hover') {
    closeTimer = setTimeout(() => {
      if (collapsed.value) {
        showPopup.value = false
      } else {
        menu?.closeMenu(index)
      }
      closeTimer = null
    }, 150)
  }
}
</script>