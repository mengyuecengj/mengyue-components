<template>
  <form
    ref="formRef"
    :class="formClass"
    :style="{ '--label-width': labelWidth }"
    @submit.prevent="validate"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue'
import { useClassComputed } from '../../../hooks/useClassComputed'
import { useFormComputed } from './formComputed'
import { formProps } from './form'
import '../style/form.scss'

defineOptions({ name: 'MYForm' })

const props = defineProps(formProps)
const emit = defineEmits(['update:modelValue', 'validate', 'reset-fields', 'clear-validate'])

const {
  formRef,
  labelWidth,
  validate,
  validateField,
  resetFields,
  clearValidate,
  emitter
} = useFormComputed(props, emit)

const formClass = useClassComputed({
  baseClass: 'my-form',
  propClasses: {
    size: props.size,
    inline: String(props.inline)
  },
  flagClasses: {
    disabled: props.disabled
  }
})

provide('form', reactive({
  ...toRefs(props),
  validate,
  validateField,
  resetFields,
  clearValidate,
  emitter
}))

defineExpose({ validate, resetFields, clearValidate })
</script>