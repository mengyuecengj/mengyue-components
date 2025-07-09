<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
  <div style="margin-top: 10px; border: 5px solid #000;"></div>
  <div style="margin-top: 10px;"></div>
  <div class="text-test-container">
    <h2>MYText 组件测试</h2>
  </div>
  <!-- 基础测试 -->
  <section class="test-section">
    <h3>基础用法</h3>
    <div class="test-row">
      <MYText>默认文本</MYText>
      <MYText type="primary">主要文本</MYText>
      <MYText type="success">成功文本</MYText>
      <MYText type="warning">警告文本</MYText>
      <MYText type="danger">危险文本</MYText>
      <MYText type="info">信息文本</MYText>
    </div>
  </section>

  <!-- 尺寸测试 -->
  <section class="test-section">
    <h3>尺寸控制</h3>
    <div class="test-row">
      <MYText size="small">小号文本 (12px)</MYText>
      <MYText size="medium">中号文本 (14px)</MYText>
      <MYText size="large">大号文本 (20px)</MYText>
      <MYText :size="16">自定义16px</MYText>
      <MYText size="1.2rem">1.2rem文本</MYText>
    </div>
  </section>

  <!-- 颜色测试 -->
  <section class="test-section">
    <h3>自定义颜色</h3>
    <div class="test-row" style="background: #f0f0f0; padding: 10px;">
      <MYText Tecolor="#ff0000">红色文本</MYText>
      <MYText Tecolor="#00ff00">绿色文本</MYText>
      <MYText Tecolor="#0000ff">蓝色文本</MYText>
    </div>
  </section>

  <!-- 标签测试 -->
  <section class="test-section">
    <h3>标签类型</h3>
    <div class="test-row">
      <MYText tag="div">div标签</MYText>
      <MYText tag="p">段落标签</MYText>
      <MYText tag="strong">加粗标签</MYText>
    </div>
  </section>

  <!-- 复杂场景测试 -->
  <section class="test-section">
    <h3>复杂组合</h3>
    <div class="test-row">
      <MYText type="danger" size="large" Tecolor="rgba(255,0,0,0.4)" tag="strong">
        红色半透明大号加粗文本
      </MYText>
    </div>
  </section>
  <section class="test-section">
    <h3>复杂组合</h3>
    <div class="test-row">
      <MYText type="danger" size="large" Tecolor="rgba(255,0,0,0.4)" tag="strong">
        红色半透明大号加粗文本
      </MYText>
    </div>
  </section>
  <section class="test-section">
    <h3>复杂组合</h3>
    <div class="test-row">
      <MYText type="danger" size="large" Tecolor="rgba(255,0,0,0.4)" tag="strong">
        红色半透明大号加粗文本
      </MYText>
    </div>
  </section>
  <section class="test-section">
    <h3>复杂组合</h3>
    <div class="test-row">
      <MYText type="danger" size="large" Tecolor="rgba(255,0,0,0.4)" tag="strong">
        红色半透明大号加粗文本
      </MYText>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
</script>
<style scoped lang="scss">
.custom-link {
  cursor: pointer;
  /* 鼠标变手型 */
  color: #333;
  /* 默认颜色 */
  text-decoration: none;
  /* 默认无下划线 */
  transition: color 0.3s, text-decoration 0.3s;
  /* 平滑过渡 */
}

.custom-link:hover {
  color: #409eff;
  /* 悬停颜色（蓝色） */
  text-decoration: underline;
  /* 悬停下划线 */
}
</style>