import { computed, ref } from 'vue'
import mitt from 'mitt'
import type { FormRule, ValidateTrigger, FormEmits, FormProps } from './type'

export function useFormComputed(props: FormProps, emit: FormEmits) {
  const formRef = ref<HTMLFormElement>()
  const emitter = mitt()

  const labelWidth = computed(() =>
    props.labelWidth === 'auto' ? 'auto' : `${props.labelWidth}`
  )

  async function runRule(rule: FormRule, value: unknown, prop: string) {
    if (rule.required && (value === '' || value === undefined || value === null)) {
      throw new Error(rule.message || `${prop} is required`)
    }

    if (rule.len !== undefined && (typeof value === 'string' || Array.isArray(value)) && value.length !== rule.len) {
      throw new Error(rule.message || `${prop} length must be ${rule.len}`)
    }

    if (rule.validator) {
      const res = await rule.validator(rule, value)
      if (!res) throw new Error(rule.message || `${prop} validate failed`)
    }
  }

  async function validateField(prop: string, trigger: ValidateTrigger = 'submit') {
    const rules = props.rules?.[prop]
    if (!rules) return true

    const value = props.modelValue[prop]

    for (const rule of rules) {
      const ruleTrigger = rule.trigger
        ? Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger]
        : ['blur', 'change', 'submit']

      if (!ruleTrigger.includes(trigger)) continue
      await runRule(rule, value, prop)
    }

    return true
  }

  async function validate() {
    const keys = Object.keys(props.rules || {})
    for (const key of keys) {
      await validateField(key, 'submit')
    }
    emit('validate', true)
    return true
  }

  function resetFields() {
    const newModel: Record<string, unknown> = {}
    Object.keys(props.modelValue).forEach(k => (newModel[k] = ''))
    emit('update:modelValue', newModel)
    clearValidate()
    emit('reset-fields')
  }

  function clearValidate(field?: string) {
    emitter.emit('clear-validate', field)
    emit('clear-validate', field)
  }

  return {
    formRef,
    labelWidth,
    validateField,
    validate,
    resetFields,
    clearValidate,
    emitter
  }
}