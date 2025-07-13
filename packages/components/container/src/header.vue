<template>
    <component :is="props.tag" :class="[headerClass, { 'my-container--fixed': isFixed, 'is-scrolled': isScrolled }]"
        :style="styleContainer">
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

const isFixed = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
    const scrollThreshold = 100;
    if (props.fixed) {
        const currentScroll = window.scrollY;
        isFixed.value = currentScroll > scrollThreshold;
        isScrolled.value = currentScroll > 0;
    }
}
onMounted(() => {
    if (props.fixed) {
        window.addEventListener('scroll', handleScroll);
    }
})

onUnmounted(() => {
    if (props.fixed) {
        window.removeEventListener('scroll', handleScroll);
    }
})
</script>
<style scoped lang="scss">

</style>
