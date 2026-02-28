import type { Ref } from 'vue'
export interface ButtonProps {
  type?: string;
  size?: string;
  rounded?: boolean;
  circular?: boolean;
  disabled?: boolean;
  plain?: boolean;
  colorBackground?: string;
  colorText?: string;
  colorBorder?: string;
  nativeType?: 'button' | 'submit' | 'reset';
  isHovered?: boolean | Ref<boolean>;
  isActive?: boolean | Ref<boolean>;
  iconOnly: boolean;
  [key: string]: unknown;
}
