import { onBeforeUnmount, onMounted, type Ref, type ComputedRef, type CSSProperties } from 'vue'
import { useClassComputed } from '../../../hooks/useClassComputed'
import { useStyleComputed } from '../../../hooks/useStyleComputed'

// Context and utility types
type EmitFn = (event: 'update:modelValue', value: boolean) => void

export interface Props extends Record<string, unknown> {
  [key: string]: unknown;
  size?: string
  disabled?: boolean | string[]
  text?: string
}

interface FormItemContext {
  prop?: string
  addField?: (field: {
    prop?: string
    resetField: () => void
    validate: () => Promise<void>
    clearValidate: () => void
  }) => void
  removeField?: (prop: string) => void
  clearValidate?: () => void
}

// 重置字段值并清除校验信息
export const resetField = (
  emit: EmitFn,
  initialValue: Ref<boolean>,
  formItemContext?: Partial<FormItemContext> | null
): void => {
  emit('update:modelValue', initialValue.value)
  formItemContext?.clearValidate?.()
}

// 校验函数，默认通过
export const validate = (): Promise<void> => Promise.resolve()

// 清除校验信息
export const clearValidate = (
  formItemContext?: Partial<FormItemContext> | null
): void => {
  formItemContext?.clearValidate?.()
}

// 处理切换逻辑
export const handleChange = (
  isDisabled: Ref<boolean>,
  isChecked: Ref<boolean>,
  emit: EmitFn
): void => {
  if (isDisabled.value) return
  const newValue = !isChecked.value
  emit('update:modelValue', newValue)
}

// 将Switch注册到表单上下文
export const setupFormItemContext = (
  formItemContext: Partial<FormItemContext> | null,
  fieldProp: string | undefined,
  resetFieldFn: () => void,
  clearValidateFn: () => void
): void => {
  if (!formItemContext) return

  onMounted(() => {
    formItemContext.addField?.({
      prop: fieldProp,
      resetField: resetFieldFn,
      validate,
      clearValidate: clearValidateFn
    })
  })

  onBeforeUnmount(() => {
    if (fieldProp) {
      formItemContext.removeField?.(fieldProp)
    }
  })
}

// 组合式Hook：Switch的class和style计算
export function useSwitchComputed(props: Props): {
  classSwitch: ComputedRef<string[]>
  styleSwitch: ComputedRef<CSSProperties>
} {
  // class 计算
  const classSwitch = useClassComputed<Props>({
    baseClass: 'my-switch',
    propClasses: {
      size: props.size,
      disabled: props.disabled as unknown as string
    }
  })

  // style 计算，复用通用 hook
  const styleSwitch = useStyleComputed<Props>(props, {
    propToStyleMap: { text: '--my-switch-text' }
  })

  return { classSwitch, styleSwitch }
}
