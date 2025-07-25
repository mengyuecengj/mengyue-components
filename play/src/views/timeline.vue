<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
  <MYTimeline style="max-width: 600px">
    <MYTimeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
      :color="activity.color"
    >
      {{ activity.content }}
    </MYTimeline-item>
  </MYTimeline>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: any) => {
    router.push(path)
}
const activities = [
  { content: 'Event start', timestamp: '2018-04-15', color: '#f56c6c' },
  { content: 'Approved', timestamp: '2018-04-13', color: '#67c23a' },
  { content: 'Success', timestamp: '2018-04-11', color: '#409eff' },
];
</script>