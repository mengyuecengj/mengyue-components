<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path id="Vector" d="M13 15L10 12L13 9" stroke="#000000" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYCaretLeft' })

import { Props } from '../type'
defineProps<Props>()
</script>
