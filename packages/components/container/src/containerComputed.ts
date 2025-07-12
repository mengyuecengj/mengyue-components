import { computed } from 'vue';

export function useContainerComputed(props: any) {
  const styles = {
    container: computed(() => ['my-container']),
    header: computed(() => ['my-header']),
    main: computed(() => ['my-main']),
    footer: computed(() => ['my-footer']),
    aside: computed(() => ['my-aside']),
  };

  const styleContainer = computed(() => {
    const style: Record<string, string> = {};
    props.height && (style.height = props.height);
    props.width && (style.width = props.width);
    props.background && (style.background = props.background);

    return style;
  });

  return {
    ...styles,
    styleContainer,
  };
}
