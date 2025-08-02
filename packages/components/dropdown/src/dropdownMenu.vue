<template>
  <ul class="my-dropdown-menu">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import '../style/dropMenu.scss'
defineOptions({
    name: 'MYDropdown-menu'
})
</script>

<style scoped>
</style>
