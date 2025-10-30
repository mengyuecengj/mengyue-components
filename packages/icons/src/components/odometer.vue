<template>
    <MYIconBase :size="size" :color="color" viewBox="0 0 1024 1024">
        <path :fill="color"
            d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z" />
        <path :fill="color" d="M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z" />
        <path :fill="color"
            d="M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYOdometer' })

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