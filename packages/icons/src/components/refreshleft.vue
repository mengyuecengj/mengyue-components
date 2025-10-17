<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path
            d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYRefreshLeft' })

import { Props } from '../type'
defineProps<Props>()
</script>
