<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path id="Vector" d="M16 10L12 14L8 10" :fill="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYCaretDown' })

import { Props } from '../type'
defineProps<Props>()
</script>
