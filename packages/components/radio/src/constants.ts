// constants.ts
import type { InjectionKey, Ref } from 'vue'

export interface RadioGroupContext {
  modelValue: Ref<unknown>
  disabled: Ref<boolean>
  direction: Ref<string>
  changeEvent: (val: unknown) => void
}

export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('MYRadioGroup')