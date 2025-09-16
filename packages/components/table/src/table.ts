import type { TableColumnProps } from './type';

export const tableProps = {
  data: {
    type: Array as () => Record<string, unknown>[],
    default: () => []
  },
  columns: {
    type: Array as () => TableColumnProps[],
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  headerBackgroundColor: {
    type: String,
    default: ''
  },
  headerTextColor: {
    type: String,
    default: ''
  },
  stripe: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  bodyBackgroundColor: {
    type: String,
    default: ''
  },
  bodyTextColor: {
    type: String,
    default: ''
  }
} as const;
