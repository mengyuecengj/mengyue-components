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
    if (!props.rules || !props.rules[prop]) return true

    const rules = props.rules[prop] as FormRule[]
    const model = props.modelValue as Record<string, any>
    const value = model[prop]

    for (const rule of rules) {
      if (typeof rule === 'object') {
        const { required, message, validator, len } = rule

        // 必填验证
        if (required && (value === undefined || value === null || value === '')) {
          throw new Error(message || `${prop} is required`)
        }

        // 长度验证
        if (len !== undefined && value !== undefined && value !== null) {
          if (typeof value === 'string' && value.length !== len) {
            throw new Error(message || `${prop} length must be ${len}`)
          }
        }

        // 自定义验证器
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
