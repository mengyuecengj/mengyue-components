<!-- SwitchTest.vue -->
<template>
  <div class="switch-test-container">
    <h2>Switch 组件测试</h2>
    
    <!-- 基础用法 -->
    <div class="test-section">
      <h3>基础用法</h3>
      <MYSwitch v-model="basicValue" />
      <span class="status-text">当前状态: {{ basicValue }}</span>
      <MYButton @click="resetBasic" class="ml-4">重置</MYButton>
    </div>

    <!-- 带文本的Switch -->
    <div class="test-section">
      <h3>带文本的Switch</h3>
      <MYSwitch v-model="textValue" text="开" />
      <span class="status-text">当前状态: {{ textValue }}</span>
      <MYButton @click="resetText" class="ml-4">重置</MYButton>
    </div>

    <!-- 不同尺寸 -->
    <div class="test-section">
      <h3>不同尺寸</h3>
      <div class="size-item">
        <span>mini 尺寸</span>
        <MYSwitch v-model="sizeValues.mini" size="mini" />
        <span class="status-text">状态: {{ sizeValues.mini }}</span>
      </div>
      <div class="size-item">
        <span>supersmall 尺寸</span>
        <MYSwitch v-model="sizeValues.supersmall" size="supersmall" />
        <span class="status-text">状态: {{ sizeValues.supersmall }}</span>
      </div>
      <div class="size-item">
        <span>small 尺寸</span>
        <MYSwitch v-model="sizeValues.small" size="small" />
        <span class="status-text">状态: {{ sizeValues.small }}</span>
      </div>
      <div class="size-item">
        <span>medium 尺寸</span>
        <MYSwitch v-model="sizeValues.medium" size="medium" />
        <span class="status-text">状态: {{ sizeValues.medium }}</span>
      </div>
      <div class="size-item">
        <span>large 尺寸</span>
        <MYSwitch v-model="sizeValues.large" size="large" />
        <span class="status-text">状态: {{ sizeValues.large }}</span>
      </div>
      <MYButton @click="resetSizes" class="mt-4">重置所有尺寸</MYButton>
    </div>

    <!-- 持久化测试 -->
    <div class="test-section">
      <h3>持久化测试 (使用 localStorage)</h3>
      <MYSwitch v-model="persistentValue" />
      <span class="status-text">当前状态: {{ persistentValue }} (刷新页面会保持状态)</span>
      <MYButton @click="clearPersistent" class="ml-4">清除持久化</MYButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

// 基础测试数据
const basicValue = ref(false)
const textValue = ref(true)

const sizeValues = ref({
  mini: true,
  supersmall: false,
  small: true,
  medium: false,
  large: true
})

// 持久化测试数据
const persistentValue = ref(false)

// 从 localStorage 加载持久化状态
onMounted(() => {
  const saved = localStorage.getItem('switch-persistent-value')
  if (saved !== null) {
    persistentValue.value = JSON.parse(saved)
  }
})

// 监听持久化值的变化并保存到 localStorage
watch(persistentValue, (newVal) => {
  localStorage.setItem('switch-persistent-value', JSON.stringify(newVal))
})

// 重置方法
const resetBasic = () => {
  basicValue.value = false
}

const resetText = () => {
  textValue.value = true
}

const resetSizes = () => {
  sizeValues.value = {
    mini: true,
    supersmall: false,
    small: true,
    medium: false,
    large: true
  }
}

const clearPersistent = () => {
  persistentValue.value = false
  localStorage.removeItem('switch-persistent-value')
}
</script>

<style scoped>
.switch-test-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.test-section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
}

.test-section h3 {
  margin-bottom: 15px;
  color: #333;
}

.size-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.size-item span:first-child {
  width: 120px;
  margin-right: 15px;
}

.status-text {
  margin-left: 15px;
  color: #666;
  font-weight: bold;
}

.ml-4 {
  margin-left: 16px;
}

.mt-4 {
  margin-top: 16px;
}
</style>