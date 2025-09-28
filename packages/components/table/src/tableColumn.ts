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
  },
  align: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  headerAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  bodyAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  type: {  // 新增：支持 type="selection"
    type: String,
    default: ''
  }
} as const;