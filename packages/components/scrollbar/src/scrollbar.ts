import type { ExtractPropTypes } from "vue";

// Dimension-related props
export const scrollbarDimensionProps = {
    height: {
        type: String,
        default: '' as const
    },
    Maxheight: {
        type: String,
        default: '' as const
    },
    ScrollWidth: {
        type: String,
        default: ''
    },
    widthX: {
        type: Boolean,
        default: false
    }
};

// Color-related props
export const scrollbarColorProps = {
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

// Behavior-related props
export const scrollbarBehaviorProps = {
    disabledHeight: {
        type: Boolean,
        default: false
    },
    disabledWidth: {
        type: Boolean,
        default: false
    },
    disabledScroll: {
        type: Boolean,
        default: false
    }
};

// Rendering-related props
export const scrollbarRenderingProps = {
    corner: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        default: 'div'
    }
};

// Combined props with dynamic typing
export const scrollbarProps = {
    ...scrollbarDimensionProps,
    ...scrollbarColorProps,
    ...scrollbarBehaviorProps,
    ...scrollbarRenderingProps
};

type ScrollbarPropsWithDynamic = ExtractPropTypes<typeof scrollbarProps> & {
    [key: string]: string | number | boolean | undefined
};
export type ScrollbarProps = ScrollbarPropsWithDynamic;