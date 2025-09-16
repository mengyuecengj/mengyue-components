import { PropType } from 'vue'
import { checkboxProps } from './checkbox'

export const checkboxGroupProps = {
  ...checkboxProps,
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    required: false
  },
  modelValue: {
    type: Array as PropType<Array<string | number | boolean>>,
    default: () => []
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  gap: {
    type: String as PropType<string>,
    default: '12px'
  }
} as const

export type CheckboxGroupProps = typeof checkboxGroupProps
