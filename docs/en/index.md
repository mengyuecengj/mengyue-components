---
layout: home
title: mengyue-plus
description: A simple, easy-to-use, and stable component library specifically designed for front-end web development

hero:
  name: mengyue-plus
  text: 
  tagline: A simple, easy-to-use, and stable component library specifically designed for front-end web development, empowering developers to quickly build modern applications
  actions:
    - theme: brand
      text: Get Started
      link: /components/FastStart
    - theme: alt
      text: Component Design
      link: /design/FastRead
---

<div class="custom-home">
  <section class="menu-demo-section">
    <div class="container">
      <div class="section-header">
        <h2>Experience Professional Multi-level Menu Now</h2>
        <p>Supports infinite nesting levels, unique-opened smart folding, collapsible hover mode, and state persistence — standard features for admin management systems</p>
      </div>
      <div class="vp-raw">
        <MenuDemoEn />
      </div>
      <div class="menu-features">
        <div class="menu-feature-item">
          <div class="feature-icon">🌳</div>
          <div class="feature-content">
            <strong>Infinite Nesting Levels</strong>
            <span>Supports 4th, 5th level menus</span>
          </div>
        </div>
        <div class="menu-feature-item">
          <div class="feature-icon">🔄</div>
          <div class="feature-content">
            <strong>Unique Opened</strong>
            <span>Automatically collapses previously expanded menus when clicking others</span>
          </div>
        </div>
        <div class="menu-feature-item">
          <div class="feature-icon">📱</div>
          <div class="feature-content">
            <strong>Collapsible Hover Mode</strong>
            <span>Elegant hover menu on narrow screens</span>
          </div>
        </div>
        <div class="menu-feature-item">
          <div class="feature-icon">💾</div>
          <div class="feature-content">
            <strong>State Persistence</strong>
            <span>Automatically restores expanded and active states after page refresh</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="components-showcase">
    <div class="container">
      <div class="section-header">
        <h2>Rich Components Freely Selectable</h2>
        <p>Numerous practical components meet your needs with flexible customization and extension</p>
      </div>
      <div class="components-grid">
        <!-- Button Card -->
        <div class="component-card">
          <div class="card-header">
            <div class="card-icon">🔘</div>
            <span class="badge badge-stable">Stable</span>
          </div>
          <h3>Button</h3>
          <div class="demo-preview">
            <ClientOnly>
              <div class="button-group">
                <MYButton size="small" type="primary">Primary</MYButton>
                <MYButton size="small" type="success">Success</MYButton>
                <MYButton size="small" type="warning">Warning</MYButton>
              </div>
            </ClientOnly>
          </div>
          <div class="card-footer">
            <span class="update-date"></span>
            <a href="./components/BasicButton" class="card-link">
              <span>View Documentation</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
        <!-- Switch Card -->
        <div class="component-card">
          <div class="card-header">
            <div class="card-icon">🔀</div>
            <span class="badge badge-stable">Stable</span>
          </div>
          <h3>Switch</h3>
          <div class="demo-preview">
            <ClientOnly>
              <div class="switch-demo">
                <MYSwitch v-model="switchValue" size="small" />
              </div>
            </ClientOnly>
          </div>
          <div class="card-footer">
            <span class="update-date"></span>
            <a href="./components/FormSwitch" class="card-link">
              <span>View Documentation</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
        <!-- Badge message -->
        <div class="component-card">
          <div class="card-header">
            <div class="card-icon">🎨</div>
            <span class="badge badge-stable">Stable</span>
          </div>
          <h3>Badge message</h3>
          <div class="demo-preview">
            <ClientOnly>
              <div class="card-header">
                <MYBadge :content='5'>
                    <MYButton type='primary'>message</MYButton>
                </MYBadge>              
              </div>
            </ClientOnly>
          </div>
          <div class="card-footer">
            <span class="update-date"></span>
            <a href="./components/FeedbackBadge" class="card-link">
              <span>View Documentation</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
        <!-- Result Card -->
        <div class="component-card">
          <div class="card-header">
            <div class="card-icon">✅</div>
            <span class="badge badge-stable">Stable</span>
          </div>
          <h3>Result</h3>
          <div class="demo-preview">
            <ClientOnly>
              <MYResult icon="success" title="Operation Successful" sub-title=" " style="transform: scale(0.8);" />
            </ClientOnly>
          </div>
          <div class="card-footer">
            <span class="update-date"></span>
            <a href="./components/FeedbackResult" class="card-link">
              <span>View Documentation</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
        <!-- Progress Card -->
        <div class="component-card">
          <div class="card-header">
            <div class="card-icon">📊</div>
            <span class="badge badge-stable">Stable</span>
          </div>
          <h3>Progress</h3>
          <div class="demo-preview">
            <ClientOnly>
              <div style="width: 100%; padding: 8px 0;">
                <MYProgress :percentage="progressValue" status="success" />
                <MYProgress :percentage="70" style="margin-top: 8px;" />
              </div>
            </ClientOnly>
          </div>
          <div class="card-footer">
            <span class="update-date"></span>
            <a href="./components/FeedbackProgress" class="card-link">
              <span>View Documentation</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
        <!-- SelectTime Card -->
        <div class="component-card">
          <div class="card-header">
            <div class="card-icon">⏰</div>
            <span class="badge badge-stable">Stable</span>
          </div>
          <h3>SelectTime</h3>
          <div class="demo-preview">
            <ClientOnly>
              <div style="position: relative; z-index: 10; width: 100%;">
                <MYSelectTime v-model="timePoint" />
              </div>
            </ClientOnly>
          </div>
          <div class="card-footer">
            <span class="update-date"></span>
            <a href="./components/FormSelectTime" class="card-link">
              <span>View Documentation</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="cta-section">
    <div class="container">
      <h1>Ready to Get Started?</h1>
      <p>Join thousands of developers now and experience the next-generation component library</p>
      <div class="cta-actions">
        <MYa color="#fff" underline href="./components/FastStart" class="btn btn-large btn-primary">Get Started</MYa>
        <MYa target="_blank" rel="noopener noreferrer" underline href="https://github.com/mengyuecengj/mengyue-components" class="btn btn-large btn-secondary">View Source Code</MYa>
      </div>
    </div>
  </section>

  <!-- 底部资源栏 -->
  <section class="footer-resources">
    <div class="container">
      <div class="resources-grid">
      <div class="resources-column">
        <h4>更多产品</h4>
        <ul>
          <li>
            <a href="#">
              <i class="icon-medium"></i> mengyue 官网
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-medium"></i> mengyue management system
            </a>
          </li>
        </ul>
      </div>
      <div class="resources-column">
        <h4>相关资源</h4>
        <ul>
          <li>
            <a href="./plus/FastStart">
              <i class="icon-medium"></i> mengyue-plus
            </a>
          </li>
          <li>
            <a href="./components/FastStart">
              <i class="icon-medium"></i> mengyue-components
            </a>
          </li>
        </ul>
      </div>
      <div class="resources-column">
        <h4>相关地址</h4>
        <ul>
          <li>
            <a href="https://github.com/mengyuecengj/mengyue-components" target="_blank">
              <i class="icon-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://gitee.com/q62/mengyue-components" target="_blank">
              <i class="icon-gitee"></i> Gitee
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/~cengj" target="_blank">
              <i class="icon-npm"></i> npm
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank">
              <i class="icon-x"></i> X
            </a>
          </li>
        </ul>
      </div>
      <div class="resources-column">
        <h4>需要帮助</h4>
        <ul>
          <li>
            <a href="./version/0.1.1">
              <i class="icon-log"></i> 更新日志
            </a>
          </li>
          <li>
            <a href="./question/migration">
              <i class="icon-question"></i> 常见问题
            </a>
          </li>
          <li>
            <a href="https://gitee.com/q62/mengyue-components/issues" target="_blank">
              <i class="icon-bug"></i> 报告 Bug
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>  
</section>
</div>

