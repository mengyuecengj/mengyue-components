// Define Props Interface
export interface Props {
  data: Array<Record<string, unknown>>;
  border?: boolean;
  stripe?: boolean;
  height?: number;
  fluidHeight?: boolean;
  selection?: 'single' | 'multiple';
  selectionFixed?: boolean;
  rowClassName?: (params: { row: Record<string, unknown>; index: number }) => string;
}

// Column Interface
export interface Column {
  prop?: string;
  label: string;
  width?: string;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  filters?: Array<{ text: string; value: string | number }>;
  scopedSlot?: string;
  children?: Column[];
  colspan?: number;
  rowspan?: number;
}
