<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </MYIconBase>
</template>
<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYCheck' })

import { Props } from '../type'
defineProps<Props>()
</script>