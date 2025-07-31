import { PropType } from 'vue';
// 定义 radioProps 对象，直接包含所有属性
export const radioProps = {
    modelValue: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: ''
    },
    value: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: undefined
    },
    name: {
        type: String as PropType<string>,
        default: undefined
    },
    size: {
        type: String as PropType<string>,
        default: undefined
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
} as const;

// 导出类型以便其他地方使用
export type RadioPropTypes = typeof radioProps;