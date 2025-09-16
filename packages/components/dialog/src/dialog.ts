import type { ExtractPropTypes, PropType } from 'vue'

export const dialogProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: 400
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: 200
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  },
  overflow: {
    type: Boolean,
    default: false
  }
} as const

export type DialogProps = ExtractPropTypes<typeof dialogProps>
