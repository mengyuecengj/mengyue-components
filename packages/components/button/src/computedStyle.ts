import { ref, type ComputedRef, type CSSProperties } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useColorComputed } from '../../../hooks/useColorComputed';
import type { ButtonProps } from './type'

export function useButtonStyle(props: ButtonProps): {
  btnClass: ComputedRef<string[]>;
  customStyle: ComputedRef<CSSProperties>;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
} {
  const isHovered = ref(false);
  const isActive = ref(false);

  const onMouseOver = () => { isHovered.value = true; };
  const onMouseOut = () => { isHovered.value = false; isActive.value = false; };
  const onMouseDown = () => { isActive.value = true; };
  const onMouseUp = () => { isActive.value = false; };

  const btnClass = useClassComputed<ButtonProps>({
    baseClass: 'my-btn',
    propClasses: {
      type: props.type === '' ? 'default' : props.type ?? 'default', // 显式处理空字符串
      size: props.size ?? 'medium'
    },
    flagClasses: {
      round: props.round,
      circle: props.circle,
      disabled: props.disabled,
      plain: props.plain
    }
  })

  const customStyle = useColorComputed({
    colorBg: props.colorBg,
    colorText: props.colorText,
    colorBorder: props.colorBorder,
    plain: props.plain,
    isHovered: isHovered,
    isActive: isActive,
    disabled: props.disabled,
    type: props.type
  })
  
  return { btnClass, customStyle, onMouseOver, onMouseOut, onMouseDown, onMouseUp };
}
