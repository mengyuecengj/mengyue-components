# Tree 组件设计文档

## 概述

Tree 组件是本组件库中用于展示树形结构数据的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 tree.vue 和 treeNode.vue 等核心组件实现了一套完整且易用的树形结构解决方案。

Tree 组件专注于处理树形数据的展示、交互和样式管理，为用户提供了一套强大、灵活的树形结构管理功能，支持节点展开/折叠、复选框选择、搜索过滤等多种功能，有效提升用户在处理层级数据时的体验。

## 设计理念

### 分层架构

Tree 组件严格按照三层架构设计：

1. **结构层** tree.vue, treeNode.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** type.ts 和组件内部逻辑 - 处理复杂的响应式计算和交互逻辑
3. **表现层** tree.scss, treeNode.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Tree 组件将复杂的逻辑抽象为核心函数：

- toggle - 处理节点展开/折叠逻辑
- handleCheck - 处理节点选择逻辑
- flattenTreeDatan - 处理树形数据的扁平化
- findNodeByKey - 处理节点查找逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Tree 组件的 props 设计简洁明了：

```typescript
defineProps<{
  /** 树形数据 */
  data: TreeNodes[]
  /** 树配置 */
  props: TreeProps
  /** 默认展开 */
  defaultExpanded?: boolean
  /** 默认展开的节点key */
  defaultExpandedKeys?: ExpandedKeys
  /** 是否显示复选框 */
  showCheckbox?: boolean
  /** 是否显示箭头 */
  showArrow?: boolean
  /** 选中的节点keys */
  checkedKeys?: (string | number)[]
  /** 是否严格模式（不级联选择） */
  checkStrictly?: boolean
  /** 宽度 */
  width?: string
  /** 高度 */
  height?: string
}>()
```

#### 参数说明：
- data：树形数据源。
- props：树配置，定义 label、children、value等字段。
- showCheckbox：控制是否显示复选框。
- checkStrictly：控制是否严格模式（不级联选择）。
- defaultExpandedKeys：控制默认展开的节点。

### TreeSelect 组件设计

Tree 组件还提供 treeSelect 组件，用于实现下拉树选择功能：

```typescript
export const treeSelectProps = {
  /** 绑定值 */
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | (string | number)[] | null>,
    default: null
  },
  /** 是否多选 */
  multiple: {
    type: Boolean,
    default: false
  },
  /** 是否可过滤 */
  filterable: {
    type: Boolean,
    default: false
  },
  /** 是否显示复选框 */
  showCheckbox: {
    type: Boolean,
    default: false
  },
  /** 是否严格模式（不级联选择） */
  checkStrictly: {
    type: Boolean,
    default: false
  },
  // ...其他属性
}
```

#### 核心功能：
- **下拉选择**：通过点击输入框显示树形结构
- **搜索过滤**：通过 filterable 属性启用搜索功能
- **多选支持**：通过 multiple 属性控制是否多选
- **标签显示**：已选择的节点显示为标签

## 样式系统设计

### CSS 变量控制

Tree 组件通过 CSS 变量实现样式控制：

1. `--tree-bg-color` - 树背景色
2. `--tree-text-color` - 树文本颜色
3. `--tree-active-color` - 激活状态颜色
4. `--tree-input-height` - 输入框高度
5. `--tree-arrow-color` - 箭头颜色

### 布局系统

Tree 组件支持灵活的布局控制：

1. **层级缩进** - 通过子节点的 `margin-left` 实现
2. **连接线样式** - 通过 CSS 绘制节点连接线
3. **布局方向** - 支持垂直树形结构
4. **响应式设计** - 适配不同尺寸

### 状态样式

Tree 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准树形样式
2. **展开状态** - 显示子节点和连接线
3. **选中状态** - 高亮显示选中节点
4. **悬停状态** - 行悬停时的背景色变化
5. **禁用状态** - 通过 disabled 属性控制


## 组件结构设计

### 整体结构

Tree 组件的整体结构如下：

```html
<div class="my-tree" :style="treeStyle">
  <TreeNode 
    v-for="node in data"
    :key="getNodeKey(node)" 
    :node="node"
    :treeProps="internalProps" 
    :defaultExpanded="defaultExpanded || defaultExpandedKeys?.includes(getNodeKey(node))" 
    :showCheckbox="showCheckbox"
    :showArrow="showArrow"
    :checkedKeys="checkedKeys"
    :checkStrictly="checkStrictly"
    @node-click="handleNodeClick"
    @check-change="handleCheckChange"
  />
</div>
```

TreeNode 组件的结构：

```html
<div class="my-tree-node">
  <div class="my-tree-node__content" :class="{ expanded, leaf: isLeaf, selected: isSelected }"
    @click="handleContentClick">
    <!-- 展开箭头 -->
    <span v-if="showArrow && !isLeaf" class="arrow" :class="{ expanded }" @click.stop="toggle">
      {{ expanded ? '▼' : '▶' }}
    </span>
    
    <!-- 复选框 -->
    <MYCheckbox 
      v-if="showCheckbox" 
      :modelValue="isChecked" 
      :indeterminate="isIndeterminate"
      :disabled="isDisabled" 
      @update:modelValue="handleCheck"
      class="tree-checkbox"
    />
    
    <!-- 节点标签 -->
    <span class="label" @click.stop="handleLabelClick">
      {{ node[treeProps.label] }}
    </span>
  </div>

  <!-- 子节点 -->
  <div v-if="expanded && !isLeaf" class="my-tree-node__children">
    <TreeNode 
      v-for="child in children" 
      :key="getNodeKey(child)" 
      :node="child"
      :treeProps="treeProps" 
      :showCheckbox="showCheckbox"
      :showArrow="showArrow"
      :checkedKeys="checkedKeys"
      :checkStrictly="checkStrictly"
      @node-click="$emit('node-click', $event)"
      @check-change="$emit('check-change', $event)"
    />
  </div>
</div>
```

