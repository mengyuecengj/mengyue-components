<template>
  <div
    class="my-skeleton-item"
    :class="`my-skeleton-item--${variant}`"
    :style="itemStyles"
  ></div>
</template>

<script setup lang="ts">
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import { skeletonItemProps } from './skeletonItem'
import '../style/skeletonItem.scss'

defineOptions({
    name: 'MYSkeleton-item'
})

const props = defineProps(skeletonItemProps)

// 计算样式
const itemStyles = useStyleComputed(props, {
  propToStyleMap: {
    width: 'width',
    height: 'height',
  },
  customStyleLogic: (props, style) => {
    if (props.variant === 'text') {
      style.height = style.height === 'auto' ? '1.2em' : style.height
    } else if (props.variant === 'circle') {
      style.borderRadius = '50%'
      style.height = style.width // 确保圆形
    } else if (props.variant === 'image') {
      style.aspectRatio = '1 / 1'
    } else if (props.variant === 'rect') {
      style.borderRadius = '4px'
    }
  },
})
</script>
