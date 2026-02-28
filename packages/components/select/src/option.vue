<template>
  <div
    class="select-option"
    :class="{
      'is-selected': isSelected,
      'is-disabled': disabled
    }"
    :data-value="value"
    :data-label="label || value"
    tabindex="-1"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
  >
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { SelectContext } from './type'
import '../style/option.scss'

defineOptions({ name: 'MYOption' })

const props = defineProps({
  value: { type: [String, Number], required: true },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})

const ctx = inject<SelectContext>('select')
if (!ctx) throw new Error('MYOption must be used inside MYSelect')

const { selectOption, setFocusedIndex, currentValue, disabled: selectDisabled } = ctx

const isSelected = computed(() => currentValue.value === props.value)

const handleClick = () => {
  if (!props.disabled && !selectDisabled.value) {
    selectOption(props.value, props.label || String(props.value))
  }
}

const handleMouseEnter = (e: MouseEvent) => {
  if (props.disabled || selectDisabled.value) return

  const el = e.currentTarget as HTMLElement
  el.focus()

  const parent = el.parentElement
  if (!parent) return

  const options = Array.from(
    parent.querySelectorAll('.select-option:not(.is-disabled)')
  )
  const index = options.indexOf(el)

  if (index >= 0) {
    setFocusedIndex(index)
  }
}
</script>