<template>
    <component :is="props.tag" :class="classMain" :style="styleContainer">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { mainProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'
defineOptions({ name: 'MYMain' })
const props = defineProps(mainProps)
const { main: classMain, styleContainer } = useContainerComputed(props)
</script>
