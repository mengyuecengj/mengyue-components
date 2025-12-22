import type { PropType, ExtractPropTypes } from "vue";

// 合并相关属性
const appearanceProps = {
    type: {
        type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>,
        default: ''
    },
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
        type: [String, Number] as PropType<string | number>,
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
} as const;

type APropsWithDynamic = ExtractPropTypes<typeof aProps> & {
    [key: string]: string | number | boolean | undefined
}
// export type BorderProps = ExtractPropTypes<typeof borderProps>;
export type AProps = APropsWithDynamic
