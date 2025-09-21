<template>
  <form ref="formRef" :class="formClass" :style="{ '--label-width': labelWidth }">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs, watch } from 'vue'
import { useClassComputed } from '../../../hooks/useClassComputed'
import { useFormComputed } from './formComputed'
import { formProps } from './form'
import '../style/form.scss'

defineOptions({
  name: 'MYForm'
})

const props = defineProps(formProps)
const emit = defineEmits([
  'update:modelValue',
  'validate',
  'validate-field',
  'reset-fields',
  'clear-validate'
])

const {
  formRef,
  labelWidth,
  validateField,
  validate,
  resetFields,
  clearValidate,
  formContext,
  emitter,
} = useFormComputed(props, emit)

// 提供更新 modelValue 的方法
const updateFieldValue = (field: string, value: any) => {
  const newModel = { ...props.modelValue, [field]: value }
  emit('update:modelValue', newModel)
}

const formClass = useClassComputed({
  baseClass: 'my-form',
  propClasses: {
    size: props.size && ['large', 'medium', 'small', 'mini'].includes(props.size) ? props.size : undefined,
    inline: String(props.inline),
  },
  flagClasses: {
    disabled: props.disabled,
  }
})

provide('myFormContext', formContext)

defineExpose({
  validate,
  resetFields,
  clearValidate,
})

// Provide context to FormItem and child controls
provide('form', reactive({
  ...toRefs(props),
  emit,
  formRef,
  validate,
  validateField,
  resetFields,
  clearValidate,
  emitter,
  formClass,
  updateFieldValue,
}))
</script>