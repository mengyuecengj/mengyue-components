<template>
  <div class="my-skeleton" :class="{ 'my-skeleton--animated': animated }" :style="skeletonStyles">
    <!-- 当 loading 为 true 时显示骨架屏 -->
    <div v-if="loading" class="my-skeleton__wrapper">
      <!-- 默认骨架屏结构 -->
      <slot name="template" v-if="$slots.template">
        <slot name="template"></slot>
      </slot>
      <div v-else class="my-skeleton__default">
        <!-- 默认渲染多行文本骨架 -->
        <MYSkeletonItem
          v-for="index in count"
          :key="index"
          variant="text"
          :style="{ width: randomWidth ? `${randomWidthRange[index % randomWidthRange.length]}%` : '100%' }"
        />
      </div>
    </div>
    <!-- 当 loading 为 false 时显示实际内容 -->
    <div v-else class="my-skeleton__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MYSkeletonItem from './skeletonItem.vue'

defineOptions({
    name: "MYSkeleton"
})

// 定义 props
interface Props {
  loading?: boolean // 是否显示骨架屏
  animated?: boolean // 是否启用动画
  count?: number // 默认骨架屏行数
  randomWidth?: boolean // 是否随机宽度
  throttle?: number // 节流时间（延迟加载）
  theme?: 'light' | 'dark' // 主题
}

const props = withDefaults(defineProps<Props>(), {
  loading: true,
  animated: true,
  count: 3,
  randomWidth: false,
  throttle: 0,
  theme: 'light',
})

// 随机宽度范围
const randomWidthRange = [60, 70, 80, 90, 100]

// 计算 CSS 变量样式
const skeletonStyles = computed(() => ({
  '--skeleton-bg': props.theme === 'light' ? '#f2f2f2' : '#333',
  '--skeleton-animation-bg': props.theme === 'light' ? '#e6e6e6' : '#444',
  '--skeleton-animation-speed': '1.5s',
}))
</script>

<style scoped>
.my-skeleton {
  width: 100%;
  box-sizing: border-box;
}

.my-skeleton__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.my-skeleton--animated .my-skeleton-item {
  background: var(--skeleton-bg);
  position: relative;
  overflow: hidden;
}

.my-skeleton--animated .my-skeleton-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skeleton-animation-bg),
    transparent
  );
  animation: shimmer var(--skeleton-animation-speed) infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.my-skeleton__content {
  width: 100%;
}
</style>