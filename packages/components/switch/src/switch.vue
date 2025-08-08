<template>
  <label class="my-switch" :class="classSwitch" :style="styleSwitch">
    <input
      type="checkbox"
      hidden
      :checked="isChecked"
      :disabled="isDisabled"
      @input="onInput"
    />
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
import { handleChange, resetField, clearValidate, setupFormItemContext } from './switchComputed'
import { useSwitchComputed } from './switchComputed'
import type { FormItemContext } from './type'

defineOptions({ name: 'MYSwitch' })

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue'])

// 表单上下文注入
const formItemContext = inject<Partial<FormItemContext> | null>('myFormItemContext', null)
const initialValue = ref(props.modelValue)

// 基本状态
const isChecked = computed(() => Boolean(props.modelValue))
const isDisabled = computed(() => Boolean(props.disabled))

const { classSwitch, styleSwitch } = useSwitchComputed(props)

// 事件处理
const onInput = () => {
  handleChange(isDisabled, isChecked, emit)
}

// 注册表单项
setupFormItemContext(
  formItemContext,
  formItemContext?.prop,
  () => resetField(emit, initialValue, formItemContext),
  () => clearValidate(formItemContext)
)

// modelValue 变化时清除校验
watch(() => props.modelValue, () => {
  formItemContext?.clearValidate?.()
})
</script>
