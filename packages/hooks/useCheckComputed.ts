/**
 *  @description radio and checkbox hooks file
 *  This hooks files is a dedicated hooks file for single and multiple selection boxes
 *  current is radio components and checkbox components hook files
 *  More features will be expanded in the near futrue
 */

import {
  computed,
  inject,
  onMounted,
  onBeforeUnmount,
  watch,
  ref,
  Ref
} from 'vue'

/**
 * 表单项上下文接口
 */
export interface FormItemContext {
  prop?: string
  addField?: (field: {
    prop?: string
    resetField: () => void
    validate: () => Promise<void>
    clearValidate?: () => void
  }) => void
  removeField?: (prop: string) => void
  clearValidate?: () => void
}

/**
 * 通用 group 上下文接口（泛型为 modelValue 类型）
 */
export interface GroupContext<M> {
  modelValue: Ref<M>
  disabled?: boolean
  change: (value: M) => void
  name?: string
}

/**
 * 表单字段通用处理
 */
export function useFormField<T>(
  prop: string | undefined,
  modelValue: T,
  resetHandler: () => void
) {
  const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)
  const initialValue = ref(modelValue)

  const resetField = () => {
    resetHandler()
    formItemContext?.clearValidate?.()
  }

  onMounted(() => {
    if (formItemContext?.addField && prop) {
      formItemContext.addField({
        prop,
        resetField,
        validate: () => Promise.resolve(),
        clearValidate: () => formItemContext?.clearValidate?.()
      })
    }
  })

  onBeforeUnmount(() => {
    if (prop && formItemContext?.removeField) {
      formItemContext.removeField(prop)
    }
  })

  watch(() => modelValue, () => {
    formItemContext?.clearValidate?.()
  })

  return { initialValue }
}

/**
 * 状态计算：是否选中、是否禁用
 * 兼容 checkbox / checkboxGroup / radioGroup
 */
export function useInputState<T extends string | number | boolean>(
  props: { disabled?: boolean; value?: T; modelValue?: T | T[] },
  groupContext: GroupContext<T> | GroupContext<T[]> | null
) {
  const isDisabled = computed(() => props.disabled || (groupContext?.disabled ?? false))

  const isChecked = computed(() => {
    const val = props.value
    if (val === undefined) return false

    const groupValue = groupContext?.modelValue.value

    if (Array.isArray(groupValue)) {
      return groupValue.includes(val)
    } else if (groupValue !== undefined) {
      return String(groupValue) === String(val)
    }

    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(val)
    }
    return String(props.modelValue) === String(val)
  })

  return { isDisabled, isChecked }
}

/**
 * 样式类名计算
 */
export function useInputClasses(isChecked: boolean, isDisabled: boolean, prefix: string) {
  return computed(() => {
    const cls: string[] = [prefix]
    if (isChecked) cls.push(`${prefix}--checked`)
    if (isDisabled) cls.push(`${prefix}--disabled`)
    return cls
  })
}

/**
 * change 事件处理器
 * 兼容 checkbox / checkboxGroup / radioGroup
 */
export function useInputChange<T extends string | number | boolean>(
  props: { disabled?: boolean; value?: T; modelValue?: T | T[] },
  emit: (event: 'update:modelValue' | 'change', ...args: any[]) => void,
  groupContext: GroupContext<T> | GroupContext<T[]> | null,
  isArray: boolean = false
) {
  const handleChange = (e: Event) => {
    if (props.disabled || (groupContext?.disabled ?? false)) return
    const target = e.target as HTMLInputElement
    const val = props.value
    if (val === undefined) return

    const groupValue = groupContext?.modelValue.value

    // checkbox group 场景
    if (Array.isArray(groupValue)) {
      const model = [...groupValue]
      const index = model.indexOf(val)
      if (target.checked && index === -1) {
        model.push(val)
      } else if (!target.checked && index !== -1) {
        model.splice(index, 1)
      }
      (groupContext as GroupContext<T[]>).change(model)
    }

    // radio group 场景
    else if (groupValue !== undefined) {
      (groupContext as GroupContext<T>).change(val)
    }

    // 非 group 情况
    else {
      if (isArray) {
        const model = Array.isArray(props.modelValue)
          ? [...props.modelValue]
          : []
        const index = model.indexOf(val)
        if (target.checked && index === -1) {
          model.push(val)
        } else if (!target.checked && index !== -1) {
          model.splice(index, 1)
        }
        emit('update:modelValue', model)
      } else {
        emit('update:modelValue', val)
      }
    }

    emit('change', target.checked)
  }

  return { handleChange }
}
