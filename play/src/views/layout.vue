<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div class="layout-demo">
    <h2>MYRow & MYCol 组件测试</h2>

    <!-- 1. 基础布局 -->
    <div class="demo-section">
      <h3>1. 基础网格布局</h3>
      <MYRow>
        <MYCol :span="6">
          <div class="demo-box">span=6</div>
        </MYCol>
        <MYCol :span="12">
          <div class="demo-box">span=12</div>
        </MYCol>
        <MYCol :span="6">
          <div class="demo-box">span=6</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 2. 带 gutter 的布局 -->
    <div class="demo-section">
      <h3>2. 带间距的布局 (gutter=16)</h3>
      <MYRow :gutter="16">
        <MYCol :span="8">
          <div class="demo-box">左侧</div>
        </MYCol>
        <MYCol :span="8">
          <div class="demo-box">中间</div>
        </MYCol>
        <MYCol :span="8">
          <div class="demo-box">右侧</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 3. 两端对齐 -->
    <div class="demo-section">
      <h3>3. 两端对齐布局 (justify=space-between)</h3>
      <MYRow justify="space-between">
        <MYCol :span="6">
          <div class="demo-box">左侧</div>
        </MYCol>
        <MYCol :span="6">
          <div class="demo-box">右侧</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 4. 垂直居中 -->
    <div class="demo-section">
      <h3>4. 垂直居中 (align)</h3>
      <MYRow align>
        <MYCol :span="24">
          <div class="demo-box">顶部</div>
        </MYCol>
        <MYCol :span="24">
          <div class="demo-box">中部</div>
        </MYCol>
        <MYCol :span="24">
          <div class="demo-box">底部</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 5. 水平垂直居中 -->
    <div class="demo-section">
      <h3>5. 水平垂直居中 (alignCenter)</h3>
      <MYRow alignCenter>
        <MYCol :span="24">
          <div class="demo-box">顶部</div>
        </MYCol>
        <MYCol :span="24">
          <div class="demo-box">中部</div>
        </MYCol>
        <MYCol :span="24">
          <div class="demo-box">底部</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 6. 方向反转 -->
    <div class="demo-section">
      <h3>6. 方向反转 (direction=row-reverse)</h3>
      <MYRow direction="row-reverse">
        <MYCol :span="8">
          <div class="demo-box">1 (视觉在右)</div>
        </MYCol>
        <MYCol :span="8">
          <div class="demo-box">2</div>
        </MYCol>
        <MYCol :span="8">
          <div class="demo-box">3 (视觉在左)</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 7. 偏移量演示 -->
    <div class="demo-section">
      <h3>7. 偏移量演示</h3>
      <MYRow>
        <MYCol :span="6" :offsetLeft="6">
          <div class="demo-box">offsetLeft=6</div>
        </MYCol>
        <MYCol :span="6" :offsetRight="6">
          <div class="demo-box">offsetRight=6</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 8. 自定义标签 -->
    <div class="demo-section">
      <h3>8. 自定义标签 (tag="section")</h3>
      <MYRow tag="section">
        <MYCol tag="article" :span="12">
          <div class="demo-box">article标签</div>
        </MYCol>
        <MYCol tag="aside" :span="12">
          <div class="demo-box">aside标签</div>
        </MYCol>
      </MYRow>
    </div>

    <!-- 9. Pull 和 Push -->
    <div class="demo-section">
      <h3>9. Pull 和 Push</h3>
      <MYRow>
        <MYCol :span="6" :pull="2">
          <div class="demo-box">pull=2</div>
        </MYCol>
        <MYCol :span="6" :push="2">
          <div class="demo-box">push=2</div>
        </MYCol>
      </MYRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.layout-demo {
  padding: 32px;
  max-width: 1280px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section {
  margin-bottom: 48px;
  padding: 24px;
  background: #f9fafb;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.demo-section:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.demo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  background: linear-gradient(135deg, #e0f7fa, #b3e5fc);
  border: 1px solid #90caf9;
  border-radius: 6px;
  min-height: 60px;
  color: #1e3a8a;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box; /* 确保 padding 不影响 width */
}

.demo-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 40px;
  color: #1e3a8a;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
  color: #374151;
  font-size: 20px;
  font-weight: 500;
}

/* 按钮样式（假设 MYButton 未定义样式） */
button[type="success"] {
  padding: 10px 20px;
  background: #10b981;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 24px;
  transition: background 0.2s ease;
}

button[type="success"]:hover {
  background: #059669;
}
</style>