<!-- MYTableColumn.vue -->
<template>
  <slot />
</template>

<script lang="ts" setup>

defineOptions({
    name: 'MYTableColumn'
})

defineProps<{
  prop?: string;
  label?: string;
  width?: string;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  filters?: Array<{ text: string; value: string | number }>;
  scopedSlot?: string;
}>();
</script>