
export const props = defineProps({
    modelValue: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 5
    },
    colors: {
        type: Array,
        default: () => ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    },
    value: {
        type: String,
        default: undefined
    },
    showText: {
        type: Boolean,
        default: false
    },
    texts: {
        type: Array,
        default: () => ['极差', '失望', '一般', '满意', '惊喜']
    },
    showHalf: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})