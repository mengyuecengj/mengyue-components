export interface TableColumnProps {
  className: string;
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
  type?: string;  // 新增：支持 type="selection"
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';
  bodyAlign?: 'left' | 'center' | 'right';
}

export interface TableProps {
  data?: Record<string, unknown>[];
  modelValue?: string[] | number[] | string;
  columns?: TableColumnProps[];
  width?: string;
  height?: string;
  headerColor?: string;
  headerTextColor?: string;
  stripe?: string;
  borderColor?: string;
  bodyBackgroundColor?: string;
  hoverBackgroundColor?: string;
  bodyTextColor?: string;
  [key: string]: unknown;
}