import { computed } from "vue"
export function useAComputed(props: any) {
    const aClass = computed(() => {
        const cls = [
            'my-a',
            `my-a--${props.type}`,
            `my-a--${props.size}`,
        ]
        if(props.disabled) cls.push(`my-a--disabled`)
        if(props.underline) cls.push(`my-a--underline`)
        return cls
    })
    const aStyle = computed(() => {
        const s: Record<string, string> = {}

        if (props.color) {
            s.color = props.color
            s.textDecorationColor = props.color
        }

        if (props.size && !['large', 'medium', 'small', 'mini'].includes(props.size)) {
            s.fontSize = typeof props.size === 'number'
                ? `${props.size}px`
                : props.size
        }
        return s
    })
    return { aClass, aStyle }
}
