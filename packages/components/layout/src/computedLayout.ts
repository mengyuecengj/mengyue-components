import { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from "../../../hooks/useClassComputed"
import { useStyleComputed } from "../../../hooks/useStyleComputed"
import { LayoutProps, ColProps } from './layout';

interface CombinedProps extends LayoutProps, ColProps { }

export function useComputedLayout(props: CombinedProps): {
    classRow: ComputedRef<string[]>;
    classCol: ComputedRef<string[]>;
    styleRow: ComputedRef<CSSProperties>;
    styleCol: ComputedRef<CSSProperties>;
} {
    console.log('useComputedLayout props:', JSON.stringify(props, null, 2));

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
            console.log('classRow formatter:', { base, key, value: props[key as keyof LayoutProps] });
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
