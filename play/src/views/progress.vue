<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div class="progress-test">
    <h2>MYProgress Component Test</h2>
    <div class="test-case">
      <h3>Basic Progress (50%)</h3>
      <MYProgress :percentage="50" />
    </div>
    <div class="test-case">
      <h3>Full Progress with Custom Format (100%)</h3>
      <MYProgress :percentage="100" :format="format" />
    </div>
    <div class="test-case">
      <h3>Success Status (100%)</h3>
      <MYProgress :percentage="100" status="success" />
    </div>
    <div class="test-case">
      <h3>Warning Status (39%)</h3>
      <MYProgress :percentage="39" status="warning" />
    </div>
    <div class="test-case">
      <h3>Exception Status (85.5%)</h3>
      <MYProgress :percentage="85.5" status="exception" />
    </div>
    <div class="test-case">
      <h3>Boundary Case: Over 100%</h3>
      <MYProgress :percentage="100" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
};
const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.progress-test {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.test-case {
  margin-bottom: 20px;
}

.test-case h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.my-progress {
  margin-bottom: 15px;
}
</style>
