<!-- .vitepress/theme/components/IconGallery.vue -->
<script setup>
import { defineAsyncComponent, ref, computed } from 'vue'
import { useClipboard } from '@vueuse/core'

// 动态导入所有图标
const iconModules = import.meta.glob('@icons/*.vue', { eager: false })

// 更新 excludedFiles
const excludedFiles = ['aMYIconWrapper.vue', 'IconBase.vue']

const { copy, isSupported } = useClipboard()

// 提取所有图标
const allIcons = Object.entries(iconModules)
  .filter(([path]) => {
    const fileName = path.split('/').pop()
    return !excludedFiles.includes(fileName)
  })
  .map(([path, loader]) => {
    const baseName = path.split('/').pop().replace('.vue', '')  // e.g., 'arrowleft'
    // 转换 baseName 到 PascalCase
    const pascalName = baseName
      .split(/[-_]/)  // 分割连字符或下划线
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
    return {
      name: baseName,  // 原名用于匹配
      displayName: pascalName,  // 显示用 PascalCase
      component: defineAsyncComponent(loader),
      code: `<MY${pascalName} />`
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

// 分类定义（小写匹配，修正拼写如 'bell-filled' 而非 'bellfilled'）
const categoryDefinitions = [
  { name: 'Arrows and Navigation', icons: ['arrowleft', 'arrowright', 'arrowdown', 'arrowup', 'caretdown', 'caretleft', 'caretright', 'caretup', 'downs', 'refreshleft', 'refreshright', 'down'] },
  { name: 'Actions and Operations', icons: ['plus', 'minus', 'circleplus', 'circleminus', 'check', 'circlecheck', 'circlecheckmark', 'edit', 'delete', 'deletecircle', 'download', 'downloadminimalistic', 'uploadminimalistic', 'attach', 'link', 'linkalt', 'linkA', 'upload'] },
  { name: 'Media and Playback', icons: ['mediabackward', 'mediaremoable', 'circlepause', 'circleplay', 'circlestop', 'fullscreen', 'fullscreenA', 'fullscreencircle', 'fullscreenexitalt', 'expand', 'fold'] },
  { name: 'Notifications and Alerts', icons: ['bell', 'bell-filled', 'bell-slash', 'notificationremove', 'notificationunread', 'circleinformation', 'circlequestion', 'warning', 'circlexmark'] },
  { name: 'Users and People', icons: ['user', 'useralt', 'userA', 'femaleusercircle', 'femaleuser', 'female', 'male', 'circleuser'] },
  { name: 'Chat and Communication', icons: ['chatdots', 'chatrounddots', 'chatlinedots', 'messagesearch', 'microphone', 'microphoneslash'] },
  { name: 'Devices and Tech', icons: ['computer', 'computerchip', 'lock', 'lockalt', 'lockslash', 'unlock', 'unlockalt'] },
  { name: 'Weather', icons: ['weatherrain', 'weathersymbol', 'weatherwindy', 'weathersunshine', 'weatherCloud'] },
  { name: 'Clocks and Time', icons: ['clockseven', 'clockten', 'clockthree', 'clockthreethirty', 'clocktwelvethirty', 'clocktwo'] },
  { name: 'Views and Visibility', icons: ['viewHide', 'viewEye'] },
  { name: 'Lists and Grids', icons: ['listulalt', 'listul', 'list', 'grid'] },
  { name: 'Loading and Progress', icons: ['loading', 'loadingA', 'loadingB'] },
  { name: 'Settings and Sorting', icons: ['settings', 'settingsA', 'settingsB', 'sortalt', 'sort'] },
  { name: 'Stars and Ratings', icons: ['star', 'starA', 'staralt'] },
  { name: 'Houses and Locations', icons: ['housecircle', 'housewindow', 'house', 'aim', 'pointer', 'pointerA', 'positionbutton'] },
  { name: 'Meters and Gauges', icons: ['odometer', 'odometertext'] },
  { name: 'Closes and Circles', icons: ['circleclose', 'close'] },
  { name: 'Search', icons: ['searchalt', 'search'] }
]

// 分配分类
const categories = categoryDefinitions.map(cat => ({
  name: cat.name,
  icons: allIcons.filter(icon => cat.icons.includes(icon.name))
})).filter(cat => cat.icons.length > 0)

// 搜索
const search = ref('')
const filteredCategories = computed(() => {
  if (!search.value) return categories
  const lowerSearch = search.value.toLowerCase()
  return categories.map(cat => ({
    ...cat,
    icons: cat.icons.filter(icon => icon.displayName.toLowerCase().includes(lowerSearch) || icon.name.toLowerCase().includes(lowerSearch))
  })).filter(cat => cat.icons.length > 0)
})

const handleCopy = async (code, name) => {
  try {
    await navigator.clipboard.writeText(code)
    // 自定义轻量提示
    const toast = document.createElement('div')
    toast.textContent = `✓ 已复制 ${name}`
    toast.style.cssText = `
      position: fixed; top: 20px; right: 20px; 
      background: #52c41a; color: white; 
      padding: 8px 16px; border-radius: 4px; 
      font-size: 14px; z-index: 10000;
      animation: fadeInOut 2s forwards;
    `
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 2000)
  } catch (err) {
    alert('复制失败，请手动复制: ' + code)
  }
}
</script>

<template>
  <div class="vp-icon-gallery-wrapper">
    <input v-model="search" placeholder="搜索图标..." class="search-input" />

    <div v-for="cat in filteredCategories" :key="cat.name" class="category-section">
      <h2>{{ cat.name }} ({{ cat.icons.length }})</h2>
      <div class="icon-gallery">
        <div
          v-for="{ displayName, component: Icon, code } in cat.icons"
          :key="displayName"
          class="icon-item"
          @click="handleCopy(code, displayName)"
          :title="`点击复制: ${code}`"
        >
          <div class="icon-wrapper">
            <component :is="Icon" :size="28" color="#666666" /> <!-- 添加 color prop 统一颜色为灰色 -->
          </div>
          <p class="icon-name">{{ displayName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-icon-gallery-wrapper {
  margin: 24px 0;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  margin-bottom: 24px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.category-section {
  margin-bottom: 32px;
}

.category-section h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
}

.icon-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 calc(12.5% - 20px * 7 / 8); /* 一行8个 */
  min-width: 80px;
  padding: 12px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  border: 1px solid transparent;
}

.icon-item:hover {
  background-color: rgba(0, 0, 0, 0.04);
  border-color: #d9d9d9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  color: #666666; /* CSS 继承备份，如果 prop 不工作 */
}

.icon-name {
  margin: 0;
  font-size: 12px;
  color: #555;
  word-break: break-all;
  text-align: center;
  line-height: 1.4;
}
</style>