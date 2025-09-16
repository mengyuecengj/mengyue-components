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
import '../style/step.scss'

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

defineExpose({
  currentStatus
})
</script>
