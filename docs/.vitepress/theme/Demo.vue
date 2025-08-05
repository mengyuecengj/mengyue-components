<template>
  <div class="demo-container">
    <div class="demo-source">
      <slot name="source"></slot>
    </div>
    <div class="demo-description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<style scoped>

</style>