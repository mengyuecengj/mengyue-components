<template>
  <div class="my-badge-wrapper" :style="wrapperStyle">
    <!-- 默认插槽，用于包裹子内容 -->
    <slot />
    <!-- 徽章内容 -->
    <span v-if="(content !== null && content !== '') || dot" class="my-badge" :class="{ 'dot': dot }"
      :style="badgeStyle">
      {{ displayContent }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: "MYBadge"
})

// 定义 Props 类型
export interface Props {
  content?: string | number; // 徽章内容（数字或文本）
  dot?: boolean; // 是否显示为小红点
  color?: string; // 徽章背景颜色
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'; // 徽章位置
  max?: number; // 最大显示值，超出显示 max+
}

// 定义 Props，默认值
const props = withDefaults(defineProps<Props>(), {
  content: '',
  dot: false,
  color: '#ff4d4f', // 默认红色
  position: 'top-right',
  max: 99
});

// 计算显示内容（处理溢出）
const displayContent = computed(() => {
  if (props.dot) return '';
  if (typeof props.content === 'number' && props.content > props.max) {
    return `${props.max}+`;
  }
  return props.content;
});

// 计算徽章样式
const badgeStyle = computed(() => {
  const style: Record<string, string> = { backgroundColor: props.color };
  switch (props.position) {
    case 'top-right':
      return { ...style, top: '-5px', right: '-5px' };
    case 'top-left':
      return { ...style, top: '-5px', left: '-5px' };
    case 'bottom-right':
      return { ...style, bottom: '-5px', right: '-5px' };
    case 'bottom-left':
      return { ...style, bottom: '-5px', left: '-5px' };
    default:
      return style;
  }
});

// 容器样式
const wrapperStyle = computed(() => ({
  position: 'relative' as const,
  display: 'inline-block'
}));
</script>

<style scoped>
.my-badge-wrapper {
  position: relative;
}

.my-badge {
  position: absolute;
  min-width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  padding: 0 4px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.my-badge.dot {
  min-width: 12px;
  height: 12px;
  border-radius: 50%;
  padding: 0;
}
</style>
