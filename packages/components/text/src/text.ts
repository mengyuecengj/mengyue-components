import type { ExtractPropTypes, PropType } from 'vue'
export const textProps = {
    type: {
        type: String as PropType<'' | 'primary' | 'success' | 'warning' | 'danger' | 'info'>,
        default: '',
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

type TextPropsWithDynamic = ExtractPropTypes<typeof textProps> & {
    [key: string]: string | number | boolean | undefined
}
export type TextProps = TextPropsWithDynamic