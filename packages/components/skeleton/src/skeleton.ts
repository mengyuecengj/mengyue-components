import type { PropType } from 'vue'

// 定义 theme 可选值枚举
export type SkeletonTheme = 'light' | 'dark' | string

export const skeletonProps = {
  loading: {
    type: Boolean,
    default: true,
  },
  animated: {
    type: Boolean,
    default: true,
  },
  count: {
    type: Number,
    default: 3,
  },
  randomWidth: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false,
  },
  throttle: {
    type: Number,
    default: 0,
  },
  theme: {
    type: String as PropType<SkeletonTheme>,
    default: 'light',
  },
}

export type SkeletonItemVariant = 'text' | 'circle' | 'rect' | string
