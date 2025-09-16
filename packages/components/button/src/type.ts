import type { Ref } from 'vue'
export interface ButtonProps {
  type?: string;
  size?: string;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  plain?: boolean;
  colorBg?: string;
  colorText?: string;
  colorBorder?: string;
  nativeType?: 'button' | 'submit' | 'reset';
  isHovered?: boolean | Ref<boolean>;
  isActive?: boolean | Ref<boolean>;
  [key: string]: unknown;
}
