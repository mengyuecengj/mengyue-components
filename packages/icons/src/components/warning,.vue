<template>
  <MYIconBase :size="size" :color="color" :viewBox="'0 0 24 24'">
    <path id="Vector" d="M12 6V14M12.0498 18V18.1L11.9502 18.1002V18H12.0498Z" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" />
  </MYIconBase>
</template>

<script setup lang="ts">
import MYIconBase from './IconBase.vue'
defineOptions({ name: 'MYWarning' })

import { Props } from '../type'
defineProps<Props>()
</script>
