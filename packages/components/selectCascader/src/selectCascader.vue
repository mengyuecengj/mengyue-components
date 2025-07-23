<template>
    <div class="select-e" :class="{ 'is-focused': isFocused, 'is-disabled': disabled }" tabindex="0"
        @focus="handleFocus" @blur="handleBlur" :style="selectStyle">
        <div class="select-trigger" @click="toggleDropdown" :class="{ 'is-disabled': disabled }">
            <span class="selected-value">{{ selectedLabel || placeholder }}</span>
            <span class="arrow-icon" :class="{ 'is-open': dropdownVisible }">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 10l5 5 5-5z" />
                </svg>
            </span>
        </div>
        <div class="dropdown-container" ref="dropdownContainer" @mouseleave="handleContainerMouseleave">
            <Transition name="slide-fade">
                <div v-show="dropdownVisible" class="select-dropdown" :style="dropdownPosition" ref="selectDropdown">
                    <MYScrollbar height="200px" thumbColor="#4C4D4F" thumbHoverColor="#2a2a2e"
                        trackColor="#2a2a2e">
                        <div class="select-option" v-for="item in options" :key="item.value"
                            @mouseenter="() => handleMouseenter(item)" :class="{ 'is-disabled': (item as any).disabled || disabled }">
                            <div class="label" @click="() => handleClick(item)">
                                {{ item.label }}
                                <span v-if="item.children" class="arrow-icon">▶</span>
                            </div>
                        </div>
                    </MYScrollbar>
                </div>
            </Transition>
            <!-- 二级菜单 -->
            <Transition name="slide-fade">
                <div v-if="activeSubMenu" class="sub-menu" :style="subMenuPosition"
                    @mouseenter="handleSubMenuMouseenter">
                    <div class="select-option" v-for="child in activeSubMenuItems" :key="child.value"
                        @click.stop="handleClick(child)" @mouseenter="() => handleSecondLevelEnter(child)" :class="{ 'is-disabled': (child as any).disabled || disabled }">
                        <div class="label">
                            {{ child.label }}
                            <span v-if="child.children" class="arrow-icon">▶</span>
                        </div>
                    </div>
                </div>
            </Transition>
            <!-- 三级菜单 -->
            <Transition name="slide-fade">
                <div v-if="activeThirdMenu" class="third-menu" :style="thirdMenuPosition">
                    <div class="select-option" v-for="third in activeThirdMenuItems" :key="third.value"
                        @click.stop="handleClick(third)" :class="{ 'is-disabled': (third as any).disabled || disabled }">
                        <div class="label">{{ third.label }}</div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch, PropType } from 'vue'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
defineOptions({
    name: 'MYSelect-cascader'
})

interface Option {
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: Option[];
}

