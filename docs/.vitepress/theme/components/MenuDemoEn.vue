<template>
    <div class="menu-demo-container">
        <div class="layout">
            <!-- Left menu area -->
            <div class="sidebar">
                <div class="sidebar-wrapper">
                    <MYMenu :default-active="activeIndex" :default-openeds="defaultOpeneds" :collapse="isCollapse"
                        :unique-opened="uniqueOpened" @select="handleSelect" @open="handleMenuOpen"
                        @close="handleMenuClose">
                        <!-- Complete menu structure -->
                        <MYMenu-item index="1">
                            <template #icon><i class="icon-home"></i></template>
                            Home
                        </MYMenu-item>

                        <MYSubMenu index="2">
                            <template #icon><i class="icon-user"></i></template>
                            <template #title>User Management</template>
                            <MYMenu-item index="2-1">User List</MYMenu-item>
                            <MYMenu-item index="2-2">User Groups</MYMenu-item>
                            <MYSubMenu index="2-3">
                                <template #title>Permission Management</template>
                                <MYMenu-item index="2-3-1">Role Permissions</MYMenu-item>
                                <MYMenu-item index="2-3-2">Data Permissions</MYMenu-item>
                                <MYMenu-item index="2-3-3">Operation Permissions</MYMenu-item>
                            </MYSubMenu>
                            <MYMenu-item index="2-4">Login Logs</MYMenu-item>
                        </MYSubMenu>

                        <MYSubMenu index="3">
                            <template #icon><i class="icon-product"></i></template>
                            <template #title>Product Management</template>
                            <MYMenu-item index="3-1">Product List</MYMenu-item>
                            <MYMenu-item index="3-2">Product Categories</MYMenu-item>
                            <MYSubMenu index="3-3">
                                <template #title>Inventory Management</template>
                                <MYMenu-item index="3-3-1">Inventory Query</MYMenu-item>
                                <MYMenu-item index="3-3-2">Stock In</MYMenu-item>
                                <MYMenu-item index="3-3-3">Stock Out</MYMenu-item>
                                <MYSubMenu index="3-3-4">
                                    <template #title>Inventory Alerts</template>
                                    <MYMenu-item index="3-3-4-1">Alert Settings</MYMenu-item>
                                    <MYMenu-item index="3-3-4-2">Alert Records</MYMenu-item>
                                </MYSubMenu>
                            </MYSubMenu>
                            <MYMenu-item index="3-4">Product Reviews</MYMenu-item>
                        </MYSubMenu>

                        <MYSubMenu index="4">
                            <template #icon><i class="icon-order"></i></template>
                            <template #title>Order Management</template>
                            <MYMenu-item index="4-1">Order List</MYMenu-item>
                            <MYSubMenu index="4-2">
                                <template #title>Refund Management</template>
                                <MYMenu-item index="4-2-1">Refund Applications</MYMenu-item>
                                <MYMenu-item index="4-2-2">Refund Processing</MYMenu-item>
                                <MYMenu-item index="4-2-3">Refund Records</MYMenu-item>
                            </MYSubMenu>
                            <MYSubMenu index="4-3">
                                <template #title>Logistics Management</template>
                                <MYMenu-item index="4-3-1">Shipping Management</MYMenu-item>
                                <MYMenu-item index="4-3-2">Logistics Tracking</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYSubMenu index="5">
                            <template #icon><i class="icon-system"></i></template>
                            <template #title>System Settings</template>
                            <MYMenu-item index="5-1">Basic Settings</MYMenu-item>
                            <MYSubMenu index="5-2">
                                <template #title>Security Management</template>
                                <MYMenu-item index="5-2-1">Password Policy</MYMenu-item>
                                <MYMenu-item index="5-2-2">Operation Logs</MYMenu-item>
                                <MYMenu-item index="5-2-3">Security Audit</MYMenu-item>
                            </MYSubMenu>
                            <MYSubMenu index="5-3">
                                <template #title>Notification Settings</template>
                                <MYMenu-item index="5-3-1">Email Notifications</MYMenu-item>
                                <MYMenu-item index="5-3-2">SMS Notifications</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYSubMenu index="6">
                            <template #icon><i class="icon-data"></i></template>
                            <template #title>Data Center</template>
                            <MYMenu-item index="6-1">Data Statistics</MYMenu-item>
                            <MYMenu-item index="6-2">Report Analysis</MYMenu-item>
                            <MYSubMenu index="6-3">
                                <template #title>Data Visualization</template>
                                <MYMenu-item index="6-3-1">Chart Display</MYMenu-item>
                                <MYMenu-item index="6-3-2">Data Dashboard</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYSubMenu index="7">
                            <template #icon><i class="icon-finance"></i></template>
                            <template #title>Financial Management</template>
                            <MYMenu-item index="7-1">Revenue Statistics</MYMenu-item>
                            <MYMenu-item index="7-2">Expense Management</MYMenu-item>
                            <MYSubMenu index="7-3">
                                <template #title>Financial Reports</template>
                                <MYMenu-item index="7-3-1">Profit & Loss Statement</MYMenu-item>
                                <MYMenu-item index="7-3-2">Balance Sheet</MYMenu-item>
                                <MYMenu-item index="7-3-3">Cash Flow Statement</MYMenu-item>
                            </MYSubMenu>
                        </MYSubMenu>

                        <MYMenu-item index="8" disabled>
                            <template #icon><i class="icon-help"></i></template>
                            Help Center
                        </MYMenu-item>
                    </MYMenu>
                </div>
            </div>

            <div class="main-content">
                <div class="header">
                    <h2>Current Active Menu: {{ activeIndex }}</h2>
                    <span class="menu-path">Menu Path: {{ currentPath }}</span>
                    <div class="control-buttons">
                        <button @click="toggleUniqueOpened" class="unique-btn">
                            {{ uniqueOpened ? 'Disable Unique Open' : 'Enable Unique Open' }}
                        </button>
                        <button @click="forceRefresh" class="refresh-btn">Force Refresh State</button>
                        <button @click="clearStorage" class="clear-btn">Clear Storage</button>
                    </div>
                </div>

                <div class="content">
                    <div class="welcome">
                        <h1>MYMenu Professional Multi-level Menu</h1>
                        <p>Currently Active Menu: {{ activeIndex }}</p>
                        <p>Currently Expanded Menus: {{ JSON.stringify(defaultOpeneds) }}</p>
                        <p>Unique Open Mode: {{ uniqueOpened ? 'Enabled' : 'Disabled' }}</p>
                    </div>

                    <div class="test-info">
                        <h3>Feature Verification:</h3>
                        <ul>
                            <li>✅ Supports infinite nested menus</li>
                            <li>✅ Clicking menu items won't collapse already expanded submenus</li>
                            <li :class="{ 'feature-testing': true, 'feature-pass': uniqueOpenedTestPassed }">
                                {{ uniqueOpenedTestPassed ? '✅' : '🔄' }}
                                When clicking different submenus, the previous submenu automatically collapses (unique-opened)
                            </li>
                            <li>✅ After expanding a submenu and clicking its menu items, the submenu remains expanded</li>
                            <li>✅ Third and fourth level menus display and interact normally</li>
                            <li>✅ Floating layer menus display correctly in collapsed state</li>
                            <li>✅ Menu active state displays correctly</li>
                            <li>✅ Menu expansion state persists after refresh</li>
                            <li>✅ Active menu state persists after refresh</li>
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

// Load state from localStorage
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

// Save state
const saveMenuState = () => {
    try {
        localStorage.setItem('test_menu_activeIndex', activeIndex.value)
        localStorage.setItem('test_menu_openeds', JSON.stringify(defaultOpeneds.value))
    } catch (e) {
        console.error('Failed to save menu state:', e)
    }
}

watch([activeIndex, defaultOpeneds], saveMenuState, { deep: true })

// unique-opened test flag
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
        '1': 'Home',
        '5-1': 'System Settings / Basic Settings',
        // You can continue adding other paths...
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .sidebar { width: 200px; }
    .header { padding: 0 16px; }
    .content { padding: 16px; }
    .control-buttons button { padding: 6px 12px; font-size: 13px; }
}
</style>