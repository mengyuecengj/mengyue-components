import { checkboxProps } from "./checkbox";

export const checkboxGroupProps = {
    ...checkboxProps,
    value: { // 覆盖 checkboxProps 中的 value
        type: [String, Number],
        required: false // 设为非必需
    },
    modelValue: {
        type: Array,
        default: () => []
    },
    disabled: {
        type: Boolean,
        default: false
    },
    direction: {
        type: String as () => 'horizontal' | 'vertical',
        default: 'horizontal'
    },
    gap: {
        type: String,
        default: '12px'
    }
}
