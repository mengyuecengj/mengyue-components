import { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useStyleComputed } from '../../../hooks/useStyleComputed';

interface TextProps {
  [key: string]: unknown;
  type?: '' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: string | number;
  Tecolor?: string;
  disabled?: boolean;
}

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
      size: 'fontSize', // 添加 size 映射
    },
    fontSizeProp: 'size',
  });

  return { textClass, textStyle };
}
