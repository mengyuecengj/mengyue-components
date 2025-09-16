<template>
    <component :is="props.tag" :class="aClass" :style="aStyle">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { aProps } from './a';
import '../style/a.scss'
import { useAComputed } from './computedA';
defineOptions({
    name: 'MYa'
})
const props = defineProps(aProps);
const { aClass, aStyle } = useAComputed(props);
</script>
