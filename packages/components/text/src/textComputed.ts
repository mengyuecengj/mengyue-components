import type { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useStyleComputed } from '../../../hooks/useStyleComputed';
import type { TextProps } from './type';

export function useTextComputed(props: TextProps): {
  textClass: ComputedRef<string[]>;
  textStyle: ComputedRef<CSSProperties>;
} {
  const textClass = useClassComputed<TextProps>({
    baseClass: 'my-text',
    propClasses: {
      type: props.type && props.type ? props.type : undefined,
      size: props.size && ['small', 'medium', 'large'].includes(String(props.size)) ? String(props.size) : undefined,
    },
    flagClasses: {
      disabled: props.disabled,
    },
  });

  const textStyle = useStyleComputed<TextProps>(props, {
    propToStyleMap: {
      Tecolor: 'color',
      size: 'fontSize',
    },
    fontSizeProp: 'size',
  });

  return { textClass, textStyle };
}
