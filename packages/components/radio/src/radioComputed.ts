import { computed, inject, useAttrs } from 'vue'
import { RadioProps, RadioGroupContext } from './type'
import { useFormField, useInputState, useInputClasses, useInputChange, FormItemContext, GroupContext } from '../../../hooks/useCheckComputed'

export function useRadio(props: RadioProps, emit: (event: 'update:modelValue' | 'change', ...args: any[]) => void) {
  const attrs = useAttrs()
  const radioGroup = inject<RadioGroupContext | null>('radioGroup', null) as GroupContext<string | number | boolean> | null
  const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)

  const effectiveName = computed(() => props.name || radioGroup?.name)
  const { initialValue } = useFormField(
    formItemContext?.prop || effectiveName.value,
    props.modelValue ?? '',
    () => {
      const resetValue = initialValue.value
      if (radioGroup?.change && resetValue !== undefined) {
        radioGroup.change(resetValue)
      } else if (resetValue !== undefined) {
        emit('update:modelValue', resetValue)
      }
    }
  )

  const { isDisabled, isChecked } = useInputState(props, radioGroup)
  const radioClass = useInputClasses(isChecked.value, isDisabled.value, 'my-radio')
  const { handleChange } = useInputChange(props, emit, radioGroup)

  const radioStyle = computed(() => {
    const style: Record<string, string> = {}
    if (props.size) {
      style.fontSize = props.size
      style.lineHeight = props.size
      style.width = props.size
      style.height = props.size
    }
    return style
  })

  return { attrs, isDisabled, isChecked, handleChange, radioClass, radioStyle }
}