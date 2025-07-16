import {  PropType } from "vue";

export const aProps = {
    type: {
        type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>,
        default: '' as const
    },
    size: {
        type: [String, Number],
        default: undefined
    },
    color: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    underline: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        default: 'a'
    }
}
