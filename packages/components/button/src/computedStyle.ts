import { computed, ref, type ComputedRef, type CSSProperties } from 'vue';
import { useColorUtils } from '../../../hooks/useColorUtils';

interface ButtonProps {
  type?: string;
  size?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  plain?: boolean;
  colorBg?: string;
  colorText?: string;
  colorBorder?: string;
}

export function useButtonStyle(props: ButtonProps): {
  btnClass: ComputedRef<string[]>;
  customStyle: ComputedRef<CSSProperties>;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
} {
  const { toRGBA } = useColorUtils();
  const isHovered = ref(false);
  const isActive = ref(false);

  const onMouseOver = () => { isHovered.value = true; };
  const onMouseOut = () => { isHovered.value = false; isActive.value = false; };
  const onMouseDown = () => { isActive.value = true; };
  const onMouseUp = () => { isActive.value = false; };

  const btnClass = computed(() => {
    const cls = [
      'my-btn',
      `my-btn--${props.type ?? 'default'}`,
      `my-btn--${props.size ?? 'medium'}`,
    ];
    if (props.round) cls.push('my-btn--round');
    if (props.circle) cls.push('my-btn--circle');
    if (props.disabled) cls.push('my-btn--disabled');
    if (props.plain) cls.push('my-btn--plain');
    return cls;
  });

  const customStyle = computed<CSSProperties>(() => {
    /**
     * A record object mapping string keys to string values for storing style properties.
     */
    const s: Record<string, string> = {};
    const baseColor = props.colorBorder ?? props.colorBg;

    if (props.colorBg) {
      if (props.plain) {
        const active = isHovered.value || isActive.value;
        s.background = active ? props.colorBg! : toRGBA(props.colorBg, 0.2);
        s.color = active ? '#fff' : (props.colorText ?? props.colorBg);
      } else {
        s.background = props.colorBg;
        s.color = props.colorText ?? '#fff';
      }
      if (baseColor) s.borderColor = baseColor;
    } else {
      if (props.colorText) s.color = props.colorText;
      if (baseColor) s.borderColor = baseColor;
    }

    return s;
  });

  return { btnClass, customStyle, onMouseOver, onMouseOut, onMouseDown, onMouseUp };
}
