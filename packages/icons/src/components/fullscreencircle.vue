<template>
    <MYIconBase size="24px" :viewBox="'0 0 24 24'">
        <path
            d="M21 9V8C21 5.79086 18.9853 4 16.5 4H15.25M21 15V16C21 18.2091 18.9853 20 16.5 20H15.25M3 15V16C3 18.2091 5.01472 20 7.5 20H8.75M3 9V8C3 5.79086 5.01472 4 7.5 4H8.75"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYFullScreenCircle' })
</script>
