<template>
  <div
    class="my-skeleton-item"
    :class="`my-skeleton-item--${variant}`"
    :style="itemStyles"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
    name: 'MYSkeleton-item'
})

// 定义变体类型
type Variant = 'text' | 'rect' | 'circle' | 'image'

// 定义 props
export interface Props {
  variant?: Variant // 骨架屏类型
  width?: string // 宽度
  height?: string // 高度
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
  width: '100%',
  height: 'auto',
})

// 计算样式
const itemStyles = computed(() => {
  const styles: Record<string, string> = {
    width: props.width,
    height: props.height,
  }

  if (props.variant === 'text') {
    styles.height = styles.height === 'auto' ? '1.2em' : styles.height
  } else if (props.variant === 'circle') {
    styles.borderRadius = '50%'
    styles.height = styles.width // 确保圆形
  } else if (props.variant === 'image') {
    styles.aspectRatio = '1 / 1'
  } else if (props.variant === 'rect') {
    styles.borderRadius = '4px'
  }

  return styles
})
</script>

<style scoped>
.my-skeleton-item {
  background: var(--skeleton-bg);
}

.my-skeleton-item--text {
  margin: 4px 0;
}

.my-skeleton-item--rect,
.my-skeleton-item--image {
  border-radius: 4px;
}

.my-skeleton-item--circle {
  border-radius: 50%;
}
</style>