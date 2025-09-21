<template>
  <div class="demo-container">
    <h1>Message Component 完整功能演示</h1>
    
    <!-- 基础类型 -->
    <section>
      <h2>基础类型</h2>
      <button @click="showInfo">显示信息消息</button>
      <button @click="showSuccess">显示成功消息</button>
      <button @click="showWarning">显示警告消息</button>
      <button @click="showError">显示错误消息</button>
      <button @click="showDefault">显示默认消息</button>
    </section>

    <!-- 持续时间和关闭按钮 -->
    <section>
      <h2>持续时间和关闭按钮</h2>
      <button @click="showWithDuration">显示5秒持续时间</button>
      <button @click="showWithClose">显示带关闭按钮</button>
      <button @click="showNoAutoClose">显示不自动关闭</button>
    </section>

    <!-- 位置 -->
    <section>
      <h2>不同位置</h2>
      <button @click="showTopRight">右上角 (默认)</button>
      <button @click="showTopLeft">左上角</button>
      <button @click="showTopCenter">顶部居中</button>
      <button @click="showBottomRight">右下角</button>
      <button @click="showBottomLeft">左下角</button>
      <button @click="showBottomCenter">底部居中</button>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2>自定义样式</h2>
      <button @click="showWithZIndex">自定义 zIndex</button>
    </section>

    <!-- 回调函数 -->
    <section>
      <h2>回调函数</h2>
      <button @click="showWithCallback">关闭回调</button>
    </section>

    <!-- 长文本 -->
    <section>
      <h2>长文本测试</h2>
      <button @click="showLongText">显示长文本</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { message } from '../../../packages/components';

// 基础类型
function showInfo() {
  message.info('这是一条信息消息');
}

function showSuccess() {
  message.success('这是一条成功消息');
}

function showWarning() {
  message.warning('这是一条警告消息');
}

function showError() {
  message.error('这是一条错误消息');
}

function showDefault() {
  message({ 
    content: '这是一条默认消息',
    plain: false  // 添加 plain 属性解决类型错误
  });
}

// 持续时间和关闭按钮
function showWithDuration() {
  message.success({
    content: '这条消息将在5秒后自动关闭',
    duration: 5000,
    plain: false
  });
}

function showWithClose() {
  message.warning({
    content: '这条消息带有关闭按钮',
    showClose: true,
    plain: false
  });
}

function showNoAutoClose() {
  message.error({
    content: '这条消息不会自动关闭，请手动关闭',
    duration: 0,
    showClose: true,
    plain: false
  });
}

// 位置
function showTopRight() {
  message.info({
    content: '右上角位置',
    position: 'top-right',
    plain: false
  });
}

function showTopLeft() {
  message.info({
    content: '左上角位置',
    position: 'top-left',
    plain: false
  });
}

function showTopCenter() {
  message.info({
    content: '顶部居中位置',
    position: 'top-center',
    plain: false
  });
}

function showBottomRight() {
  message.info({
    content: '右下角位置',
    position: 'bottom-right',
    plain: false
  });
}

function showBottomLeft() {
  message.info({
    content: '左下角位置',
    position: 'bottom-left',
    plain: false
  });
}

function showBottomCenter() {
  message.info({
    content: '底部居中位置',
    position: 'bottom-center',
    plain: false
  });
}

// 自定义样式
function showWithZIndex() {
  message.info({
    content: '这条消息的 zIndex 为 10000',
    zIndex: 10000,
    plain: false
  });
}

// 回调函数
function showWithCallback() {
  message.success({
    content: '这条消息关闭时会触发回调',
    onClose: () => {
      console.log('消息已关闭');
      alert('消息已关闭');
    },
    plain: false
  });
}

// 长文本
function showLongText() {
  message.info({
    content: '这是一条很长的消息，用于测试文本换行功能。当文本超过最大宽度时，应该会自动换行显示。这是一个非常长的文本示例，用来确保换行功能正常工作。',
    plain: false
  });
}
</script>

<style scoped>
.demo-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
}

button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 12px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #66b1ff;
}

/* 特定类型按钮样式 */
button:nth-child(1) { background: #909399; }
button:nth-child(1):hover { background: #a6a9ad; }

button:nth-child(2) { background: #67c23a; }
button:nth-child(2):hover { background: #85ce61; }

button:nth-child(3) { background: #e6a23c; }
button:nth-child(3):hover { background: #ebb563; }

button:nth-child(4) { background: #f56c6c; }
button:nth-child(4):hover { background: #f78989; }
</style>