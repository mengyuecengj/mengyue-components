import { ExtractPropTypes, PropType } from "vue";

// 边框基础属性
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

// 边框方向属性
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

// 其他样式属性
const otherStyleProps = {
    width: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
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
    colorBg: {
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

// 标签属性
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