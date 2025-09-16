import type { Component, ExtractPropTypes, PropType } from 'vue'


const buttonTypeProps = {
  type: {
    type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'default' as const,
  },
  size: {
    type: String as PropType<'supersmall' | 'small' | 'medium' | 'large' | 'superbig'>,
    default: 'medium',
  },
} as const

const buttonStyleProps = {
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false,
  },
} as const

const buttonColorProps = {
  colorBg: {
    type: String,
    default: ''
  },
  colorText: {
    type: String,
    default: ''
  },
  colorBorder: {
    type: String,
    default: ''
  },
} as const

const buttonBehaviorProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  tag: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
} as const

export const buttonProps = {
  ...buttonTypeProps,
  ...buttonStyleProps,
  ...buttonColorProps,
  ...buttonBehaviorProps,
} as const

type ButtonPropsWithDynamic = ExtractPropTypes<typeof buttonProps> & {
  [key: string]: string | number | boolean | undefined
}
export type ButtonProps = ButtonPropsWithDynamic
