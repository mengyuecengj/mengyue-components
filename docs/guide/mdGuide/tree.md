# Tree
## 简易介绍
Tree 树形组件，用于展示层级结构的数据。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYTree></MYTree>` 或者 `<MYTree />`来实现一个树形组件。

## 树形菜单用法
```vue
<MYTree :data="testData" :props="testProps" @node-click="handleNodeClick" />
```
<MYTree :data="testData" :props="testProps" @node-click="handleNodeClick" />

## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| data  | 树形结构数据      | TreeNodes[]  | — | `[]`  |
| props  | 字段映射配置      | TreeProps  | — | `{}`  |

### Events
| 事件名          | 说明         | 回调参数     |
|--------------|-------------|---------|
| node-click  | 节点点击事件      | (node: TreeNodes) => void  |

### 类型定义
```vue
interface TreeProps {
  label?: string;
  children?: string;
}
```
<script setup>
    const testData = [
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

const testProps = {
  children: 'children',
  label: 'label'
}
</script>