<script setup>
import { ref } from 'vue'
import MenuDemoEn from '../.vitepress/theme/components/MenuDemoEn.vue'
import MYa from '../../packages/components/a/src/a.vue'
import MYButton from '../../packages/components/button/src/button.vue'
import MYSwitch from '../../packages/components/switch/src/switch.vue'
import MYResult from '../../packages/components/result/src/result.vue'
import MYProgress from '../../packages/components/progress/src/progress.vue'
import MYSelectTime from '../../packages/components/selectTime/src/selectTime.vue'
import MYBadge from '../../packages/components/badge/src/badge.vue'

// Reactive data
const switchValue = ref(true)
const progressValue = ref(88)
const timePoint = ref('14:30')
</script>

<style scoped>
/* ==================== 新特性区样式 ==================== */
.menu-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.menu-feature-item {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.menu-feature-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
  border-color: #3b82f6;
}

.feature-icon {
  font-size: 42px;
  width: 76px;
  height: 76px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9ff;
  border-radius: 20px;
}

.menu-feature-item strong {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 10px;
}

.menu-feature-item span {
  display: block;
  font-size: 15px;
  line-height: 1.6;
  color: #64748b;
}

/* ==================== 暗色主题自动适配 ==================== */
.dark .menu-feature-item {
  background: #1f2937;
  border-color: #334155;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.dark .menu-feature-item:hover {
  border-color: #60a5fa;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
}

