import { computed } from 'vue';
import type { CSSProperties } from 'vue';


export interface ColorComputedProps {
  colorBg?: string;
  colorText?: string;
  colorBorder?: string;
  plain?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
}

export function useColorComputed(props: ColorComputedProps) {
  return computed<CSSProperties>(() => {
    const style: Record<string, string> = {};
    const baseColor = props.colorBorder ?? props.colorBg;

    // 背景色和文字颜色计算
    if (props.colorBg) {
      if (props.plain) {
        const active = props.isHovered || props.isActive;
        style.background = active ? props.colorBg : toRGBA(props.colorBg, 0.2);
        style.color = active ? '#fff' : (props.colorText ?? props.colorBg);
      } else {
        style.background = props.colorBg;
        style.color = props.colorText ?? '#fff';
      }
      if (baseColor) style.borderColor = baseColor;
    } else {
      if (props.colorText) style.color = props.colorText;
      if (baseColor) style.borderColor = baseColor;
    }

    return style;
  });
}
