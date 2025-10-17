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
  type Ref,
  type UnwrapRef
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
): { initialValue: Ref<UnwrapRef<T>> } {
  const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)
  const initialValue = ref(modelValue) as Ref<UnwrapRef<T>>

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
    const val = props.value;
    if (val === undefined) return false;

    // 优先使用 groupContext 的 modelValue
    if (groupContext?.modelValue) {
      const groupValue = groupContext.modelValue.value;
      if (Array.isArray(groupValue)) {
        return groupValue.includes(val as T);
      }
      return String(groupValue) === String(val);
    }

    // 回退到 props.modelValue
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(val as T);
    }
    return String(props.modelValue) === String(val);
  });

  return { isDisabled, isChecked }
}

/**
 * 样式类名计算
 */
export function useInputClasses(isChecked: Ref<boolean>, isDisabled: Ref<boolean>, prefix: string) {
  return computed(() => {
    const cls: string[] = [prefix];
    if (isChecked.value) cls.push(`${prefix}--checked`);
    if (isDisabled.value) cls.push(`${prefix}--disabled`);
    return cls;
  });
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
    if (props.disabled || (groupContext?.disabled ?? false)) return;
    const target = e.target as HTMLInputElement;
    const val = props.value;
    if (val === undefined) return;

    if (groupContext?.modelValue) {
      const groupValue = groupContext.modelValue.value;
      if (Array.isArray(groupValue)) {
        const model = [...groupValue];
        const index = model.indexOf(val as T);
        if (target.checked && index === -1) {
          model.push(val as T);
        } else if (!target.checked && index !== -1) {
          model.splice(index, 1);
        }
        groupContext.change(model as T & T[]);
      } else {
        groupContext.change(val as T & T[]);
      }
    } else {
      if (isArray) {
        const model = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
        const index = model.indexOf(val as T);
        if (target.checked && index === -1) {
          model.push(val as T);
        } else if (!target.checked && index !== -1) {
          model.splice(index, 1);
        }
        emit('update:modelValue', model as T & T[]);
      } else {
        emit('update:modelValue', val as T);
      }
    }

    emit('change', target.checked);
  };

  return { handleChange };
}