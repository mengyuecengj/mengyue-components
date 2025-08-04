<template>
  <Layout>
    <template #home-hero>
      <div class="hero">
        <h1>Mengyue UI</h1>
        <p>轻量 · Vue3 · TypeScript · 自定义主题</p>
        <div class="buttons">
          <a class="btn" href="/guide/">开始使用</a>
          <a class="btn secondary" href="https://github.com/..." target="_blank">GitHub</a>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<style scoped>
.hero {
  text-align: center;
  margin: 100px 0;
}
.hero h1 {
  font-size: 48px;
  font-weight: bold;
}
.buttons {
  margin-top: 20px;
}
.btn {
  padding: 10px 24px;
  border-radius: 6px;
  background: #42b883;
  color: white;
  text-decoration: none;
  margin: 0 8px;
}
.btn.secondary {
  background: transparent;
  border: 1px solid #42b883;
  color: #42b883;
}
</style>
