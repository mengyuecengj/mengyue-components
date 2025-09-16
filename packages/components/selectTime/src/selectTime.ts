import { PropType } from "vue";
export const selectTimeProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  range: { type: Boolean, default: false },
  hourOptions: {
    type: Array as PropType<number[]>,
    default: () => Array.from({ length: 24 }, (_, i) => i),
  },
  minuteOptions: {
    type: Array as PropType<number[]>,
    default: () => Array.from({ length: 60 }, (_, i) => i),
  },
};