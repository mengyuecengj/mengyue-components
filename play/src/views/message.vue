<!-- 任意组件 -->
<template>
  <button @click="onClick">点我</button>
</template>

<script setup lang="ts">
import { message } from '../../../packages/components';

function onClick() {
  message?.success('test')
}
</script>
