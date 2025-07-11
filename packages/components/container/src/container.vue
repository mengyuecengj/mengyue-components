<template>
    <component :is="props.tag" :class="classContainer">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { containerProps } from './container'
import { useContainerComputed } from './containerComputed'
import '../style/container.scss'
defineOptions({
  name: "MYContainer"
});
const props = defineProps(containerProps)
const { classContainer } = useContainerComputed(props)
</script>
