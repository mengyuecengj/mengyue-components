import { Component, ExtractPropTypes, PropType } from "vue";

export const borderProps = {
    Border: {
        type: String,
        default: ''
    },
    BoTop: {
        type: String,
        default: ''
    },
    BoBottom: {
        type: String,
        default: ''
    },
    BoLeft: {
        type: String,
        default: ''
    },
    BoRight: {
        type: String,
        default: ''
    },
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
    dotted: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: ''
    },
    // 只支持px单位
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
    },
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
    },
    tag: {
        type: [String, Object] as PropType<string | Component>,
        default: 'div'
    }
} as const
export type BorderProps = ExtractPropTypes<typeof borderProps>
