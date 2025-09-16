import { PropType, ExtractPropTypes } from 'vue';
import { Option } from './type'

export const selectCascaderProps = {
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
        type: Array as PropType<Option[]> | undefined,
        required: true
    }
};

export type SelectCascaderProps = ExtractPropTypes<typeof selectCascaderProps>