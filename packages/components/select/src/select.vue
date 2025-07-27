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
import { ref, provide, computed, PropType, Component, watch, nextTick } from 'vue'
import { MYScrollbar } from '../../scrollbar'
import { useStyleComputed } from '../../../hooks/useStyleComputed'

defineOptions({
    name: "MYSelect"
})

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: '请选择'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    width: {
        type: [String, Number] as PropType<string | Component>,
        default: '260px'
    },
    height: {
        type: [String, Number] as PropType<string | Component>,
        default: '40px'
    },
})

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

const emit = defineEmits(['update:modelValue'])
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
    // selectOption: (value: string | number, label: string) => {
    //     dropdownVisible.value = false;
    //     emit('update:modelValue', value)
    // }
    selectOption,
    currentValue: computed(() => props.modelValue),
    disabled: computed(() => props.disabled),
    width: computed(() => props.width),
    height: computed(() => props.height)
})
</script>

<style lang="scss" scoped>
.select-e {
    position: relative;
    width: 260px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    border: 1px solid #4C4D4F;
    border-radius: 4px;
    background: #1f1f21;
    transition: border-color 0.2s ease;
    user-select: none;
    outline: none;
    /* 移除默认的focus轮廓 */

    /* 悬停效果 */
    &:hover:not(.is-disabled) {
        border: 1px solid #303333;
    }

    /* 聚焦/点击保持效果 */
    &.is-focused,
    &:focus:not(.is-disabled) {
        border: 1px solid #409Eff;
    }

    &.is-disabled {
        opacity: 0.6;
        cursor: not-allowed;
        border: 1px solid #4C4D4F !important;
        /* 强制保持原边框 */

        /* 禁用状态下的触发器 */
        .select-trigger {
            cursor: not-allowed;

            /* 禁用悬停效果 */
            &:hover {
                border: none;
                background: inherit;
            }
        }

        /* 禁用状态下阻止所有伪类效果 */
        &:hover,
        &:active,
        &:focus {
            border: 1px solid #4C4D4F !important;
        }
    }
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px; /* 修改为上下0，保持原有高度 */
  height: 100%; /* 确保高度填充父容器 */
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .selected-value {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #E0E0E0;
    line-height: inherit; /* 继承父元素的行高 */
    height: 100%; /* 高度填充 */
    display: flex;
    align-items: center; /* 垂直居中 */

    &:empty::before {
      content: attr(placeholder);
      color: #606266;
    }
  }

  .arrow-icon {
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;

    &.is-open {
      transform: rotate(180deg);
    }

    svg {
      fill: #909399;
      transition: fill 0.2s ease;
    }
  }
}

.select-dropdown {
    position: absolute;
    width: 100%;
    margin-top: 4px;
    background: #2a2a2e;
    border: 1px solid #4C4D4F;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 7px;
}

.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>