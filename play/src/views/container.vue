<template>
  <MYHeader class="header" fixed>头部</MYHeader>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
  <div class="test-container">
    <h2>MYContainer 组件测试</h2>

    <div class="test-case">
      <h3>基础容器</h3>
      <MYContainer class="basic-container">
        <p>这是一个基础容器</p>
      </MYContainer>
    </div>

    <div class="test-case">
      <h3>带自定义样式的容器</h3>
      <MYContainer height="300px" width="80%" background="#f0f0f0" class="styled-container">
        <p>自定义高度、宽度和背景色的容器</p>
      </MYContainer>
    </div>

    <div class="test-case">
      <h3>完整布局</h3>
      <MYContainer height="400px" class="full-layout">
        <!-- <MYHeader fixed class="header">固定头部</MYHeader> -->
        <MYAside class="left-aside">左侧边栏</MYAside>
        <MYMain class="main-content">
          <p>主内容区域</p>
          <p>可以放置各种内容</p>
        </MYMain>
        <MYAside position="right" class="right-aside">右侧边栏</MYAside>
        <MYFooter class="footer">页脚区域</MYFooter>
      </MYContainer>
    </div>

    <div class="test-case">
      <h3>不同HTML标签测试</h3>
      <MYContainer tag="section" class="section-container">
        <MYHeader tag="div" class="div-header">div作为头部</MYHeader>
        <MYAside tag="nav" class="nav-aside">nav作为侧边栏</MYAside>
        <MYMain tag="article" class="article-main">article作为主内容</MYMain>
        <MYFooter tag="div" class="div-footer">div作为页脚</MYFooter>
      </MYContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}
</script>
<style scoped>
.test-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.test-case {
  margin-bottom: 30px;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 4px;
}

.basic-container {
  border: 1px dashed #ccc;
  padding: 15px;
}

.styled-container {
  border: 1px solid #ddd;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-layout {
  border: 1px solid #ddd;
  position: relative;
}

.header {
  background: #409eff;
  color: white;
  padding: 15px;
  height: 60px;
}

.left-aside {
  background: #545c64;
  color: white;
  width: 200px;
  position: absolute;
  top: 60px;
  bottom: 60px;
  left: 0;
}

.right-aside {
  background: #545c64;
  color: white;
  width: 200px;
  position: absolute;
  top: 60px;
  bottom: 60px;
  right: 0;
}

.main-content {
  margin: 60px 200px;
  padding: 20px;
  background: #f5f7fa;
  height: calc(100% - 120px);
  overflow: auto;
}

.footer {
  background: #409eff;
  color: white;
  padding: 15px;
  height: 60px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.section-container {
  border: 1px solid #ddd;
  padding: 15px;
}

.div-header {
  background: #67c23a;
  color: white;
  padding: 10px;
}

.nav-aside {
  background: #e6a23c;
  color: white;
  padding: 10px;
  width: 150px;
  float: left;
}

.article-main {
  background: #f4f4f5;
  padding: 10px;
  margin-left: 160px;
}

.div-footer {
  background: #909399;
  color: white;
  padding: 10px;
  clear: both;
}
</style>
