// 表单校验规则接口
export interface FormRule {
  /** 是否必填 */
  required?: boolean
  /** 校验失败的提示信息 */
  message?: string
  /** 自定义校验函数，返回 true/false 或 Promise */
  validator?: (rule: FormRule, value: string) => boolean | Promise<boolean>
}

export interface FormContext {
  modelValue: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  labelWidth: string | number
  validateField?: (prop: string) => Promise<void>
  inline?: boolean
  emitter?: {
    on: (event: string, handler: (field: string) => void) => void
    off: (event: string) => void
  }
}

export interface FormItemProps {
  label?: string
  prop?: string
  validateTrigger?: 'blur' | 'change'
  modelValue?: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  labelWidth?: string | number
  size?: 'large' | 'medium' | 'small' | 'mini'
  inline?: boolean
  disabled?: boolean
}

export type FormEmits = {
  (e: 'validate', isValid: boolean): void;
  (e: 'update:modelValue', model: Record<string, string>): void;
  (e: 'reset-fields'): void;
  (e: 'clear-validate', field?: string): void;
};