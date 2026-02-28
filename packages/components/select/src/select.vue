<template>
  <div
    ref="selectRef"
    class="select-e"
    :class="{ 'is-disabled': disabled, 'is-focused': isFocused }"
    tabindex="0"
    :style="selectStyle"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  >
    <div class="select-trigger" @click="toggleDropdown">
      <span class="selected-value">{{ selectedLabel || placeholder }}</span>
      <span class="arrow-icon" :class="{ 'is-open': dropdownVisible }">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </span>
    </div>

    <Transition name="slide-fade">
      <div v-if="dropdownVisible" class="select-dropdown">
        <div ref="optionsContainer" class="select-dropdown-content">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch, nextTick } from 'vue'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import { selectProps } from './select'
import '../style/select.scss'

defineOptions({ name: 'MYSelect' })

const props = defineProps(selectProps)
const emit = defineEmits(['update:modelValue'])

const selectRef = ref<HTMLElement | null>(null)
const optionsContainer = ref<HTMLElement | null>(null)

const dropdownVisible = ref(false)
const isFocused = ref(false)
const selectedLabel = ref('')
const focusedIndex = ref(-1)

// 键盘
const handleKeydown = (e: KeyboardEvent) => {
  if (!dropdownVisible.value && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault()
    toggleDropdown()
    return
  }

  if (!dropdownVisible.value) return

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      moveFocus(1)
      break
    case 'ArrowUp':
      e.preventDefault()
      moveFocus(-1)
      break
    case 'Enter':
      e.preventDefault()
      handleEnter()
      break
    case 'Escape':
      closeDropdown()
      break
  }
}

const getOptions = () =>
  optionsContainer.value
    ? Array.from(
        optionsContainer.value.querySelectorAll('.select-option:not(.is-disabled)')
      ) as HTMLElement[]
    : []

const moveFocus = (step: number) => {
  const options = getOptions()
  if (!options.length) return

  focusedIndex.value =
    focusedIndex.value === -1
      ? 0
      : (focusedIndex.value + step + options.length) % options.length

  focusCurrent()
}

const focusCurrent = () => {
  nextTick(() => {
    const options = getOptions()
    const el = options[focusedIndex.value]
    if (!el) return

    options.forEach(o => o.classList.remove('is-focused'))
    el.classList.add('is-focused')
    el.focus()
  })
}

const handleEnter = () => {
  const el = document.activeElement as HTMLElement
  if (el?.classList.contains('select-option')) {
    const value = el.dataset.value
    const label = el.dataset.label
    if (value) selectOption(value, label || value)
  }
}

// 状态
const toggleDropdown = () => {
  if (props.disabled) return
  dropdownVisible.value = !dropdownVisible.value
}

const closeDropdown = () => {
  dropdownVisible.value = false
  focusedIndex.value = -1
}

// 焦点
const handleFocus = () => {
  if (!props.disabled) isFocused.value = true
}

const handleBlur = (e: FocusEvent) => {
  const related = e.relatedTarget as HTMLElement | null

  // 焦点还在 select 内部，不算 blur
  if (related && selectRef.value?.contains(related)) return

  isFocused.value = false
  closeDropdown()
}

// 选择
const selectOption = (value: string | number, label: string) => {
  emit('update:modelValue', value)
  selectedLabel.value = label
  closeDropdown()

  // 把焦点拉回 Select
  nextTick(() => {
    selectRef.value?.focus()
  })
}

// provide
provide('select', {
  selectOption,
  setFocusedIndex: (i: number) => (focusedIndex.value = i),
  currentValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled)
})

// label
watch(
  () => props.modelValue,
  (v) => {
    const options = getOptions()
    const match = options.find(o => o.dataset.value === String(v))
    selectedLabel.value = match?.dataset.label || ''
  },
  { immediate: true }
)

const selectStyle = useStyleComputed(props, {
  propToStyleMap: {
    width: 'width',
    height: 'height'
  }
})
</script> 