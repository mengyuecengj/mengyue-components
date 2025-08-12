<!-- 
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
</style> -->

<template>
  <div class="m-dropdown__menu" :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'MYDropdown-menu'
})
const props = defineProps<{ style?: Record<string, string | number> }>();
const style = props.style ?? {};
</script>
