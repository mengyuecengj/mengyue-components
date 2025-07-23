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
import { inject, ref, watch, computed, onBeforeUnmount, nextTick } from 'vue'
import type { PropType } from 'vue'
import { formItemProps } from './formItem'
import { useClassComputed } from '../../../hooks/useClassComputed'
import '../style/formItem.scss'

defineOptions({ name: 'MYForm-item' })

// 注入父级表单上下文
const form = inject<any>('form')!

// 定义 props
// const props = defineProps({
//   label: String,
//   prop: String,
//   validateTrigger: { type: String as PropType<'blur' | 'change'>, default: 'blur' },
//   disabled: Boolean,
//   size: { type: String as PropType<'large' | 'medium' | 'small' | 'mini'>, default: form.size }
// })
const props = defineProps(formItemProps)
// 本组件引用
const formItemRef = ref<HTMLElement>()

// 错误消息状态
const errorMessage = ref('')

// 标签宽度继承
const labelWidth = computed(() => form.labelWidth === 'auto' ? 'auto' : `${form.labelWidth}px`)

// 校验函数
async function validateField() {
  if (!props.prop) return
  try {
    await form.validateField(props.prop)
    errorMessage.value = ''
  } catch (err: any) {
    errorMessage.value = err.message || 'Validation error'
  }
}

// 监听字段变化，清除旧错误
watch(() => form.modelValue?.[props.prop!], () => {
  if (errorMessage.value) errorMessage.value = ''
})

// 根据 trigger 绑定事件
function attachTrigger() {
  nextTick(() => {
    const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
    if (!el) return
    el.addEventListener(props.validateTrigger, validateField)
  })
}
attachTrigger()

// 清理监听
onBeforeUnmount(() => {
  const el = formItemRef.value?.querySelector('input, select, textarea, .my-input')
  if (el) el.removeEventListener(props.validateTrigger, validateField)
})

// 计算组件样式
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
</script>
