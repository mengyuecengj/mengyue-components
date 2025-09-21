import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useClassComputed } from '../../../hooks/useClassComputed'
import type { ComputedRef } from 'vue'
import type { FormContext, FormRule, FormItemProps } from './type'

export function useFormItemComputed(props: FormItemProps, form: FormContext) {
  const formItemRef = ref<HTMLElement>()
  const errorMessage = ref('')

  const labelWidth = computed(() => form?.labelWidth === 'auto' ? 'auto' : `${form?.labelWidth}px`)

  async function validateField() {
    if (!props.prop) return
    const model = form.modelValue || {}
    const value = model[props.prop]
    const rules = form.rules?.[props.prop] || []
    const hasRequiredRule = rules.some((r: FormRule) => r.required)

    // 如果字段非必填且为空，则不进行验证
    if ((value === undefined || value === null || value === '') && !hasRequiredRule) {
      errorMessage.value = ''
      return true
    }

    try {
      await form?.validateField?.(props.prop)
      errorMessage.value = ''
      return true
    } catch (err: unknown) {
      if (err instanceof Error) {
        errorMessage.value = err.message || 'Validation error'
      }
      return false
    }
  }

  // 增强 attachTrigger 方法
  function attachTrigger() {
    nextTick(() => {
      const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
      if (!el) return

      // 同时绑定 blur 和 change 事件
      if (props.validateTrigger === 'blur' || props.validateTrigger === 'change') {
        el.addEventListener(props.validateTrigger, validateField)
      }
    })
  }

  const formItemClassArray: ComputedRef<string[]> = useClassComputed({
    baseClass: 'my-form-item',
    propClasses: {
      size: props.size,
      inline: form.inline ? 'true' : undefined
    },
    flagClasses: {
      disabled: props.disabled,
      error: Boolean(errorMessage.value)
    }
  })

  const formItemClass = computed(() => formItemClassArray.value.join(' '))

  onMounted(() => {
    form?.emitter?.on('clear-validate', (field: string) => {
      if (!field || field === props.prop) {
        errorMessage.value = ''
      }
    })
  })

  onBeforeUnmount(() => {
    const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
    if (el) {
      const eventType = props.validateTrigger === 'blur' ? 'blur' : 'change'
      el.removeEventListener(eventType, validateField)
    }
    form?.emitter?.off('clear-validate')
  })

  return {
    formItemRef,
    errorMessage,
    labelWidth,
    validateField,
    attachTrigger,
    formItemClass,
  }
}