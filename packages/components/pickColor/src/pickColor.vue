<!-- pickColor.vue -->
<template>
  <div class="color-picker">
    <input type="color" v-model="localColor" @input="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '#409EFF' },
  rgba: { type: [String, Number], default: 1 }
})
const emit = defineEmits(['update:modelValue', 'change'])

const localColor = ref<string>(props.modelValue)

// 延迟初始化，确保父组件 v-model 已同步
onMounted(async () => {
  await nextTick()
  requestAnimationFrame(() => {
    try {
      let themeColor = props.modelValue

      // 若 props 仍是默认蓝色，则尝试从 localStorage 恢复
      if (!themeColor || themeColor === '#409EFF') {
        const layoutSetting = localStorage.getItem('layout-setting')
        if (layoutSetting) {
          const settings = JSON.parse(layoutSetting)
          if (settings.theme) {
            themeColor = settings.theme
          }
        }
      }

      localColor.value = themeColor
      applyGlobalColor(themeColor)
    } catch (e) {
      console.error('Failed to load theme from localStorage', e)
    }
  })
})

watch(
  () => props.modelValue,
  (v) => {
    if (v !== localColor.value) {
      localColor.value = v
    }
  }
)

watch(
  localColor,
  (v) => {
    emit('update:modelValue', v)
    emit('change', v)
    applyGlobalColor(v)
  },
  { immediate: true }
)

function applyGlobalColor(value: string) {
  if (!value) return
  const { r, g, b, a } = parseColor(value)
  const cssValue = `rgba(${r}, ${g}, ${b}, ${a})`

  document.documentElement.style.setProperty('--app-primary-color', cssValue)
  document.documentElement.style.setProperty('--el-color-primary', cssValue)
  document.documentElement.style.setProperty('--myswitch-active', cssValue)

  // 计算对比色
  const L = 0.299 * r + 0.587 * g + 0.114 * b
  const contrast = L > 186 ? '#000' : '#fff'
  document.documentElement.style.setProperty('--on-primary-text', contrast)

  // 保存到 localStorage
  try {
    let settings = {}
    const layoutSetting = localStorage.getItem('layout-setting')
    if (layoutSetting) {
      settings = JSON.parse(layoutSetting)
    }
    Object.assign(settings, { theme: value })
    localStorage.setItem('layout-setting', JSON.stringify(settings))
  } catch (e) {
    console.error('Failed to save theme to localStorage', e)
  }
}

function onChange() {
  // 已由 watch(localColor) 处理
}

function parseColor(value: string): { r: number; g: number; b: number; a: number } {
  let r = 64,
    g = 158,
    b = 255,
    a = 1

  if (/^#([0-9a-fA-F]{3,8})$/.test(value)) {
    let h = value.replace('#', '')
    if (h.length === 3) {
      h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
    }
    if (h.length >= 6) {
      r = parseInt(h.slice(0, 2), 16)
      g = parseInt(h.slice(2, 4), 16)
      b = parseInt(h.slice(4, 6), 16)
    }
    if (h.length === 8) {
      a = parseInt(h.slice(6, 8), 16) / 255
    } else {
      a = parseFloat(String(props.rgba)) || 1
    }
  } else {
    const m = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/)
    if (m) {
      r = parseInt(m[1])
      g = parseInt(m[2])
      b = parseInt(m[3])
      a = m[4] ? parseFloat(m[4]) : parseFloat(String(props.rgba)) || 1
    }
  }

  return { r, g, b, a }
}
</script>

<style scoped>
.color-picker {
  padding: 6px;
}
</style>
