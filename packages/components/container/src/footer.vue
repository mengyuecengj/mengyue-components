<template>
    <component :is="props.tag" :class="classFooter" :style="styleContainer">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { footerProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'
defineOptions({ name: 'MYFooter' })
const props = defineProps(footerProps)
const { footer: classFooter, styleContainer } = useContainerComputed(props)
</script>
