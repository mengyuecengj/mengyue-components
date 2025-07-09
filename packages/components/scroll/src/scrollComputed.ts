// scrollComputed.ts
import { computed } from "vue";

export function useScrollComputed(props: any) {
  const scrollClass = computed(() => ['my-scroll-container']);

  const scrollStyle = computed(() => {
    const s: Record<string, string> = {};
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
    return s;
  });

  return { scrollClass, scrollStyle };
}
