<template>
  <MYButton type="info" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>

  <div class="rate-test">
    <h2>Rate 组件测试</h2>

    <!-- 基础用法 -->
    <div>
      <h3>基础评分</h3>
      <MYRate v-model="value1" />
      <p>当前值: {{ value1 }}</p>
    </div>

    <!-- 禁用状态 -->
    <div>
      <h3>禁用状态</h3>
      <MYRate v-model="value2" disabled />
      <p>当前值: {{ value2 }} (禁用)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
const value1 = ref(3)
const value2 = ref(2)
</script>

<style scoped>
.rate-test {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 15px 0 10px;
}

div {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #eee;
}
</style>
