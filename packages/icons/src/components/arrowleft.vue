<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 48 48'">
        <polygon points="40,22 14.828,22 28.828,8 26,5.172 7.172,24 26,42.828 28.828,40 14.828,26 40,26" />
    </MYIconBase>
</template>
<script setup lang="ts">
import MYIconBase from './IconBase.vue'
import { Props } from '../type'
defineProps<Props>()
defineOptions({ name: 'MYArrowLeft' })
</script>
