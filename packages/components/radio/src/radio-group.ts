// packages/components/Radio/src/radio-group-props.ts
import { PropType } from 'vue'
import { radioProps } from './radio'

// 单独封装 radio-group 的 props
export const radioGroupProps = {
  ...radioProps, // 如果 radioProps 中包含 name/label 等通用字段

  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  gap: {
    type: String,
    default: '12px',
  },
} as const

export type RadioGroupPropTypes = typeof radioGroupProps
