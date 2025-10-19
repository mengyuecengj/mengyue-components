<template>
  <div style="padding: 20px;">
    <h3>树选择器测试</h3>

    <!-- 基础 MYTree 测试 -->
    <div style="margin-bottom: 30px; border: 1px solid #eee; padding: 15px;">
      <h4>基础 MYTree 测试: 简单树视图 + 点击事件</h4>
      <pre style="background: #f5f5f5; padding: 10px; margin: 10px 0;">点击节点: {{ clickedNode }}</pre>

      <MYTree :data="treeData" :props="{ label: 'name', children: 'children' }" @node-click="handleTreeClick"
        style="max-width: 600px;" />

      <!-- 控制按钮 -->
      <div style="margin-top: 10px;">
        <button @click="resetClicked">重置点击</button>
      </div>
    </div>

    <!-- 测试1 -->
    <div style="margin-bottom: 30px; border: 1px solid #eee; padding: 15px;">
      <h4>测试 1: 单选 + 过滤 + 小尺寸 + 自定义宽高/颜色</h4>
      <pre style="background: #f5f5f5; padding: 10px; margin: 10px 0;">选中值: {{ selected1 }}</pre>

      <MYTree-select   v-model="selected1" :data="treeData" :props="{ label: 'name', children: 'children', value: 'id' }"
        :multiple="false" :filterable="true" :size="'small'" :clearable="true" :default-expanded-keys="[1]"
        :style="{ width: '250px', fontSize: '12px', color: '#ff0000' }" :class="'my-custom-select'" />

      <!-- 控制按钮 -->
      <div style="margin-top: 10px;">
        <button @click="toggleDisabled1">{{ disabled1 ? '启用' : '禁用' }}</button>
        <button @click="toggleLoading1">{{ loading1 ? '停止加载' : '加载中' }}</button>
        <button @click="clearSelected1">清除选中</button>
      </div>
    </div>

    <!-- 测试2 -->
    <div style="margin-bottom: 30px; border: 1px solid #eee; padding: 15px;">
      <h4>测试 2: 多选 + 大尺寸 + 禁用/加载</h4>
      <pre style="background: #f5f5f5; padding: 10px; margin: 10px 0;">选中值: {{ selected2 }}</pre>

      <MYTree-select v-model="selected2" :data="treeData" :props="{ label: 'name', children: 'children', value: 'id' }"
        :multiple="true" :filterable="false" :size="'large'" :clearable="true" :disabled="disabled2" :loading="loading2"
        :style="{ height: '50px', width: '400px' }" :class="''" @clear="() => console.log('Cleared!')"
        @change="(val: any) => console.log('Changed:', val)" />

      <!-- 控制按钮 -->
      <div style="margin-top: 10px;">
        <button @click="toggleDisabled2">{{ disabled2 ? '启用' : '禁用' }}</button>
        <button @click="toggleLoading2">{{ loading2 ? '停止加载' : '加载中' }}</button>
        <button @click="clearSelected2">清除选中</button>
      </div>
    </div>

    <!-- 测试3 -->
    <div style="margin-bottom: 30px; border: 1px solid #eee; padding: 15px;">
      <h4>测试 3: 多选 + 过滤 + 默认展开</h4>
      <pre style="background: #f5f5f5; padding: 10px; margin: 10px 0;">选中值: {{ selected3 }}</pre>

      <MYTree-select v-model="selected3" :data="treeData" :props="{ label: 'name', children: 'children', value: 'id' }"
        :multiple="true" :filterable="true" :size="'default'" :clearable="true" :default-expanded-keys="[1, 3]"
        :style="{ width: '300px' }" :class="'my-popper-class'" @clear="() => console.log('Cleared!')"
        @change="(val: any) => console.log('Changed:', val)" />

      <!-- 控制按钮 -->
      <div style="margin-top: 10px;">
        <button @click="toggleDisabled3">{{ disabled3 ? '启用' : '禁用' }}</button>
        <button @click="toggleLoading3">{{ loading3 ? '停止加载' : '加载中' }}</button>
        <button @click="clearSelected3">清除选中</button>
      </div>
    </div>

    <!-- 测试4 -->
    <div style="margin-bottom: 30px; border: 1px solid #eee; padding: 15px;">
      <h4>测试 4: 单选 + 无过滤 + 自定义 popper 类</h4>
      <pre style="background: #f5f5f5; padding: 10px; margin: 10px 0;">选中值: {{ selected4 }}</pre>

      <MYTree-select v-model="selected4" :data="treeData" :props="{ label: 'name', children: 'children', value: 'id' }"
        :multiple="false" :filterable="false" :size="'large'" :popper-class="'custom-dropdown'" backgroundColor="red" textColor="blue" activeColor="yellow" />

      <!-- 控制按钮 -->
      <div style="margin-top: 10px;">
        <button @click="toggleDisabled4">{{ disabled4 ? '启用' : '禁用' }}</button>
        <button @click="toggleLoading4">{{ loading4 ? '停止加载' : '加载中' }}</button>
        <button @click="clearSelected4">清除选中</button>
      </div>
    </div>
  </div>

  <!-- 测试5: 多选 + 复选框 + 严格模式（默认不展开） -->
  <div style="margin-bottom: 30px; border: 1px solid #eee; padding: 15px;">
    <h4>测试 5: 多选 + 复选框 + 严格模式</h4>
    <pre style="background: #f5f5f5; padding: 10px; margin: 10px 0;">选中值: {{ selected5 }}</pre>

    <MYTreeSelect v-model="selected5" :data="treeData" :props="{ label: 'name', value: 'id', children: 'children' }"
      :show-checkbox="true" :check-strictly="false"
      style="width: 520px; height: auto; background: #222; color: #fff; padding: 10px;" />

    <button @click="clearSelected5">清除选中</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const treeData = [
  {
    id: 1, name: '一级节点1', children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3, name: '二级节点1-2', children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6, name: '一级节点2', children: [
      { id: 7, name: '二级节点2-1' }
    ]
  },
  { id: 8, name: '一级节点3' }
]

