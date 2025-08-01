import { PropType } from "vue";

type SelectValue = string | number;
type SelectSize = string | number;

export const selectProps = {
    modelValue: {
        type: [String, Number] as PropType<SelectValue>,
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
        type: [String, Number] as PropType<SelectSize>,
        default: '260px'
    },
    height: {
        type: [String, Number] as PropType<SelectSize>,
        default: '40px'
    },
};
