<!-- MYTimelineItem.vue -->
<template>
  <div class="my-timeline-item">
    <div class="timeline-timestamp">
      <slot name="timestamp">{{ timestamp }}</slot>
    </div>
    <div class="timeline-node">
      <div class="timeline-dot" :style="{ backgroundColor: color }"></div>
      <div class="timeline-line"></div>
    </div>
    <div class="timeline-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'MYTimeline-item'
})

defineProps<{
  timestamp: string;
  color?: string;
  icon?: string;
}>();
</script>

<style scoped>
.my-timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

.timeline-timestamp {
  flex: 0 0 100px;
  text-align: right;
  padding-right: 20px;
}

.timeline-node {
  position: relative;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #409eff;
  z-index: 1;
}

.timeline-line {
  position: absolute;
  top: 12px;
  bottom: -20px;
  width: 2px;
  background-color: #e4e7ed;
}

.my-timeline-item:last-child .timeline-line {
  display: none;
}

.timeline-content {
  flex: 1;
  padding-left: 20px;
}
</style>