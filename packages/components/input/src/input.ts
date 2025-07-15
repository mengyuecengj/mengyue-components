import { PropType, Component } from "vue"
export const inputProps = {
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
    tag: {
        type: [String, Object] as PropType<string | Component>,
        default: 'input'
    }
}
