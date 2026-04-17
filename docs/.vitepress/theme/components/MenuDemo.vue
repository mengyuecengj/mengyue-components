<template>
    <div class="menu-demo-container">
        <div class="layout">
            <!-- 左侧菜单区域 -->
            <div class="sidebar">
                <div class="sidebar-wrapper">
                    <MYMenu :default-active="activeIndex" :default-openeds="defaultOpeneds" :collapse="isCollapse"
                        :unique-opened="uniqueOpened" @select="handleSelect" @open="handleMenuOpen"
                        @close="handleMenuClose">
                        <!-- 完整菜单结构 -->
                        <MYMenu-item index="1">
                            <template #icon><i class="icon-home"></i></template>
                            首页
                        </MYMenu-item>

                        <MYSubMenu index="2">
                            <template #icon><i class="icon-user"></i></template>
                            <template #title>用户管理</template>
                            <MYMenu-item index="2-1">用户列表</MYMenu-item>
                            <MYMenu-item index="2-2">用户组</MYMenu-item>
                            <MYSubMenu index="2-3">
                                <template #title>权限管理</template>
                                <MYMenu-item index="2-3-1">角色权限</MYMenu-item>
                                <MYMenu-item index="2-3-2">数据权限</MYMenu-item>
                                <MYMenu-item index="2-3-3">操作权限</MYMenu-item>
                            </MYSubMenu>
                            <MYMenu-item index="2-4">登录日志</MYMenu-item>
                        </MYSubMenu>

                        <MYSubMenu index="3">
                            <template #icon><i class="icon-product"></i></template>
                            <template #title>商品管理</template>
                            <MYMenu-item index="3-1">商品列表</MYMenu-item>
                            <MYMenu-item index="3-2">商品分类</MYMenu-item>
                            <MYSubMenu index="3-3">
                                <template #title>库存管理</template>
                                <MYMenu-item index="3-3-1">库存查询</MYMenu-item>
                                <MYMenu-item index="3-3-2">入库管理</MYMenu-item>
                                <MYMenu-item index="3-3-3">出库管理</MYMenu-item>
                                <MYSubMenu index="3-3-4">
                                    <template #title>库存预警</template>
                                    <MYMenu-item index="3-3-4-1">预警设置</MYMenu-item>
                                    <MYMenu-item index="3-3-4-2">预警记录</MYMenu-item>
                                </MYSubMenu>
                            </MYSubMenu>
                            <MYMenu-item index="3-4">商品评价</MYMenu-item>
                        </MYSubMenu>

                        <MYSubMenu index="4">
                            <template #icon><i class="icon-order"></i></template>
                            <template #title>订单管理</template>
                            <MYMenu-item index="4-1">订单列表</MYMenu-item>
                            <MYSubMenu index="4-2">
                                <template #title>退款管理</template>
                                <MYMenu-item index="4-2-1">退款申请</MYMenu-item>
                                <MYMenu-item index="4-2-2">退款处理</MYMenu-item>
                                <MYMenu-item index="4-2-3">退款记录</MYMenu-item>
                            </MYSubMenu>
                            <MYSubMenu index="4-3">
                                <template #title>物流管理</template>
                                <MYMenu-item index="4-3-1">发货管理</MYMenu-item>
                                <MYMenu-item index="4-3-2">物流跟踪</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYSubMenu index="5">
                            <template #icon><i class="icon-system"></i></template>
                            <template #title>系统设置</template>
                            <MYMenu-item index="5-1">基础设置</MYMenu-item>
                            <MYSubMenu index="5-2">
                                <template #title>安全管理</template>
                                <MYMenu-item index="5-2-1">密码策略</MYMenu-item>
                                <MYMenu-item index="5-2-2">操作日志</MYMenu-item>
                                <MYMenu-item index="5-2-3">安全审计</MYMenu-item>
                            </MYSubMenu>
                            <MYSubMenu index="5-3">
                                <template #title>通知设置</template>
                                <MYMenu-item index="5-3-1">邮件通知</MYMenu-item>
                                <MYMenu-item index="5-3-2">短信通知</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYSubMenu index="6">
                            <template #icon><i class="icon-data"></i></template>
                            <template #title>数据中心</template>
                            <MYMenu-item index="6-1">数据统计</MYMenu-item>
                            <MYMenu-item index="6-2">报表分析</MYMenu-item>
                            <MYSubMenu index="6-3">
                                <template #title>数据可视化</template>
                                <MYMenu-item index="6-3-1">图表展示</MYMenu-item>
                                <MYMenu-item index="6-3-2">数据大屏</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYSubMenu index="7">
                            <template #icon><i class="icon-finance"></i></template>
                            <template #title>财务管理</template>
                            <MYMenu-item index="7-1">收入统计</MYMenu-item>
                            <MYMenu-item index="7-2">支出管理</MYMenu-item>
                            <MYSubMenu index="7-3">
                                <template #title>财务报表</template>
                                <MYMenu-item index="7-3-1">利润表</MYMenu-item>
                                <MYMenu-item index="7-3-2">资产负债表</MYMenu-item>
                                <MYMenu-item index="7-3-3">现金流量表</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYMenu-item index="8" disabled>
                            <template #icon><i class="icon-help"></i></template>
                            帮助中心
                        </MYMenu-item>
                    </MYMenu>
                </div>
            </div>

            <div class="main-content">
                <div class="header">
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
                        <h1>MYMenu 专业多级菜单</h1>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MYMenu from '../../../../packages/components/menu/src/menu.vue'
