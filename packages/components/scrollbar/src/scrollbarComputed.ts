import { computed, type CSSProperties } from "vue";

interface ScrollbarProps {
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

export function useScrollbarComputed(props: ScrollbarProps) {
  const scrollbarClass = computed(() => [
    'scrollbar-container',
    ...Object.entries({
      'scrollbar-container--Maxheight': !!props.Maxheight,
      'scrollbar-container--widthX': props.widthX,
      'scrollbar-container--disabledHeight': props.disabledHeight,
      'scrollbar-container--disabledWidth': props.disabledWidth,
      'scrollbar-container--disabledScroll': props.disabledScroll,
      'scrollbar-container--thumbColor': props.thumbColor,
      'scrollbar-container--corner': props.corner
    })
    .filter(([_, shouldInclude]) => shouldInclude)
    .map(([className]) => className)
  ]);

  const scrollbarStyle = computed<CSSProperties>(() => {
    const style: Record<string, string> = {};
    
    // 颜色相关属性
    const colorProps = {
      '--scrollbar-container-thumb-color': props.thumbColor,
      '--scrollbar-container-thumb-hover-color': props.thumbHoverColor,
      '--scrollbar-container-track-color': props.trackColor
    };
    
    Object.entries(colorProps).forEach(([key, value]) => {
      if (value) style[key] = value;
    });

    // 尺寸相关属性
    if (props.ScrollWidth) {
      const scrollWidth = typeof props.ScrollWidth === 'number' 
        ? `${props.ScrollWidth}px` 
        : props.ScrollWidth;
      
      style['--scrollbar-container-scrollbar-width'] = scrollWidth;
      style['--scrollbar-container-scrollbar-height'] = scrollWidth;
    }

    // 高度处理
    if (props.Maxheight) {
      style['--max-height'] = typeof props.Maxheight === 'number'
        ? `${props.Maxheight}px`
        : props.Maxheight;
    } else if (props.height) {
      style.height = typeof props.height === 'number'
        ? `${props.height}px`
        : props.height;
    }

    return style;
  });

  return { scrollbarClass, scrollbarStyle };
}