<template>
  <ul class="my-menu" :class="[`my-menu--${props.mode}`, { 'is-collapse': props.collapse }]" :style="{
    '--menu-bg': props.backgroundColor,
    '--menu-text': props.textColor,
    '--menu-active': props.activeTextColor
  }">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { reactive, provide, watch, ref, computed } from 'vue'
import { menuProps } from './menu'
import '../style/menu.scss'

defineOptions({ name: 'MYMenu' })

// const props = defineProps({
//   defaultActive: { type: String, default: '' },
//   mode: { type: String as PropType<'vertical' | 'horizontal'>, default: 'vertical' },
//   collapse: { type: Boolean, default: false },
//   backgroundColor: { type: String, default: '#2f3b46' },
//   textColor: { type: String, default: '#bfcbd9' },
//   activeTextColor: { type: String, default: '#409EFF' },
//   trigger: { type: String as PropType<'click' | 'hover'>, default: 'click' },
//   uniqueOpened: { type: Boolean, default: false },
//   defaultOpeneds: { type: Array as PropType<string[]>, default: () => [] },
//   collapseTransition: { type: Boolean, default: true }
// })
const props = defineProps(menuProps)
const emit = defineEmits(['select', 'open', 'close'])

// 使用 ref 而不是 reactive，避免 Proxy 问题
const activeIndex = ref(props.defaultActive || '')
const openedMenus = ref<string[]>([...props.defaultOpeneds])

// 监听 defaultOpeneds 变化
watch(() => props.defaultOpeneds, (newOpeneds) => {
  if (JSON.stringify(newOpeneds) !== JSON.stringify(openedMenus.value)) {
    openedMenus.value = Array.isArray(newOpeneds) ? [...newOpeneds] : []
  }
}, { deep: true })

watch(() => props.defaultActive, (v) => {
  activeIndex.value = v || ''
})

const mode = computed(() => props.mode)
const collapse = computed(() => props.collapse)
const trigger = computed(() => props.trigger)
const uniqueOpened = computed(() => props.uniqueOpened)
const collapseTransition = computed(() => props.collapseTransition)

// openedParentMap 用于 uniqueOpened
const openedParentMap = reactive<Record<string, string>>({})
let cachedOpenedMenus: string[] = []
let cachedMap: Record<string, string> = {}

function handleSelect(index: string, indexPath: string[] = []) {
  activeIndex.value = index
  emit('select', index, indexPath)

  // 如果在折叠模式下，选择后关闭所有打开的菜单
  if (collapse.value) {
    openedMenus.value = []
  }
}

function openMenu(index: string, indexPath: string[] = []) {
  if (openedMenus.value.includes(index)) return

  const parentKey = indexPath.slice(0, -1).join('/') || '__root__'

  if (uniqueOpened.value) {
    const currentBranch = new Set(indexPath)
    
    // 找出需要关闭的菜单（不在当前分支中的菜单）
    const toClose = openedMenus.value.filter(i => {
      return !currentBranch.has(i)
    })
    
    if (toClose.length) {
      openedMenus.value = openedMenus.value.filter(i => !toClose.includes(i))
      toClose.forEach(i => delete openedParentMap[i])
    }
  } else {
    // 原来的非 uniqueOpened 逻辑
    const toClose = openedMenus.value.filter(i => openedParentMap[i] !== parentKey)
    if (toClose.length) {
      openedMenus.value = openedMenus.value.filter(i => !toClose.includes(i))
      toClose.forEach(i => delete openedParentMap[i])
    }
  }

  openedMenus.value.push(index)
  openedParentMap[index] = parentKey
  
  // 触发 open 事件
  emit('open', index, indexPath)
}

function closeMenu(index: string) {
  if (!openedMenus.value.includes(index)) return
  // 递归关闭子菜单
  const children = Object.keys(openedParentMap).filter(key => openedParentMap[key] === index)
  children.forEach(child => closeMenu(child))
  // 移除自身
  openedMenus.value = openedMenus.value.filter(i => i !== index)
  delete openedParentMap[index]
  
  // 触发 close 事件
  emit('close', index, [index])
}

function toggleMenu(index: string, indexPath: string[] = []) {
  if (openedMenus.value.includes(index)) {
    closeMenu(index)
  } else {
    openMenu(index, indexPath)
  }
}

// collapse 行为：收起时缓存，展开时恢复
watch(() => props.collapse, (val) => {
  if (val) {
    cachedOpenedMenus = [...openedMenus.value]
    cachedMap = { ...openedParentMap }
    openedMenus.value = []
  } else {
    if (cachedOpenedMenus && cachedOpenedMenus.length) {
      openedMenus.value = [...cachedOpenedMenus]
      Object.assign(openedParentMap, cachedMap)
    }
    cachedOpenedMenus = []
    cachedMap = {}
  }
})

// 向下提供 menuContext（子组件注入）
provide('menuContext', {
  activeIndex,
  openedMenus,
  // 提供独立的 props 字段（用 computed/ref）以保证响应性和统一性
  mode,
  collapse,
  trigger,
  uniqueOpened,
  collapseTransition,
  handleSelect,
  openMenu,
  closeMenu,
  toggleMenu,
  backgroundColor: props.backgroundColor
})

// root indexPath
provide('indexPath', [] as string[])

// 提供 subLevel
provide('subLevel', 0)

</script>
