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
import { formItemProps } from './formItem'
import { useClassComputed } from '../../../hooks/useClassComputed'
import '../style/formItem.scss'

defineOptions({ name: 'MYForm-item' })

// 注入父级表单上下文
const form = inject<any>('form')

// 定义 props
const props = defineProps(formItemProps)

// 组件引用
const formItemRef = ref<HTMLElement>()

// 错误信息
const errorMessage = ref('')

// 标签宽度继承
const labelWidth = computed(() => form.labelWidth === 'auto' ? 'auto' : `${form.labelWidth}px`)

// 校验函数
async function validateField() {
  if (!props.prop) return
  const model = form.modelValue || {}
  const value = model[props.prop]

  // 如果字段值为空，且没有必填规则，则跳过错误提示
  const rules = form.rules?.[props.prop] || []
  const hasRequiredRule = rules.some((r: any) => r.required)
  if ((value === undefined || value === null || value === '') && !hasRequiredRule) {
    errorMessage.value = ''
    return true
  }

  try {
    await form.validateField(props.prop)
    errorMessage.value = ''
  } catch (err: any) {
    errorMessage.value = err.message || 'Validation error'
  }
}

// 根据 trigger 绑定事件，比如 'blur' 或 'change' 触发校验
function attachTrigger() {
  nextTick(() => {
    const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
    if (!el) return
    el.addEventListener(props.validateTrigger, validateField)
  })
}
attachTrigger()

// 计算样式类
const formItemClass = useClassComputed({
  baseClass: 'my-form-item',
  propClasses: {
    size: props.size,
    inline: form.inline
  },
  flagClasses: {
    disabled: props.disabled,
    error: Boolean(errorMessage.value)
  }
})



// 通过 mitt 事件监听清除错误
onMounted(() => {
  form.emitter.on('clear-validate', (field: string) => {
    if (!field || field === props.prop) {
      errorMessage.value = ''
    }
  })
})

// 解绑事件监听和 mitt 事件
onBeforeUnmount(() => {
  const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
  if (el) el.removeEventListener(props.validateTrigger, validateField)
  form.emitter.off('clear-validate')
})
</script>
