<template>
  <div class="demo-block">
    <!-- 标题 -->
    <div v-if="title" class="demo-title">
      {{ title }}
    </div>

    <!-- 描述 -->
    <div v-if="description" class="demo-description">
      {{ description }}
    </div>

    <!-- 演示区域 -->
    <div class="demo-preview">
      <slot name="demo" />
    </div>

    <!-- 分割线 -->
    <div class="demo-separator"></div>

    <!-- 代码区域 -->
    <div class="demo-code" v-if="code">
      <transition name="fade">
        <div v-show="showCode" class="code-container">
          <pre><code class="language-html" v-html="highlightedCode"></code></pre>
        </div>
      </transition>

      <div class="demo-toggle" @click="toggle">
        {{ showCode ? '收起代码' : '展开代码' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'

interface Props {
  title?: string
  description?: string
  code?: string
}

const props = defineProps<Props>()

const showCode = ref(false)
const toggle = () => (showCode.value = !showCode.value)

// 获取高亮后的代码
const highlightedCode = computed(() => {
  if (!props.code) return ''
  try {
    return Prism.highlight(props.code.trim(), Prism.languages.html, 'html')
  } catch (error) {
    console.error('Error highlighting code:', error)
    return props.code
  }
})

onMounted(() => {
  if (showCode.value) {
    nextTick(() => {
      Prism.highlightAll()
    })
  }
})

watch(showCode, (newVal) => {
  if (newVal) {
    nextTick(() => {
      Prism.highlightAll()
    })
  }
})
</script>

<style scoped>
.demo-block {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.demo-title {
  font-size: 16px;
  font-weight: 600;
  padding: 16px 20px 0;
}

.demo-description {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
  padding: 8px 20px 0;
}

.demo-preview {
  padding: 20px;
}

.demo-separator {
  border-top: 1px solid var(--vp-c-divider);
}

.demo-code {
  background-color: var(--vp-c-bg);
}

.code-container {
  background: #1e1e1e;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}

.code-container pre {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  background: transparent;
  border-radius: 0;
}

.code-container code {
  display: block;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
  text-align: left;
  white-space: pre;
  overflow-x: auto;
}

/* Prism.js 语法高亮样式覆盖 */
.code-container .token.tag,
.code-container .token.keyword {
  color: #569cd6;
}

.code-container .token.attr-name,
.code-container .token.selector {
  color: #9cdcfe;
}

.code-container .token.attr-value,
.code-container .token.string {
  color: #ce9178;
}

.code-container .token.punctuation {
  color: #d4d4d4;
}

.code-container .token.comment {
  color: #6a9955;
}

.demo-toggle {
  text-align: center;
  padding: 12px;
  cursor: pointer;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  border-top: 1px solid var(--vp-c-divider);
  transition: background-color 0.2s ease;
}

.demo-toggle:hover {
  background-color: var(--vp-c-bg-soft);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>