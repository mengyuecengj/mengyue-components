<template>
    <div 
        class="my-checkbox-group"
        :class="[`is-${direction}`, { 'is-disabled': disabled}]"
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

const modelValue = toRefs(props).modelValue

const groupStyle = computed(() => ({
    '--checkbox-group-gap': props.gap
}))

provide('checkboxGroup', {
    modelValue,
    disabled: props.disabled,
    change: (value: any) => {
        emit('update:modelValue', value)
    }
})
</script>
