export const pickColorProps = {
    modelValue: {
        type: String,
        default: '#000000'
    },
    size: {
        type: String,
        default: '50px'
    },
    rgba: {
        type: [String, Number],
        default: 1,
        validator: (value: string | number) => {
            const num = typeof value === 'string' ? parseFloat(value) : value
            return !isNaN(num) && num >= 0 && num <= 1
        }
    },
    noBorder: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    }
}