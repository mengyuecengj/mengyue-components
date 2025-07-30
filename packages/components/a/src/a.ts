import { PropType, ExtractPropTypes } from "vue";

// 合并相关属性
const appearanceProps = {
    type: <PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>>String,
    default: '',
    color: {
        type: String,
        default: ''
    }
};

const behaviorProps = {
    disabled: {
        type: Boolean,
        default: false
    },
    underline: {
        type: Boolean,
        default: false
    }
};

const layoutProps = {
    size: {
        type: [String, Number],
        default: undefined
    },
    tag: {
        type: String,
        default: 'a'
    }
};

// 组合功能
export const aProps = {
    ...appearanceProps,
    ...behaviorProps,
    ...layoutProps
};

type aPropWithDynamic = ExtractPropTypes<typeof aProps> & {
    [key: string]: string | number | boolean | undefined
}

export type aProps = aPropWithDynamic