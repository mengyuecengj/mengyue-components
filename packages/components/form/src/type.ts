export type ValidateTrigger = 'blur' | 'change' | 'submit'

// 使用 unknown 更安全，validator 内部可做类型收窄
export interface FormRule {
  required?: boolean
  message?: string
  validator?: (rule: FormRule, value: unknown) => boolean | Promise<boolean>
  len?: number
  trigger?: ValidateTrigger | ValidateTrigger[]
}

// modelValue 统一使用 unknown，符合表单值的不确定性
export interface FormContext {
  modelValue: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  labelWidth: string | number
  validateField: (prop: string, trigger?: ValidateTrigger) => Promise<boolean>
  validate: () => Promise<boolean>
  resetFields: () => void
  clearValidate: (field?: string) => void
  inline?: boolean
  emitter: {
    on: (event: string, handler: (field?: string) => void) => void
    off: (event: string) => void
    emit: (event: string, field?: string) => void
  }
}

export type FormEmits = {
  (e: 'validate', valid: boolean): void
  (e: 'update:modelValue', model: Record<string, unknown>): void
  (e: 'reset-fields'): void
  (e: 'clear-validate', field?: string): void
}

export interface FormProps {
  modelValue: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  labelWidth?: string | number
}

export interface FormItemProps {
  prop?: string
  validateTrigger?: 'blur' | 'change'
}