# Collapse
## 简易介绍
collapse折叠面板组件，用于展示可折叠的内容区域。<br />
可以使用`<MYCollapse></MYCollapse>`或者`<MYCollapse />`和`<MYCollapse-item></MYCollapse-item>`或者`<MYCollapse-item />`来实现折叠面板。

## 基础用法
使用`v-model`绑定当前激活的面板。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYCollapse v-model='activeNames'>
        <MYCollapse-item title='功能特性' name='1'>
            <div>支持多面板同时展开</div>
            <div>通过 v-model 绑定展开的面板</div>
        </MYCollapse-item>
        <MYCollapse-item title='用户体验' name='2'>
            <div>提供平滑的展开/收起动画</div>
            <div>支持自定义内容</div>
        </MYCollapse-item>
        <MYCollapse-item title='可配置性' name='3'>
            <div>可以通过 props 调整行为</div>
            <div>支持手风琴模式和多面板模式</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()"
>
  <template #demo>
    <MYCollapse v-model="activeNames1">
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
  </template>
</ShowCode>

## 手风琴模式
使用`accordion`属性可以设置为手风琴模式，每次只能展开一个面板。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYCollapse v-model='activeAccordionName' accordion>
        <MYCollapse-item title='简介' name='a'>
            <div>手风琴模式一次只能展开一个面板</div>
        </MYCollapse-item>
        <MYCollapse-item title='细节' name='b'>
            <div>点击一个面板会收起其他面板</div>
        </MYCollapse-item>
        <MYCollapse-item title='备注' name='c'>
            <div>适合需要聚焦单一内容的场景</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()"
>
  <template #demo>
    <MYCollapse v-model="activeAccordionName1" accordion>
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
  </template>
</ShowCode>

## API 参考

### Collapse Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue   | 激活的面板   | string \| array | —                     | —      |
| accordion    | 是否为手风琴模式 | boolean | —                               | `false` |

### CollapseItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| name         | 唯一标识符   | string  | —                               | —      |
| title        | 面板标题     | string  | —                               | —      |

### CollapseItem Slots
| 名称          | 说明         |
|--------------|-------------|
| default      | 面板内容     |

### 类型定义
```typescript
interface CollapseProps {
  modelValue?: string | string[];
  accordion?: boolean;
}

interface CollapseItemProps {
  name: string;
  disabled?: boolean;
}
```
<script setup> 
import { ref } from 'vue' 
import MYCollapse from '../../packages/components/collapse/src/collapse.vue' 
import MYCollapseItem from '../../packages/components/collapse/src/collapseItem.vue' 
const activeNames1 = ref(['1']) 
const activeAccordionName1 = ref('a') 
const activeNames2 = ref(['1']) 
const activeNames3 = ref(['1']) 
const activeNames4 = ref(['1']) 
</script>