import { Component } from 'vue';
/** 
 * propsToStyleMap 映射表：
 * key   = props 里的字段名
 * value = 最终要生成的 CSS 属性名
 */
export interface BorderProps {
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