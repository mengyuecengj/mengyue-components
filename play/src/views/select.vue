<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
  <div class="test-container">
    <h2>Select 组件测试</h2>

    <div class="test-section">
      <h3>基础用法</h3>
      <MYSelect v-model="selectedValue1" placeholder="请选择水果">
        <MYOption value="apple" label="苹果" />
        <MYOption value="banana" label="香蕉" />
        <MYOption value="orange" label="橙子" />
      </MYSelect>
      <p>当前选择的值: {{ selectedValue1 }}</p>
    </div>

    <div class="test-section">
      <h3>禁用状态</h3>
      <MYSelect v-model="selectedValue2" disabled placeholder="禁用状态">
        <MYOption value="1" label="选项1" />
        <MYOption value="2" label="选项2" />
        <MYOption value="3" label="选项3" />
      </MYSelect>
      <p>当前选择的值: {{ selectedValue2 }}</p>
    </div>

    <div class="test-section">
      <h3>自定义尺寸</h3>
      <MYSelect v-model="selectedValue3" placeholder="宽300px高50px" width="300px" height="50px">
        <MYOption value="4" label="选项4" />
        <MYOption value="5" label="选项5" />
        <MYOption value="6" label="选项6" />
      </MYSelect>
      <p>当前选择的值: {{ selectedValue3 }}</p>
    </div>

    <div class="test-section">
      <h3>禁用选项</h3>
      <MYSelect v-model="selectedValue4" placeholder="测试禁用选项">
        <MYOption value="a" label="选项A" />
        <MYOption value="b" label="选项B" disabled />
        <MYOption value="c" label="选项C" />
      </MYSelect>
      <p>当前选择的值: {{ selectedValue4 }}</p>
    </div>

    <div class="test-section">
      <h3>默认值</h3>
      <MYSelect v-model="selectedValue5" placeholder="默认选中B">
        <MYOption value="A" label="选项A" />
        <MYOption value="B" label="选项B" />
        <MYOption value="C" label="选项C" />
      </MYSelect>
      <p>当前选择的值: {{ selectedValue5 }}</p>
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
const selectedValue1 = ref('')
const selectedValue2 = ref('')
const selectedValue3 = ref('')
const selectedValue4 = ref('')
const selectedValue5 = ref('B') // 设置默认值
</script>

<style scoped>
.test-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #1e1e1e;
  color: #e0e0e0;
}

.test-section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #4C4D4F;
  border-radius: 4px;
}

h2 {
  color: #409Eff;
  margin-bottom: 20px;
}

h3 {
  color: #67C23A;
  margin-bottom: 10px;
}

p {
  margin-top: 10px;
  color: #909399;
}
</style>
