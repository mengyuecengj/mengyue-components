<template>
    <div
        class="select-option" 
        :class="{
            'is-selected': isSelected,
            'is-disabled': disabled
        }"
        :data-value="value"
        :data-label="label || value"
        @click="handleClick"
    >
        <slot>{{ label }}</slot>
    </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import '../style/option.scss'
import type { SelectContext } from './type'

defineOptions({
    name: "MYOption"
})

const props = defineProps({
    value: { type: [String, Number], required: true },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
})

const ctx = inject<SelectContext>('select')
if (!ctx) {
    throw new Error('MYOption must be used inside MYSelect')
}

const { selectOption, currentValue, disabled: selectDisabled } = ctx

const isSelected = computed(() => currentValue.value === props.value)

const handleClick = () => {
    if (!props.disabled && !selectDisabled.value) {
        selectOption(props.value, props.label || String(props.value))
    }
}
</script>
