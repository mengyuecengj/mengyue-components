export type Placement = 'bottom' | 'bottom-start' | 'bottom-end' | 'top' | 'top-start' | 'top-end' | 'left' | 'right';

export interface UseDropdownOptions {
  trigger?: 'hover' | 'click' | 'contextmenu';
  showTimeout?: number;
  hideTimeout?: number;
  placement?: Placement;
  maxHeight?: string | number | null;
  disabled?: boolean;
  teleported?: boolean;
  persistent?: boolean;
  triggerKeys?: string[]; // keyboard keys to open
  hideOnClick?: boolean;
  popperOptions?: Record<string, any>;
  backGroundColor?: string;
}