import type { Ref } from 'vue'

export interface RadioGroupContext<T = string | number | boolean> {
  changeEvent: boolean
  textColor: string
  fill: string
  name?: string | Ref<string>
  disabled?: boolean | Ref<boolean>
  modelValue?: T | Ref<T>
  change?: (value: T) => void
}

export interface FormItemContext {
  prop?: string
  clearValidate?: () => void
  addField?: (field: {
    prop: string
    resetField: () => void
    validate: () => Promise<void>
    clearValidate: () => void
  }) => void
  removeField?: (prop: string) => void
}

export type RadioProps = {
  modelValue?: string | number | boolean
  value?: string | number | boolean
  name?: string
  size?: string
  disabled?: boolean
}

export interface RadioDemoInstance {
  singleSelected: string
  groupSelected: string
  disabledSelected: string
  verticalSelected: string
}