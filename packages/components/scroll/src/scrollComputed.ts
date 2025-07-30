import { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useScrollStyles } from '../../../hooks/useScrollCommon'
import { ScrollProps } from './type'

export function useScrollComputed(props: ScrollProps): {
  scrollClass: ComputedRef<string[]>;
  scrollStyle: ComputedRef<CSSProperties>;
} {

  const scrollClass = useClassComputed<ScrollProps>({
    baseClass: '',
    propClasses: {
      width: props.width,
      thumbColor: props.thumbColor,
      thumbHoverColor: props.thumbHoverColor,
      trackColor: props.trackColor,
    },
  });
  
  const scrollStyle = useScrollStyles(props);

  // const scrollStyle = computed(() => ({}));
  return { scrollClass, scrollStyle };
}
