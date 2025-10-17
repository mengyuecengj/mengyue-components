import type { PropType } from "vue"
export const checkboxGroupProps = {
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
  },
  // 新增：是否开启严格模式（不自动级联选中）
  checkStrictly: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const