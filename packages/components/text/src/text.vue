<template>
  <component 
    :is="props.tag" 
    :class="textClass"
    :style="textStyle"
  >
    <span class="my-text__content">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { textProps } from './text';
import '../style/text.scss'
import { useTextComputed } from './textComputed';
defineOptions({
  name: "MYText"
});

const props = defineProps(textProps);
const { textClass, textStyle } = useTextComputed(props);
</script>
