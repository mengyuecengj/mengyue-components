<template>
    <component :is="props.tag" :class="classFooter">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { footerProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'
defineOptions({ name: 'MYFooter' })
const props = defineProps(footerProps)
const { footer: classFooter } = useContainerComputed(props)
</script>
