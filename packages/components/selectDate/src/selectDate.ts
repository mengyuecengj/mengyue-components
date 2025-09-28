import type { PropType } from "vue";
type SelectSize = string | number;

export const selectDateProps = {
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  type: {
    type: String,
    default: 'date'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  year: {
    type: Boolean,
    default: false
  },
  month: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  time: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number] as PropType<SelectSize>,
    default: '260px'
  },
  height: {
    type: [String, Number] as PropType<SelectSize>,
    default: '20px'
  },
};
