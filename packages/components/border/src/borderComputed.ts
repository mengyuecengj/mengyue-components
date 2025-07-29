import { Component } from "vue";
import { useClassComputed } from "../../../hooks/useClassComputed"
import { useStyleComputed } from "../../../hooks/useStyleComputed"
/** 
 * propsToStyleMap 映射表：
 * key   = props 里的字段名
 * value = 最终要生成的 CSS 属性名
 */
interface BorderProps {
  Border?: string;
  BoTop?: string;
  BoRight?: string;
  BoBottom?: string;
  BoLeft?: string;
  borderStyle?: string;
  borderWidth?: string | number;
  borderColor?: string;
  width?: string | number;
  height?: string | number;
  paddingText?: string;
  colorBg?: string;
  textColor?: string;
  boxShadow?: string;
  dotted?: boolean;
  round?: boolean;
  circle?: boolean;
  center?: boolean;
  topColor?: string;
  bottomColor?: string;
  leftColor?: string;
  rightColor?: string;
  tag?: string | Component;
  [key: string]: unknown;
}

const propToStyleMap: Partial<Record<keyof BorderProps, string>> = {
    Border: 'border',
    BoTop: 'borderTop',
    BoRight: 'borderRight',
    BoBottom: 'borderBottom',
    BoLeft: 'borderLeft',
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
            dotted: props.dotted, 
            round: props.round, 
            circle: props.circle, 
            center: props.center 
        },
    });
    
    // use useStyleComputed generate style
    const borderStyle = useStyleComputed<BorderProps>(props, {
        propToStyleMap,
        customStyleLogic: (props, style) => {
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
    return { borderClass, borderStyle}
}