.dark .feature-icon {
  background: #334155;
}

.dark .menu-feature-item strong {
  color: #f1f5f9;
}

.dark .menu-feature-item span {
  color: #cbd5e1;
}

/* ==================== 组件展示区 ==================== */
.components-showcase {
  padding: 80px 0;
  background: linear-gradient(135deg, #f9fafb 0%, #f2f5f8 100%);
  transition: background 0.3s;
}

.dark .components-showcase {
  background: #0a0a0a;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-header h2 {
  font-size: 35px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.section-header p {
  font-size: 18px;
  color: #475569;
  max-width: 640px;
  margin: 0 auto;
}

.dark .section-header h2 {
  color: #f1f5f9;
}

.dark .section-header p {
  color: #cbd5e1;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.component-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
  box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

.dark .component-card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.4);
}

.component-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 30px -10px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(255, 255, 255, 0.9);
}

.dark .component-card:hover {
  box-shadow: 0 20px 30px -10px rgba(59, 130, 246, 0.4);
  border-color: rgba(96, 165, 250, 0.3);
  background: rgba(30, 41, 59, 0.85);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.card-icon {
  font-size: 30px;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #eff6ff, #e0edfe);
  border-radius: 16px;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.dark .card-icon {
  background: linear-gradient(145deg, #1e3a8a, #1a2e6b);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2);
}

.badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: #e2e8f0;
  color: #334155;
}

.badge-new { background: #10b981; color: white; }
.badge-update { background: #f59e0b; color: white; }
.badge-stable { background: #3b82f6; color: white; }

.dark .badge { background: #334155; color: #cbd5e1; }
.dark .badge-new { background: #059669; }
.dark .badge-update { background: #d97706; }
.dark .badge-stable { background: #2563eb; }

.component-card h3 {
  font-size: 20px;
  font-weight: 650;
  color: #0f172a;
  margin-bottom: 12px;
  white-space: normal;
  word-break: break-word;
  overflow: visible;
}

.dark .component-card h3 {
  color: #f8fafc;
}

.demo-preview {
  flex: 1;
  margin-bottom: 16px;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.switch-demo {
  display: flex;
  justify-content: center;
}

.icon-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  color: var(--vp-c-text-1);
}

.dark .icon-group {
  color: var(--vp-c-text-1);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px dashed rgba(0, 0, 0, 0.06);
  padding-top: 16px;
}

.dark .card-footer {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.update-date {
  font-size: 13px;
  color: #64748b;
  font-weight: 450;
}

.dark .update-date {
  color: #94a3b8;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: #3b82f6;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
  border-bottom: none !important;
}

.dark .card-link {
  color: #60a5fa;
}

.card-link:hover {
  gap: 8px;
  color: #2563eb;
}

.dark .card-link:hover {
  color: #93c5fd;
}

.card-link .arrow {
  transition: transform 0.2s;
  font-size: 16px;
}

.card-link:hover .arrow {
  transform: translateX(4px);
}

.components-footer-note {
  text-align: center;
  margin-top: 48px;
  color: #64748b;
  font-size: 15px;
}

.dark .components-footer-note {
  color: #94a3b8;
}

.container h1 {
  color: #747bff;
}

/* 响应式 */
@media (max-width: 768px) {
  .components-showcase {
    padding: 50px 0;
  }
  .section-header h2 {
    font-size: 32px;
  }
  .components-grid {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
}

/* 底部 */
.footer-resources {
  background: #f9fafb;
  margin-top: 40px;
}

.dark .footer-resources {
  background: #0A0A0A;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.resources-column h4 {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.dark .resources-column h4 {
  color: #f1f5f9;
}

.resources-column ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-top: 16px;
}

.resources-column ul li {
  margin-bottom: 12px;
}

.resources-column ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  min-height: 22px;
}

.resources-column h4 {
  margin-bottom: 8px;
}

.icon-github,
.icon-gitee,
.icon-x,
.icon-npm,
.icon-log,
.icon-question,
.icon-bug {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.icon-github  { background-image: url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg'); }
.icon-gitee   { background-image: url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gitee.svg'); }
.icon-x       { background-image: url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/x.svg'); }
.icon-npm     { background-image: url('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/npm.svg'); }

.icon-github,
.icon-gitee,
.icon-x,
.icon-npm {
  filter: brightness(0) invert(1);
}

.icon-medium::before { content: 'M'; }
.icon-log::before { content: '📝'; }
.icon-question::before { content: '❓'; }
.icon-bug::before { content: '🐞'; }

@media (max-width: 768px) {
  .resources-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  }

  .resources-column h4 {
    font-size: 15px;
  }

  .resources-column a {
    font-size: 13px;
  }
}
</style>
