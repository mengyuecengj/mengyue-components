<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path d="M3 3h6V1H1v8h2V3zm18 0h-6V1h8v8h-2V3zm0 18h-6v2h8v-8h-2v6zm-18 0h6v2H1v-8h2v6z" fill="#000"/>
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYFullScreenA' })

import { Props } from '../type'
defineProps<Props>()
</script>