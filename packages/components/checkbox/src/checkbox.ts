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
  // 新增：支持 indeterminate 状态（用于树形选择器中的“部分选中”）
  indeterminate: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const