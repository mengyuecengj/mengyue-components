<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 2 16 16'">
        <path
            d="M10.03 8.97C9.74 8.68 9.26 8.68 8.97 8.97C8.68 9.26 8.68 9.74 8.97 10.03L10.94 12L8.97 13.97C8.68 14.26 8.68 14.74 8.97 15.03C9.26 15.32 9.74 15.32 10.03 15.03L12 13.06L13.97 15.03C14.26 15.32 14.74 15.32 15.03 15.03C15.32 14.74 15.32 14.26 15.03 13.97L13.06 12L15.03 10.03C15.32 9.74 15.32 9.26 15.03 8.97C14.74 8.68 14.26 8.68 13.97 8.97L12 10.94L10.03 8.97Z"
            fill="currentColor" />
    </MYIconBase>
</template>
<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYClose' })

import { Props } from '../type'
defineProps<Props>()
</script>
