// 定义 Props 类型
export interface BadgeProps {
  content?: string | number; // 徽章内容（数字或文本）
  dot?: boolean; // 是否显示为小红点
  color?: string; // 徽章背景颜色
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'; // 徽章位置
  max: number; // 最大显示值，超出显示 max+
  [key: string]: unknown;
}
