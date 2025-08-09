<template>
  <!-- 列只是声明，实际渲染由父表格负责，列 slot 用于单元格自定义 -->
  <slot />
</template>

<script setup lang="ts">

defineOptions({ name: 'MYTableColumn' });
</script>
