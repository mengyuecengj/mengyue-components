<template>
  <component :is="props.tag" :class="classCol" :style="styleCol">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { colProps } from './layout';
import { useComputedLayout } from './computedLayout';
import '../style/col.scss';

defineOptions({
  name: 'MYCol',
  inheritAttrs: false,
});

const props = defineProps(colProps);
const { classCol, styleCol } = useComputedLayout(props);
</script>
