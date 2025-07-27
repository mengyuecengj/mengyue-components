<template>
    <div class="color-picker">
        <input type="color" :value="hexValue" class="color-input" :style="inputStyle" :class="{ 'no-border': noBorder, 'circle': circle }"
            @input="handleColorChange">
    </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { pickColorProps } from './pickColor'

defineOptions({
    name: 'MYSelect-color'
})

const props = defineProps(pickColorProps)
const emit = defineEmits(['update:modelValue'])

const { modelValue, size, rgba, noBorder, circle } = toRefs(props)

// 转换 modelValue 为 hex
const hexValue = computed(() => {
    if (modelValue.value.startsWith('rgba')) {
        return rgbaToHex(modelValue.value)
    }
    return modelValue.value
})

// 计算 input 的样式，包括大小和透明度
const inputStyle = computed(() => {
    const sizeMatch = size.value.match(/^(\d+)([a-zA-Z]*)$/)
    const sizeValue = sizeMatch ? sizeMatch[1] : '50'
    const unit = sizeMatch ? sizeMatch[2] || 'px' : 'px'
    const opacityValue = Math.min(Math.max(parseFloat(rgba.value.toString()) || 1, 0), 1)
    return {
        width: `${sizeValue}${unit}`,
        height: `${sizeValue}${unit}`,
        opacity: opacityValue
    }
})

const handleColorChange = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}

// rgba 转 hex
function rgbaToHex(rgba: string): string {
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
    if (!match) return '#000000'

    const r = parseInt(match[1]).toString(16).padStart(2, '0')
    const g = parseInt(match[2]).toString(16).padStart(2, '0')
    const b = parseInt(match[3]).toString(16).padStart(2, '0')

    return `#${r}${g}${b}`
}
</script>

<style scoped>
.color-picker {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
}

.color-input {
    cursor: pointer;
}

.color-input.no-border {
    border: none !important;
    background: transparent !important;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
        border: none;
    }

    &::-webkit-color-swatch {
        border: none;
    }

    &::-moz-color-swatch {
        border: none;
    }
}

.color-input.circle {
    border-radius: 50%;
}
</style>