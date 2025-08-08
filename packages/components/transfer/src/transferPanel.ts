import { PropType } from "vue";
import { Option } from './type'
import { transferProps } from './transfer'

export const transferPanelProps = {
    ...transferProps,
    title: {
        type: String,
        default: '',
    },
    data: {
        type: Array as PropType<Option[]>,
        default: []
    },
    selected: {
        type: Array as PropType<number[]>,
        default: []
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
