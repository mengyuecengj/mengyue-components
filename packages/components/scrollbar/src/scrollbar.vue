<template>
    <div :is="props.tag" :class="scrollbarClass" :style="scrollbarStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { scrollbarProps } from './scrollbar';
import { useScrollbarComputed } from './scrollbarComputed'
import '../style/scrollbar.scss'
defineOptions({
    name: 'MYScrollbar'
})
const props = defineProps(scrollbarProps)
const { scrollbarClass, scrollbarStyle } = useScrollbarComputed(props)
</script>
