<template>
  <label class="my-switch" :class="[classSwitch, { 'is-checked': isChecked }]" :style="styleSwitch">
    <input type="checkbox" hidden :checked="isChecked" :disabled="isDisabled" @change="onInput" />
    <span class="slider">
      <span v-if="props.text" class="slider-text">{{ props.text }}</span>
    </span>
    <span class="text">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { switchProps } from './switch'
import '../style/switch.scss'
import { clearValidate, setupFormItemContext } from './switchComputed'
import { useSwitchComputed } from './switchComputed'
import type { FormItemContext } from './type'

defineOptions({ name: 'MYSwitch' })

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue', 'change'])

// 表单上下文注入
const formItemContext = inject<Partial<FormItemContext> | null>('myFormItemContext', null)

// 修复：正确的初始值处理 - 只在组件创建时记录初始值
const initialValue = ref(props.modelValue)

// 基本状态
const isChecked = computed(() => Boolean(props.modelValue))
const isDisabled = computed(() => Boolean(props.disabled))

const { classSwitch, styleSwitch } = useSwitchComputed(props)

// 事件处理
const onInput = () => {
  if (isDisabled.value) return
  
  const newValue = !isChecked.value
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

// 重置函数 - 使用初始值
const resetFieldFn = () => {
  emit('update:modelValue', initialValue.value)
  clearValidate(formItemContext)
}

// 清除校验
const clearValidateFn = () => {
  clearValidate(formItemContext)
}

// 注册表单项
setupFormItemContext(
  formItemContext,
  formItemContext?.prop,
  resetFieldFn,
  clearValidateFn
)

// 监听props变化，只用于清除校验
watch(() => props.modelValue, () => {
  formItemContext?.clearValidate?.()
})
</script>