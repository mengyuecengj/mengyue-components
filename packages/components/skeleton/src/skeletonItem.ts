import { PropType } from 'vue'

export type SkeletonItemVariant = 'text' | 'circle' | 'rect' | string

export const skeletonItemProps = {
  variant: {
    type: String as PropType<SkeletonItemVariant>,
    default: 'text',
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '100%',
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 16,
  },
}
