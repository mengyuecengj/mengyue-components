<template>
    <component :is="props.tag" :class="classHeader" :style="styleContainer">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { headerProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'
defineOptions({ name: 'MYHeader' })
const props = defineProps(headerProps)
const { header: classHeader, styleContainer } = useContainerComputed(props)

</script>
