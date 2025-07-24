<template>
  <div>
    <h3>徽章组件测试</h3>
    <div class="test-section">
      <h4>默认插槽测试</h4>
      <MYBadge>
        <MYButton type="primary">按钮</MYButton>
      </MYBadge>
    </div>

    <div class="test-section">
      <h4>数字内容测试</h4>
      <MYBadge :content="5">
        <MYButton type="primary">消息</MYButton>
      </MYBadge>
    </div>

    <div class="test-section">
      <h4>小红点测试</h4>
      <MYBadge dot>
        <MYButton type="primary">通知</MYButton>
      </MYBadge>
    </div>

    <div class="test-section">
      <h4>最大值测试</h4>
      <MYBadge :content="100" :max="99">
        <MYButton type="primary">消息</MYButton>
      </MYBadge>
      <MYBadge :content="100" :max="10" style="margin-left: 20px;">
        <MYButton type="primary">消息</MYButton>
      </MYBadge>
    </div>

    <div class="test-section">
      <h4>位置测试</h4>
      <div style="display: flex; gap: 20px;">
        <MYBadge :content="3" position="top-left">
          <MYButton type="primary">左上</MYButton>
        </MYBadge>
        <MYBadge :content="3" position="top-right">
          <MYButton type="primary">右上</MYButton>
        </MYBadge>
        <MYBadge :content="3" position="bottom-left">
          <MYButton type="primary">左下</MYButton>
        </MYBadge>
        <MYBadge :content="3" position="bottom-right">
          <MYButton type="primary">右下</MYButton>
        </MYBadge>
      </div>
    </div>

    <div class="test-section">
      <h4>颜色测试</h4>
      <MYBadge :content="8" color="#52c41a">
        <MYButton type="primary">绿色徽章</MYButton>
      </MYBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.test-section {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #eee;
}
</style>
