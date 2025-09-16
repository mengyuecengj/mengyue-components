<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
  <div class="test-collapse-container">
    <!-- 测试多面板模式 -->
    <h2>多面板模式 (默认)</h2>
    <MYCollapse v-model="activeNames" @change="handleChange">
      <MYCollapse-item title="功能特性" name="1">
        <div>支持多面板同时展开</div>
        <div>通过 v-model 绑定展开的面板</div>
      </MYCollapse-item>
      <MYCollapse-item title="用户体验" name="2">
        <div>提供平滑的展开/收起动画</div>
        <div>支持自定义内容</div>
      </MYCollapse-item>
      <MYCollapse-item title="可配置性" name="3">
        <div>可以通过 props 调整行为</div>
        <div>支持手风琴模式和多面板模式</div>
      </MYCollapse-item>
    </MYCollapse>

    <!-- 测试手风琴模式 -->
    <h2>手风琴模式</h2>
    <MYCollapse v-model="activeAccordionName" accordion @change="handleAccordionChange">
      <MYCollapse-item title="简介" name="a">
        <div>手风琴模式一次只能展开一个面板</div>
      </MYCollapse-item>
      <MYCollapse-item title="细节" name="b">
        <div>点击一个面板会收起其他面板</div>
      </MYCollapse-item>
      <MYCollapse-item title="备注" name="c">
        <div>适合需要聚焦单一内容的场景</div>
      </MYCollapse-item>
    </MYCollapse>

    <!-- 显示当前状态 -->
    <div class="status">
      <p>多面板模式活跃面板: {{ activeNames }}</p>
      <p>手风琴模式活跃面板: {{ activeAccordionName }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
};
// 多面板模式的活跃面板
const activeNames = ref<string[]>(['1'])

// 手风琴模式的活跃面板
const activeAccordionName = ref<string>('a')

// 处理多面板模式的变化
const handleChange = (val: string | string[]) => {
  console.log('多面板模式变化:', val)
}

// 处理手风琴模式的变化
const handleAccordionChange = (val: string | string[]) => {
  console.log('手风琴模式变化:', val)
}
</script>

<style scoped>
.test-collapse-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  margin-top: 30px;
  font-size: 24px;
  color: #333;
}

.status {
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.status p {
  margin: 5px 0;
  font-size: 16px;
}
</style>