import { radioProps } from "./radio"
export const radioGroupProps = {
    ...radioProps,
    // 当前选中的值
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 是否禁用整个组
    disabled: {
        type: Boolean,
        default: false
    },
    // 排列方向
    direction: {
        type: String as () => 'horizontal' | 'vertical',
        default: 'horizontal'
    },
    // 选项间距
    gap: {
        type: String,
        default: '12px'
    }
}
