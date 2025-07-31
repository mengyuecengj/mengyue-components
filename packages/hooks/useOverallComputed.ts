import type { ComputedRef, CSSProperties } from 'vue'
import { useClassComputed } from './useClassComputed'
import { useStyleComputed } from './useStyleComputed'
import type { ContainerProps } from '../components/container/src/container'
import { LayoutProps, ColProps } from '../components/layout/src/type';

// container components computed about
export function useContainerOverAllComputed(props: ContainerProps): {
  containerClass: ComputedRef<string[]>;
  headerClass: ComputedRef<string[]>;
  mainClass: ComputedRef<string[]>;
  asideClass: ComputedRef<string[]>;
  footerClass: ComputedRef<string[]>;
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
  })

  const headerClass = useClassComputed<ContainerProps>({
    baseClass: 'my-header',
    flagClasses: {
      fixed: props.fixed,
      scrolled: false,
    },
  })

  const mainClass = useClassComputed<ContainerProps>({
    baseClass: 'my-main',
  })

  const asideClass = useClassComputed<ContainerProps>({
    baseClass: 'my-aside',
  })

  const footerClass = useClassComputed<ContainerProps>({
    baseClass: 'my-footer',
  })

  return {
    containerClass,
    headerClass,
    mainClass,
    asideClass,
    footerClass,
  }
}

// container components computed about
export function useContainerStyle(props: ContainerProps): ComputedRef<CSSProperties> {
  return useStyleComputed<ContainerProps>(props, {
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
  })
}


// layout components computed about
interface CombinedProps extends LayoutProps, ColProps { 
    [key: string]: unknown
}
export function useLayoutOverAllComputed(props: CombinedProps): {
    classRow: ComputedRef<string[]>;
    classCol: ComputedRef<string[]>;
    styleRow: ComputedRef<CSSProperties>;
    styleCol: ComputedRef<CSSProperties>;
} {

    const classRow = useClassComputed<LayoutProps>({
        baseClass: 'my-row',
        propClasses: {
            gutter: props.gutter ? `gutter-${props.gutter}` : undefined,
            justify: props.justify ? `justify-${props.justify}` : undefined,
            direction: props.direction !== 'row' ? `direction-${props.direction}` : undefined,
        },
        flagClasses: {
            align: props.align,
            alignCenter: props.alignCenter,
        },
        classNameFormatter: (base, key) => {
            return `${base}--${key}`;
        },
    });

    const classCol = useClassComputed<ColProps>({
        baseClass: 'my-col',
        propClasses: {
            span: props.span !== 24 ? `span-${props.span}` : undefined,
            offsetLeft: props.offsetLeft ? `offsetLeft-${props.offsetLeft}` : undefined,
            offsetRight: props.offsetRight ? `offsetRight-${props.offsetRight}` : undefined,
            pull: props.pull ? `pull-${props.pull}` : undefined,
            push: props.push ? `push-${props.push}` : undefined,
        },
        classNameFormatter: (base, key) => `${base}--${key}`,
    });

    const styleRow = useStyleComputed<LayoutProps>(props, {
        cssVariables: {
            '--row-gutter': props.gutter != null
                ? typeof props.gutter === 'number'
                    ? `${props.gutter}px`
                    : props.gutter
                : '0px',
            '--row-justify': props.justify,
            '--row-direction': props.direction,
        },
    });

    const styleCol = useStyleComputed<ColProps>(props, {
        cssVariables: {
            '--col-width': props.span ? `calc(${props.span} / 24 * 100%)` : undefined,
            '--col-offset-left': props.offsetLeft ? `calc(${props.offsetLeft} / 24 * 100%)` : undefined,
            '--col-offset-right': props.offsetRight ? `calc(${props.offsetRight} / 24 * 100%)` : undefined,
            '--col-pull': props.pull ? `calc(-${props.pull} / 24 * 100%)` : undefined,
            '--col-push': props.push ? `calc(${props.push} / 24 * 100%)` : undefined,
        },
    });

    return { classRow, classCol, styleRow, styleCol };
}

