<template>
  <li
    class="my-dropdown-item"
    :class="{
      'is-disabled': disabled,
      'is-divided': divided
    }"
    role="menuitem"
    tabindex="0"
    data-dropdown-item="true"
    :data-disabled="disabled || undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="icon" class="my-dropdown-item__icon">
      <component :is="icon" />
    </span>
    <span class="my-dropdown-item__content">
      <slot />
    </span>
  </li>
</template>

<script lang="ts" setup>
import { inject } from 'vue';

type CommandType = string | number | Record<string, any>

const props = defineProps<{
  command?: CommandType
  disabled?: boolean
  divided?: boolean
  icon?: string | object
}>()

// 正确的 defineEmits 语法
const emit = defineEmits<{
  (e: 'click', command: CommandType, evt: MouseEvent): void
  // (e: 'close'): void  // 新增 'close' 事件
}>()

const dropdownContext: any = inject('m-dropdown-context')

// 点击菜单项后触发关闭菜单
const handleClick = (e: MouseEvent) => {
  if (props.disabled) return
  if (dropdownContext) {
    dropdownContext.select(props.command ?? '')  // 调用 select：emit('command') + close()
  }
  emit('click', props.command ?? '', e)  // 可选保留
}
// 键盘事件处理
const handleKeydown = (e: KeyboardEvent) => {
  if (props.disabled) return
  if (['Enter', ' ', 'Spacebar'].includes(e.key)) {
    // e.preventDefault()
    if (dropdownContext) {
      dropdownContext.select(props.command ?? '')
    }
    emit('click', props.command ?? '', e as unknown as MouseEvent)  // 可选保留
  }
}
</script>

<style lang="scss" scoped>
.my-dropdown-item {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &__icon {
    display: flex;
    margin-right: 8px;
    font-size: 16px;
  }

  &:hover {
    background-color: #f5f7fa;
  }

  &.is-disabled {
    color: #bbb;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
    }
  }

  &.is-divided {
    border-top: 1px solid #ebeef5;
  }
}
</style>
