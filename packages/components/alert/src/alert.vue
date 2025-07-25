<template>
  <div class="my-alert" :class="`my-alert--${type}`">
    <slot>{{ title }}</slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MYAlert'
})

defineProps<{
  title?: string
  type?: 'success' | 'info' | 'warning' | 'error'
}>()
</script>

<style scoped>
.my-alert {
  padding: 12px 16px;
  border-radius: 4px;
  margin: 8px 0;
  font-size: 14px;
  color: #fff;
}
.my-alert--success { background: #67c23a; }
.my-alert--info    { background: #909399; }
.my-alert--warning { background: #e6a23c; }
.my-alert--error   { background: #f56c6c; }
</style>
