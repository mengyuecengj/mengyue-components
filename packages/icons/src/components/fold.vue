<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 1024 1024'">
        <path :fill="color"
            d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYFold' })

import { Props } from '../type'

interface ExtendedProps extends Props {
  size?: string | number; // 图标大小，默认值为 24
  color?: string; // 图标颜色，默认值为黑色
}

withDefaults(defineProps<ExtendedProps>(), {
  size: 24,
  color: '#fff',
});
</script>