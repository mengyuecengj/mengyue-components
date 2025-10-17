<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
        <path d="M9 18H15M12 13V21M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYFemale' })

import { Props } from '../type'
defineProps<Props>()
</script>
