<template>
  <div style="padding: 20px;">
    <h1>🌳 Tree & TreeSelect 组件全面测试</h1>

    <!-- 测试数据展示 -->
    <div style="margin-bottom: 30px; border: 1px solid #ddd; padding: 15px; background: #f8f9fa;">
      <h3>📊 测试数据结构</h3>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div>
          <h4>基础数据</h4>
          <pre
            style="background: white; padding: 10px; border-radius: 4px;">{{ JSON.stringify(basicData, null, 2) }}</pre>
        </div>
        <div>
          <h4>深层嵌套数据</h4>
          <pre
            style="background: white; padding: 10px; border-radius: 4px;">{{ JSON.stringify(deepNestedData[0], null, 2) }}</pre>
        </div>
        <div>
          <h4>大数据集</h4>
          <pre style="background: white; padding: 10px; border-radius: 4px;">节点数量: {{ largeDataNodeCount }}</pre>
        </div>
      </div>
    </div>

    <!-- 1. 基础 MYTree 测试 -->
    <div class="test-section">
      <h2>1. 基础 MYTree 测试</h2>

      <!-- 1.1 箭头模式 -->
      <div class="test-case">
        <h3>1.1 纯箭头模式</h3>
        <MYTree :data="basicData" :props="{ label: 'name', children: 'children' }" :showCheckbox="false"
          :showArrow="true" />
      </div>

      <!-- 1.2 复选框模式 -->
      <div class="test-case">
        <h3>1.2 复选框模式</h3>
        <div class="test-controls">
          <pre>选中节点ID: {{ checkedNodes }}</pre>
          <pre>选中节点数: {{ checkedNodes.length }}</pre>
          <button @click="checkAllBasic">全选基础数据</button>
          <button @click="uncheckAll">全不选</button>
          <button @click="toggleCheckStrictly">切换严格模式: {{ checkStrictly ? '严格' : '联动' }}</button>
        </div>
        <div class="test-component">
          <MYTree :data="basicData" :props="{ label: 'name', children: 'children', value: 'id' }" :showCheckbox="true"
            :checkedKeys="checkedNodes" :checkStrictly="checkStrictly" @check-change="handleCheckChange"
            style="max-width: 600px; border: 1px solid #e1e1e1; padding: 10px;" />
        </div>
      </div>

      <!-- 1.3 深层嵌套测试 -->
      <div class="test-case">
        <h3>1.3 深层嵌套测试 (5级深度)</h3>
        <div class="test-controls">
          <pre>选中节点: {{ deepCheckedNodes.length }}</pre>
          <button @click="checkAllDeep">全选深层数据</button>
          <button @click="deepCheckedNodes = []">清空选择</button>
        </div>
        <div class="test-component" style="max-height: 400px; overflow: auto;">
          <MYTree :data="deepNestedData" :props="{ label: 'name', children: 'children', value: 'id' }"
            :showCheckbox="true" :checkedKeys="deepCheckedNodes" :defaultExpanded="true"
            @check-change="deepCheckedNodes = $event" style="max-width: 800px;" />
        </div>
      </div>
    </div>

    <!-- 2. MYTreeSelect 测试 -->
    <div class="test-section">
      <h2>2. MYTreeSelect 测试</h2>

      <!-- 2.1 单选模式 -->
      <div class="test-case">
        <h3>2.1 单选模式</h3>
        <div class="test-controls">
          <pre>选中值: {{ singleSelect }}</pre>
          <button @click="singleSelect = null">清空</button>
          <button @click="singleSelect = 5">设置为三级节点2</button>
        </div>
        <div class="test-component">
          <MYTree-select v-model="singleSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" placeholder="请选择单个节点..." :clearable="true"
            style="width: 300px;" />
        </div>
      </div>

      <!-- 2.2 多选模式 -->
      <div class="test-case">
        <h3>2.2 多选模式</h3>
        <div class="test-controls">
          <pre>选中值: {{ multiSelect }}</pre>
          <button @click="multiSelect = []">清空</button>
          <button @click="multiSelect = [2, 4, 7]">设置预选值</button>
        </div>
        <div class="test-component">
          <MYTree-select v-model="multiSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" :multiple="true" placeholder="请选择多个节点..."
            :clearable="true" style="width: 400px;" />
        </div>
      </div>

      <!-- 2.3 复选框模式 -->
      <div class="test-case">
        <h3>2.3 复选框模式</h3>
        <div class="test-controls">
          <pre>选中值: {{ checkboxSelect }}</pre>
          <button @click="checkboxSelect = []">清空</button>
          <button @click="toggleCheckStrictlySelect">切换严格模式: {{ checkStrictlySelect ? '严格' : '联动' }}</button>
        </div>
        <div class="test-component">
          <MYTree-select v-model="checkboxSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" :show-checkbox="true"
            :check-strictly="checkStrictlySelect" :multiple="true" placeholder="使用复选框选择..." style="width: 450px;" />
        </div>
      </div>

      <!-- 2.4 过滤搜索测试 -->
      <div class="test-case">
        <h3>2.4 过滤搜索测试</h3>
        <div class="test-controls">
          <pre>选中值: {{ filterSelect }}</pre>
          <span>尝试搜索: "节点"、"二级"、"三级"</span>
        </div>
        <div class="test-component">
          <MYTree-select v-model="filterSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" :filterable="true" :multiple="true"
            placeholder="输入关键词搜索..." style="width: 400px;" />
        </div>
      </div>
    </div>

    <!-- 3. 边界情况测试 -->
    <div class="test-section">
      <h2>3. 边界情况测试</h2>

      <!-- 3.1 空数据测试 -->
      <div class="test-case">
        <h3>3.1 空数据测试</h3>
        <div class="test-component">
          <MYTree :data="[]" :props="{ label: 'name', children: 'children' }"
            style="max-width: 300px; border: 1px solid #e1e1e1; padding: 10px;" />
          <MYTree-select v-model="emptySelect" :data="[]" :props="{ label: 'name', value: 'id', children: 'children' }"
            placeholder="空数据测试..." style="width: 300px; margin-left: 20px;" />
        </div>
      </div>

      <!-- 3.2 禁用状态测试 -->
      <div class="test-case">
        <h3>3.2 禁用状态测试</h3>
        <div class="test-controls">
          <button @click="toggleDisabled">切换禁用状态: {{ disabled ? '禁用' : '启用' }}</button>
        </div>
        <div class="test-component">
          <MYTree-select v-model="disabledSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" :disabled="disabled" placeholder="禁用状态测试..."
            style="width: 300px;" />
        </div>
      </div>

      <!-- 3.3 加载状态测试 -->
      <div class="test-case">
        <h3>3.3 加载状态测试</h3>
        <div class="test-controls">
          <button @click="toggleLoading">切换加载状态: {{ loading ? '加载中' : '完成' }}</button>
        </div>
        <div class="test-component">
          <MYTree-select v-model="loadingSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" :loading="loading" placeholder="加载状态测试..."
            style="width: 300px;" />
        </div>
      </div>

      <!-- 3.4 大数据集测试 -->
      <div class="test-case">
        <h3>3.4 大数据集测试 ({{ largeDataNodeCount }} 个节点)</h3>
        <div class="test-controls">
          <pre>选中节点: {{ largeDataSelect.length }}</pre>
          <button @click="largeDataSelect = []">清空选择</button>
        </div>
        <div class="test-component" style="max-height: 400px; overflow: auto;">
          <MYTree :data="largeData" :props="{ label: 'name', children: 'children', value: 'id' }" :showCheckbox="true"
            :checkedKeys="largeDataSelect" @check-change="largeDataSelect = $event"
            style="max-width: 600px; border: 1px solid #e1e1e1; padding: 10px;" />
        </div>
      </div>
    </div>

    <!-- 4. 样式和尺寸测试 -->
    <div class="test-section">
      <h2>4. 样式和尺寸测试</h2>

      <div class="test-case">
        <h3>4.1 不同尺寸</h3>
        <div class="test-component" style="display: flex; gap: 20px; align-items: flex-start;">
          <div>
            <div>小尺寸</div>
            <MYTree-select v-model="sizeSelect" :data="basicData"
              :props="{ label: 'name', value: 'id', children: 'children' }" size="small" placeholder="小尺寸..."
              style="width: 200px;" />
          </div>
          <div>
            <div>默认尺寸</div>
            <MYTree-select v-model="sizeSelect" :data="basicData"
              :props="{ label: 'name', value: 'id', children: 'children' }" size="default" placeholder="默认尺寸..."
              style="width: 200px;" />
          </div>
          <div>
            <div>大尺寸</div>
            <MYTree-select v-model="sizeSelect" :data="basicData"
              :props="{ label: 'name', value: 'id', children: 'children' }" size="large" placeholder="大尺寸..."
              style="width: 200px;" />
          </div>
        </div>
      </div>

      <!-- 4.2 自定义样式 -->
      <div class="test-case">
        <h3>4.2 自定义样式</h3>
        <div class="test-component">
          <MYTree-select v-model="styleSelect" :data="basicData"
            :props="{ label: 'name', value: 'id', children: 'children' }" :style="{
              width: '350px',
              backgroundColor: '#1a1a1a',
              color: '#00ff00',
              border: '2px solid #00ff00'
            }" textColor="#00ff00" backgroundColor="#1a1a1a" activeColor="#ff00ff" placeholder="暗色主题..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// ========== 测试数据定义 ==========

