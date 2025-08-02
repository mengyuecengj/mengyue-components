// 定义图标类型枚举
export type IconType = 'primary' | 'success' | 'warning' | 'error' | 'info';

// 定义 Props 接口
export interface Props {
  icon?: IconType; // 图标类型，可选
  title?: string; // 主标题，可选
  subTitle?: string; // 副标题，可选
}
