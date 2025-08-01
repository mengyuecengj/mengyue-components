import { PropType } from "vue";
export const selectTimeProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  range: { type: Boolean, default: false }
};