<template>
    <div class="select-option" 
        :class="{
            'is-selected': isSelected,
            'is-disabled': disabled
        }" 
        @click="handleClick"
    >
        <slot>{{ label }}</slot>
    </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import '../style/option.scss'
import { SelectContext } from './type'

defineOptions({
    name: "MYOption"
})

const props = defineProps({
    value: { type: [String, Number], required: true },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
})

const { 
    selectOption, 
    currentValue, 
    disabled: selectDisabled, 
} = inject<SelectContext>('select')!;


const isSelected = computed(() => currentValue.value === props.value);

const handleClick = () => {
    if (!props.disabled && !selectDisabled.value) {
        selectOption(props.value, props.label)
    }
}
</script>
