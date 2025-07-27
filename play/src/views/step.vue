<!-- ParentComponent.vue -->
<template>
  <div style="max-width: 600px; margin: 20px auto;">
    <MYSteps
      :active="active"
      finish-status="success"
      direction="horizontal"
      align="center"
      :simple="false"
    >
      <MYStep
        v-for="(step, index) in steps"
        :key="index"
        :title="step.title"
        :description="step.description"
        :index="index"
        :status="step.status"
      >
        <!-- 自定义图标插槽 -->
        <template #icon>
          <span v-if="index === active" style="color: #409eff;">🔵</span>
          <span v-else-if="step.status === 'finish' || index < active" style="color: #67c23a;">✔️</span>
          <span v-else-if="step.status === 'error'" style="color: #f56c6c;">❌</span>
          <span v-else>⚪</span>
        </template>
      </MYStep>
    </MYSteps>

    <div style="margin-top: 20px; text-align: center;">
      <MYButton style="margin-right: 12px;" @click="prev">Previous Step</MYButton>
      <MYButton @click="next">Next Step</MYButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 当前激活步骤
const active = ref(0)

// 预定义步骤列表
const steps = ref([
  { title: '步骤 1', description: '描述信息 1', status: '' },
  { title: '步骤 2', description: '描述信息 2', status: '' },
  { title: '步骤 3', description: '描述信息 3', status: 'error' }, // 你也可以显式指定状态
  { title: '步骤 4', description: '描述信息 4', status: '' },
])

// 下一步
const next = () => {
  active.value = active.value < steps.value.length - 1 ? active.value + 1 : 0
}

// 上一步
const prev = () => {
  active.value = active.value > 0 ? active.value - 1 : steps.value.length - 1
}
</script>
<style scoped>
* {
  background-color: #141414
}
</style>