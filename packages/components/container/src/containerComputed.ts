import { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from "../../../hooks/useClassComputed"
import { useStyleComputed } from "../../../hooks/useStyleComputed"
import { ContainerProps } from './container';

export function useContainerComputed(props: ContainerProps): {
  containerClass: ComputedRef<string[]>;
  headerClass: ComputedRef<string[]>;
  mainClass: ComputedRef<string[]>;
  asideClass: ComputedRef<string[]>;
  footerClass: ComputedRef<string[]>;
  styleContainer: ComputedRef<CSSProperties>;
} {

  const containerClass = useClassComputed<ContainerProps>({
    baseClass: 'my-container',
    propClasses: {
      position: props.position === 'right' ? 'position-right' : undefined,
    },
    flagClasses: {
      fixed: props.fixed,
    },
    classNameFormatter: (base, key) => `${base}--${key}`,
  });

  const headerClass = useClassComputed<ContainerProps>({
    baseClass: 'my-header',
    flagClasses: {
      fixed: props.fixed,
      scrolled: false, // 可扩展支持滚动状态
    },
  });

  const mainClass = useClassComputed<ContainerProps>({
    baseClass: 'my-main',
  });

  const asideClass = useClassComputed<ContainerProps>({
    baseClass: 'my-aside',
  });

  const footerClass = useClassComputed<ContainerProps>({
    baseClass: 'my-footer',
  });

  const styleContainer = useStyleComputed<ContainerProps>(props, {
    propToStyleMap: {
      height: 'height',
      width: 'width',
      background: 'background',
    }, 
    cssVariables: {
      '--container-height': props.height != null
        ? typeof props.height === 'number'
          ? `${props.height}px`
          : props.height
        : undefined,
      '--container-width': props.width != null
        ? typeof props.width === 'number'
          ? `${props.width}px`
          : props.width
        : undefined,
      '--container-background': props.background,
    },
  });

  return {
    containerClass,
    headerClass,
    mainClass,
    asideClass,
    footerClass,
    styleContainer,
  };
}
