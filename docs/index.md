---
layout: home

title: mengyue-docs
description: 下一代前端构建工具

hero:
  name: mengyue-plus
  text: 
  tagline: 专为前端搭建网页 简单、易用、稳定的组件库 助力开发者快速构建现代化应用
  actions:
    - theme: brand
      text: 快速开始
      link: /components/FastStart
    - theme: alt
      text: 组件设计
      link: /design/FastRead

features:
  - icon: 🚀
    title: 极速热重载
    details: 基于原生 ESM 的毫秒级热更新，开发体验前所未有的流畅
  - icon: ⚡
    title: 开箱即用
    details: 使用TypeScript等完善的开发体验
  - icon: 🔥
    title: 智能构建
    details: 预优化的 Rollup 配置，支持多页面和库模式
  - icon: 🛠️
    title: 丰富的组件
    details: 强大的组件系统，轻松扩展构建能力
  - icon: 📦
    title: 优化输出
    details: 智能代码分割和资源优化，生产环境极致性能
  - icon: 🌐
    title: 现代化标准
    details: 全面支持 ES 模块、TypeScript 等现代 Web 标准
---

<div class="custom-home">
  <!-- 特性展示区域 -->
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2>为什么选择 mengyue-docs？</h2>
        <p>专为现代前端开发设计的构建工具</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>组件体积</h3>
          <p>包含图标。打包后KB级别，在非常短时间可以完成组件库的安装。</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h3>上手容易</h3>
          <p>支持全局与局部引入，非常简单的引入即可使用。</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>使用简单</h3>
          <p>完整讲述了每个组件的每个api与使用方式，文档全面，快速上手。</p>
        </div>
      </div>
    </div>
  </section>
  <!-- 代码示例区域 -->
  <section class="demo-section">
    <div class="container">
      <div class="demo-content">
        <div class="demo-text">
          <h2>简洁的配置体验</h2>
          <p>只需几行配置，即可开始你的项目</p>
        </div>
        <div class="code-preview">
            <pre>
              <code class="language-javascript">
                编写标签即可完善大量的功能。
                用最少的代码实现最丰富的功能。
              </code>
            </pre>
        </div>
      </div>
    </div>
  </section>
  <!-- 底部 CTA -->
  <section class="cta-section">
    <div class="container">
      <h2>准备好开始了吗？</h2>
      <p>立即加入数千开发者的行列，体验下一代构建工具</p>
      <div class="cta-actions">
        <MYa color="#fff" _blank underline href="/mengyue-components/components/FastStart" class="btn btn-large btn-primary">开始使用</MYa>
        <MYa color="#fff"__blank rel="noopener noreferrer" underline href="https://github.com/mengyuecengj/mengyue-components" class="btn btn-large btn-secondary">查看源码</MYa>
      </div>
    </div>
  </section>
</div>

<script setup>
import MYa from '../packages/components/a/src/a.vue'
</script>