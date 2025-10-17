<template>
  <label
    :class="[
      'my-radio-button',
      { 'is-active': isChecked, 'is-disabled': isDisabled },
      size ? `my-radio-button--${size}` : '',
    ]"
    @click="handleClick"
    @keydown.stop
    tabindex="0"
  >
    <input
      class="my-radio-button__original"
      type="radio"
      :value="props.value"
      :name="name"
      :disabled="isDisabled"
      :checked="isChecked"
      @focus="focus = true"
      @blur="focus = false"
      @change.stop
      style="position: absolute; visibility: hidden;"
    />
    <span
      class="my-radio-button__inner"
      :style="isChecked ? activeStyle : {}"
    >
      <slot>
        {{ props.label || props.value }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, ref } from 'vue'
import { radioProps } from './radio'
import type { RadioGroupContext } from './type'
import type { PropType } from 'vue'

defineOptions({
  name: 'MYRadioButton',
})

const props = defineProps({
  ...radioProps,
  label: String,
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const focus = ref(false)
const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)
const isGroup = computed(() => !!radioGroup)

// name 计算
const name = computed(() => {
  if (props.name) return props.name
  if (!radioGroup?.name) return undefined
  return typeof radioGroup.name === 'object' ? radioGroup.name.value : radioGroup.name
})

// isDisabled
const isDisabled = computed(() => {
  if (isGroup.value) {
    const disabled = radioGroup!.disabled
    const groupDisabled = typeof disabled === 'boolean' ? disabled : (disabled?.value ?? false)
    return groupDisabled || props.disabled
  }
  return props.disabled
})

// isChecked
const isChecked = computed(() => {
  if (isGroup.value) {
    const modelValue = radioGroup!.modelValue
    const groupValue = (modelValue && typeof modelValue === 'object' && 'value' in modelValue)
      ? (modelValue as any).value
      : modelValue
    return groupValue === props.value
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

// activeStyle 只用于 inner，覆盖左分隔
const activeStyle = computed(() => {
  const fill = (radioGroup?.fill as string) || '#409eff'
  const textColor = (radioGroup?.textColor as string) || '#fff'
  return {
    backgroundColor: fill,
    color: textColor,
    boxShadow: `-1px 0 0 0 ${fill}`, // 关键：左影覆盖分隔线变蓝
    zIndex: 1,
  }
})
</script>

<style lang="scss">
.my-radio-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #dcdfe6;
  background: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0;
  padding: 0 16px;
  border-radius: 0;
  outline: none;

  // Size
  &.my-radio-button--large { height: 40px; line-height: 40px; padding: 0 20px; font-size: 14px; }
  &.my-radio-button--small { height: 32px; line-height: 32px; padding: 0 12px; font-size: 13px; }

  // Hover
  &:hover:not(.is-disabled) {
    color: #409eff;
    border-color: #409eff;
  }

  &.is-active {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  &.is-disabled {
    color: #c0c4cc;
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }

  &.is-focus:not(.is-disabled) {
    box-shadow: 0 0 0 1px rgba(64, 158, 255, 0.5);
  }

  .my-radio-button__inner {
    display: block;
    padding: 0;
    line-height: inherit;
    transition: inherit;
    border-radius: 0; // 无圆角，由 label 控制
  }

  // 非组内独立使用
  &:not(.my-radio-group *) {
    border-left: 1px solid #dcdfe6;
    border-radius: 4px;
  }
}
</style>