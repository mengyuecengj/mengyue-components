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
import { badgeProps } from './badge';
import { useBadgeComputed } from './badgeComputed';
defineOptions({
  name: "MYBadge"
})

const props = defineProps(badgeProps)

const {
  displayContent,
  badgeStyle,
  wrapperStyle
} = useBadgeComputed(props)
</script>
