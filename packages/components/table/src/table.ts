import type { PropType } from 'vue';
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
    type: [Array, String] as PropType<string[] | number[] | string>, // 使用 PropType 明确指定类型
    default: () => []
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
  hoverBackgroundColor: {
    type: String,
    default: ''
  },
  bodyTextColor: {
    type: String,
    default: ''
  },
  rowKey: {
    type: String,
    default: 'id'
  },
  treeProps: {
    type: Object as () => {
      children?: string;
      hasChildren?: string;
    },
    default: () => ({
      children: 'children',
      hasChildren: 'hasChildren'
    })
  },
  indent: {
    type: Number,
    default: 16
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  },
  headerAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: ''
  },
  bodyAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: ''
  }
} as const;
