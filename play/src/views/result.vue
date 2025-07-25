<template>
  <div style="background: #1a1a1a; padding: 20px;">
    <MYButton type="info" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>
    <MYResult icon="primary" title="Primary Tip" sub-title="Please follow the instructions">
      <template #extra>
        <MYButton type="primary">Back</MYButton>
      </template>
    </MYResult>
    <MYResult icon="success" title="Success Tip" sub-title="Please follow the instructions">
      <template #extra>
        <MYButton type="primary">Back</MYButton>
      </template>
    </MYResult>
    <MYResult icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
      <template #extra>
        <MYButton type="primary">Back</MYButton>
      </template>
    </MYResult>
    <MYResult icon="error" title="Error Tip" sub-title="Please follow the instructions">
      <template #extra>
        <MYButton type="primary">Back</MYButton>
      </template>
    </MYResult>
    <MYResult icon="info" title="Info Tip">
      <template #sub-title>
        <p>Using slot as subtitle</p>
      </template>
      <template #extra>
        <MYButton type="primary">Back</MYButton>
      </template>
    </MYResult>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
</script>