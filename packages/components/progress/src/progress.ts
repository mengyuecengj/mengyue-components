import type { PropType } from 'vue'

export type ProgressStatus = 'success' | 'warning' | 'exception'

export type ProgressFormat = (percentage: number) => string

export interface ProgressProps {
  percentage: number | string
  status: ProgressStatus | ''
  format: ProgressFormat
}

export const progressProps = {
  percentage: {
    type: [Number, String],
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