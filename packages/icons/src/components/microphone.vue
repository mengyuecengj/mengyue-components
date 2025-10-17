<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path
            d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYMicrophone' })

import { Props } from '../type'
defineProps<Props>()
</script>
