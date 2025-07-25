<template>
  <div class="backtop-demo">
      <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

    <h2>Backtop 返回顶部测试</h2>
    <p v-for="i in 100" :key="i">第 {{ i }} 行内容 - 滚动测试内容</p>

    <!-- 基础用法 -->
    <MYBacktop :right="50" :bottom="80" />

    <!-- 自定义插槽用法 -->
    <MYBacktop :bottom="140" :right="110">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
          font-weight: bold;
        "
      >
        UP
      </div>
    </MYBacktop>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
    router.push(path)
}
</script>

<style scoped>
.backtop-demo {
  padding: 20px;
  height: 2000px; /* 保证足够滚动 */
  background: linear-gradient(#f5f5f5, #e0e0e0);
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
