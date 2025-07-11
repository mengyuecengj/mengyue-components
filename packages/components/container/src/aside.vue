<template>
    <component :is="props.tag" :class="classAside">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { asideProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'
defineOptions({ name: 'MYAside' })
const props = defineProps(asideProps)
const { aside: classAside } = useContainerComputed(props)
</script>
