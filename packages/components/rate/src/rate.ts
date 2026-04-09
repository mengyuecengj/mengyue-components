import type { PropType, ExtractPropTypes } from 'vue'

export type RateColors = [string, string, string]

export interface RateEmits {
  (event: 'update:modelValue', value: number): void
  (event: 'change', value: number): void
}

// 评分组件的 Props 定义
export const rateProps = {
  modelValue: {
    type: Number as PropType<number>,
    default: 0
  },
  max: {
    type: Number as PropType<number>,
    default: 5
  },
  colors: {
    type: Array as unknown as PropType<[string, string, string]>,
    default: () => ['#F7BA2A', '#F7BA2A', '#C6D1DE'] as [string, string, string]
  },
  showText: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  texts: {
    type: Array as PropType<string[]>,
    default: () => ['极差', '失望', '一般', '满意', '惊喜']
  },
  showHalf: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
}

export type RateProps = Readonly<ExtractPropTypes<typeof rateProps>>
