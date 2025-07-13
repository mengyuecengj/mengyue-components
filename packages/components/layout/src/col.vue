<template>
    <component :is="props.tag" :class="classCol">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { colProps } from './layout';
import { useComputedLayout } from './computedLayout';
import '../style/col.scss'
defineOptions({
    name: 'MYCol'
})
const props = defineProps(colProps);
const { classCol } = useComputedLayout(props)
</script>
