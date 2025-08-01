<template>
  <component :is="props.tag" :class="classRow" :style="styleRow">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { layoutProps } from './layout';
import { useComputedLayout } from './computedLayout';
import '../style/row.scss';

defineOptions({
  name: 'MYRow',
  inheritAttrs: false,
});

const props = defineProps(layoutProps);
const { classRow, styleRow } = useComputedLayout(props);
</script>
