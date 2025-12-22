<template>
  <div class="my-progress">
    <div class="my-progress__bar">
      <div class="my-progress__bar-inner" :style="{ width: `${normalizedPercentage}%` }" :class="statusClass"></div>
    </div>
    <div class="my-progress__text">
      {{ displayText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { progressProps } from './progress'
import '../style/progress.scss'

defineOptions({
  name: "MYProgress"
})

const props = defineProps(progressProps)

// 验证 percentage 在 0-100 之间
const normalizedPercentage = computed(() =>
  Math.min(100, Math.max(0, Number(props.percentage)))
)

// 根据 status 动态设置类名
const statusClass = computed(() => ({
  'my-progress__bar-inner--success': props.status === 'success',
  'my-progress__bar-inner--warning': props.status === 'warning',
  'my-progress__bar-inner--exception': props.status === 'exception',
}))

// 动态文本
const displayText = computed(() =>
  typeof props.format === 'function'
    ? props.format(normalizedPercentage.value)
    : `${normalizedPercentage.value}%`
)
</script>
