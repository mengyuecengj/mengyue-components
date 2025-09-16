export interface ScrollbarProps {
  tag?: string;
  Maxheight?: string;
  widthX?: boolean;
  disabledHeight?: boolean;
  disabledWidth?: boolean;
  disabledScroll?: boolean;
  thumbColor?: string;
  corner?: boolean;
  thumbHoverColor?: string;
  trackColor?: string;
  ScrollWidth?: string | number;
  height?: string | number;
  [Key: string]: string | number | boolean | undefined
}
