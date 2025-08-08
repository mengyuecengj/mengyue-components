<!-- MyInput.vue -->
<template>
  <div
    class="my-input-wrapper"
    :style="wrapperStyle"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <component
      :is="props.tag"
      ref="inputRef"
      v-bind="componentArrts"
      :class="['my-input', ...inputClass]"
      :value="props.modelValue"
      @input="handleInput"
      @blur="handleBlur"
    >
      <slot v-if="props.tag !== 'input' && props.tag !== 'textarea'" />
    </component>

    <span v-if="props.clearable && showClear" class="my-input__clear" @click="clearText">
      <close />
    </span>

    <span
      v-if="props.showPassword && (props.tag === 'input' || props.tag === 'textarea')"
      class="my-input__password"
      @click="togglePassword"
    >
      <viewsvgrepo v-if="showView" />
      <viewhide   v-else />
    </span>

    <span
      v-if="props.wordLimit && props.maxlength"
      class="my-input__word-limit"
      :class="{ 'near-limit': isNearLimit }"
    >
      {{ currentLength }}/{{ props.maxlength }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, watch, type ComponentPublicInstance } from 'vue'
import type { CSSProperties } from 'vue'
import { inputProps } from './input'
import close from './close.vue'
import viewsvgrepo from './viewsvgrepo.vue'
import viewhide from './viewHide.vue'
import '../style/input.scss'
import { useInputComputed } from './inputComputed'

interface FormItemContext {
  validate?: (trigger?: string) => void
  clearValidate?: () => void
}
const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)

const props = defineProps(inputProps)
const emit  = defineEmits(['update:showPassword', 'update:modelValue'])

const showView  = ref(false)
const hovering  = ref(false)
const inputRef  = ref<ComponentPublicInstance | null>(null)

const currentLength = computed(() => props.modelValue.length)
const isNearLimit   = computed(() =>
  props.maxlength ? currentLength.value >= 0.8 * Number(props.maxlength) : false
)
const showClear = computed(() =>
  !props.disabled && hovering.value && props.modelValue.length > 0
)

const wrapperStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  display:  'inline-block',
  width: typeof props.width === 'string' ? `${props.width}px` : props.width,
  height:   typeof props.height === 'number' ? `${props.height}px` : props.height
}))

const handleInput = (e: Event) => {
  const v = (e.target as HTMLInputElement).value
  emit('update:modelValue', v)
  formItemContext?.validate?.('change')
}
const handleBlur = () => formItemContext?.validate?.('blur')
const clearText = () => {
  emit('update:modelValue', '')
  const el = getInputElement()
  el?.focus()
}
const togglePassword = () => {
  showView.value = !showView.value
  emit('update:showPassword', showView.value)
}

const getInputElement = (): HTMLInputElement | HTMLTextAreaElement | null => {
  if (!inputRef.value) return null
  // @ts-ignore
  const el = inputRef.value.$el ?? inputRef.value
  return (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
    ? el
    : el.querySelector('input, textarea')
}

const componentArrts = computed(() => {
  const attrs: Record<string, any> = {
    placeholder: props.placeholder,
    ...(props.maxlength ? { maxlength: props.maxlength } : {}),
    ...(props.minlength ? { minlength: props.minlength } : {}),
    ...(props.disabled  ? { disabled: true } : {})
  }
  if (props.tag === 'input') {
    attrs.type = props.showPassword
      ? (showView.value ? 'text' : 'password')
      : props.type
  }
  return attrs
})

const { inputClass } = useInputComputed(props)
watch(() => props.modelValue, () => formItemContext?.clearValidate?.())
</script>
