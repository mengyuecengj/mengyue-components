<template>
    <div class="my-radio-group" :class="[`is-${direction}`, { 'is-disabled': disabled }]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide, toRefs } from 'vue'
import { radioGroupProps } from './radio-group'
import '../style/radio-group.scss'

defineOptions({
    name: 'MYRadio-group'
})
const emit = defineEmits(['update:modelValue'])
const props = defineProps(radioGroupProps)

// 确保使用 toRef 保持响应式
const modelValue = toRefs(props).modelValue

provide('radioGroup', {
    modelValue,  // 直接传递 ref
    disabled: props.disabled,
    change: (value: any) => {
        emit('update:modelValue', value)
    }
})
</script>
