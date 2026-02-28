import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { FormContext, FormItemProps } from './type'

export function useFormItemComputed(props: FormItemProps, form: FormContext) {
  const formItemRef = ref<HTMLElement>()
  const errorMessage = ref('')

  async function validate(trigger: 'blur' | 'change' | 'submit') {
    if (!props.prop) return
    try {
      await form.validateField(props.prop, trigger)
      errorMessage.value = ''
    } catch (e: unknown) {
      // 安全地提取错误信息
      if (e instanceof Error) {
        errorMessage.value = e.message
      } else if (typeof e === 'string') {
        errorMessage.value = e
      } else {
        errorMessage.value = 'Validation failed'
      }
    }
  }

  function attachTrigger() {
    const el = formItemRef.value?.querySelector('input, textarea, select')
    if (!el) return

    if (props.validateTrigger === 'blur') {
      el.addEventListener('blur', () => validate('blur'))
    }

    if (props.validateTrigger === 'change') {
      el.addEventListener('change', () => validate('change'))
    }
  }

  onMounted(() => {
    attachTrigger()
    form.emitter.on('clear-validate', (field?: string) => {
      if (!field || field === props.prop) {
        errorMessage.value = ''
      }
    })
  })

  onBeforeUnmount(() => {
    form.emitter.off('clear-validate')
  })

  const formItemClass = computed(() =>
    ['my-form-item', errorMessage.value && 'error'].filter(Boolean).join(' ')
  )

  return {
    formItemRef,
    errorMessage,
    formItemClass
  }
}