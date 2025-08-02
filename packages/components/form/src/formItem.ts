import { PropType } from "vue"
import { FormRule } from "./type"
import { formProps } from './form'

// ==================== 类型定义 ====================
/** 表单项绑定数据类型 */
type FormItemModelValue = Record<string, unknown>
/** 表单项校验规则类型 */
type FormItemRules = Record<string, FormRule[] | string>
/** 校验触发方式 */
type ValidateTrigger = 'blur' | 'change'
/** 表单项大小类型 */
type FormItemSize = 'large' | 'medium' | 'small' | 'mini'

// ==================== 工具函数 ====================
/** 生成默认表单项数据 */
const getDefaultFormItemModelValue = (): FormItemModelValue => ({})
/** 生成默认表单项校验规则 */
const getDefaultFormItemRules = (): FormItemRules => ({})

// ==================== 校验逻辑 ====================
/** 校验表单项规则是否合法 */
const validateFormItemRules = (rules: FormItemRules): boolean => {
  if (!rules) return true
  return Object.values(rules).every(
    rule => {
      if (!Array.isArray(rule)) return false
      return rule.length > 0 && rule.every(
        item => typeof item === 'object' && item !== null && (
          'required' in item || 'validator' in item || 'message' in item
        )
      )
    }
  )
}

// ==================== 表单项 Props 定义 ====================
export const formItemProps = {
  ...formProps,
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  validateTrigger: {
    type: String as PropType<ValidateTrigger>,
    default: 'blur'
  },
  modelValue: {
    type: Object as PropType<FormItemModelValue>,
    default: getDefaultFormItemModelValue
  },
  rules: {
    type: Object as PropType<FormItemRules>,
    default: getDefaultFormItemRules,
    validator: validateFormItemRules
  },
  labelWidth: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<FormItemSize>,
    default: 'medium'
  },
  inline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type FormItemProps = typeof formItemProps;