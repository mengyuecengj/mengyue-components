<!-- <template>
  <li
    class="my-dropdown-item"
    :class="{ disabled, divided }"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import '../style/dropdownItem.scss'
defineOptions({
    name: 'MYDropdown-item'
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  divided: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.stopPropagation()
    return
  }
  emit('click', event)
}
</script> -->

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
    @keydown="handleKeydown"
    @click="handleClick"
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
import { defineProps, defineEmits } from 'vue'

type CommandType = string | number | Record<string, any>

const props = defineProps<{
  command?: CommandType
  disabled?: boolean
  divided?: boolean
  icon?: string | object
}>()

const emit = defineEmits<{
  (e: 'click', command: CommandType, evt: MouseEvent): void
}>()

const handleClick = (e: MouseEvent) => {
  if (props.disabled) return
  emit('click', props.command ?? '', e)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (props.disabled) return
  if (['Enter', ' ', 'Spacebar'].includes(e.key)) {
    e.preventDefault()
    emit('click', props.command ?? '', e as unknown as MouseEvent)
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
