export interface TextProps {
  [key: string]: unknown;
  type?: '' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: string | number;
  Tecolor?: string;
  disabled?: boolean;
}
