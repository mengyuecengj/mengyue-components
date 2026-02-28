<template>
  <li class="my-menu-item" :class="{ 'is-active': isActive, 'is-disabled': disabled }" @click.stop="handleClick">
    <span class="menu-icon">
      <slot name="icon" />
    </span>
    <span class="menu-label" v-show="showLabel">
      <slot />
    </span>
  </li>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { menuItemProps } from './menuItem'
import '../style/menuItem.scss'

defineOptions({ name: 'MYMenuItem' })

interface MenuContext {
  activeIndex: { value: string | undefined }
  collapse?: { value: boolean }
  handleSelect: (index: string, indexPath: string[]) => void
}

const props = defineProps(menuItemProps)

const menu = inject<MenuContext>('menuContext')
const parentPath = inject<string[]>('indexPath', [])
const subLevel = inject<number>('subLevel', 0)

const isActive = computed(() => menu?.activeIndex?.value === props.index)
const collapsed = computed(() => !!(menu?.collapse?.value))
const showLabel = computed(() => subLevel > 0 || !collapsed.value)

function handleClick() {
  if (props.disabled) return

  // 关键：确保 index 存在
  if (props.index == null) {
    console.warn('[MYMenuItem] Missing required prop "index"')
    return
  }

  const indexPath = [...(parentPath || []), props.index]
  menu?.handleSelect(props.index, indexPath)
}
</script>
