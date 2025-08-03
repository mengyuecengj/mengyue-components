import { computed, inject, useAttrs } from 'vue'
import { RadioProps, RadioGroupContext } from './type'
import { useFormField, useInputState, useInputClasses, FormItemContext } from '../../../hooks/useCheckComputed'

export function useRadio(
  props: RadioProps,
  emit: (event: 'update:modelValue' | 'change', ...args: any[]) => void
) {
  const attrs = useAttrs()
  const radioGroup = inject<RadioGroupContext | null>('radioGroup', null)
  const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)

  const effectiveName = computed<string | undefined>(() => {
    if (props.name) return props.name
    if (!radioGroup?.name) return undefined

    // 判断 name 是否是 Ref，是则取 value，否则直接返回字符串
    return typeof radioGroup.name === 'string' ? radioGroup.name : radioGroup.name.value
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

  // 注意这里传入 radioGroup 之前，可能需要类型断言或转换
  // 如果 useInputState 需要特定类型，你可以使用断言或改写 radioGroup 类型
  const { isDisabled, isChecked } = useInputState(
    props,
    radioGroup as any // 如果类型冲突严重，可以先用 any 断言，后面建议修正类型
  )

  // useInputClasses 的参数改为布尔类型，去掉 `.value`
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
