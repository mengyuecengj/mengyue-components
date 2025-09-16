<template>
    <div class="my-checkbox-group" :class="[`is-${props.direction}`, { 'is-disabled': props.disabled }]"
        :style="groupStyle">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { provide, toRefs, computed } from 'vue';
import { checkboxGroupProps } from './checkbox-group';
import '../style/checkbox-group.scss'

defineOptions({
    name: 'MYCheckbox-group'
})
const emit = defineEmits(['update:modelValue'])
const props = defineProps(checkboxGroupProps)

const { modelValue } = toRefs(props)

const groupStyle = computed(() => ({
    '--checkbox-group-gap': props.gap
}))

provide('checkboxGroup', {
    modelValue, // 保持为 Ref 对象
    disabled: props.disabled,
    change: (value: string[]) => {
        emit('update:modelValue', value)
    }
})
</script>