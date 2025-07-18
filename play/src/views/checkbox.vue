<template>
  <MYButton type="success" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>
  <div class="checkbox-demo-container">
    <h2>Checkbox 组件测试</h2>
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>1. 基础多选框组</h3>
      <MYCheckbox-group v-model="selectedValues1">
        <MYCheckbox value="option1">选项1</MYCheckbox>
        <MYCheckbox value="option2">选项2</MYCheckbox>
        <MYCheckbox value="option3">选项3</MYCheckbox>
      </MYCheckbox-group>
      <div class="demo-result">选中值: {{ selectedValues1 }}</div>
    </div>

    <!-- 垂直排列 -->
    <div class="demo-section">
      <h3>2. 垂直排列</h3>
      <MYCheckbox-group v-model="selectedValues2" direction="vertical">
        <MYCheckbox value="apple">苹果</MYCheckbox>
        <MYCheckbox value="banana">香蕉</MYCheckbox>
        <MYCheckbox value="orange">橙子</MYCheckbox>
        <div class="demo-result">选中值: {{ selectedValues2 }}</div>
      </MYCheckbox-group>
    </div>

    <!-- 禁用状态 -->
    <div class="demo-section">
      <h3>3. 禁用状态</h3>
      <div class="demo-row">
        <div>
          <h4>整个组禁用</h4>
          <MYCheckbox-group v-model="selectedValues3" disabled>
            <MYCheckbox value="red">红色</MYCheckbox>
            <MYCheckbox value="green">绿色</MYCheckbox>
            <MYCheckbox value="blue">蓝色</MYCheckbox>
          </MYCheckbox-group>
        </div>
        <div>
          <h4>单个选项禁用</h4>
          <MYCheckbox-group v-model="selectedValues4">
            <MYCheckbox value="mon">星期一</MYCheckbox>
            <MYCheckbox value="tue" disabled>星期二</MYCheckbox>
            <MYCheckbox value="wed">星期三</MYCheckbox>
          </MYCheckbox-group>
        </div>
      </div>
      <div class="demo-result">
        选中值: {{ selectedValues3 }} (全组禁用) |
        {{ selectedValues4 }} (单个禁用)
      </div>
    </div>

    <!-- 自定义间距 -->
    <div class="demo-section">
      <h3>4. 自定义间距</h3>
      <MYCheckbox-group v-model="selectedValues5" :gap="customGap ? '72px' : '12px'">
        <MYCheckbox value="cat">猫</MYCheckbox>
        <MYCheckbox value="dog">狗</MYCheckbox>
        <MYCheckbox value="bird">鸟</MYCheckbox>
      </MYCheckbox-group>
      <MYButton type="primary" @click="customGap = !customGap">
        切换间距: {{ customGap ? '大(72px)' : '小(12px)' }}
      </MYButton>
      <div class="demo-result">选中值: {{ selectedValues5 }}</div>
    </div>

    <!-- 响应式测试 -->
    <div class="demo-section responsive-test">
      <h3>5. 响应式测试 (尝试缩小浏览器宽度)</h3>
      <MYCheckbox-group v-model="selectedValues6">
        <MYCheckbox value="react">React</MYCheckbox>
        <MYCheckbox value="vue">Vue</MYCheckbox>
        <MYCheckbox value="angular">Angular</MYCheckbox>
        <MYCheckbox value="svelte">Svelte</MYCheckbox>
      </MYCheckbox-group>
      <div class="demo-result">选中值: {{ selectedValues6 }}</div>
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
// 基础用法
const selectedValues1 = ref<string[]>(['option1'])

// 垂直排列
const selectedValues2 = ref<string[]>([])

// 禁用状态
const selectedValues3 = ref<string[]>(['red'])
const selectedValues4 = ref<string[]>(['mon'])

// 自定义间距
const customGap = ref(false)
const selectedValues5 = ref<string[]>([])

// 响应式测试
const selectedValues6 = ref<string[]>(['vue'])
</script>

<style lang="scss" scoped>
.checkbox-demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: #409eff;
  }

  h4 {
    margin: 10px 0;
    color: #67c23a;
  }
}

.demo-row {
  display: flex;
  gap: 30px;
}

.demo-result {
  margin-top: 10px;
  padding: 8px;
  background-color: #f5f7fa;
  border-radius: 4px;
  font-family: monospace;
}

button {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #66b1ff;
  }
}

.responsive-test {
  background-color: #f9f9f9;
}

@media (max-width: 600px) {
  .demo-row {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
