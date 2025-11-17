<template>
    <div class="select-e" :class="{
        'is-disabled': disabled,
        'is-focused': isFocused
    }" tabindex="0" :style="selectStyle" @focus="handleFocus" @blur="handleBlur">
        <div class="select-trigger" @click="toggleDropdown">
            <span class="selected-value">{{ selectedLabel || placeholder }}</span>
            <span class="arrow-icon" :class="{ 'is-open': dropdownVisible }">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 10l5 5 5-5z" />
                </svg>
            </span>
        </div>
        <Transition name="slide-fade">
            <div v-if="dropdownVisible" ref="dropdownRef" class="select-dropdown">
                <MYScrollbar v-if="showScrollbar" height="200px" thumbColor="#4C4D4F" thumbHoverColor="#2a2a2e"
                    trackColor="#2a2a2e">
                    <slot></slot>
                </MYScrollbar>
                <div v-else class="select-dropdown-content">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, computed, watch, nextTick } from 'vue'
import { MYScrollbar } from '../../scrollbar'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import { selectProps } from './select'
import '../style/select.scss'

defineOptions({
    name: 'MYSelect'
})

const props = defineProps(selectProps)
const emit = defineEmits(['update:modelValue'])

const dropdownRef = ref<HTMLElement | null>(null)
const showScrollbar = ref(false)

const dropdownVisible = ref(false)
const isFocused = ref(false)
const selectedLabel = ref('') // 只在这里定义一次

// 检查滚动条可见性
const checkScrollbarVisibility = () => {
    nextTick(() => {
        if (!props.autoScrollbar) {
            showScrollbar.value = false
            return
        }

        if (dropdownRef.value) {
            const content = dropdownRef.value.querySelector('.select-dropdown-content') || dropdownRef.value
            const contentHeight = (content as HTMLElement).scrollHeight
            showScrollbar.value = contentHeight > 190
        }
    })
}

// 选择选项
const selectOption = (value: string | number, label: string) => {
    if (!props.disabled) {
        emit('update:modelValue', value)
        selectedLabel.value = label || String(value)
        dropdownVisible.value = false
    }
}

// 焦点处理
const handleFocus = () => {
    if (!props.disabled) {
        isFocused.value = true
    }
}

// 失去焦点处理
const handleBlur = () => {
    isFocused.value = false
    dropdownVisible.value = false
}

// 切换下拉框
const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
    if (dropdownVisible.value) {
        checkScrollbarVisibility()
        // 当下拉框打开时，重新计算选中标签
        updateSelectedLabel()
    }
}

// 样式计算
const selectStyle = useStyleComputed(props, {
    propToStyleMap: {
        width: 'width',
        height: 'height',
        backgroundColor: 'backgroundColor',
        hoverbackgroundColor: '--hover-bg-color'
    }
})

// 更新选中标签的函数
const updateSelectedLabel = () => {
    const value = props.modelValue
    if (value == null || value === '') {
        selectedLabel.value = ''  // 显示 placeholder
        return
    }
    
    // 查找匹配的选项
    if (dropdownRef.value) {
        const options = dropdownRef.value.querySelectorAll('[data-value]') as NodeListOf<HTMLElement>
        const match = Array.from(options).find(opt => opt.dataset.value === String(value))
        selectedLabel.value = match?.dataset.label || ''  // 找不到匹配项时显示 placeholder
    }
}

// 监听 modelValue 变化
watch(
    () => props.modelValue,
    (newVal) => {
        updateSelectedLabel()
    },
    { immediate: true }
)

// 监听下拉框可见性变化
watch(dropdownVisible, (val) => {
    if (val) {
        checkScrollbarVisibility()
    }
})

// 提供上下文给子组件
provide('select', {
    selectOption,
    currentValue: computed(() => props.modelValue),
    disabled: computed(() => props.disabled),
    width: computed(() => props.width),
    height: computed(() => props.height)
})
</script>
