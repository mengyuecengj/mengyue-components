<template>
  <div class="my-progress">
    <div class="my-progress__bar">
      <div
        class="my-progress__bar-inner"
        :style="{ width: `${normalizedPercentage}%` }"
        :class="statusClass"
      ></div>
    </div>
    <div class="my-progress__text">
      {{ displayText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: "MYProgress"
})

const props = defineProps<{
  percentage: number
  status?: 'success' | 'warning' | 'exception'
  format?: (percentage: number) => string
}>()

// 验证 percentage 在 0-100 之间
const normalizedPercentage = computed(() =>
  Math.min(100, Math.max(0, props.percentage))
)

// 根据 status 动态设置类名
const statusClass = computed(() => ({
  'my-progress__bar-inner--success': props.status === 'success',
  'my-progress__bar-inner--warning': props.status === 'warning',
  'my-progress__bar-inner--exception': props.status === 'exception',
}))

// 动态文本
const displayText = computed(() =>
  props.format
    ? props.format(normalizedPercentage.value)
    : `${normalizedPercentage.value}%`
)
</script>

<style scoped>
.my-progress {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin-bottom: 15px;
}

.my-progress__bar {
  flex: 1;
  height: 10px;
  background-color: #e5e5e5;
  border-radius: 5px;
  overflow: hidden;
}

.my-progress__bar-inner {
  height: 100%;
  background-color: #409eff; /* 默认颜色 */
  transition: width 0.3s ease;
}

.my-progress__bar-inner--success {
  background-color: #67c23a;
}

.my-progress__bar-inner--warning {
  background-color: #e6a23c;
}

.my-progress__bar-inner--exception {
  background-color: #f56c6c;
}

.my-progress__text {
  margin-left: 10px;
  font-size: 14px;
  color: #606266;
}
</style>