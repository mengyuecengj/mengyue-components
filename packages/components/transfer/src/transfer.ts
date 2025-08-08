import { PropType } from 'vue'
import { Option } from './type'
export const transferProps = {
    modelValue: {
        type: Array as PropType<number[]>,
        default: () => [],
    },
    data: {
        type: Array as PropType<Option[]>,
        default: []
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    colorText: {
        type: String,
        default: ''
    },
    hoverBackground: {
        type: String,
        default: ''
    }
}
