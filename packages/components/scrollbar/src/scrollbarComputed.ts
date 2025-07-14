import { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useStyleComputed } from '../../../hooks/useStyleComputed';

interface ScrollbarProps {
  tag?: string;
  Maxheight?: string | number;
  widthX?: boolean;
  disabledHeight?: boolean;
  disabledWidth?: boolean;
  disabledScroll?: boolean;
  thumbColor?: string;
  corner?: boolean;
  thumbHoverColor?: string;
  trackColor?: string;
  ScrollWidth?: string | number;
  height?: string | number;
}

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
    cssVariables: {
      '--scrollbar-container-thumb-color': props.thumbColor,
      '--scrollbar-container-thumb-hover-color': props.thumbHoverColor,
      '--scrollbar-container-track-color': props.trackColor,
      '--scrollbar-container-scrollbar-width': props.ScrollWidth != null
        ? typeof props.ScrollWidth === 'number'
          ? `${props.ScrollWidth}px`
          : props.ScrollWidth
        : undefined,
      '--scrollbar-container-scrollbar-height': props.ScrollWidth != null
        ? typeof props.ScrollWidth === 'number'
          ? `${props.ScrollWidth}px`
          : props.ScrollWidth
        : undefined,
    },
  });

  return { scrollbarClass, scrollbarStyle };
}