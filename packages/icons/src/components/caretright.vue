<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path id="Vector" d="M11 9L14 12L11 15" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYCaretRight' })

import { Props } from '../type'
defineProps<Props>()
</script>
