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
import { computed, inject, ComputedRef } from 'vue'

interface SelectContext {
    selectOption: (value: string | number, label: string) => void;
    currentValue: ComputedRef<string | number>;
    disabled: ComputedRef<boolean>;
}

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

// const optionStyle = computed(() => ({
//   width: typeof selectWidth.value === 'number' 
//     ? `${selectWidth.value}px` 
//     : selectWidth.value,
//   height: typeof selectHeight.value === 'number'
//     ? `${selectHeight.value}px`
//     : selectHeight.value,
//   lineHeight: typeof selectHeight.value === 'number'
//     ? `${selectHeight.value}px`
//     : selectHeight.value
// }))

const handleClick = () => {
    if (!props.disabled && !selectDisabled.value) {
        selectOption(props.value, props.label)
    }
}
</script>

<style lang="scss" scoped>
// .select-dropdown {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     max-height: 200px;
//     margin-top: 5px;
//     padding: 6px 0;
//     border: 1px solid #e4e7ed;
//     border-radius: 4px;
//     background-color: #fff;
//     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
//     overflow-y: auto;
//     z-index: 1000;
// }

.select-option {
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background-color: #1D1E1F;
    }

    &.is-selected {
        color: #409eff;
        background-color: #1D1E1F;
    }

    &.is-disabled {
        opacity: 0.6;
        cursor: not-allowed;
        color: #999 !important;
        background-color: inherit !important;

        /* 禁用状态下的触发器 */
        .select-trigger {
            cursor: not-allowed;

            /* 禁用悬停效果 */
            &:hover {
                border: none;
                background: inherit;
            }
        }
    }
}
</style>