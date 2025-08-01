<template>
  <label class="my-checkbox" :class="checkboxClass">
    <span class="my-checkbox__input">
      <input
        v-bind="attrs"
        type="checkbox"
        class="my-checkbox__original"
        :checked="isChecked"
        :disabled="isDisabled"
        @change="handleChange"
      />
      <span class="my-checkbox__inner" />
    </span>
    <span class="my-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { useCheckboxLogic } from './checkboxComputed'
import '../style/checkbox.scss'

defineOptions({ name: 'MYCheckbox' })

const props = defineProps<{
  disabled?: boolean
  value?: string
  modelValue?: string[]
}>()
const emit = defineEmits(['update:modelValue', 'change'])

const {
  attrs,
  isChecked,
  isDisabled,
  checkboxClass,
  handleChange
} = useCheckboxLogic(props, emit)

defineExpose({
  isDisabled
})
</script>