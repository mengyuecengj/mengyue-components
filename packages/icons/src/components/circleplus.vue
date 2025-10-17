<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 22 22'">
        <path d="M8 12H16M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </MYIconBase>
</template>
<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYCirclePlus' })

import { Props } from '../type'
defineProps<Props>()
</script>
