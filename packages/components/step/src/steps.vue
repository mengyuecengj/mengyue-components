<template>
  <div class="my-steps" :class="[
    `my-steps--${direction}`,
    `my-steps--align-${align}`,
  ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, watchEffect, ref, onMounted } from 'vue'
import '../style/steps.scss'

defineOptions({
  name: 'MYSteps'
})


const props = defineProps({
  active: { type: Number, default: 0 },
  finishStatus: { type: String, default: 'finish' },
  direction: { type: String as () => 'horizontal' | 'vertical', default: 'horizontal' },
  align: { type: String as () => 'left' | 'center' | 'right', default: 'left' },
  stepCount: Number,
})

const stepCount = ref(0)
// 计算子步骤数量
// const slots = useSlots()
// const stepCount = computed(() => {
//   const children = slots.default?.() || []
//   return children.filter((child: VNode) => {
//     if (typeof child.type === 'object' && child.type !== null) {
//       return 'name' in child.type && child.type.name === 'MYStep'
//     }
//     return false
//   }).length
// })

const stepsContext = reactive({
  active: props.active,
  finishStatus: props.finishStatus,
  direction: props.direction,
  stepCount: stepCount.value
})

watchEffect(() => {
  stepsContext.active = props.active
  stepsContext.finishStatus = props.finishStatus
  stepsContext.direction = props.direction
  stepsContext.stepCount = stepCount.value
})
onMounted(() => {
  const nodes = document.querySelectorAll('.my-step') // 依赖 class
  stepCount.value = nodes.length
})
provide('stepsContext', stepsContext)

defineExpose({
  stepCount
})
</script>
