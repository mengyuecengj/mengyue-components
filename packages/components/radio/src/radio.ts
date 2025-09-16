import type { PropType } from 'vue';

export const radioProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  name: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<string>,
    default: ''
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const;

export type RadioPropTypes = typeof radioProps;
