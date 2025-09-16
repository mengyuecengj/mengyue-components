import { computed } from 'vue';
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import { BadgeProps } from './type'
export function useBadgeComputed(props: BadgeProps) {
    const displayContent = computed(() => {
        if (props.dot) return '';
        if (typeof props.content === 'number' && props.content > props.max) {
            return `${props.max}+`;
        }
        return props.content;
    });

    // 计算徽章样式
    const badgeStyle = useStyleComputed(props, {
        propToStyleMap: {
            color: 'backgroundColor',
        },
        customStyleLogic: (props, style) => {
            switch (props.position) {
                case 'top-right':
                    Object.assign(style, { top: '-5px', right: '-5px' });
                    break;
                case 'top-left':
                    Object.assign(style, { top: '-5px', left: '-5px' });
                    break;
                case 'bottom-right':
                    Object.assign(style, { bottom: '-5px', right: '-5px' });
                    break;
                case 'bottom-left':
                    Object.assign(style, { bottom: '-5px', left: '-5px' });
                    break;
            }
        },
    });

    // 容器样式
    const wrapperStyle = computed(() => ({
        position: 'relative' as const,
        display: 'inline-block'
    }));

    return {
        displayContent,
        badgeStyle,
        wrapperStyle
    }
}