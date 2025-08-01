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
            <div v-show="dropdownVisible" ref="dropdownRef" class="select-dropdown">
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
    name: "MYSelect"
})

const props = defineProps(selectProps)
const emit = defineEmits(['update:modelValue'])

const dropdownRef = ref<HTMLElement | null>(null)
const showScrollbar = ref(false)

// 检查是否需要显示滚动条
const checkScrollbarVisibility = () => {
    nextTick(() => {
        if (dropdownRef.value) {
            const contentHeight = dropdownRef.value.scrollHeight
            showScrollbar.value = contentHeight > 120
        }
    })
}

const dropdownVisible = ref(false)

const selectedLabel = ref('')
const isFocused = ref(false)
const selectOption = (value: string | number, label: string) => {
    if (!props.disabled) {
        emit('update:modelValue', value)
        selectedLabel.value = label || String(value)
        dropdownVisible.value = false
    }
}

const handleFocus = () => {
    isFocused.value = true
}

const handleBlur = () => {
    isFocused.value = false
    dropdownVisible.value = false
}

const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
}

const selectStyle = useStyleComputed(props, {
    propToStyleMap: { width: 'width', height: 'height' }
})  

watch(() => props.modelValue, (newVal) => {
    if (!newVal) {
        selectedLabel.value = ''
    }
}, { immediate: true })

watch(dropdownVisible, (val) => {
    if (val) {
        checkScrollbarVisibility();
    }
})
provide('select', {
    selectOption,
    currentValue: computed(() => props.modelValue),
    disabled: computed(() => props.disabled),
    width: computed(() => props.width),
    height: computed(() => props.height)
})
</script>
