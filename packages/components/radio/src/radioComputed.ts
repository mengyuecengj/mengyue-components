import { computed, inject, useAttrs, unref } from 'vue'
import type { RadioProps, RadioGroupContext } from './type'
import {
  useFormField,
  useInputState,
  useInputClasses,
  type FormItemContext,
  type GroupContext
} from '../../../hooks/useCheckComputed'

type RadioEmit = {
  (event: 'update:modelValue', value: RadioProps['modelValue']): void
  (event: 'change', value: RadioProps['modelValue']): void
}

export function useRadio(
  props: RadioProps,
  emit: RadioEmit
) {
  const attrs = useAttrs()
  const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)
  const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)

  const effectiveName = computed<string | undefined>(() => {
    if (props.name) return props.name
    if (!radioGroup?.name) return undefined
    return typeof radioGroup.name === 'string'
      ? radioGroup.name
      : radioGroup.name.value
  })

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

  /** ✅ 关键：永远提供 Ref<T> 给 GroupContext */
  const modelValueRef = computed<RadioProps['modelValue']>(() => {
    if (radioGroup?.modelValue !== undefined) {
      return unref(radioGroup.modelValue)
    }
    return props.modelValue
  })

  const adaptedGroupContext = computed<GroupContext<RadioProps['modelValue']> | null>(() => {
    if (!radioGroup) return null

    return {
      modelValue: modelValueRef,                 // ✅ Ref<T>
      change: radioGroup.change,
      disabled: unref(radioGroup.disabled) ?? false
    }
  })

  const { isDisabled, isChecked } = useInputState(
    props,
    adaptedGroupContext.value
  )

  const radioClass = useInputClasses(isChecked, isDisabled, 'my-radio')

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

  return {
    attrs,
    isDisabled,
    isChecked,
    radioClass,
    radioStyle,
    radioGroup,
    effectiveName
  }
}