import { computed, ComputedRef, CSSProperties, onUnmounted } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';

interface ScrollProps {
  tag?: string;
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  width?: string;
}

export function useScrollComputed(props: ScrollProps): {
  scrollClass: ComputedRef<string[]>;
  scrollStyle: ComputedRef<CSSProperties>;
} {

  const scrollClass = useClassComputed<ScrollProps>({
    baseClass: 'my-scroll-container',
    flagClasses: {}, // 可扩展支持 disabled 等
  });

  // 设置全局 CSS 变量
  const html = document.documentElement;
  if (props.thumbColor) {
    html.style.setProperty('--global-scroll-thumb-color', props.thumbColor);
  }
  if (props.thumbHoverColor) {
    html.style.setProperty('--global-scroll-thumb-hover-color', props.thumbHoverColor);
  }
  if (props.trackColor) {
    html.style.setProperty('--global-scroll-track-color', props.trackColor);
  }
  if (props.width) {
    html.style.setProperty('--global-scroll-width', props.width);
  }

  // 清理全局变量
  onUnmounted(() => {
    html.style.removeProperty('--global-scroll-thumb-color');
    html.style.removeProperty('--global-scroll-thumb-hover-color');
    html.style.removeProperty('--global-scroll-track-color');
    html.style.removeProperty('--global-scroll-width');
  });

  const scrollStyle = computed(() => ({}));
  return { scrollClass, scrollStyle };
}