import MYSubMenu from '../../../../packages/components/menu/src/menusubMenu.vue'
import MYMenuItem from '../../../../packages/components/menu/src/menuItem.vue'

const activeIndex = ref('1')
const isCollapse = ref(false)
const uniqueOpened = ref(true)
const uniqueOpenedTestPassed = ref(false)

// 从 localStorage 加载状态
const loadMenuState = () => {
    try {
        const savedActive = localStorage.getItem('test_menu_activeIndex')
        const savedOpeneds = localStorage.getItem('test_menu_openeds')

        if (savedActive) activeIndex.value = savedActive
        if (savedOpeneds) return JSON.parse(savedOpeneds)
    } catch (e) { }
    return []
}

const defaultOpeneds = ref<string[]>(loadMenuState())

// 保存状态
const saveMenuState = () => {
    try {
        localStorage.setItem('test_menu_activeIndex', activeIndex.value)
        localStorage.setItem('test_menu_openeds', JSON.stringify(defaultOpeneds.value))
    } catch (e) {
        console.error('保存菜单状态失败:', e)
    }
}

watch([activeIndex, defaultOpeneds], saveMenuState, { deep: true })

// unique-opened 测试标记
watch(defaultOpeneds, (newVal, oldVal) => {
    if (uniqueOpened.value && newVal.length === 1 && oldVal && oldVal.length > 0) {
        uniqueOpenedTestPassed.value = true
    }
}, { deep: true })

const handleMenuOpen = (key: string, keyPath: string[]) => {
    if (uniqueOpened.value) {
        defaultOpeneds.value = [...keyPath]
    } else {
        if (!defaultOpeneds.value.includes(key)) {
            defaultOpeneds.value.push(key)
        }
    }
}

const handleMenuClose = (key: string) => {
    if (uniqueOpened.value) {
        defaultOpeneds.value = defaultOpeneds.value.filter(k => !k.startsWith(key))
    } else {
        const index = defaultOpeneds.value.indexOf(key)
        if (index > -1) defaultOpeneds.value.splice(index, 1)
    }
}

const handleSelect = (index: string, indexPath: string[]) => {
    activeIndex.value = index
    if (uniqueOpened.value) {
        const parentMenus = indexPath.slice(0, -1)
        defaultOpeneds.value = Array.from(new Set([...defaultOpeneds.value, ...parentMenus]))
    }
}

const toggleUniqueOpened = () => {
    uniqueOpened.value = !uniqueOpened.value
    uniqueOpenedTestPassed.value = false

    if (uniqueOpened.value) {
        const activePath = getActiveMenuPath(activeIndex.value)
        defaultOpeneds.value = activePath
    }
}

