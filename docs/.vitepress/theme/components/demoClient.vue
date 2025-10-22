<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="demo-container">
    <div class="demo-title" v-if="title">{{ title }}</div>
    <div class="demo-content">
      <!-- 这里的 slot 会渲染出 <MYButton> 等组件 -->
      <slot />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
  padding: 16px;
}
.demo-title {
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}
</style>
