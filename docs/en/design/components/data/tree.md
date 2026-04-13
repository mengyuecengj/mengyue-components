
---

## tree.md

```markdown
# Tree Component Design Documentation

## Overview

The Tree component is a core component in this library used for displaying hierarchical tree structure data. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core components like `tree.vue` and `treeNode.vue`, it provides a complete and user-friendly tree structure solution.

The Tree component focuses on handling the display, interaction, and style management of tree data, offering users a powerful and flexible tree structure management feature. It supports node expand/collapse, checkbox selection, search filtering, and other functionalities, effectively enhancing the user experience when working with hierarchical data.

## Design Philosophy

### Layered Architecture

The Tree component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`tree.vue`, `treeNode.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`type.ts` and internal component logic) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`tree.scss`, `treeNode.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Tree component abstracts complex logic into core functions:

- `toggle` - Handles node expand/collapse logic.
- `handleCheck` - Handles node selection logic.
- `flattenTreeDatan` - Handles flattening of tree data.
- `findNodeByKey` - Handles node lookup logic.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Tree component is clean and straightforward:

```typescript
defineProps<{
  /** Tree data */
  data: TreeNodes[]
  /** Tree configuration */
  props: TreeProps
  /** Default expanded */
  defaultExpanded?: boolean
  /** Keys of nodes expanded by default */
  defaultExpandedKeys?: ExpandedKeys
  /** Whether to show checkboxes */
  showCheckbox?: boolean
  /** Whether to show arrows */
  showArrow?: boolean
  /** Keys of checked nodes */
  checkedKeys?: (string | number)[]
  /** Whether strict mode (no cascading selection) */
  checkStrictly?: boolean
  /** Width */
  width?: string
  /** Height */
  height?: string
}>()
```

#### Parameter Descriptions:
- data: The tree data source.
- props: Tree configuration, defining label, children, value fields.
- showCheckbox: Controls whether checkboxes are displayed.
- checkStrictly: Controls whether strict mode is enabled (no cascading selection).
- defaultExpandedKeys: Controls which nodes are expanded by default.

### TreeSelect Component Design
The Tree component also provides a treeSelect component for implementing dropdown tree selection:

```typescript
export const treeSelectProps = {
  /** Bound value */
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | (string | number)[] | null>,
    default: null
  },
  /** Whether multiple selection */
  multiple: {
    type: Boolean,
    default: false
  },
  /** Whether filterable */
  filterable: {
    type: Boolean,
    default: false
  },
  /** Whether to show checkboxes */
  showCheckbox: {
    type: Boolean,
    default: false
  },
  /** Whether strict mode (no cascading selection) */
  checkStrictly: {
    type: Boolean,
    default: false
  },
}
```

#### Core Features:
- **Dropdown Selection:** Displays the tree structure by clicking the input box.
- **Search Filtering:** Enables search functionality via the filterable property.
- **Multiple Selection** Support: Controls multiple selection via the multiple property.
- **Tag Display:** Displays selected nodes as tags.

## Style System Design
### CSS Variable Control

The Tree component achieves style control through CSS variables:

1. --tree-bg-color - Tree background color.
2. --tree-text-color - Tree text color.
3. --tree-active-color - Active state color.
4. --tree-input-height - Input box height.
5. --tree-arrow-color - Arrow color.

### Layout System
The Tree component supports flexible layout control:

1. Hierarchy Indentation - Achieved via child node margin-left.
2. Connector Line Styles - Drawn via CSS.
3. Layout Direction - Supports vertical tree structure.
4. Responsive Design - Adapts to different sizes.

### State Styles
The Tree component provides corresponding styles for different states:

1. **Default State** - Standard tree style.
2. **Expanded State** - Shows child nodes and connectors.
3. **Selected State** - Highlights the selected node.
4. **Hover State** - Background color change on row hover.
5. **Disabled State** - Controlled via the disabled property.


## Component Structure Design
### Overall Structure
The overall structure of the Tree component is as follows:

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

Structure of the TreeNode component:

```html
<div class="my-tree-node">
  <div class="my-tree-node__content" :class="{ expanded, leaf: isLeaf, selected: isSelected }"
    @click="handleContentClick">
    <!-- Expand/Collapse Arrow -->
    <span v-if="showArrow && !isLeaf" class="arrow" :class="{ expanded }" @click.stop="toggle">
      {{ expanded ? '▼' : '▶' }}
    </span>
    
    <!-- Checkbox -->
    <MYCheckbox 
      v-if="showCheckbox" 
      :modelValue="isChecked" 
      :indeterminate="isIndeterminate"
      :disabled="isDisabled" 
      @update:modelValue="handleCheck"
      class="tree-checkbox"
    />
    
    <!-- Node Label -->
    <span class="label" @click.stop="handleLabelClick">
      {{ node[treeProps.label] }}
    </span>
  </div>

  <!-- Child Nodes -->
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

