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
const emit = defineEmits(['update:showPassword', 'update:modelValue', 'input'])

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
  emit('input', v) // ← 新增：兼容父组件 @input
  formItemContext?.validate?.('change')
}
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
    placeholder: props.placeholder, // ← 正确使用 placeholder 文本
    ...(props.maxlength ? { maxlength: props.maxlength } : {}),
    ...(props.minlength ? { minlength: props.minlength } : {}),
    ...(props.disabled ? { disabled: true } : {})
  }
  if (props.tag === 'input') {
    attrs.type = props.showPassword
      ? (showView.value ? 'text' : 'password')
      : props.type
  }

  // 如果还有额外的 $attrs（如 id、name、autocomplete 等），也透传过去
  // NOTE: 这里我们把剩余 $attrs 合并进去，以免丢失父组件传来的原生属性
  // @ts-ignore

  return attrs
})

const { inputClass, inputStyle } = useInputComputed(props)  // 注意：现在使用inputStyle

// 合并 inputStyle 并注入 placeholder 变量
const mergedInputStyle = computed<CSSProperties>(() => {
  const base = (inputStyle as any)?.value ? { ...(inputStyle as any).value } : {}
  // 将占位符颜色注入为 CSS 变量（fallback 可选）
  if (props.placeholderColor) {
    base['--my-input-placeholder'] = props.placeholderColor
  } else {
    base['--my-input-placeholder'] = 'rgba(255,255,255,0.6)' // 默认白色半透明
  }
  return base
})
// 暴露 focus / blur 给父组件
function focus() {
  const el = getInputElement()
  el?.focus()
}
function blur() {
  const el = getInputElement()
  el?.blur()
}
defineExpose({ focus, blur })

watch(() => props.modelValue, () => formItemContext?.clearValidate?.())
</script>