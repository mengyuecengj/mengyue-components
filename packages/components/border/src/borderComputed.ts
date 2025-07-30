import { useClassComputed } from "../../../hooks/useClassComputed"
import { useStyleComputed } from "../../../hooks/useStyleComputed"
import { BorderProps } from "./border";

const propToStyleMap: Partial<Record<keyof BorderProps, string>> = {
    borderStyle: 'borderStyle',
    borderWidth: 'borderWidth',
    borderColor: 'borderColor',
    width: 'width',
    height: 'height',
    paddingText: 'padding',
    colorBg: 'background',
    textColor: 'color',
    boxShadow: 'boxShadow',
}

export function useBorderComputed(props: BorderProps) {
    // use useClassComputed generate className
    const borderClass = useClassComputed<BorderProps>({
        baseClass: 'my-border',
        flagClasses: {
            round: props.round,
            circle: props.circle,
            center: props.center,
        },
    });

    // use useStyleComputed generate style
    const borderStyle = useStyleComputed<BorderProps>(props, {
        propToStyleMap,
        customStyleLogic: (props, style) => {

            // Set default borderColor if not provided
            if (!props.borderColor && !props.topColor && !props.bottomColor && !props.leftColor && !props.rightColor) {
                Object.assign(style, {
                    borderColor: '#000', // Default border color
                });
            }
            // 单侧颜色特殊逻辑
            if (props.topColor) {
                Object.assign(style, {
                    borderTopColor: props.topColor,
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px'
                });
            }
            if (props.bottomColor) {
                Object.assign(style, {
                    borderBottomColor: props.bottomColor,
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px'
                });
            }
            if (props.leftColor) {
                Object.assign(style, {
                    borderLeftColor: props.leftColor,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1px'
                });
            }
            if (props.rightColor) {
                Object.assign(style, {
                    borderRightColor: props.rightColor,
                    borderRightStyle: 'solid',
                    borderRightWidth: '1px'
                });
            }
        }
    })
    return { borderClass, borderStyle }
}