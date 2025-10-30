<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 1024 1024'">
        <path :fill="color" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"/>
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYExpand' })

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