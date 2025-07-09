import { PropType } from "vue"
export const textProps = {
    type: {
        type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
        default: '' as const
    },
    size: {
        type: [String, Number] as PropType<'small' | 'medium' | 'large' | string | number>,
        default: '' as const
    },
    Tecolor: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: 'span'
    }
}
