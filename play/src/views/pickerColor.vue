<!-- ColorPickerDemo.vue -->
<template>
  <div class="demo-wrap">
    <div class="controls">
      <MYSelect-color ref="colorPickerRef" v-model="colorValue" />
    </div>

    <section class="preview">
      <div class="preview-row">
        <div class="panel">
          <h3>Element Plus Switch</h3>
          <el-switch v-model="elSwitch1" />
          <el-switch v-model="elSwitch2" />
        </div>

        <div class="panel">
          <h3>自定义 Switch（MYSwitch）</h3>
          <label class="my-switch">
            <input type="checkbox" v-model="mySwitch1" />
            <span class="slider"></span>
          </label>

          <label class="my-switch">
            <input type="checkbox" v-model="mySwitch2" />
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div class="panel full">
        <h3>示例区域（--app-primary-color）</h3>
        <button class="btn-primary">主色按钮</button>
        <span class="hint">文字颜色使用 --on-primary-text</span>
      </div>

      <div class="panel full">
        <h3>RGBA 颜色支持测试</h3>
        <button @click="setRedColor">设置为红色</button>
        <button @click="setBlueColor">设置为蓝色</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const colorPickerRef = ref<any>(null)
const colorValue = ref('') // ❌ 不要给默认色

const elSwitch1 = ref(true)
const elSwitch2 = ref(false)
const mySwitch1 = ref(true)
const mySwitch2 = ref(false)

// 从 localStorage 恢复主题
onMounted(() => {
  try {
    const layoutSetting = localStorage.getItem('layout-setting')
    if (layoutSetting) {
      const settings = JSON.parse(layoutSetting)
      colorValue.value = settings.theme || '#409EFF'
    } else {
      colorValue.value = '#409EFF'
    }
  } catch (e) {
    console.error('Failed to load theme from localStorage', e)
    colorValue.value = '#409EFF'
  }
})

const setRedColor = () => {
  colorValue.value = '#ff0000'
}
const setBlueColor = () => {
  colorValue.value = '#0000ff'
}
</script>

<style scoped>
.demo-wrap {
  padding: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.preview {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.preview-row {
  display: flex;
  gap: 12px;
}

.panel {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  min-width: 220px;
}

.panel.full {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-primary {
  background: var(--app-primary-color) !important;
  border-color: var(--app-primary-color) !important;
  color: var(--on-primary-text) !important;
  padding: 6px 12px;
  border-radius: 4px;
}

.hint {
  color: var(--on-primary-text);
}

/* Element Plus switch */
.el-switch.is-checked .el-switch__core {
  background-color: var(--myswitch-active) !important;
  border-color: var(--myswitch-active) !important;
}

.el-switch__core::after,
.el-switch__button {
  background-color: var(--on-primary-text) !important;
}

/* 自定义 switch */
.my-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  margin-right: 8px;
}
.my-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.my-switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.2s;
  border-radius: 34px;
}
.my-switch .slider::before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.2s;
  border-radius: 50%;
}
.my-switch input:checked + .slider {
  background-color: var(--myswitch-active);
}
.my-switch input:checked + .slider::before {
  transform: translateX(20px);
  background-color: var(--on-primary-text);
}

button {
  margin: 0 5px;
  padding: 6px 12px;
  background: var(--app-primary-color);
  color: var(--on-primary-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
