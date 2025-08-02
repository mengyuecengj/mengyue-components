import { PropType } from "vue"
export const checkboxProps = {
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<string | number | boolean | Array<string | number | boolean>>,
    default: undefined
  },
  value: {
    type: [String, Number],
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
}