export interface ScrollbarProps {
  tag?: string;
  maxHeight?: string;
  widthX?: boolean;
  disabledHeight?: boolean;
  disabledWidth?: boolean;
  disabledScroll?: boolean;
  thumbColor?: string;
  corner?: boolean;
  thumbHoverColor?: string;
  trackColor?: string;
  scrollWidth?: string | number;
  height?: string | number;
  [Key: string]: string | number | boolean | undefined
}
