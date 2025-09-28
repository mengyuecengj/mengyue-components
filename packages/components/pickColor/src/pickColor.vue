<template>
    <div class="color-picker">
        <input type="color" :value="hexValue" class="color-input" :style="inputStyle" :class="{ 'no-border': noBorder, 'circle': circle }"
            @input="handleColorChange">
    </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { pickColorProps } from './pickColor'
import { useColorUtils } from '../../../hooks/useColorUtils'
import { useInputStyle } from './pickColorComputed'

defineOptions({
    name: 'MYSelect-color'
})

const props = defineProps(pickColorProps)
const emit = defineEmits(['update:modelValue'])

const { modelValue, size, rgba, noBorder, circle } = toRefs(props)
const { parseHexOrRgb } = useColorUtils()

// 转换 modelValue 为 hex（忽略 alpha，用于 input 显示）
const hexValue = computed(() => {
    if (modelValue.value.startsWith('rgba')) {
        const rgb = parseHexOrRgb(modelValue.value)
        if (rgb) {
            const [r, g, b] = rgb
            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
        }
    }
    return modelValue.value
})

// 计算 input 的样式，包括大小和透明度
const inputStyle = useInputStyle(size.value, String(rgba.value))

const handleColorChange = (e: Event) => {
    const hexValue = (e.target as HTMLInputElement).value // 如 #ff0000
    const rgb = parseHexOrRgb(hexValue) // 假设返回 [r, g, b]
    if (rgb) {
        const [r, g, b] = rgb
        const alpha = typeof rgba.value === 'string' ? parseFloat(rgba.value) : rgba.value // 获取当前 alpha (0-1)
        const newRgbaValue = `rgba(${r}, ${g}, ${b}, ${alpha})`
        emit('update:modelValue', newRgbaValue)
    } else {
        // fallback，如果解析失败，直接 emit hex
        emit('update:modelValue', hexValue)
    }
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