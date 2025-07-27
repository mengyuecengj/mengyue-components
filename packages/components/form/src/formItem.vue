<template>
  <div ref="formItemRef" :class="formItemClass">
    <label
      v-if="props.label"
      :for="props.prop"
      class="my-form-item__label"
      :style="{ width: labelWidth }"
    >
      {{ props.label }}
    </label>
    <div class="my-form-item__control">
      <slot />
      <div v-if="errorMessage" class="my-form-item__error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { FormRule } from './form'
import { useClassComputed } from '../../../hooks/useClassComputed'
import '../style/formItem.scss'
import type { ComputedRef } from 'vue'

defineOptions({ name: 'MYForm-item' })

interface FormContext {
  modelValue: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  labelWidth: string | number
  validateField?: (prop: string) => Promise<void>
  inline?: boolean
  emitter?: {
    on: (event: string, handler: (field: string) => void) => void
    off: (event: string) => void
  }
}

const form = inject<FormContext>('form', {
  modelValue: {},
  labelWidth: 'auto',
  emitter: {
    on: () => {},
    off: () => {}
  }
})

if (!form) {
  throw new Error('FormItem must be used inside Form component')
}

const props = defineProps<{
  label: string
  prop: string
  validateTrigger?: 'blur' | 'change'
  modelValue?: Record<string, unknown>
  rules?: Record<string, FormRule[]>
  labelWidth?: string | number
  size?: 'large' | 'medium' | 'small' | 'mini'
  inline?: boolean
  disabled?: boolean
}>()

const formItemRef = ref<HTMLElement>()
const errorMessage = ref('')

const labelWidth = computed(() => form?.labelWidth === 'auto' ? 'auto' : `${form?.labelWidth}px`)

async function validateField() {
  if (!props.prop) return
  const model = form.modelValue || {}
  const value = model[props.prop]
  const rules = form.rules?.[props.prop] || []
  const hasRequiredRule = rules.some((r: FormRule) => r.required)
  if ((value === undefined || value === null || value === '') && !hasRequiredRule) {
    errorMessage.value = ''
    return true
  }

  try {
    await form?.validateField?.(props.prop)
    errorMessage.value = ''
  } catch (err: unknown) {
    if (err instanceof Error) {
      errorMessage.value = err.message || 'Validation error'
    }
  }
}

function attachTrigger() {
  nextTick(() => {
    const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
    if (!el) return
    const eventType = props.validateTrigger === 'blur' ? 'blur' : 'change'
    el.addEventListener(eventType, validateField)
  })
}
attachTrigger()

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
</script>

<style scoped>
.my-form-item__label {
  display: inline-block;
  margin-right: 10px;
}
.my-form-item__control {
  display: inline-block;
}
.my-form-item__error {
  color: red;
  font-size: 12px;
}
</style>
