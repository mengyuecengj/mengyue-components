import { useClassComputed } from '../../../hooks/useClassComputed'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import type { ExtractPropTypes } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import { inputProps } from './input'

export function useInputComputed(props: ExtractPropTypes<typeof inputProps>): {
  inputClass: ComputedRef<string[]>
  inputStyle: ComputedRef<CSSProperties>
} {
  const inputClass = useClassComputed({
    baseClass: 'my-input',
    flagClasses: { disabled: props.disabled }
  })
  const inputStyle = useStyleComputed(props, {
    propToStyleMap: { width: 'width', height: 'height' }
  })
  return { inputClass, inputStyle }
}