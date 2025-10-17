<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 48 48'">
        <polygon points="8,26 33.172,26 19.172,40 22,42.828 40.828,24 22,5.172 19.172,8 33.172,22 8,22" />
    </MYIconBase>
</template>
<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYArrowRight' })
import { Props } from '../type'
defineProps<Props>()
</script>
