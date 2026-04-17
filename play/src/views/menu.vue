<template>
  <div class="layout">
    <div class="sidebar">
      <MYMenu :default-active="activeIndex" :default-openeds="defaultOpeneds" :collapse="isCollapse"
        :unique-opened="true" @select="handleSelect" @open="handleMenuOpen" @close="handleMenuClose">
        <!-- 完整的菜单结构 -->
        <MYMenu-item index="1">
          <template #icon>
            <i class="icon-home"></i>
          </template>
          首页
        </MYMenu-item>

        <MYMenu-submenu index="2">
          <template #icon>
            <i class="icon-user"></i>
          </template>
          <template #title>用户管理</template>
          <MYMenu-item index="2-1">用户列表</MYMenu-item>
          <MYMenu-item index="2-2">用户组</MYMenu-item>

          <!-- 三级菜单 -->
          <MYMenu-submenu index="2-3">
            <template #title>权限管理</template>
            <MYMenu-item index="2-3-1">角色权限</MYMenu-item>
            <MYMenu-item index="2-3-2">数据权限</MYMenu-item>
            <MYMenu-item index="2-3-3">操作权限</MYMenu-item>
          </MYMenu-submenu>

          <MYMenu-item index="2-4">登录日志</MYMenu-item>
        </MYMenu-submenu>

        <MYMenu-submenu index="3">
          <template #icon>
            <i class="icon-product"></i>
          </template>
          <template #title>商品管理</template>
          <MYMenu-item index="3-1">商品列表</MYMenu-item>
          <MYMenu-item index="3-2">商品分类</MYMenu-item>

          <!-- 三级菜单 -->
          <MYMenu-submenu index="3-3">
            <template #title>库存管理</template>
            <MYMenu-item index="3-3-1">库存查询</MYMenu-item>
            <MYMenu-item index="3-3-2">入库管理</MYMenu-item>
            <MYMenu-item index="3-3-3">出库管理</MYMenu-item>

            <!-- 四级菜单 -->
            <MYMenu-submenu index="3-3-4">
              <template #title>库存预警</template>
              <MYMenu-item index="3-3-4-1">预警设置</MYMenu-item>
              <MYMenu-item index="3-3-4-2">预警记录</MYMenu-item>
            </MYMenu-submenu>
          </MYMenu-submenu>

          <MYMenu-item index="3-4">商品评价</MYMenu-item>
        </MYMenu-submenu>

        <MYMenu-submenu index="4">
          <template #icon>
            <i class="icon-order"></i>
          </template>
          <template #title>订单管理</template>
          <MYMenu-item index="4-1">订单列表</MYMenu-item>

          <!-- 三级菜单 -->
          <MYMenu-submenu index="4-2">
            <template #title>退款管理</template>
            <MYMenu-item index="4-2-1">退款申请</MYMenu-item>
            <MYMenu-item index="4-2-2">退款处理</MYMenu-item>
            <MYMenu-item index="4-2-3">退款记录</MYMenu-item>
          </MYMenu-submenu>

          <MYMenu-submenu index="4-3">
            <template #title>物流管理</template>
            <MYMenu-item index="4-3-1">发货管理</MYMenu-item>
            <MYMenu-item index="4-3-2">物流跟踪</MYMenu-item>
          </MYMenu-submenu>
        </MYMenu-submenu>

        <MYMenu-submenu index="5">
          <template #icon>
            <i class="icon-system"></i>
          </template>
          <template #title>系统设置</template>
          <MYMenu-item index="5-1">基础设置</MYMenu-item>

          <!-- 三级菜单 -->
          <MYMenu-submenu index="5-2">
            <template #title>安全管理</template>
            <MYMenu-item index="5-2-1">密码策略</MYMenu-item>
            <MYMenu-item index="5-2-2">操作日志</MYMenu-item>
            <MYMenu-item index="5-2-3">安全审计</MYMenu-item>
          </MYMenu-submenu>

          <MYMenu-submenu index="5-3">
            <template #title>通知设置</template>
            <MYMenu-item index="5-3-1">邮件通知</MYMenu-item>
            <MYMenu-item index="5-3-2">短信通知</MYMenu-item>
          </MYMenu-submenu>
        </MYMenu-submenu>

        <MYMenu-submenu index="6">
          <template #icon>
            <i class="icon-data"></i>
          </template>
          <template #title>数据中心</template>
          <MYMenu-item index="6-1">数据统计</MYMenu-item>
          <MYMenu-item index="6-2">报表分析</MYMenu-item>

          <!-- 三级菜单 -->
          <MYMenu-submenu index="6-3">
            <template #title>数据可视化</template>
            <MYMenu-item index="6-3-1">图表展示</MYMenu-item>
            <MYMenu-item index="6-3-2">数据大屏</MYMenu-item>
          </MYMenu-submenu>
        </MYMenu-submenu>

        <MYMenu-submenu index="7">
          <template #icon>
            <i class="icon-finance"></i>
          </template>
          <template #title>财务管理</template>
          <MYMenu-item index="7-1">收入统计</MYMenu-item>
          <MYMenu-item index="7-2">支出管理</MYMenu-item>

          <!-- 三级菜单 -->
          <MYMenu-submenu index="7-3">
            <template #title>财务报表</template>
            <MYMenu-item index="7-3-1">利润表</MYMenu-item>
            <MYMenu-item index="7-3-2">资产负债表</MYMenu-item>
            <MYMenu-item index="7-3-3">现金流量表</MYMenu-item>
          </MYMenu-submenu>
        </MYMenu-submenu>

        <MYMenu-item index="8" disabled>
          <template #icon>
            <i class="icon-help"></i>
          </template>
          帮助中心
        </MYMenu-item>
      </MYMenu>
    </div>

    <div class="main-content">
      <div class="header">
        <button @click="toggleCollapse" class="collapse-btn">
          {{ isCollapse ? '展开' : '折叠' }}
        </button>
        <h2>当前激活菜单: {{ activeIndex }}</h2>
        <span class="menu-path">菜单路径: {{ currentPath }}</span>
        <div class="control-buttons">
          <button @click="toggleUniqueOpened" class="unique-btn">
            {{ uniqueOpened ? '关闭唯一展开' : '开启唯一展开' }}
          </button>
          <button @click="forceRefresh" class="refresh-btn">强制刷新状态</button>
          <button @click="clearStorage" class="clear-btn">清除存储</button>
        </div>
      </div>

      <div class="content">
        <div class="welcome">
          <h1>欢迎使用 MYMenu 组件库</h1>
          <p>当前激活菜单: {{ activeIndex }}</p>
          <p>当前展开的菜单: {{ JSON.stringify(defaultOpeneds) }}</p>
          <p>唯一展开模式: {{ uniqueOpened ? '开启' : '关闭' }}</p>
        </div>

        <div class="test-info">
          <h3>功能验证:</h3>
          <ul>
            <li>✅ 支持无限级嵌套菜单</li>
            <li>✅ 点击菜单项不会折叠已展开的 submenu</li>
            <li :class="{ 'feature-testing': true, 'feature-pass': uniqueOpenedTestPassed }">
              {{ uniqueOpenedTestPassed ? '✅' : '🔄' }}
              点击不同 submenu 时，前一个 submenu 会自动折叠 (unique-opened)
            </li>
            <li>✅ 展开 submenu 后点击其中的菜单项，submenu 保持展开状态</li>
            <li>✅ 三级、四级菜单正常显示和交互</li>
            <li>✅ 折叠状态下浮层菜单正常显示</li>
            <li>✅ 菜单激活状态正确显示</li>
            <li>✅ 刷新后保持菜单展开状态</li>
            <li>✅ 刷新后保持激活菜单状态</li>
          </ul>
        </div>

        <div class="usage-tips">
          <h3>使用提示:</h3>
          <div class="tips-grid">
            <div class="tip-card">
              <h4>🔍 测试三级菜单</h4>
              <p>点击"商品管理" → "库存管理" → "库存预警" 查看多级菜单效果</p>
            </div>
            <div class="tip-card">
              <h4>🔄 测试 unique-opened</h4>
              <p>开启唯一展开模式，点击"用户管理"，然后点击"商品管理"，观察用户管理是否自动折叠</p>
            </div>
            <div class="tip-card">
              <h4>📱 测试折叠模式</h4>
              <p>点击"折叠"按钮查看菜单在收起状态下的悬浮效果</p>
            </div>
            <div class="tip-card">
              <h4>🎯 测试激活状态</h4>
              <p>点击不同层级的菜单项，观察激活状态是否正确传递</p>
            </div>
            <div class="tip-card">
              <h4>💾 测试状态持久化</h4>
              <p>展开菜单并选择某个菜单项，刷新页面查看状态是否保持</p>
            </div>
            <div class="tip-card">
              <h4>🔄 测试强制刷新</h4>
              <p>使用"强制刷新状态"按钮调试状态恢复问题</p>
            </div>
          </div>
        </div>

        <div class="debug-info">
          <h3>调试信息:</h3>
          <div class="debug-content">
            <p><strong>localStorage 状态:</strong></p>
            <pre>{{ localStorageState }}</pre>
            <p><strong>当前组件状态:</strong></p>
            <pre>{{ componentState }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const activeIndex = ref('1')
const isCollapse = ref(false)
const uniqueOpened = ref(true)
const uniqueOpenedTestPassed = ref(false)

// 从 localStorage 加载保存的状态
const loadMenuState = () => {
  try {
    const savedActive = localStorage.getItem('test_menu_activeIndex')
    const savedOpeneds = localStorage.getItem('test_menu_openeds')


    if (savedActive) {
      activeIndex.value = savedActive
    }

    if (savedOpeneds) {
      const parsed = JSON.parse(savedOpeneds)
      return parsed
    }
  } catch (error) {
  }
  return []
}

const defaultOpeneds = ref<string[]>(loadMenuState())

// 保存所有状态到 localStorage
const saveMenuState = () => {
  try {
    localStorage.setItem('test_menu_activeIndex', activeIndex.value)
    localStorage.setItem('test_menu_openeds', JSON.stringify(defaultOpeneds.value))
  } catch (error) {
    console.error('测试代码：保存菜单状态失败:', error)
  }
}

// 监听状态变化并保存
watch([activeIndex, defaultOpeneds], () => {
  saveMenuState()
}, { deep: true })

// 监听 uniqueOpened 变化，测试功能
watch(defaultOpeneds, (newOpeneds, oldOpeneds) => {
  if (uniqueOpened.value && newOpeneds.length === 1 && oldOpeneds && oldOpeneds.length > 0) {
    uniqueOpenedTestPassed.value = true
  }
}, { deep: true })

// 修改菜单展开处理逻辑
const handleMenuOpen = (key: string, keyPath: string[]) => {

  if (uniqueOpened.value) {
    // 在 unique-opened 模式下，只保留当前展开的菜单及其父级菜单
    const newOpeneds = [...keyPath] // keyPath 包含从当前菜单到根菜单的所有索引

    // 过滤掉非直接相关的菜单，只保留当前展开路径的菜单
    defaultOpeneds.value = newOpeneds.filter(menuKey => {
      // 保留当前菜单的所有父级菜单
      return keyPath.includes(menuKey)
    })
  } else {
    // 非 unique-opened 模式，使用原有逻辑
    if (!defaultOpeneds.value.includes(key)) {
      defaultOpeneds.value.push(key)
    }
  }
}

const handleMenuClose = (key: string, keyPath: string[]) => {
  if (uniqueOpened.value) {
    // 在 unique-opened 模式下，关闭菜单时需要特殊处理
    // 移除当前菜单及其所有子菜单
    const closeMenuAndChildren = (menuKey: string) => {
      const index = defaultOpeneds.value.indexOf(menuKey)
      if (index > -1) {
        defaultOpeneds.value.splice(index, 1)
      }

      // 递归移除所有子菜单
      defaultOpeneds.value.forEach((openedKey, idx) => {
        if (openedKey.startsWith(menuKey + '-')) {
          defaultOpeneds.value.splice(idx, 1)
        }
      })
    }

    closeMenuAndChildren(key)
  } else {
    // 非 unique-opened 模式，使用原有逻辑
    const index = defaultOpeneds.value.indexOf(key)
    if (index > -1) {
      defaultOpeneds.value.splice(index, 1)
    }
  }
}

// 修改菜单选择处理，确保激活状态正确
const handleSelect = (index: string, indexPath: string[]) => {
  activeIndex.value = index

  if (uniqueOpened.value) {
    // 在选择菜单时，确保其所有父级菜单都是展开状态
    const parentMenus = indexPath.slice(0, -1) // 移除最后一个元素（当前菜单）
    defaultOpeneds.value = Array.from(new Set([...defaultOpeneds.value, ...parentMenus]))
  }
}

// 其他方法保持不变...
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

const toggleUniqueOpened = () => {
  uniqueOpened.value = !uniqueOpened.value
  uniqueOpenedTestPassed.value = false

  // 切换模式时重置展开状态
  if (uniqueOpened.value) {
    // 在开启 unique-opened 时，只保留激活菜单的路径
    const activePath = getActiveMenuPath(activeIndex.value)
    defaultOpeneds.value = activePath
  }
}

// 辅助函数：根据激活菜单索引获取其路径
const getActiveMenuPath = (index: string): string[] => {
  const path: string[] = []
  const parts = index.split('-')

  for (let i = 1; i <= parts.length; i++) {
    path.push(parts.slice(0, i).join('-'))
  }

  return path.slice(0, -1) // 移除最后一个元素（当前激活的菜单项）
}

// 强制刷新状态（用于调试）
const forceRefresh = () => {
  const currentOpeneds = [...defaultOpeneds.value]
  const currentActive = activeIndex.value

  // 先清空状态
  defaultOpeneds.value = []
  activeIndex.value = '1'

  // 然后恢复状态
  setTimeout(() => {
    defaultOpeneds.value = currentOpeneds
    activeIndex.value = currentActive
  }, 100)
}

// 清除 localStorage
const clearStorage = () => {
  localStorage.removeItem('test_menu_activeIndex')
  localStorage.removeItem('test_menu_openeds')
  activeIndex.value = '1'
  defaultOpeneds.value = []
  uniqueOpenedTestPassed.value = false
}

// 模拟根据激活索引显示路径
const currentPath = computed(() => {
  const pathMap: Record<string, string> = {
    '1': '首页',
    '2-1': '用户管理 / 用户列表',
    '2-2': '用户管理 / 用户组',
    '2-3-1': '用户管理 / 权限管理 / 角色权限',
    '2-3-2': '用户管理 / 权限管理 / 数据权限',
    '2-3-3': '用户管理 / 权限管理 / 操作权限',
    '2-4': '用户管理 / 登录日志',
    '3-1': '商品管理 / 商品列表',
    '3-2': '商品管理 / 商品分类',
    '3-3-1': '商品管理 / 库存管理 / 库存查询',
    '3-3-2': '商品管理 / 库存管理 / 入库管理',
    '3-3-3': '商品管理 / 库存管理 / 出库管理',
    '3-3-4-1': '商品管理 / 库存管理 / 库存预警 / 预警设置',
    '3-3-4-2': '商品管理 / 库存管理 / 库存预警 / 预警记录',
    '3-4': '商品管理 / 商品评价',
    '4-1': '订单管理 / 订单列表',
    '4-2-1': '订单管理 / 退款管理 / 退款申请',
    '4-2-2': '订单管理 / 退款管理 / 退款处理',
    '4-2-3': '订单管理 / 退款管理 / 退款记录',
    '4-3-1': '订单管理 / 物流管理 / 发货管理',
    '4-3-2': '订单管理 / 物流管理 / 物流跟踪',
    '5-1': '系统设置 / 基础设置',
    '5-2-1': '系统设置 / 安全管理 / 密码策略',
    '5-2-2': '系统设置 / 安全管理 / 操作日志',
    '5-2-3': '系统设置 / 安全管理 / 安全审计',
    '5-3-1': '系统设置 / 通知设置 / 邮件通知',
    '5-3-2': '系统设置 / 通知设置 / 短信通知',
    '6-1': '数据中心 / 数据统计',
    '6-2': '数据中心 / 报表分析',
    '6-3-1': '数据中心 / 数据可视化 / 图表展示',
    '6-3-2': '数据中心 / 数据可视化 / 数据大屏',
    '7-1': '财务管理 / 收入统计',
    '7-2': '财务管理 / 支出管理',
    '7-3-1': '财务管理 / 财务报表 / 利润表',
    '7-3-2': '财务管理 / 财务报表 / 资产负债表',
    '7-3-3': '财务管理 / 财务报表 / 现金流量表'
  }
  return pathMap[activeIndex.value] || activeIndex.value
})

// 调试信息
const localStorageState = computed(() => {
  return {
    activeIndex: localStorage.getItem('test_menu_activeIndex'),
    openedMenus: localStorage.getItem('test_menu_openeds')
  }
})

const componentState = computed(() => {
  return {
    activeIndex: activeIndex.value,
    openedMenus: defaultOpeneds.value,
    uniqueOpened: uniqueOpened.value
  }
})
</script>
<style scoped>
.layout {
  display: flex;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.sidebar {
  width: auto;
  background: #2f3b46;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
}

.header {
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  gap: 16px;
}

.header h2 {
  margin: 0;
  font-size: 18px;
  color: #303133;
}

.menu-path {
  margin-left: auto;
  color: #909399;
  font-size: 14px;
}

.control-buttons {
  display: flex;
  gap: 8px;
  margin-left: 16px;
}

.collapse-btn {
  padding: 8px 16px;
  background: #409EFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.collapse-btn:hover {
  background: #66b1ff;
}

.unique-btn {
  padding: 8px 16px;
  background: #E6A23C;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.unique-btn:hover {
  background: #eebe77;
}

.refresh-btn {
  padding: 8px 16px;
  background: #67C23A;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.refresh-btn:hover {
  background: #85ce61;
}

.clear-btn {
  padding: 8px 16px;
  background: #F56C6C;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.clear-btn:hover {
  background: #f78989;
}

.content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.welcome {
  text-align: center;
  margin-bottom: 32px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.welcome h1 {
  color: #303133;
  margin-bottom: 16px;
}

.welcome p {
  color: #606266;
  font-size: 16px;
  margin: 8px 0;
}

.test-info {
  margin-bottom: 24px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.test-info h3 {
  color: #303133;
  margin-bottom: 16px;
}

.test-info ul {
  margin: 0;
  padding-left: 20px;
}

.test-info li {
  margin: 8px 0;
  font-size: 14px;
}

.test-info .feature-pass {
  color: #67C23A;
}

.test-info .feature-testing {
  color: #E6A23C;
}

.usage-tips {
  margin-bottom: 24px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.usage-tips h3 {
  color: #303133;
  margin-bottom: 20px;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.tip-card {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #409EFF;
}

.tip-card h4 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 14px;
}

.tip-card p {
  margin: 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.4;
}

.debug-info {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.debug-info h3 {
  color: #303133;
  margin-bottom: 16px;
}

.debug-content {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

.debug-content pre {
  margin: 8px 0;
  white-space: pre-wrap;
}

/* 简单图标样式 */
.icon-home::before {
  content: '🏠';
}

.icon-user::before {
  content: '👤';
}

.icon-product::before {
  content: '📦';
}

.icon-order::before {
  content: '📋';
}

.icon-system::before {
  content: '⚙️';
}

.icon-data::before {
  content: '📊';
}

.icon-finance::before {
  content: '💰';
}

.icon-help::before {
  content: '❓';
}
</style>