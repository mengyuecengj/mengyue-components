import type { ComputedRef, CSSProperties } from 'vue';
import type { ScrollbarProps } from './type';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useStyleComputed } from '../../../hooks/useStyleComputed';
import { useScrollVariables } from '../../../hooks/useScrollCommon';

export function useScrollbarComputed(props: ScrollbarProps): {
  scrollbarClass: ComputedRef<string[]>;
  scrollbarStyle: ComputedRef<CSSProperties>;
} {

  const scrollbarClass = useClassComputed<ScrollbarProps>({
    baseClass: 'scrollbar-container',
    flagClasses: {
      Maxheight: !!props.Maxheight,
      widthX: props.widthX,
      disabledHeight: props.disabledHeight,
      disabledWidth: props.disabledWidth,
      disabledScroll: props.disabledScroll,
      corner: props.corner,
    },
  });

  const scrollbarStyle = useStyleComputed<ScrollbarProps>(props, {
    propToStyleMap: {
      height: 'height',
      Maxheight: 'maxHeight',
      ScrollWidth: 'scrollWidth',
    },
    cssVariables: useScrollVariables({
      thumbColor: props.thumbColor,
      thumbHoverColor: props.thumbHoverColor,
      trackColor: props.trackColor,
      scrollWidth: props.ScrollWidth,
      scrollHeight: props.ScrollWidth,
    }),
  });

  return { scrollbarClass, scrollbarStyle };
}