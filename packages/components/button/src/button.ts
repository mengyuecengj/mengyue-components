import type { Component, ExtractPropTypes, PropType } from 'vue'

const buttonTypeProps = {
  type: {
    type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'supersmall' | 'small' | 'medium' | 'large' | 'superbig'>,
    default: 'medium',
  },
} as const

const buttonStyleProps = {
  rounded: { type: Boolean, default: false },
  circular: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
} as const

const buttonColorProps = {
  colorBackground: { type: String, default: '' },
  colorText: { type: String, default: '' },
  colorBorder: { type: String, default: '' },
} as const

const buttonBehaviorProps = {
  disabled: { type: Boolean, default: false },

  loading: { type: Boolean, default: false },

  debounce: {
    type: Number,
    default: 300,
  },

  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  icon: { type: String, default: '' },
  tag: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
} as const

const buttonIconProps = {
  iconOnly: { type: Boolean, default: false }
}

export const buttonProps = {
  ...buttonTypeProps,
  ...buttonStyleProps,
  ...buttonColorProps,
  ...buttonBehaviorProps,
  ...buttonIconProps
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>