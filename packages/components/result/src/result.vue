<template>
  <div class="result">
    <!-- 图标区域，动态组件加载图标，带特定类名 -->
    <component
      :is="currentIcon"
      class="result-icon"
    />
    <!-- 主标题 -->
    <div class="result-title">{{ title }}</div>
    <!-- 副标题 -->
    <div class="result-subtitle">
      <slot v-if="slots['sub-title']" name="sub-title"></slot>
      <span v-else>{{ subTitle }}</span>
    </div>
    <!-- 额外内容 -->
    <div class="result-extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, defineAsyncComponent, type Component } from 'vue';
import type { IconType, Props } from './type';
import '../style/result.scss';

defineOptions({
  name: 'MYResult',
});

const props = defineProps<Props>();

const iconMap: Record<IconType, Component> = {
  primary: defineAsyncComponent(() => import('./primary.vue')),
  success: defineAsyncComponent(() => import('./success.vue')),
  warning: defineAsyncComponent(() => import('./warning.vue')),
  error: defineAsyncComponent(() => import('./error.vue')),
  info: defineAsyncComponent(() => import('./info.vue')),
};

const currentIcon = iconMap[props.icon || 'info'];

const slots = useSlots();
</script>
