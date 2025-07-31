export interface LayoutProps {
  tag?: string;
  gutter?: number | string;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: boolean;
  alignCenter?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  [key: string]: unknown
}

export interface ColProps {
  tag?: string;
  span?: number;
  offsetLeft?: number | string;
  offsetRight?: number | string;
  pull?: number | string;
  push?: number | string;
  [key: string]: unknown
}