<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
            <path d="M6 12H18M12 6V18" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYPlus' })

import { Props } from '../type'
defineProps<Props>()
</script>
