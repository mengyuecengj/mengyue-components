export interface DialogProps {
  modelValue: boolean
  title?: string
  width?: string | number
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  overflow?: boolean
  backgroundColor?: string
  textColor?: string
  height?: string | number
  [key: string]: unknown
}

export interface DialogEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'open'): void
  (e: 'close'): void
}
