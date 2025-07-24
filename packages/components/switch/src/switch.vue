<template>
    <label class="my-switch" :class="classSwitch" :style="styleSwitch">
        <input type="checkbox" hidden :checked="ischecked" @input="handleChange" :disabled="isDisabled">
        <span class="slider">
            <span v-if="props.text" class="slider-text">{{ props.text }}</span>
        </span>
        <span class="text">
            <slot />
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed, inject, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { switchProps } from './switch';
import '../style/switch.scss'

defineOptions({
    name: 'MYSwitch'
})

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue'])
// 正确注入 MYFormItem 提供的上下文
const formItemContext = inject<any>('myFormItemContext', null)
const initialValue = ref(props.modelValue)

const ischecked = computed(() => Boolean(props.modelValue))
const isDisabled = computed(() => Boolean(props.disabled))
const handleChange = () => {
    if (isDisabled.value) return
    const newValue = !ischecked.value
    emit('update:modelValue', newValue)
}
const classSwitch = computed(() => {
    const cls = ['my-switch']
    if (props.size) {
        cls.push(`my-switch--${props.size}`)
    }
    if (props.disabled) {
        cls.push(`my-switch--disabled`)
    }
    return cls
})

const styleSwitch = computed(() => {
    if (props.text) {
        return {
            '--my-switch-text': props.text
        }
    }
})

const resetField = () => {
    emit('update:modelValue', initialValue.value)
    formItemContext?.clearValidate?.()
}
const fieldProp = formItemContext?.prop
onMounted(() => {
    formItemContext?.addField?.({
        prop: fieldProp, // 表单字段名，用于收集
        resetField,
        validate: () => Promise.resolve(), // 简单通过校验，可扩展为复杂校验
        clearValidate: () => formItemContext?.clearValidate?.()
    })
})

onBeforeUnmount(() => {
    const prop = formItemContext?.prop
    if (!prop) return
    formItemContext?.removeField?.(prop)
})

watch(() => props.modelValue, () => {
    formItemContext?.clearValidate?.()
})
</script>
