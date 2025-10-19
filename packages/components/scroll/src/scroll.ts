import type { ExtractPropTypes } from "vue";

// 滚动条颜色配置
const scrollColorProps = {
    thumbColor: {
        type: String,
        default: ''
    },
    thumbHoverColor: {
        type: String,
        default: ''
    },
    trackColor: {
        type: String,
        default: ''
    }
};

// 滚动条尺寸配置
const scrollSizeProps = {
    width: {
        type: String,
        default: ''
    }
};

// 容器标签配置
const scrollTagProps = {
    tag: {
        type: String,
        default: 'div'
    }
};

export const scrollProps = {
    ...scrollColorProps,
    ...scrollSizeProps,
    ...scrollTagProps,
} as const;

// 动态属性类型，用于支持额外的自定义属性
type ScrollPropsWithDynamic = ExtractPropTypes<typeof scrollProps> & {
    [key: string]: string | number | boolean | undefined
};

export type ScrollProps = ScrollPropsWithDynamic;