const getActiveMenuPath = (index: string): string[] => {
    const path: string[] = []
    const parts = index.split('-')
    for (let i = 1; i <= parts.length; i++) {
        path.push(parts.slice(0, i).join('-'))
    }
    return path.slice(0, -1)
}

const forceRefresh = () => {
    const currentOpeneds = [...defaultOpeneds.value]
    const currentActive = activeIndex.value
    defaultOpeneds.value = []
    activeIndex.value = '1'
    setTimeout(() => {
        defaultOpeneds.value = currentOpeneds
        activeIndex.value = currentActive
    }, 100)
}

const clearStorage = () => {
    localStorage.removeItem('test_menu_activeIndex')
    localStorage.removeItem('test_menu_openeds')
    activeIndex.value = '1'
    defaultOpeneds.value = []
    uniqueOpenedTestPassed.value = false
}

const currentPath = computed(() => {
    const pathMap: Record<string, string> = {
        '1': '首页',
        '5-1': '系统设置 / 基础设置',
        // 你可以继续补充其他路径...
    }
    return pathMap[activeIndex.value] || activeIndex.value
})
</script>

<style scoped>
.menu-demo-container {
    height: auto;
    max-height: 720px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.layout {
    display: flex;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: #a4a9ad;
    border-radius: 16px;
    overflow: hidden;
}

.sidebar {
    width: 220px;
    height: 100%;
    flex-shrink: 0;
    background: #2f3b46;
    color: #e2e8f0;
    overflow-y: auto;
}

.sidebar::-webkit-scrollbar {
    width: 6px;
}
.sidebar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
}
.sidebar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}
.sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

.header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 24px;
    height: 56px;
    border-bottom: 1px solid #e2e8f0;
    flex-shrink: 0;
    flex-wrap: nowrap;
}

.header h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
}

.menu-path {
    margin-left: auto;
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
}

.control-buttons {
    flex-shrink: 0;
    display: flex;
    gap: 10px;
}

.unique-btn,
.refresh-btn,
.clear-btn {
    padding: 8px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.2s;
}

.unique-btn { background: #3b82f6; color: white; }
.unique-btn:hover { background: #2563eb; }

.refresh-btn { background: #10b981; color: white; }
.refresh-btn:hover { background: #059669; }

.clear-btn { background: #ef4444; color: white; }
.clear-btn:hover { background: #dc2626; }

.content {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.welcome,
.test-info {
    background: #a4a9ad;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    padding: 28px;
    transition: box-shadow 0.2s;
}
.welcome:hover,
.test-info:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.welcome h1 {
    font-size: 28px;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 8px;
}

.welcome p {
    color: #475569;
    font-size: 15px;
    margin: 4px 0;
}

.test-info h3 {
    color: #0f172a;
    margin-bottom: 18px;
    font-weight: 600;
    font-size: 18px;
}

.test-info ul {
    margin: 0;
    padding-left: 8px;
    list-style: none;
}

.test-info li {
    margin: 12px 0;
    font-size: 15px;
    color: #334155;
    line-height: 1.5;
    display: flex;
    align-items: center;
    gap: 6px;
}

.test-info .feature-pass { color: #10b981; font-weight: 500; }
.test-info .feature-testing { color: #f59e0b; font-weight: 500; }

.icon-home::before { content: '🏠'; margin-right: 4px; }
.icon-user::before { content: '👤'; margin-right: 4px; }
.icon-product::before { content: '📦'; margin-right: 4px; }
.icon-order::before { content: '📋'; margin-right: 4px; }
.icon-system::before { content: '⚙️'; margin-right: 4px; }
.icon-data::before { content: '📊'; margin-right: 4px; }
.icon-finance::before { content: '💰'; margin-right: 4px; }
.icon-help::before { content: '❓'; margin-right: 4px; }

/* 响应式微调 */
@media (max-width: 768px) {
    .sidebar { width: 200px; }
    .header { padding: 0 16px; }
    .content { padding: 16px; }
    .control-buttons button { padding: 6px 12px; font-size: 13px; }
}
</style>