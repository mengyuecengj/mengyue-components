<template>
    <MYIconBase :size="size" :color="color" :viewBox="'0 0 1024 1024'">
        <path :fill="color"
            d="M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z" />
    </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYHouse' })

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