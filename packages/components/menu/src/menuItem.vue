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

defineOptions({ name: 'MYMenuItem' })

const props = defineProps({
  index: { type: String, required: true },
  disabled: { type: Boolean, default: false }
})

const menu = inject<any>('menuContext')
const parentPath = inject<string[]>('indexPath', [])
const subLevel = inject<number>('subLevel', 0)

const isActive = computed(() => menu?.activeIndex?.value === props.index)
const collapsed = computed(() => !!(menu?.collapse?.value))
const showLabel = computed(() => subLevel > 0 || !collapsed.value)

function handleClick() {
  if (props.disabled) return
  const indexPath = [...(parentPath || []), props.index]
  menu?.handleSelect(props.index, indexPath)
}
</script>

<style scoped lang="scss">
.my-menu-item {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  cursor: pointer;
}

.my-menu-item.is-active {
  color: var(--menu-active, #409EFF);
}

.menu-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>