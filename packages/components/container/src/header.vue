<template>
    <component :is="props.tag" :class="[headerClass, { 'my-container--fixed': isFixed }]" :style="styleContainer">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import { headerProps } from './container';
import { useContainerComputed } from './containerComputed';
import '../style/container.scss';

defineOptions({ name: 'MYHeader' });
const props = defineProps(headerProps);
const { header: headerClass, styleContainer } = useContainerComputed(props);

const isFixed = ref(props.fixed);
const handerScroll = () => {
    const scrollTreadshould = 100;
    isFixed.value = window.scrollY > scrollTreadshould;
}

onMounted(() => {
    if (props.fixed) {
        window.addEventListener('scroll', handerScroll);
    }
})

onUnmounted(() => {
    if (props.fixed) {
        window.removeEventListener('scroll', handerScroll);
    }
})
</script>
<style scoped lang="scss">
.my-container--fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
</style>
