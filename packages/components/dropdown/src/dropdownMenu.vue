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
