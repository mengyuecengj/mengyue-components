<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path d="M6 9l6 6 6-6" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYArrowDown' })

import { Props } from '../type'
defineProps<Props>()
</script>