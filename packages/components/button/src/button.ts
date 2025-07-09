import type { Component, ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  type: {
    type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
    default: 'default' as const,
  },
  size: {
    type: String as PropType<'supersmall' | 'small' | 'medium' | 'large' | 'superbig'>,
    default: 'medium',
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
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
  tag: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>