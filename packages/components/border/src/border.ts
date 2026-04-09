import type { ExtractPropTypes, PropType } from "vue";

const baseBorderProps = {
    borderStyle: {
        type: String as PropType<'solid' | 'dashed' | 'dotted' | 'double'>,
        default: 'solid'
    },
    borderWidth: {
        type: String,
        default: '1px'
    },
    borderColor: {
        type: String,
        default: ''
    },
} as const;

const directionBorderProps = {
    topColor: {
        type: String,
        default: ''
    },
    bottomColor: {
        type: String,
        default: ''
    },
    leftColor: {
        type: String,
        default: ''
    },
    rightColor: {
        type: String,
        default: ''
    }
} as const;

const otherStyleProps = {
    width: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    },
    rounded: {
        type: Boolean,
        default: false
    },
    circular: {
        type: Boolean,
        default: false
    },
    paddingText: {
        type: String,
        default: ''
    },
    center: {
        type: Boolean,
        default: false
    },
    colorBackground: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    boxShadow: {
        type: String,
        default: ''
    }
} as const;

const tagProps = {
    tag: {
        type: String as PropType<string>,
        default: 'div'
    }
} as const;

// 合并所有属性
export const borderProps = {
    ...baseBorderProps,
    ...directionBorderProps,
    ...otherStyleProps,
    ...tagProps
} as const;

type BorderPropsWithDynamic = ExtractPropTypes<typeof borderProps> & {
    [key: string]: string | number | boolean | undefined
}
// export type BorderProps = ExtractPropTypes<typeof borderProps>;
export type BorderProps = BorderPropsWithDynamic