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
      :style="[mergedInputStyle, { paddingRight: suffixPadding }]"
      :value="props.modelValue"
      @input="handleInput"
    >
      <slot v-if="props.tag !== 'input' && props.tag !== 'textarea'" />
    </component>

    <div v-if="hasSuffixContent" class="my-input__suffix">
      <span
        v-if="props.wordLimit && props.maxLength"
        class="my-input__word-limit"
        :class="{ 'near-limit': isNearLimit }"
      >
        {{ currentLength }}/{{ props.maxLength }}
      </span>

      <span v-if="props.clearable && showClear" class="my-input__clear" @click="clearText">
        <close />
      </span>

      <span
        v-if="props.showPassword && (props.tag === 'input' || props.tag === 'textarea')"
        class="my-input__password"
        @click="togglePassword"
      >
        <viewsvgrepo v-if="showView" />
        <viewhide v-else />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, watch, type ComponentPublicInstance } from 'vue'
import type { CSSProperties, ComputedRef } from 'vue'
import { inputProps } from './input'
import close from './close.vue'
import viewsvgrepo from './viewsvgrepo.vue'
import viewhide from './viewhide.vue'
import '../style/input.scss'
import { useInputComputed } from './inputComputed'

interface FormItemContext {
  validate?: (trigger?: string) => void
  clearValidate?: () => void
}
const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)

const props = defineProps(inputProps)
const emit = defineEmits<{
  (e: 'update:showPassword', v: boolean): void
  (e: 'update:modelValue', v: string): void
  (e: 'input', v: string): void
}>()

const showView = ref(false)
const hovering = ref(false)
const inputRef = ref<ComponentPublicInstance | null>(null)

const currentLength = computed(() => props.modelValue.length)
const isNearLimit = computed(() =>
  props.maxLength ? currentLength.value >= 0.8 * Number(props.maxLength) : false
)
const showClear = computed(() =>
  !props.disabled && hovering.value && props.modelValue.length > 0
)

const hasSuffixContent = computed(() =>
  (props.wordLimit && props.maxLength) ||
  (props.clearable && showClear.value) ||
  props.showPassword
)

const suffixPadding = computed(() => {
  let pad = 10
  if (props.wordLimit && props.maxLength) pad += 40
  if (props.clearable && showClear.value) pad += 20
  if (props.showPassword) pad += 20
  if (hasSuffixContent.value) {
    pad +=
      8 *
      (Number(!!(props.wordLimit && props.maxLength)) +
        Number(!!(props.clearable && showClear.value)) +
        Number(!!props.showPassword) -
        1)
  }
  return `${pad}px`
})

const wrapperStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
}))

const handleInput = (e: Event) => {
  const v = (e.target as HTMLInputElement).value
  emit('update:modelValue', v)
  emit('input', v)
  formItemContext?.validate?.('change')
}

const clearText = () => {
  emit('update:modelValue', '')
  getInputElement()?.focus()
}

const togglePassword = () => {
  showView.value = !showView.value
  emit('update:showPassword', showView.value)
}

const getInputElement = (): HTMLInputElement | HTMLTextAreaElement | null => {
  const instance = inputRef.value
  if (!instance) return null

  const el =
    instance instanceof HTMLElement
      ? instance
      : (instance.$el as HTMLElement | undefined)

  if (!el) return null

  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
    return el
  }

  return el.querySelector('input, textarea')
}

type InputAttrs = Record<string, string | number | boolean | undefined>

const componentArrts = computed<InputAttrs>(() => {
  const attrs: InputAttrs = {
    placeholder: props.placeholder,
    ...(props.maxLength ? { maxLength: props.maxLength } : {}),
    ...(props.minLength ? { minLength: props.minLength } : {}),
    ...(props.disabled ? { disabled: true } : {}),
  }

  if (props.tag === 'input') {
    attrs.type = props.showPassword
      ? showView.value
        ? 'text'
        : 'password'
      : props.type
  }

  return attrs
})

const { inputClass, inputStyle } = useInputComputed(props)

const mergedInputStyle = computed<CSSProperties>(() => {
  const base = { ...(inputStyle as ComputedRef<CSSProperties>).value }

  base['--my-input-placeholder'] = props.placeholderColor
    ? props.placeholderColor
    : 'rgba(255,255,255,0.6)'

  return base
})

function focus() {
  getInputElement()?.focus()
}
function blur() {
  getInputElement()?.blur()
}
defineExpose({ focus, blur })

watch(() => props.modelValue, () => formItemContext?.clearValidate?.())
</script>