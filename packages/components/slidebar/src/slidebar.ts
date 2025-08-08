import { ExtractPropTypes } from "vue"

export const silderbarProps = {
    size: {
        type: String,
    },
    thumbColor: {
        type: String,
    },
    trackColor: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    noNum: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
}

export type SlidebarProps = ExtractPropTypes<typeof silderbarProps>