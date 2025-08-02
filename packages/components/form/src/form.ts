import type { PropType } from 'vue'
import { FormRule } from './type'

// ==================== 类型定义 ====================
/** 表单绑定数据类型 */
type FormModelValue = Record<string, any>
/** 校验规则类型 */
type FormRules = Record<string, FormRule[]>
/** 标签宽度类型 */
type LabelWidth = string | number
/** 表单大小类型 */
type FormSize = 'large' | 'medium' | 'small' | 'mini'

// ==================== 工具函数 ====================
/** 生成默认表单数据 */
const getDefaultModelValue = (): FormModelValue => ({})
/** 生成默认校验规则 */
const getDefaultRules = (): FormRules => ({})

// ==================== 校验逻辑 ====================
/** 校验规则是否合法 */
const validateRules = (rules: FormRules): boolean => {
  if (!rules) return true
  return Object.values(rules).every(
    rules => Array.isArray(rules) && rules.every(rule => typeof rule === 'object')
  )
}

/** 校验标签宽度是否合法 */
const validateLabelWidth = (value: LabelWidth): boolean => {
  if (typeof value === 'string') {
    return value === 'auto' || !isNaN(Number(value))
  }
  return true
}

// ==================== 表单 Props 定义 ====================
export const formProps = {
  /** 表单绑定数据 */
  modelValue: {
    type: Object as PropType<FormModelValue>,
    default: getDefaultModelValue,
    required: true,
  },
  /** 校验规则 */
  rules: {
    type: Object as PropType<FormRules>,
    default: getDefaultRules,
    validator: validateRules,
  },
  /** 标签宽度，支持像素值和 `auto` */
  labelWidth: {
    type: [String, Number] as PropType<LabelWidth>,
    default: 'auto',
    validator: validateLabelWidth,
  },
  /** 是否行内布局 */
  inline: {
    type: Boolean,
    default: false,
  },
  /** 大小, 可选 large, medium, small, mini */
  size: {
    type: String as PropType<FormSize>,
    default: 'medium',
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
}
