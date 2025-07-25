<template>
  <div style="background: #1e1e1e; padding: 20px; min-height: 100vh; color: white">
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <h2>🧩 暗色风格树形控件示例</h2>

    <MYTree :data="testData" :props="testProps" @node-click="handleNodeClick" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
interface TreeNode {
  label: string
  children?: TreeNode[]
  id?: string | number
}

interface TreeProps {
  children: string
  label: string
}

const testData: TreeNode[] = [
  {
    label: '🌲 根节点 1',
    id: '1',
    children: [
      {
        label: '📁 子节点 1-1',
        id: '1-1'
      },
      {
        label: '📁 子节点 1-2',
        id: '1-2',
        children: [
          { label: '📄 子节点 1-2-1', id: '1-2-1' }
        ]
      }
    ]
  },
  {
    label: '🌲 根节点 2',
    id: '2'
  }
]

const testProps: TreeProps = {
  children: 'children',
  label: 'label'
}

const handleNodeClick = (node: TreeNode) => {
  console.log('节点点击:', node)
}
</script>
