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
      :style="[inputStyle, { paddingRight: suffixPadding }]"
      :value="props.modelValue"
      @input="handleInput"
      @blur="handleBlur"
    >
      <slot v-if="props.tag !== 'input' && props.tag !== 'textarea'" />
    </component>

    <div v-if="hasAnySuffix" class="my-input__suffix">
      <span
        v-if="props.wordLimit && props.maxlength"
        class="my-input__word-limit"
        :class="{ 'near-limit': isNearLimit }"
      >
        {{ currentLength }}/{{ props.maxlength }}
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
import type { CSSProperties } from 'vue'
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
const emit = defineEmits(['update:showPassword', 'update:modelValue'])

const showView = ref(false)
const hovering = ref(false)
const inputRef = ref<ComponentPublicInstance | null>(null)

const currentLength = computed(() => props.modelValue.length)
const isNearLimit = computed(() =>
  props.maxlength ? currentLength.value >= 0.8 * Number(props.maxlength) : false
)
const showClear = computed(() =>
  !props.disabled && hovering.value && props.modelValue.length > 0
)

const hasAnySuffix = computed(() => 
  (props.wordLimit && props.maxlength) || (props.clearable && showClear.value) || props.showPassword
)

const suffixPadding = computed(() => {  // 新增：动态padding-right，避免重叠并自适应
  let pad = 10; // 基础右边距
  if (props.wordLimit && props.maxlength) pad += 40; // word-limit 宽度约40px
  if (props.clearable && showClear.value) pad += 20; // clear 约20px
  if (props.showPassword) pad += 20; // password 约20px
  pad += (hasAnySuffix.value ? 8 * (Number(!!(props.wordLimit && props.maxlength)) + Number(!!(props.clearable && showClear.value)) + Number(!!props.showPassword) - 1) : 0); // 加gap
  return `${pad}px`;
})

const wrapperStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
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
    ...(props.disabled ? { disabled: true } : {})
  }
  if (props.tag === 'input') {
    attrs.type = props.showPassword
      ? (showView.value ? 'text' : 'password')
      : props.type
  }
  return attrs
})

const { inputClass, inputStyle } = useInputComputed(props)  // 注意：现在使用inputStyle
watch(() => props.modelValue, () => formItemContext?.clearValidate?.())
</script>