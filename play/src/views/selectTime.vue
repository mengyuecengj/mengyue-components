<template>
  <MYButton type="info" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>
  <div>
    <h3>时间区间选择：</h3>
    <MYSelect-time v-model="timeRange" range />
    <p>已选区间：{{ timeRange }}</p>

    <h3>单点时间选择：</h3>
    <MYSelect-time v-model="timePoint" />
    <p>已选时间：{{ timePoint }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
const timeRange = ref<string[]>([]);
const timePoint = ref<string>('');
</script>
