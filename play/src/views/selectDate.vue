<template>
  <MYButton type="info" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>
  <div class="test-container">
    <h2>SelectDate 组件测试</h2>

    <!-- 单日期选择测试 -->
    <div class="test-case">
      <h3>单日期选择</h3>
      <MYSelect-date v-model="singleDate" time />
      <p>当前值: {{ singleDate || '未选择' }}</p>
    </div>

    <!-- 日期范围测试 -->
    <div class="test-case">
      <h3>日期范围选择</h3>
      <MYSelect-date v-model="dateRange" range time  />
      <p>当前值: {{ dateRange[0] }} 至 {{ dateRange[1] }}</p>
    </div>

    <div class="test-case">
      <h3>单月份选择</h3>
      <MYSelect-date v-model="singleDate" month time />
      <p>当前值: {{ singleDate || '未选择' }}</p>
    </div>

    <!-- 月份范围测试 -->
    <div class="test-case">
      <h3>月份范围选择</h3>
      <MYSelect-date v-model="monthRange" range month time />
      <p>当前值: {{ monthRange[0] }} 至 {{ monthRange[1] }}</p>
    </div>
    <div class="test-case">
      <h3>单年份选择</h3>
      <MYSelect-date v-model="singleDate" year time />
      <p>当前值: {{ singleDate || '未选择' }}</p>
    </div>

    <div class="test-case">
      <h3>范围年份选择</h3>
      <MYSelect-date v-model="singleDate" year range time />
      <p>当前值: {{ singleDate || '未选择' }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
// 测试数据
const singleDate = ref<Date | null>(null);
const dateRange = ref<[Date | null, Date | null]>([null, null]);
const monthRange = ref<[Date | null, Date | null]>([null, null]);
</script>

<style scoped>
.test-container {
  padding: 20px;
}

.test-case {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

button {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
