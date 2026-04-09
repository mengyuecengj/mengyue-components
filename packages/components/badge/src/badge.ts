import type { PropType } from "vue";
import type { BadgeProps } from './type'

export const badgeProps = {
    content: {
        type: [String, Number] as PropType<string | number>,
        default: ''
    },
    dot: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: '#ff4d4f'
    },
    position: {
        type: String as PropType<BadgeProps['position']>,
        default: 'top-right',
        validator: (value: string) => {
            return ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value);
        }
    },
    max: {
        type: Number,
        default: 99,
        validator: (value: number) => {
            return value >= 0;
        }
    }
};