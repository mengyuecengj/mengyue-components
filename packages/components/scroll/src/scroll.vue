<template>
    <div :is="props.tag" :class="scrollClass" :style="scrollStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { scrollProps } from './scroll';
import '../style/scroll.scss'
import '../style/thumb.scss'
import { useScrollComputed } from './scrollComputed';
defineOptions({
    name: 'MYScroll'
})
const props = defineProps(scrollProps);
const { scrollClass, scrollStyle } = useScrollComputed(props);
</script>
