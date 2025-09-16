<template>
    <div
        class="select-e"
        :class="{
            'is-disabled': disabled,
            'is-focused': isFocused
        }"
        tabindex="0"
        :style="selectStyle"
        @focus="handleFocus"
        @blur="handleBlur"
    >
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
                <MYScrollbar
                    v-if="showScrollbar"
                    height="200px"
                    thumbColor="#4C4D4F"
                    thumbHoverColor="#2a2a2e"
                    trackColor="#2a2a2e"
                >
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
const selectedLabel = ref('')
const isFocused = ref(false)

const checkScrollbarVisibility = () => {
    nextTick(() => {
        if (dropdownRef.value) {
            // 判断下拉框内部内容高度是否超过限制
            const content = dropdownRef.value.querySelector('.select-dropdown-content') || dropdownRef.value
            const contentHeight = (content as HTMLElement).scrollHeight
            showScrollbar.value = contentHeight > 200
        }
    })
}

const selectOption = (value: string | number, label: string) => {
    if (!props.disabled) {
        emit('update:modelValue', value)
        selectedLabel.value = label || String(value)
        dropdownVisible.value = false
    }
}

const handleFocus = () => {
    if (!props.disabled) {
        isFocused.value = true
    }
}

const handleBlur = () => {
    isFocused.value = false
    dropdownVisible.value = false
}

const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
    if (dropdownVisible.value) {
        checkScrollbarVisibility()
    }
}

const selectStyle = useStyleComputed(props, {
    propToStyleMap: {
        width: 'width',
        height: 'height',
        backgroundColor: 'backgroundColor',
        hoverbackgroundColor: '--hover-bg-color'
    }
})

watch(
    () => props.modelValue,
    (newVal) => {
        if (newVal == null || newVal === '') {
            selectedLabel.value = ''
        } else {
            const options = (dropdownRef.value?.querySelectorAll?.('[data-value]') || []) as NodeListOf<HTMLElement>
            const match = Array.from(options).find(opt => opt.dataset.value == String(newVal))
            selectedLabel.value = match?.dataset.label || String(newVal)
        }
    },
    { immediate: true }
)

watch(dropdownVisible, (val) => {
    if (val) {
        checkScrollbarVisibility()
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