// 基础测试数据
const basicData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      {
        id: 2,
        name: '二级节点1-1',
        children: [
          { id: 21, name: '三级节点1-1-1' },
          { id: 22, name: '三级节点1-1-2' }
        ]
      },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1-2-1' },
          {
            id: 5,
            name: '三级节点1-2-2',
            children: [
              { id: 51, name: '四级节点1-2-2-1' },
              { id: 52, name: '四级节点1-2-2-2' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      {
        id: 7,
        name: '二级节点2-1',
        children: [
          { id: 71, name: '三级节点2-1-1' },
          { id: 72, name: '三级节点2-1-2' }
        ]
      },
      { id: 8, name: '二级节点2-2' }
    ]
  },
  {
    id: 9,
    name: '一级节点3',
    children: [
      { id: 10, name: '二级节点3-1' },
      { id: 11, name: '二级节点3-2' },
      { id: 12, name: '二级节点3-3' }
    ]
  }
]

// 深层嵌套数据 (5级深度)
const deepNestedData = [
  {
    id: 100,
    name: 'Level 1',
    children: [
      {
        id: 101,
        name: 'Level 2',
        children: [
          {
            id: 102,
            name: 'Level 3',
            children: [
              {
                id: 103,
                name: 'Level 4',
                children: [
                  {
                    id: 104,
                    name: 'Level 5 - Deep Node',
                    children: [
                      { id: 105, name: 'Level 6 - Very Deep' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

// 生成大数据集
const generateLargeData = (count: number, depth: number = 3) => {
  const data = []
  let id = 1000

  const generateNode = (level: number): any => {
    if (level > depth) return null

    const node = {
      id: id++,
      name: `大数据节点-${id}`,
      children: [] as any[]
    }

    if (level < depth) {
      const childCount = Math.floor(Math.random() * 3) + 1 // 1-3个子节点
      for (let i = 0; i < childCount; i++) {
        const child = generateNode(level + 1)
        if (child) {
          node.children.push(child)
        }
      }
    }

    return node
  }

  for (let i = 0; i < count; i++) {
    const node = generateNode(1)
    if (node) {
      data.push(node)
    }
  }

  return data
}

const largeData = generateLargeData(50, 4) // 50个根节点，最大深度4

// 计算大数据集的节点数量
const largeDataNodeCount = computed(() => {
  const countNodes = (nodes: any[]): number => {
    return nodes.reduce((count, node) => {
      return count + 1 + (node.children ? countNodes(node.children) : 0)
    }, 0)
  }
  return countNodes(largeData)
})

// ========== 状态管理 ==========

// 1. 基础 MYTree 状态
const checkedNodes = ref<(string | number)[]>([])
const deepCheckedNodes = ref<(string | number)[]>([])
const checkStrictly = ref(false)

// 2. MYTreeSelect 状态
const singleSelect = ref<(string | number | null)>(null)
const multiSelect = ref<(string | number)[]>([])
const checkboxSelect = ref<(string | number)[]>([])
const filterSelect = ref<(string | number)[]>([])
const checkStrictlySelect = ref(false)

// 3. 边界情况状态
const emptySelect = ref<(string | number | null)>(null)
const disabledSelect = ref<(string | number | null)>(null)
const loadingSelect = ref<(string | number | null)>(null)
const largeDataSelect = ref<(string | number)[]>([])
const disabled = ref(false)
const loading = ref(false)

// 4. 样式测试状态
const sizeSelect = ref<(string | number | null)>(null)
const styleSelect = ref<(string | number | null)>(null)

// ========== 方法定义 ==========
const handleCheckChange = (keys: (string | number)[]) => {
  checkedNodes.value = keys
  console.log('Checked nodes changed:', keys)
}

const checkAllBasic = () => {
  const getAllIds = (nodes: any[]): number[] => {
    let ids: number[] = []
    nodes.forEach(node => {
      if (node.id) ids.push(node.id)
      if (node.children) ids = ids.concat(getAllIds(node.children))
    })
    return ids
  }
  checkedNodes.value = getAllIds(basicData)
}

const checkAllDeep = () => {
  const getAllIds = (nodes: any[]): number[] => {
    let ids: number[] = []
    nodes.forEach(node => {
      if (node.id) ids.push(node.id)
      if (node.children) ids = ids.concat(getAllIds(node.children))
    })
    return ids
  }
  deepCheckedNodes.value = getAllIds(deepNestedData)
}

const uncheckAll = () => {
  checkedNodes.value = []
}

const toggleCheckStrictly = () => {
  checkStrictly.value = !checkStrictly.value
}

const toggleCheckStrictlySelect = () => {
  checkStrictlySelect.value = !checkStrictlySelect.value
}

// 边界情况方法
const toggleDisabled = () => {
  disabled.value = !disabled.value
}

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>

<style scoped>
.test-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  background: white;
}

.test-section h2 {
  color: #333;
  border-bottom: 2px solid #007acc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.test-case {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fafafa;
}

.test-case h3 {
  color: #555;
  margin-bottom: 15px;
}

.test-controls {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.test-controls pre {
  background: white;
  padding: 8px;
  border-radius: 4px;
  margin: 0;
  min-width: 200px;
}

.test-controls button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.test-controls button:hover {
  background: #f0f0f0;
}

.test-component {
  padding: 15px;
  background: white;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
}

pre {
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
}
</style>