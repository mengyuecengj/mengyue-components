# Collapse
## 简易介绍
collapse折叠面板组件，用于展示可折叠的内容区域。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYCollapse></MYCollapse>`或者`<MYCollapse />`和`<MYCollapse-item></MYCollapse-item>`或者`<MYCollapse-item />`来实现折叠面板。

## 基础用法
使用`v-model`绑定当前激活的面板，并通过`accordion`属性设置是否为手风琴模式。
```vue
<MYCollapse v-model="activeNames">
    <MYCollapse-item title="功能特性" name="1">
        <div>支持多面板同时展开</div>
        <div>通过 v-model 绑定展开的面板</div>
    </MYCollapse-item>
    <MYCollapse-item title="用户体验" name="2">
        <div>提供平滑的展开/收起动画</div>
        <div>支持自定义内容</div>
    </MYCollapse-item>
    <MYCollapse-item title="可配置性" name="3">
        <div>可以通过 props 调整行为</div>
        <div>支持手风琴模式和多面板模式</div>
    </MYCollapse-item>
</MYCollapse>
<script setup>
import { ref } from 'vue'
// 多面板模式的活跃面板
const activeNames = ref(['1'])
// 手风琴模式的活跃面板
const activeAccordionName = ref('a')
</script>
```
<MYCollapse v-model="activeNames">
    <MYCollapse-item title="功能特性" name="1">
        <div>支持多面板同时展开</div>
        <div>通过 v-model 绑定展开的面板</div>
    </MYCollapse-item>
    <MYCollapse-item title="用户体验" name="2">
        <div>提供平滑的展开/收起动画</div>
        <div>支持自定义内容</div>
    </MYCollapse-item>
    <MYCollapse-item title="可配置性" name="3">
        <div>可以通过 props 调整行为</div>
        <div>支持手风琴模式和多面板模式</div>
    </MYCollapse-item>
</MYCollapse>


## 手风琴模式
使用`accordion`属性可以设置为手风琴模式，每次只能展开一个面板。
```vue
<MYCollapse v-model="activeAccordionName" accordion>
    <MYCollapse-item title="简介" name="a">
        <div>手风琴模式一次只能展开一个面板</div>
    </MYCollapse-item>
    <MYCollapse-item title="细节" name="b">
        <div>点击一个面板会收起其他面板</div>
    </MYCollapse-item>
    <MYCollapse-item title="备注" name="c">
        <div>适合需要聚焦单一内容的场景</div>
    </MYCollapse-item>
</MYCollapse>
```
<MYCollapse v-model="activeAccordionName" accordion>
    <MYCollapse-item title="简介" name="a">
        <div>手风琴模式一次只能展开一个面板</div>
    </MYCollapse-item>
    <MYCollapse-item title="细节" name="b">
        <div>点击一个面板会收起其他面板</div>
    </MYCollapse-item>
    <MYCollapse-item title="备注" name="c">
        <div>适合需要聚焦单一内容的场景</div>
    </MYCollapse-item>
</MYCollapse>

## API 参考
### Collapse Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| accordion    | 是否为手风琴模式 | boolean | —                               | `false` |

### CollapseItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| name         | 唯一标识符   | string  | —                               | —      |
| title        | 面板标题     | string  | —                               | —      |

### 类型定义
```ts
// Collapse 类型定义
type CollapseProps = {
  accordion?: boolean;
};

// CollapseItem 类型定义
type CollapseItemProps = {
  name: string;
  title: string;
};
```

<script setup>
import { ref } from 'vue'
// 多面板模式的活跃面板
const activeNames = ref(['1'])

// 手风琴模式的活跃面板
const activeAccordionName = ref('a')
</script>
