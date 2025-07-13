import { computed } from "vue";

export function useComputedLayout(props: any) {
    const classRow = computed(() => [
        'my-row',
        props.gutter ? `my-row--gutter-${props.gutter}` : '',
        props.between ? 'my-row--between' : '',
        props.aligns ? 'my-row--align' : '',
        props.alignCenter ? 'my-row--alignCenter' : ''
    ])

    const rowAttrs = computed(() => ({
        'data-direction': props.direction ? '' : undefined
    }));

    const classCol = computed(() => {
        return [
            'my-col',
            `my-col--span-${props.span}`,
            props.offsetLeft ? `my-col--offsetLeft-${props.offsetLeft}` : '',
            props.offsetRight ? `my-col--offsetRight-${props.offsetRight}` : '',
        ];
    })
    return { classRow, classCol, rowAttrs }
}

