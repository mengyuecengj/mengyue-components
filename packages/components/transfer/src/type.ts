export interface Option {
  key: number
  label: string
  disabled: boolean
}

export interface transferProps {
  modelValue: number[];
  data: Option[];
  backgroundColor: string;
  colorText: string;
  hoverBackground: string;
  [key: string]: unknown;
}
