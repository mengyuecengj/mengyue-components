import type { ComputedRef } from 'vue'

export interface SelectContext {
  selectOption: (value: string | number, label: string) => void
  setFocusedIndex: (index: number) => void
  currentValue: ComputedRef<string | number>
  disabled: ComputedRef<boolean>
}