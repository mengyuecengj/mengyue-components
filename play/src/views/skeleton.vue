<template>
  <MYButton type="info" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>

  <div>
    <!-- 基础用法：默认多行文本骨架屏 -->
    <MYSkeleton />

    <!-- 自定义圆形骨架屏 -->
    <MYSkeleton style="--el-skeleton-circle-size: 100px">
      <template #template>
        <MYSkeleton-item variant="circle"
          style="width: var(--el-skeleton-circle-size); height: var(--el-skeleton-circle-size)" />
      </template>
    </MYSkeleton>

    <!-- 动态加载 -->
    <MYSkeleton :loading="isLoading">
      <template #default>
        <div>实际内容</div>
      </template>
    </MYSkeleton>

    <!-- 复杂布局 -->
    <MYSkeleton :loading="isLoading" :count="1">
      <template #template>
        <div style="display: flex; gap: 16px;">
          <MYSkeleton-item variant="image" style="width: 100px; height: 100px" />
          <div style="flex: 1;">
            <MYSkeleton-item variant="text" style="width: 80%" />
            <MYSkeleton-item variant="text" style="width: 60%" />
            <MYSkeleton-item variant="rect" style="width: 100%; height: 50px" />
          </div>
        </div>
      </template>
      <template #default>
        <div style="display: flex; gap: 16px;">
          <!-- <img src="example.jpg" style="width: 100px; height: 100px" /> -->
          <div style="flex: 1;">
            <h3>标题</h3>
            <p>描述文本</p>
            <button>按钮</button>
          </div>
        </div>
      </template>
    </MYSkeleton>

    <!-- 随机宽度 -->
    <MYSkeleton :random-width="true" :count="5" />

    <!-- 暗色主题 -->
    <MYSkeleton :theme="'dark'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
const isLoading = ref(true)

// 模拟异步加载
setTimeout(() => {
  isLoading.value = false
}, 2000)
</script>
