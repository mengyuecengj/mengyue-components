<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYPositionBoonon' })

import { Props } from '../type'

interface ExtendedProps extends Props {
  size?: string | number // 图标大小，默认值为 24
  color?: string // 图标颜色，默认值为黑色
}

withDefaults(defineProps<ExtendedProps>(), {
  size: 24,
  color: '#fff',
})

// 提取并优化 path 的 d 属性
const iconPath = `
M256 0c-111 0-201 90-201 201 0 68 35 128 87 165 47 34 58 42 74 73 13 25 35 69 35 69 1 2 3 3 5 3 2 0 4-1 5-3 0 0 21-44 35-69 17-32 27-40 74-73 52-37 87-97 87-165C457 90 367 0 256 0zm0 335c-74 0-135-60-135-135 0-74 60-135 135-135 74 0 135 60 135 135 0 74-60 135-135 135z
`
</script>

<template>
    <MYIconBase :size="size" :color="color" viewBox="0 0 512 512">
        <path :fill="color" :d="iconPath" />
    </MYIconBase>
</template>