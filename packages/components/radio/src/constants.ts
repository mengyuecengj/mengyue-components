import type { InjectionKey, Ref } from 'vue'

export interface RadioGroupContext {
  modelValue: Ref<any>
  disabled: Ref<boolean>
  direction: Ref<string>
  changeEvent: (val: any) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('MYRadioGroup')
