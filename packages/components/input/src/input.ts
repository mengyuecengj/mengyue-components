import { PropType, Component } from "vue"
export const inputProps = {
    type: {
        type: String as PropType<string | Component>,
        default: 'text',
    },
    width: {
        type: [String, Number] as PropType<string | Component>,
        default: '100%'
    },
    height: {
        type: [String, Number] as PropType<string | Component>,
        default: '30px'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    minlength: {
        type: Number,
        default: undefined
    },
    maxlength: {
        type: [Number, String],
        default: undefined
    },
    wordLimit: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ''
    },
    tag: {
        type: [String, Object] as PropType<string | Component>,
        default: 'input'
    }
}
