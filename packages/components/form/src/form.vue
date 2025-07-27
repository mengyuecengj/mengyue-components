<template>
  <form ref="formRef" :class="formClass" :style="{ '--label-width': labelWidth }">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { ref, provide, toRefs, reactive, computed } from 'vue'
import mitt from 'mitt'
import { formProps } from './form'
import type { FormRule } from './form'
import { useClassComputed } from '../../../hooks/useClassComputed'
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

const formRef = ref<HTMLElement>()

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

const labelWidth = computed(() => {
  return props.labelWidth === 'auto' ? 'auto' : (props.labelWidth?.toString() || 'auto')
})


// Validation logic
async function validateField(prop: string) {
  // 获取当前字段的规则，确保类型为数组对象
  const rules = (props.rules?.[prop] as FormRule[] | undefined) || []
  const model = props.modelValue as unknown as Record<string, string>
  const value = model[prop]
  for (const rule of rules) {
    // 仅对对象规则进行校验，忽略字符串或其他类型
    if (typeof rule === 'object') {
      const { required, message, validator } = rule
      if (required && (value === undefined || value === null || value === '')) {
        throw new Error(message || `${prop} is required`)
      }
      if (validator) {
        const result = await validator(rule, value)
        if (!result) throw new Error(message || `${prop} validation failed`)
      }
    }
  }
  return true
}

// Validate entire form
async function validate() {
  const tasks = Object.keys(props.rules || {}).map(key => validateField(key))
  await Promise.all(tasks)
  emit('validate', true)
  return true
}

// Reset fields to initial state
function resetFields() {
  const model = props.modelValue as unknown as Record<string, string>
  const newModel = { ...model } // 浅拷贝即可，如果字段是基本类型
  Object.keys(newModel).forEach(key => {
    newModel[key] = ''
  })
  emit('update:modelValue', newModel)
  clearValidate()
  emit('reset-fields')
}

const emitter = mitt();

function clearValidate(field?: string) {
  emitter.emit('clear-validate', field) 
  emit('clear-validate', field)
}

const formContext = {
  validate,
  resetFields,
  clearValidate,
}
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
  formClass
}))
</script>