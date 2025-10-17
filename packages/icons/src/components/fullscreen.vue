<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path d="M9.00002 3.99998H4.00004L4 9M20 8.99999V4L15 3.99997M15 20H20L20 15M4 15L4 20L9.00002 20"
            stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYFullScreen' })

import { Props } from '../type'
defineProps<Props>()
</script>
