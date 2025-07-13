<template>
    <component :is="props.tag" :class="classRow" v-bind="rowAttrs">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { layoutProps } from './layout';
import { useComputedLayout } from './computedLayout';
import '../style/row.scss'
defineOptions({
    name: 'MYRow'
})
const props = defineProps(layoutProps);
const { classRow, rowAttrs } = useComputedLayout(props)
</script>