// 基础 MYTree
const clickedNode = ref<any>(null)
const handleTreeClick = (node: any) => {
  clickedNode.value = node
  console.log('Tree node clicked:', node)
}
const resetClicked = () => {
  clickedNode.value = null
}

// MYTreeSelect 测试
const selected1 = ref<(string | number | null)>(null)
const selected2 = ref<(string | number)[]>([])
const selected3 = ref<(string | number)[]>([])
const selected4 = ref<(string | number | null)>(null)
const selected5 = ref<(string | number)[]>([2, 4])

const disabled1 = ref(false)
const disabled2 = ref(false)
const disabled3 = ref(false)
const disabled4 = ref(false)

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)
const loading4 = ref(false)

// 控制函数 - 测试1
const toggleDisabled1 = () => {
  disabled1.value = !disabled1.value
  if (disabled1.value) {
    selected1.value = null
  }
}

const toggleLoading1 = () => {
  loading1.value = !loading1.value
}

const clearSelected1 = () => {
  selected1.value = null
}

// 控制函数 - 测试2
const toggleDisabled2 = () => {
  disabled2.value = !disabled2.value
  if (disabled2.value) {
    selected2.value = []
  }
}

const toggleLoading2 = () => {
  loading2.value = !loading2.value
}

const clearSelected2 = () => {
  selected2.value = []
}

// 控制函数 - 测试3
const toggleDisabled3 = () => {
  disabled3.value = !disabled3.value
  if (disabled3.value) {
    selected3.value = []
  }
}

const toggleLoading3 = () => {
  loading3.value = !loading3.value
}

const clearSelected3 = () => {
  selected3.value = []
}

// 控制函数 - 测试4
const toggleDisabled4 = () => {
  disabled4.value = !disabled4.value
  if (disabled4.value) {
    selected4.value = null
  }
}

const toggleLoading4 = () => {
  loading4.value = !loading4.value
}

const clearSelected4 = () => {
  selected4.value = null
}

const clearSelected5 = () => {
  selected5.value = []
}
</script>

<style>
/* 全局自定义示例 */
.my-custom-select {
  border-color: green !important;
}

.my-popper-class .my-tree-select__dropdown {
  background: #f0f8ff;
  color: #333;
}

.custom-dropdown .tree-container {
  font-size: 18px;
}

/* popper-class 示例 */
</style>