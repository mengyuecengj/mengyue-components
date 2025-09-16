<template>
    <MYIconBase size="24px" :viewBox="'0 0 1024 1024'">
        <path fill="#000000"
            d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYFold' })
</script>