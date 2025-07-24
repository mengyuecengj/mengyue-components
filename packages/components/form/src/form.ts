import type { PropType } from 'vue'

// 表单校验规则接口
export interface FormRule {
  /** 是否必填 */
  required?: boolean
  /** 校验失败的提示信息 */
  message?: string
  /** 自定义校验函数，返回 true/false 或 Promise */
  validator?: (rule: FormRule, value: any) => boolean | Promise<boolean>
}

// el-formProps 等同于 MyForm 的 Props 定义
export const formProps = {
  /** 表单绑定数据 */
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  /** 校验规则 */
  rules: {
    type: Object as PropType<Record<string, FormRule[]>>,
    default: () => ({}),
  },
  /** 标签宽度，支持像素值和 `auto` */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 'auto',
  },
  /** 是否行内布局 */
  inline: {
    type: Boolean,
    default: false,
  },
  /** 大小, 可选 large, medium, small, mini */
  size: {
    type: String as PropType<'large' | 'medium' | 'small' | 'mini'>,
    default: 'medium',
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
}
