import { PropType } from 'vue';
import { radioProps } from "./radio";

// 定义 radioGroupProps 对象，直接包含所有属性
export const radioGroupProps = {
    ...radioProps, // 继承 radioProps
    modelValue: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>,
        default: ''
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    direction: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    },
    gap: {
        type: String as PropType<string>,
        default: '12px'
    }
} as const;

// 导出类型
export type RadioGroupPropTypes = typeof radioGroupProps;