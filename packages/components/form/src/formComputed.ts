import { computed, ref } from 'vue'
import mitt from 'mitt'
import type { FormRule, FormItemProps, FormEmits } from './type'

export function useFormComputed(props: FormItemProps, emit: FormEmits) {
  const formRef = ref<HTMLElement>()

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

  return {
    formRef,
    labelWidth,
    validateField,
    validate,
    resetFields,
    clearValidate,
    formContext,
    emitter,
  }
}
