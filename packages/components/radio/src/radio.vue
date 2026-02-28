<template>
  <label
    class="my-radio"
    :class="{
      'my-radio--checked': isChecked,
      'my-radio--disabled': isDisabled
    }"
    @click="handleClick"
  >
    <span class="my-radio__input">
    <input
      class="my-radio__original"
      type="radio"
      :value="props.value"
      :checked="isChecked"
      :disabled="isDisabled"
      @change.stop
    />
      <span class="my-radio__inner"></span>
    </span>
    <span class="my-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, unref } from 'vue'
import { radioProps } from './radio'
import '../style/radio.scss'
import type { RadioGroupContext } from './type'

defineOptions({ name: 'MYRadio' })

const props = defineProps(radioProps)
const emit = defineEmits(['update:modelValue', 'change'])

const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)

const isGroup = computed(() => !!radioGroup)

// 计算是否禁用，考虑 disabled 可能是 boolean 或 Ref<boolean>
const isDisabled = computed(() => {
  if (isGroup.value) {
    const disabled = radioGroup!.disabled
    const groupDisabled = typeof disabled === 'boolean' ? disabled : (disabled?.value ?? false)
    // 注意加括号避免 || 和 ?? 混用报错
    return groupDisabled || props.disabled
  }
  return props.disabled
})

// 计算是否选中，兼容 modelValue 是 Ref 还是普通值

const isChecked = computed(() => {
  if (isGroup.value) {
    return unref(radioGroup!.modelValue) === props.value
  }
  return props.modelValue === props.value
})

function handleClick() {
  if (isDisabled.value) return

  if (isGroup.value) {
    radioGroup!.change?.(props.value)
  } else {
    emit('update:modelValue', props.value)
    emit('change', props.value)
  }
}
</script>
