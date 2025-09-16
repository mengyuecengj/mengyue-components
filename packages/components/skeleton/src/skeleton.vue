<template>
  <div class="my-skeleton" :class="{ 'my-skeleton--animated': animated }" :style="skeletonStyles">
    <!-- 当 loading 为 true 时显示骨架屏 -->
    <div v-if="loading" class="my-skeleton__wrapper">
      <!-- 默认骨架屏结构 -->
      <slot v-if="$slots.template" name="template">
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
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import MYSkeletonItem from './skeletonItem.vue'
import { skeletonProps } from './skeleton'
import '../style/skeleton.scss'

defineOptions({
    name: "MYSkeleton"
})

const props = defineProps(skeletonProps)

// 随机宽度范围
const randomWidthRange = [60, 70, 80, 90, 100]

// 计算 CSS 变量样式
const skeletonStyles = useStyleComputed(props, {
  cssVariables: {
    '--skeleton-bg': props.theme === 'light' ? '#f2f2f2' : '#333',
    '--skeleton-animation-bg': props.theme === 'light' ? '#e6e6e6' : '#444',
    '--skeleton-animation-speed': '1.5s',
  },
})
</script>
