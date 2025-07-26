<!-- MYResult.vue -->
<template>
  <div class="result">
    <!-- 图标区域，使用动态组件加载图标 -->
    <component :is="currentIcon" class="result-icon" />
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
import { useSlots, defineAsyncComponent } from 'vue';

defineOptions({
  name: "MYResult"
})

// 定义图标类型枚举
type IconType = 'primary' | 'success' | 'warning' | 'error' | 'info';

// 定义 Props 接口
export interface Props {
  icon?: IconType; // 图标类型，可选
  title?: string; // 主标题，可选
  subTitle?: string; // 副标题，可选
}

// // 直接定义 Props，默认值
// defineProps<Props>({
//   icon: 'info',
//   title: '',
//   subTitle: '',
// });

// 图标映射表，使用 defineAsyncComponent 按需加载
const iconMap: Record<IconType, any> = {
  primary: defineAsyncComponent(() => import('./primary.vue')),
  success: defineAsyncComponent(() => import('./success.vue')),
  warning: defineAsyncComponent(() => import('./warning.vue')),
  error: defineAsyncComponent(() => import('./error.vue')),
  info: defineAsyncComponent(() => import('./info.vue')),
};

// 获取当前图标组件
const props = defineProps<Props>();
const currentIcon = iconMap[props.icon || 'info'];

// 获取插槽信息
const slots = useSlots();
</script>

<style scoped>
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.result-icon {
  width: 40px;
  height: 40px;
}
.result-title {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: #E5EAF3;
}
.result-subtitle {
  font-size: 16px;
  color: #E5EAF3;
}
.result-extra {
  margin-top: 20px;
}
</style>