import { computed, ComputedRef, CSSProperties, onUnmounted } from 'vue';

export const useScrollStyles = (props: {
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  width?: string;
}): ComputedRef<CSSProperties> => {
  const html = document.documentElement;

  const updateStyles = () => {
    const styles: CSSProperties = {};
    if (props.thumbColor) {
      html.style.setProperty('--global-scroll-thumb-color', props.thumbColor);
      styles['--global-scroll-thumb-color'] = props.thumbColor;
    }
    if (props.thumbHoverColor) {
      html.style.setProperty('--global-scroll-thumb-hover-color', props.thumbHoverColor);
      styles['--global-scroll-thumb-hover-color'] = props.thumbHoverColor;
    }
    if (props.trackColor) {
      html.style.setProperty('--global-scroll-track-color', props.trackColor);
      styles['--global-scroll-track-color'] = props.trackColor;
    }
    if (props.width) {
      html.style.setProperty('--global-scroll-width', props.width);
      styles.width = props.width;
    }
    return styles;
  };

  const styleRef = computed(() => updateStyles());

  onUnmounted(() => {
    html.style.removeProperty('--global-scroll-thumb-color');
    html.style.removeProperty('--global-scroll-thumb-hover-color');
    html.style.removeProperty('--global-scroll-track-color');
    html.style.removeProperty('--global-scroll-width');
  });

  return styleRef;
};

export const useScrollVariables = (props: {
  thumbColor?: string;
  thumbHoverColor?: string;
  trackColor?: string;
  scrollWidth?: string | number;
  scrollHeight?: string | number;
}): Record<string, string | undefined> => {
  return {
    '--scrollbar-container-thumb-color': props.thumbColor,
    '--scrollbar-container-thumb-hover-color': props.thumbHoverColor,
    '--scrollbar-container-track-color': props.trackColor,
    '--scrollbar-container-scrollbar-width': props.scrollWidth != null
      ? typeof props.scrollWidth === 'number'
        ? `${props.scrollWidth}px`
        : props.scrollWidth
      : undefined,
    '--scrollbar-container-scrollbar-height': props.scrollHeight != null
      ? typeof props.scrollHeight === 'number'
        ? `${props.scrollHeight}px`
        : props.scrollHeight
      : undefined,
  };
};