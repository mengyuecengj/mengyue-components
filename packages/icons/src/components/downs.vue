<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path d="M11.9297 2V22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19 16L14 21.1599C13.7437 21.4336 13.434 21.6519 13.0899 21.801C12.7459 21.9502 12.375 22.0271 12 22.0271C11.625 22.0271 11.2541 21.9502 10.9101 21.801C10.566 21.6519 10.2563 21.4336 10 21.1599L5 16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYDowns' })

import { Props } from '../type'
defineProps<Props>()
</script>