### Component Hierarchy
The Tree component consists of several main parts:

1. **Tree Container** - .my-tree - Wraps the entire tree component.
2. **Tree Node** - .my-tree-node - Container for a single tree node.
3. **Node Content** - .my-tree-node__content - Node content area.
4. **Expand Arrow** - .arrow - Controls node expand/collapse.
5. **Checkbox** - .tree-checkbox - Node selection control.
6. **Node Label** - .label - Displays node text.
7. **Child Nodes Container** - .my-tree-node__children - Contains child nodes.

## Interaction Design
### Node Expand/Collapse
The Tree component implements node expand/collapse via the toggle method:

```typescript
const toggle = () => {
  if (!isLeaf.value) {
    expanded.value = !expanded.value
  }
}
```

#### nteraction Rules:
- Click arrow icon: Toggles expand/collapse state.
- Click content area (when no checkbox): Toggles expand/collapse state.
- Leaf nodes: No arrow displayed, cannot be expanded.

### Selection Feature
The Tree component implements node selection via the handleCheck method:

```typescript
const handleCheck = (checked: boolean) => {
  const nodeKey = props.node[nodeValueKey.value] as string | number
  let newCheckedKeys = [...(props.checkedKeys || [])]

  if (checked) {
    // Add current node
    if (!newCheckedKeys.includes(nodeKey)) {
      newCheckedKeys.push(nodeKey)
    }

    // If not strict mode and not leaf, cascade select children
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
    // Uncheck current node
    newCheckedKeys = newCheckedKeys.filter(k => k !== nodeKey)

    // If not strict mode and not leaf, cascade uncheck children
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

#### Selection Modes:
- **Strict Mode:** `checkStrictly=true`, node selections do not affect each other.\
- **Non-strict Mode:** `checkStrictly=false`, cascading selection (selecting a parent automatically selects all children).

### Search Filtering
The TreeSelect component implements search filtering via filterText:

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

#### Filtering Rules:
- Matches node labels.
- If a child matches, the parent is also displayed.
- Maintains tree structure, filtering out only non-matching nodes.

## Extensibility Design
The Tree component offers excellent extensibility:

1. **Tree Structure:** Flexibly define tree structure via the props attribute.
2. **Checkbox Support:** Control checkbox display via the showCheckbox property.
3. **Arrow Display:** Control arrow display via the showArrow property.
4. **Selection Mode:** Control selection mode via the checkStrictly property.
5. **TreeSelect Component:** Extends to dropdown selection functionality via the treeselect component.
6. **Style Customization:** Customize component styles via CSS variables.

## Style Details
The Tree component features the following style handling characteristics:

1. **Responsive Design:** Supports flexible layout adaptation.
2. **Consistency:** Maintains style consistency with other library components.
3. **Accessibility Design:** Ensures keyboard navigation and screen reader friendliness.
4. **Clear Visual Hierarchy:** Creates a clear visual hierarchy through indentation and connectors.
5. **State Feedback:** Provides clear visual feedback (e.g., expanded state, selected state).


## Performance Optimization
Performance is optimized through:

1. Caching tree data processing results using computed properties.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Rendering tree nodes on demand (only rendering expanded nodes).
6. Dynamically adjusting styles using CSS variables.


## Design Value
The Tree component embodies the design philosophy of our component library:

1. **Separation of Concerns:** Complete decoupling of structure, style, and logic.
2. **High Reusability:** Abstracting common logic via functions.
3. **Ease of Maintenance:** Clear code structure and naming conventions.
4. **Strong Extensibility:** Support for rich customization options.
5. **Consistency:** Maintains a consistent design language with other components like Cascader and Menu.