<template>
  <component 
    :is="props.tag" 
    :class="borderClass" 
    :style="borderStyle"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { borderProps } from './border';
import '../style/border.scss';
import { useBorderComputed } from './borderComputed';

defineOptions({
  name: "MYBorder"
});

const props = defineProps(borderProps);
const { borderClass, borderStyle } = useBorderComputed(props);
</script>
