import type { ComputedRef, CSSProperties } from 'vue';
import { useClassComputed } from '../../../hooks/useClassComputed';
import { useStyleComputed } from '../../../hooks/useStyleComputed';
import type { AProps } from './type'

export function useAComputed(props: AProps): {
    aClass: ComputedRef<string[]>;
    aStyle: ComputedRef<CSSProperties>;
} {
    const aClass = useClassComputed<AProps>({
        baseClass: 'my-a',
        propClasses: {
            type: props.type,
            size: props.size && ['large', 'medium', 'small', 'mini'].includes(String(props.size)) ? String(props.size) : undefined,
        },
        flagClasses: {
            disabled: props.disabled,
            underline: props.underline
        }
    });

    const aStyle = useStyleComputed<AProps>(props, {
        propToStyleMap: {
            color: 'color',
            size: 'fontSize',
        },
        fontSizeProp: 'size',
    })

    return {aClass, aStyle}
}
