export interface TableColumnProps {
  prop: string;
  label?: string;
  width?: string;
  height?: string;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  filters?: Array<{ text: string; value: string | number }>;
  scopedSlot?: string;
  children?: TableColumnProps[];
  colspan?: number;
  rowspan?: number;
}

export interface TableProps {
  data?: Record<string, unknown>[];
  modelValue?: string;
  columns?: TableColumnProps[];
  width?: string;
  height?: string;
  headerColor?: string;
  headerTextColor?: string;
  stripe?: string;
  borderColor?: string;
  bodyBackgroundColor?: string;
  bodyTextColor?: string;
  [key: string]: unknown;
}
