<template>
  <div class="my-alert" :class="`my-alert--${type}`">
    <slot>{{ title }}</slot>
  </div>
</template>

<script setup lang="ts">
import '../style/alert.scss'
defineOptions({
  name: 'MYAlert'
})

defineProps<{
  title?: string
  type?: 'success' | 'info' | 'warning' | 'error'
}>()
</script>

<style scoped>

</style>
