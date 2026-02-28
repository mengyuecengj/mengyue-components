import type { PropType } from 'vue'
export const checkboxProps = {
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    required: true
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  indeterminate: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const