### 组件层次

Tree 组件包含多个主要部分：

1. **树容器** - `.my-tree` - 包裹整个树形组件
2. **树节点** - `.my-tree-node` - 单个树节点的容器
3. **节点内容** - `.my-tree-node__content` - 节点内容区域
4. **展开箭头** - `.arrow` - 控制节点展开/折叠
5. **复选框** - `.tree-checkbox` - 节点选择控件
6. **节点标签** - `.label` - 显示节点文本
7. **子节点容器** - `.my-tree-node__children` - 包含子节点

## 交互设计

### 节点展开/折叠

Tree 组件通过 toggle方法实现节点展开/折叠：

```typescript
const toggle = () => {
  if (!isLeaf.value) {
    expanded.value = !expanded.value
  }
}
```

#### 交互规则：
- 点击箭头图标：切换展开/折叠状态
- 点击内容区域（无复选框时）：切换展开/折叠状态
- 叶子节点：不显示箭头，不可展开

### 选择功能

Tree 组件通过 handleCheck 方法实现节点选择：

```typescript
const handleCheck = (checked: boolean) => {
  const nodeKey = props.node[nodeValueKey.value] as string | number
  let newCheckedKeys = [...(props.checkedKeys || [])]

  if (checked) {
    // 添加当前节点
    if (!newCheckedKeys.includes(nodeKey)) {
      newCheckedKeys.push(nodeKey)
    }

    // 如果不是严格模式且不是叶子节点，需要级联选择子节点
    if (!props.checkStrictly && !isLeaf.value) {
      const addChildKeys = (nodes: TreeNodesArray) => {
        nodes.forEach(child => {
          const childKey = child[nodeValueKey.value] as string | number
          if (!newCheckedKeys.includes(childKey)) {
            newCheckedKeys.push(childKey)
          }
          const childNodes = child[props.treeProps.children] as TreeNodesArray || []
          if (childNodes.length > 0) {
            addChildKeys(childNodes)
          }
        })
      }
      addChildKeys(children.value)
    }
  } else {
    // 取消选中当前节点
    newCheckedKeys = newCheckedKeys.filter(k => k !== nodeKey)

    // 如果不是严格模式且不是叶子节点，需要级联取消子节点
    if (!props.checkStrictly && !isLeaf.value) {
      const removeChildKeys = (nodes: TreeNodesArray) => {
        nodes.forEach(child => {
          const childKey = child[nodeValueKey.value] as string | number
          newCheckedKeys = newCheckedKeys.filter(k => k !== childKey)
          const childNodes = child[props.treeProps.children] as TreeNodesArray || []
          if (childNodes.length > 0) {
            removeChildKeys(childNodes)
          }
        })
      }
      removeChildKeys(children.value)
    }
  }

  emit('check-change', newCheckedKeys)
}
```

#### 选择模式：
- **严格模式**：`checkStrictly=true`，节点选择互不影响
- **非严格模式**：`checkStrictly=false`，级联选择（选中父节点自动选中所有子节点）

### 搜索过滤

TreeSelect 组件通过 filterText实现搜索过滤：

```typescript
const filteredData = computed(() => {
  if (!filterText.value) return props.data
  const filterNodes = (nodes: TreeNodesArray): TreeNodesArray => {
    return nodes.filter(node => {
      const label = node[props.props.label] as string
      const match = label.toLowerCase().includes(filterText.value.toLowerCase())
      if (match) return true
      const children = node[props.props.children] as TreeNodesArray || []
      if (children.length && filterNodes(children).length > 0) return true
      return false
    }).map(node => ({
      ...node,
      [props.props.children]: filterNodes(node[props.props.children] as TreeNodesArray || [])
    }))
  }
  return filterNodes(props.data)
})
```

#### 过滤规则：
- 匹配节点标签
- 如果子节点匹配，父节点也显示
- 保持树形结构，只过滤不匹配的节点

## 扩展性设计

Tree 组件具备良好的扩展性：

1. **树形结构**：通过 props 属性灵活定义树形结构
2. **复选框支持**：通过 showCheckbox 属性控制是否显示复选框
3. **箭头显示**：通过 showArrow 属性控制是否显示箭头
4. **选择模式**：通过 checkStrictly 属性控制选择模式
5. **树选择组件**：通过 treeselect 组件扩展为下拉选择功能
6. **样式定制**：通过 CSS 变量定制组件样式

## 样式细节

Tree 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保键盘导航和屏幕阅读器友好
4. **清晰的视觉层次**：通过缩进和连接线创建清晰的视觉层次
5. **状态反馈**：提供清晰的视觉反馈（如展开状态、选中状态）


## 性能优化

通过以下方式优化性能：

1. 使用计算属性缓存树形数据处理结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 按需渲染树节点（只渲染展开的节点）
6. 使用 CSS 变量动态调整样式


## 设计价值

Tree 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Cascader、Menu 等其他组件保持一致的设计语言
