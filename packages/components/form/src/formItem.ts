import { PropType } from "vue"
import { formProps } from "./form"
export const formItemProps = {
    ...formProps,
    label: {
        type: String,
        default: ""
    },
    prop: {
        type: String,
        default: ""
    },
    validateTrigger: { type: String as PropType<'blur' | 'change'>, default: 'blur' }
}