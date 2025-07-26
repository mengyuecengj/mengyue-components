<template>
  <div
    class="my-steps"
    :class="[
      `my-steps--${direction}`,
      `my-steps--align-${align}`,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed, useSlots, VNode } from 'vue'

defineOptions({
  name: 'MYSteps'
})

const props = defineProps({
  active: { type: Number, default: 0 },
  finishStatus: { type: String, default: 'finish' },
  direction: { type: String as () => 'horizontal' | 'vertical', default: 'horizontal' },
  align: { type: String as () => 'left' | 'center' | 'right', default: 'left' },
})

// 计算子步骤数量
const slots = useSlots()
const stepCount = computed(() => {
  const children = slots.default?.({}) || []
  return children.filter((child: VNode) => {
    if (typeof child.type === 'object' && child.type !== null) {
      return 'name' in child.type && child.type.name === 'MYStep'
    }
    return false
  }).length
})  

provide('stepsContext', {
  active: props.active,
  finishStatus: props.finishStatus,
  direction: props.direction,
  stepCount: stepCount.value
})
</script>

<style scoped>
.my-steps {
  display: flex;
  align-items: flex-start;
  width: 100%;
  position: relative;
  justify-content: space-between; /* 确保步骤均匀分布 */
}

.my-steps--horizontal {
  flex-direction: row;
}

.my-steps--align-left {
  justify-content: flex-start;
}
.my-steps--align-center {
  justify-content: center;
}
.my-steps--align-right {
  justify-content: flex-end;
}

/* 确保步骤之间的间距 */
.my-steps > :deep(.my-step) {
  flex: 1;
  position: relative;
}
</style>