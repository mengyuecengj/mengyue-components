<template>
  <ul class="my-dropdown-menu">
    <slot />
  </ul>
</template>

<script setup lang="ts">
defineOptions({
    name: 'MYDropdown-menu'
})
</script>

<style scoped>
.my-dropdown-menu {
  margin: 0;
  padding: 4px 0;
  list-style: none;
  min-width: 160px;
  color: #303133;
  font-size: 14px;
    max-width: 300px;
}
</style>
