import type { PropType } from 'vue'

/** 进度条状态类型 */
export type ProgressStatus = 'success' | 'warning' | 'exception'

/** 百分比格式化函数 */
export type ProgressFormat = (percentage: number) => string

/** 组件 props 类型 */
export interface ProgressProps {
  percentage: number
  status: ProgressStatus | ''
  format: ProgressFormat
}

/** 组件 props 选项定义 */
export const progressProps = {
  percentage: {
    type: Number,
    default: 50,
  },
  status: {
    type: String as PropType<ProgressStatus | ''>,
    default: '',
  },
  format: {
    type: Function as PropType<ProgressFormat>,
    default: undefined,
  },
}
