---
layout: home

title: mengyue-docs
description: Next-generation front-end build tool

hero:
  name: mengyue-plus
  text: 
  tagline: A simple, reliable, and stable component library designed for modern web development, empowering developers to build applications faster
  actions:
    - theme: brand
      text: Get Started
      link: /components/FastStart
    - theme: alt
      text: Design Guidelines
      link: /design/FastRead

features:
  - icon: 🚀
    title: Instant Hot Reload
    details: Millisecond-level hot updates powered by native ESM for an exceptionally smooth development experience
  - icon: ⚡
    title: Out of the Box
    details: Complete development experience with TypeScript and modern tooling
  - icon: 🔥
    title: Smart Build
    details: Pre-configured Rollup setup with support for multi-page apps and library mode
  - icon: 🛠️
    title: Rich Components
    details: Comprehensive component system that easily extends your application's capabilities
  - icon: 📦
    title: Optimized Output
    details: Intelligent code splitting and asset optimization for peak production performance
  - icon: 🌐
    title: Modern Standards
    details: Full support for modern web standards including ES Modules and TypeScript
---

<div class="custom-home">
  <!-- Features Section -->
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2>Why Choose mengyue-docs?</h2>
        <p>The build tool engineered for modern front-end development</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Lightweight</h3>
          <p>Includes icons with KB-level bundle size for lightning-fast installation.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h3>Easy Adoption</h3>
          <p>Supports both global and on-demand imports for flexible integration.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>Developer Friendly</h3>
          <p>Comprehensive documentation with detailed API references and usage examples for quick onboarding.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Code Example Section -->
  <section class="demo-section">
    <div class="container">
      <div class="demo-content">
        <div class="demo-text">
          <h2>Simple Configuration</h2>
          <p>Get started with just a few lines of configuration</p>
        </div>
        <div class="code-preview">
            <pre>
              <code class="language-javascript">
                Implement powerful features with minimal markup.
                Achieve maximum functionality with minimal code.
              </code>
            </pre>
        </div>
      </div>
    </div>
  </section>
  <!-- Bottom CTA -->
  <section class="cta-section">
    <div class="container">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of developers building the future with our next-generation toolkit</p>
      <div class="cta-actions">
        <MYa color="#fff" underline href="/mengyue-components/plus/FastStart" class="btn btn-large btn-primary">Get Started</MYa>
        <MYa target="__blank" rel="noopener noreferrer" underline href="https://github.com/mengyuecengj/mengyue-components" class="btn btn-large btn-secondary">View Source</MYa>
      </div>
    </div>
  </section>
</div>

<script setup>
import MYa from '../../packages/components/a/src/a.vue'
</script>