const props = defineProps({
    modelValue: {
        type: [String, Number] as PropType<string | number>,
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
        type: [String, Number] as PropType<string | number>,
        default: '260px'
    },
    height: {
        type: [String, Number] as PropType<string | number>,
        default: '40px'
    },
    options: {  // 添加 options 属性
        type: Array as PropType<Array<{
            value: string | number
            label: string
            children?: any[]
        }>>,
        required: true
    }
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void;
}>()

const dropdownVisible = ref(false)
const activeSubMenu = ref<string>('')
const activeThirdMenu = ref<string | null>(null)
const selectedLabel = ref('')
const isFocused = ref(false)
const subMenuPosition = ref({})
const thirdMenuPosition = ref({})
const activeOption = ref<Option | null>(null)
const activeSecondLevelOption = ref<Option | null>(null)
const selectDropdown = ref<HTMLElement | null>(null)
const dropdownPosition = ref({})

const activeSubMenuItems = computed(() => {
    const activeItem = props.options.find(item => item.value.toString() === activeSubMenu.value)
    return activeItem?.children || []
})

const activeThirdMenuItems = computed(() => {
    const activeSecondItem = activeSubMenuItems.value.find(item => item.value.toString() === activeThirdMenu.value)
    return activeSecondItem?.children || []
})

// 查找选项以设置初始 selectedLabel
const findOption = (options: Option[], value: string | number): Option | undefined => {
    for (const option of options) {
        if (option.value === value) return option
        if (option.children) {
            const found = findOption(option.children, value)
            if (found) return found
        }
    }
    return undefined
}

const selectStyle = useStyleComputed(props, {
    propToStyleMap: { width: 'width', height: 'height' }
})  


// 监听 modelValue 变化，更新 selectedLabel
watch(() => props.modelValue, (newValue) => {
    if (newValue) {
        const selectedOption = findOption(props.options, newValue)
        selectedLabel.value = selectedOption?.label || ''
    } else {
        selectedLabel.value = ''
    }
}, { immediate: true })

const toggleDropdown = () => {
    if (props.disabled) return;
    dropdownVisible.value = !dropdownVisible.value
    if (!dropdownVisible.value) {
        activeSubMenu.value = ''
        activeThirdMenu.value = null
    } else {
        nextTick(() => {
            updateSubMenuPosition()
            updateThirdMenuPosition()
        })
    }
}

const handleMouseenter = (item: Option) => {
    if (props.disabled || item.disabled) return
    if (item.children) {
        activeSubMenu.value = item.value.toString()
        activeOption.value = item
        nextTick(() => updateSubMenuPosition())
    } else {
        activeSubMenu.value = ''
        activeThirdMenu.value = null
        activeOption.value = null
    }
}

const handleSubMenuMouseenter = () => {
    // 保持二级菜单显示
}

const handleSecondLevelEnter = (item: Option) => {
    if (props.disabled || item.disabled) return
    if (item.children) {
        activeThirdMenu.value = item.value.toString()
        activeSecondLevelOption.value = item
        nextTick(() => updateThirdMenuPosition())
    } else {
        activeThirdMenu.value = null
        activeSecondLevelOption.value = null
    }
}

// const handleThirdMenuMouseenter = () => {
//     // 保持三级菜单显示
// }

const handleContainerMouseleave = () => {
    activeSubMenu.value = ''
    activeThirdMenu.value = null
    activeOption.value = null
    activeSecondLevelOption.value = null
}

const handleClick = (item: Option) => {
    if (props.disabled || item.disabled) return
    selectedLabel.value = item.label
    dropdownVisible.value = false
    activeSubMenu.value = ''
    activeThirdMenu.value = null
    emit('update:modelValue', item.value)
}

const handleFocus = () => {
    isFocused.value = true
}

const handleBlur = () => {
    isFocused.value = false
    dropdownVisible.value = false
    activeSubMenu.value = ''
    activeThirdMenu.value = null
}

const updateSubMenuPosition = () => {
    if (activeOption.value && selectDropdown.value) {
        const containerRect = selectDropdown.value.parentElement?.getBoundingClientRect()
        if (containerRect) {
            subMenuPosition.value = {
                top: `45px`,
                left: '100%',
                width: '100%'
            }
        }
    }
}

const updateThirdMenuPosition = () => {
    if (activeSecondLevelOption.value && selectDropdown.value) {
        const containerRect = selectDropdown.value.parentElement?.getBoundingClientRect()
        if (containerRect) {
            thirdMenuPosition.value = {
                top: `45px`,
                left: '200%',
                width: '100%'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.select-e {
    position: relative;
    width: 260px;
    font-size: 14px;
    border: 1px solid #4c4d4f;
    border-radius: 4px;
    background-color: #1f1f21;
    color: #e0e0e0;
    outline: none;

    &.is-focused {
        border-color: #409eff;
    }

    &.is-disabled {
        border-color: transparent
    }
}

.select-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    cursor: pointer;
    user-select: none;
    height: 100%;

    &:hover {
        background-color: #2a2a2e;
    }

    .selected-value {
        color: #e0e0e0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .arrow-icon {
        transition: transform 0.2s ease;
        display: flex;
        align-items: center;

        svg {
            fill: #909399;
        }

        &.is-open {
            transform: rotate(180deg);
        }
    }

    // /* 悬停效果 */
    // &:hover:not(.is-disabled) {
    //     border: 1px solid #303333;
    // }

    // /* 聚焦/点击保持效果 */
    // &.is-focused,
    // &:focus:not(.is-disabled) {
    //     border: 1px solid #409Eff;
    // }

    &.is-disabled {
        opacity: 0.6;
        cursor: not-allowed;

        .select-trigger {
            cursor: not-allowed;
            pointer-events: none;

            /* 禁用悬停效果 */
            &:hover {
                border: 1px solid 1f1f21;
                background: inherit;

                &.is-focused,
                &:focus:not(.is-disabled) {
                    border: 1px solid 1f1f21;
                }
            }
        }
    }
}

.select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #2a2a2e;
    border: 1px solid #4c4d4f;
    border-radius: 4px;
    z-index: 10;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    overflow: auto;

    &.is-disabled {
        opacity: 0.6;
        cursor: not-allowed;

        .select-trigger {
            cursor: not-allowed;
            pointer-events: none;

            /* 禁用悬停效果 */
            &:hover {
                border: 1px solid 1f1f21;
                background: inherit;

                &.is-focused,
                &:focus:not(.is-disabled) {
                    border: 1px solid 1f1f21;
                }
            }
        }
    }
}

.select-option {
    position: relative;
    padding: 8px 16px;
    cursor: pointer;
    color: #e0e0e0;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: #409eff;
        color: #fff;

        .arrow-icon svg {
            fill: #fff;
        }
    }

    .arrow-icon {
        margin-left: 8px;
        font-size: 8px;

        svg {
            fill: #909399;
            width: 0.75em;
            height: 0.75em;
            transition: fill 0.2s ease;
        }
    }

    .label {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &.is-disabled {
        cursor: not-allowed !important; // 强制设置禁用光标
        opacity: 0.6; // 添加透明度变化增强视觉效果

        // 确保子元素也继承禁用状态
        * {
            cursor: not-allowed !important;
            pointer-events: none !important;
        }

        // 禁用状态下的悬停效果
        &:hover {
            background-color: inherit !important;
            color: inherit !important;
        }
    }
}

.sub-menu,
.third-menu {
    position: absolute;
    background-color: #2a2a2e;
    border: 1px solid #4c4d4f;
    border-radius: 4px;
    z-index: 11;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    height: 90px;

    .select-option {
        padding: 8px 16px;
        color: #e0e0e0;

        &:hover {
            background-color: #409eff;
            color: #fff;

            .arrow-icon svg {
                fill: #fff;
            }
        }
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>