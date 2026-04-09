import type { PropType } from 'vue'
import { radioProps } from './radio'

export const radioGroupProps = {
  ...radioProps,

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
