import type { PropType } from 'vue';

export const tableColumnProps = {
  prop: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: undefined
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  fixed: {
    type: String as PropType<'left' | 'right'>,
    default: undefined
  },
  sortable: {
    type: Boolean,
    default: false
  },
  filterable: {
    type: Boolean,
    default: false
  },
  filters: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  scopedSlot: {
    type: String,
    default: ''
  }
} as const;
