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
        :value="value"
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
import { computed, inject } from 'vue'
import { radioProps } from './radio'
import '../style/radio.scss'
import { RadioGroupContext } from './type'

const props = defineProps(radioProps)
const emit = defineEmits(['update:modelValue', 'change'])

const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)

const isGroup = computed(() => !!radioGroup)

const isDisabled = computed(() => {
  return isGroup.value ? radioGroup!.disabled.value || props.disabled : props.disabled
})

const isChecked = computed(() => {
  const currentValue = isGroup.value ? radioGroup!.modelValue.value : props.modelValue
  return currentValue === props.value
})

const handleClick = () => {
  if (isDisabled.value) return

  if (isGroup.value) {
    radioGroup!.changeEvent(props.value)
  } else {
    emit('update:modelValue', props.value)
    emit('change', props.value)
  }
}
</script>
