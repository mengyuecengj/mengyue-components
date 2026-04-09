export type IconType = 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface Props {
  icon?: IconType;
  title?: string;
  subTitle?: string;
}
