<template>
  <div
    class="my-step"
    :class="[
      `my-step--${direction}`,
      `my-step--status-${currentStatus}`,
    ]"
  >
    <div class="my-step__icon-container">
      <div class="my-step__icon">
        <slot name="icon">
          <template v-if="currentStatus === 'finish'">✔️</template>
          <template v-else-if="currentStatus === 'error'">❌</template>
          <template v-else-if="currentStatus === 'process'">🔵</template>
          <template v-else>⚪</template>
        </slot>
      </div>
    </div>

    <div class="my-step__content-wrapper">
      <div class="my-step__content">
        <div class="my-step__title">{{ title }}</div>
        <div v-if="description" class="my-step__description">{{ description }}</div>
      </div>
    </div>
    
    <!-- 连线放在这里，使用相对位置 -->
    <div
      v-if="!isLast"
      class="my-step__line"
      :class="`my-step__line--${direction}`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

defineOptions({
  name: 'MYStep'
})

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  status: { type: String as () => 'wait' | 'process' | 'finish' | 'error' | '', default: '' },
  index: { type: Number, required: true },
})

const stepsContext = inject<{
  active: number
  finishStatus: string
  direction: 'horizontal' | 'vertical'
  stepCount: number
}>('stepsContext')

const active = computed(() => stepsContext?.active ?? 0)
const finishStatus = computed(() => stepsContext?.finishStatus ?? 'finish')
const direction = computed(() => stepsContext?.direction ?? 'horizontal')
const stepCount = computed(() => stepsContext?.stepCount ?? 0)

const currentStatus = computed(() => {
  if (props.status) return props.status
  if (props.index < active.value) return finishStatus.value
  if (props.index === active.value) return 'process'
  return 'wait'
})

const isLast = computed(() => {
  return props.index === stepCount.value - 1
})
</script>

<style scoped>
.my-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 0;
  padding-bottom: 20px; /* 为垂直布局留空间 */
}

.my-step--horizontal {
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 0;
}

/* 图标容器 */
.my-step__icon-container {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2; /* 确保在连线上方 */
}

/* 圆圈样式 */
.my-step__icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #c0c4cc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  color: white; /* 确保图标文字可见 */
}

.my-step--status-wait .my-step__icon {
  background-color: #c0c4cc;
}
.my-step--status-process .my-step__icon {
  background-color: #409eff;
}
.my-step--status-finish .my-step__icon {
  background-color: #67c23a;
}
.my-step--status-error .my-step__icon {
  background-color: #f56c6c;
}

/* 连线样式 - 关键修复 */
.my-step__line {
  position: absolute;
  background-color: #eaeef2;
  z-index: 1;
}

/* 水平连线 */
.my-step__line--horizontal {
  top: 12px; /* 图标高度的一半 */
  left: calc(50% + 12px); /* 从图标右侧开始 */
  width: calc(50% - 12px); /* 只延伸到下一个图标的左侧 */
  height: 2px;
}

/* 文字内容 */
.my-step__content-wrapper {
  position: relative;
  z-index: 2;
  margin-top: 8px;
  text-align: center;
  color: #eaeaea; /* 浅色主题文字颜色 */
  transform: translateY(-8px); /* 关键修复：上移文本 */
}

.my-step--horizontal .my-step__content-wrapper {
  margin-top: 0;
  margin-left: 12px;
  text-align: left;
  flex: 1;
  transform: translateY(0); /* 水平布局不需要上移 */
}

.my-step__content {
  display: flex;
  flex-direction: column;
  min-width: 80px;
}

.my-step__title {
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 14px;
}

.my-step__description {
  font-size: 12px;
  color: #a0a0a0; /* 浅色主题次级文字颜色 */
}
</style>