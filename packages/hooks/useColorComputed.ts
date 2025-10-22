/**
 * @description color computed logic hooks file
 */
import { computed } from 'vue';
import type { Ref } from 'vue';
import type { CSSProperties } from 'vue';
import { useColorUtils } from './useColorUtils';

export interface ColorComputedProps {
  colorBg?: string;
  colorText?: string;
  colorBorder?: string;
  plain?: boolean;
  isHovered?: boolean | Ref<boolean>;
  isActive?: boolean | Ref<boolean>;
  disabled?: boolean;
  type?: string;
}

export function useColorComputed(props: ColorComputedProps) {
  const { toRGBA } = useColorUtils() // 只使用 SSR 安全的 toRGBA
  
  return computed<CSSProperties>(() => {
    const { colorBg, colorText, colorBorder, plain, isHovered, isActive, disabled, type } = props;
    const style: CSSProperties = {};
    const baseColor = colorBorder || colorBg || '';
    const isDefaultType = type === 'default' || !type;

    // 处理 Ref 类型
    const hovered = typeof isHovered === 'boolean' ? isHovered : isHovered?.value;
    const active = typeof isActive === 'boolean' ? isActive : isActive?.value;

    if (disabled) {
      style.background = 'transparent';
      style.color = '#fff';
      style.borderColor = '#fff';
      return style;
    }

    if (plain) {
      const defaultColor = `--btn-color-${type}`;
      const defaultColorHover = `--btn-color-${type}-hover`;
      const internal = hovered || active;

      // 默认plain模式
      if (isDefaultType) {
        style.background = 'transparent'
        style.color = internal ? `var(${defaultColorHover})` : '#fff'
        style.borderColor = internal ? `var(${defaultColorHover})` : '#4C4D4F'
      } else {
        // plain type=""
        style.background = internal ? `var(${defaultColor})` : toRGBA(`var(${defaultColor})`, 0.2);
        style.color = internal ? '#fff' : `var(${defaultColor})`;
        style.borderColor = internal ? 'none' : `var(${defaultColor})`;
      }
    }

    // 非 plain 模式
    if (colorBg) {
      style.background = colorBg;
      style.color = colorText || '#fff';
      style.borderColor = baseColor;
      return style;
    }

    if (colorText) {
      style.color = colorText;
    }

    if (baseColor) {
      style.borderColor = baseColor;
    }

    return style;
  });
}