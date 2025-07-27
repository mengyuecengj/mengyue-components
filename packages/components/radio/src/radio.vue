<template>
    <label :class="radioClass">
        <span class="my-radio__input">
            <!-- 只把原生属性 v-bind 到 input 上 -->
            <input v-bind="attrs" type="radio" class="my-radio__original" :value="props.value" :checked="ischecked"
                :disabled="isDisabled" @change="handleChange" />
            <span class="my-radio__inner" :style="radioStyle"></span>
        </span>
        <span class="my-radio__label" :style="radioStyle">
            <slot />
        </span>
    </label>
</template>

<script setup lang="ts">
import { ref, computed, inject, useAttrs, onMounted, onBeforeUnmount, watch, Ref } from 'vue'
import { radioProps } from './radio'
import '../style/radio.scss'

defineOptions({
    name: 'MYRadio',
})

const props = defineProps(radioProps)
const emit = defineEmits(['update:modelValue', 'change'])
const attrs = useAttrs()

// 从 radio-group 注入的上下文
const radioGroup = inject<{ name?: string; disabled?: boolean; modelValue: Ref<string | number | boolean>; change: (value: string | number | boolean) => void } | null>('radioGroup', null)
// 正确注入 MYFormItem 提供的上下文
const formItemContext = inject<{ prop?: string; clearValidate?: () => void; addField?: (field: { prop: string; resetField: () => void; validate: () => Promise<void>; clearValidate: () => void }) => void; removeField?: (prop: string) => void } | null>('myFormItemContext', null)
const initialValue = ref(props.modelValue)
const effectiveName = computed(() => props.name || radioGroup?.name)

// 计算是否禁用：优先使用自身的 disabled，如果没有则使用 group 的 disabled
const isDisabled = computed(() => {
    return props.disabled || (radioGroup?.disabled ?? false)
})

// 计算是否选中
const ischecked = computed(() => {
    if (radioGroup) {
        return String(radioGroup.modelValue.value) === String(props.value)
    }
    return String(props.modelValue) === String(props.value)
})

// 处理变更事件
const handleChange = (e: Event) => {
    if (isDisabled.value) return
    const target = e.target as HTMLInputElement

    if (radioGroup) {
        radioGroup.change(props.value as string | number | boolean)
    } else {
        emit('update:modelValue', props.value as string | number | boolean)
    }

    emit('change', target.checked)
}

// 计算 radio 的 class
const radioClass = computed(() => {
    const cls: string[] = ['my-radio']
    if (isDisabled.value) cls.push('my-radio--disabled')
    if (ischecked.value) cls.push('my-radio--checked')
    // if (props.border) cls.push('my-radio--border')
    return cls
})

// 计算 radio 的样式
const radioStyle = computed(() => {
    const style: Record<string, string> = {}
    // size
    if (props.size) {
        style.fontSize = props.size
        style.lineHeight = props.size
        style.width = props.size
        style.height = props.size
    }
    return style
})

const resetField = () => {
  if (radioGroup) {
    radioGroup.change(initialValue.value as string | number | boolean)
  } else {
    emit('update:modelValue', initialValue.value)
  }
  formItemContext?.clearValidate?.()
}
const fieldProp = (formItemContext?.prop || props.name || '') as string
onMounted(() => {
    formItemContext?.addField?.({
        prop: fieldProp, // 表单字段名，用于收集
        resetField,
        validate: () => Promise.resolve(), // 简单通过校验，可扩展为复杂校验
        clearValidate: () => formItemContext?.clearValidate?.()
    })
})

onBeforeUnmount(() => {
  const prop = (formItemContext?.prop || effectiveName.value || '') as string
  if (!prop) return
  formItemContext?.removeField?.(prop)
})

watch(() => props.modelValue, () => {
    formItemContext?.clearValidate?.()
})
</script>
