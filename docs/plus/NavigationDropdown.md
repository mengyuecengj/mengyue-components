# Dropdown

## 简易介绍
Dropdown 下拉菜单组件，用于展示一组操作或菜单项。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYDropdown></MYDropdown>` 或者 `<MYDropdown />` 来实现一个下拉菜单组件。

## 基本用法

### 基础下拉菜单
默认的下拉菜单，支持 hover 触发。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYDropdown>
    <template #default>
      下拉菜单
    </template>
    <template #dropdown>
      <MYDropdownItem command='a'>操作 A</MYDropdownItem>
      <MYDropdownItem command='b'>操作 B</MYDropdownItem>
      <MYDropdownItem command='c' disabled>禁用操作</MYDropdownItem>
      <MYDropdownItem divided command='d'>分割操作</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown>
      <template #default>
        下拉菜单
      </template>
      <template #dropdown>
        <MYDropdownItem command="a">操作 A</MYDropdownItem>
        <MYDropdownItem command="b">操作 B</MYDropdownItem>
        <MYDropdownItem command="c" disabled>禁用操作</MYDropdownItem>
        <MYDropdownItem divided command="d">分割操作</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### 点击触发
使用 `trigger` 属性设置为 click，通过点击触发下拉菜单。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYDropdown trigger='click'>
    <template #default>
      点击触发
    </template>
    <template #dropdown>
      <MYDropdownItem command='1'>菜单项 1</MYDropdownItem>
      <MYDropdownItem command='2'>菜单项 2</MYDropdownItem>
      <MYDropdownItem command='3'>菜单项 3</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown trigger="click">
      <template #default>
        点击触发
      </template>
      <template #dropdown>
        <MYDropdownItem command="1">菜单项 1</MYDropdownItem>
        <MYDropdownItem command="2">菜单项 2</MYDropdownItem>
        <MYDropdownItem command="3">菜单项 3</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### 分割按钮
使用 `split-button` 属性创建分割按钮下拉菜单。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYDropdown split-button>
    <template #default>
      分割按钮
    </template>
    <template #dropdown>
      <MYDropdownItem command='new'>新建</MYDropdownItem>
      <MYDropdownItem command='save'>保存</MYDropdownItem>
      <MYDropdownItem command='delete'>删除</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown split-button>
      <template #default>
        分割按钮
      </template>
      <template #dropdown>
        <MYDropdownItem command="new">新建</MYDropdownItem>
        <MYDropdownItem command="save">保存</MYDropdownItem>
        <MYDropdownItem command="delete">删除</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### 不同尺寸
使用 `size` 属性设置下拉菜单的尺寸。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 10px; align-items: center;'>
    <MYDropdown size='sm'>
      <template #default>
        小尺寸
      </template>
      <template #dropdown>
        <MYDropdownItem command='sm1'>小菜单 1</MYDropdownItem>
        <MYDropdownItem command='sm2'>小菜单 2</MYDropdownItem>
      </template>
    </MYDropdown>
    <MYDropdown size='md'>
      <template #default>
        中尺寸
      </template>
      <template #dropdown>
        <MYDropdownItem command='md1'>中菜单 1</MYDropdownItem>
        <MYDropdownItem command='md2'>中菜单 2</MYDropdownItem>
      </template>
    </MYDropdown>
    <MYDropdown size='lg'>
      <template #default>
        大尺寸
      </template>
      <template #dropdown>
        <MYDropdownItem command='lg1'>大菜单 1</MYDropdownItem>
        <MYDropdownItem command='lg2'>大菜单 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; align-items: center;">
      <MYDropdown size="sm">
        <template #default>
          小尺寸
        </template>
        <template #dropdown>
          <MYDropdownItem command="sm1">小菜单 1</MYDropdownItem>
          <MYDropdownItem command="sm2">小菜单 2</MYDropdownItem>
        </template>
      </MYDropdown>
      <MYDropdown size="md">
        <template #default>
          中尺寸
        </template>
        <template #dropdown>
          <MYDropdownItem command="md1">中菜单 1</MYDropdownItem>
          <MYDropdownItem command="md2">中菜单 2</MYDropdownItem>
        </template>
      </MYDropdown>
      <MYDropdown size="lg">
        <template #default>
          大尺寸
        </template>
        <template #dropdown>
          <MYDropdownItem command="lg1">大菜单 1</MYDropdownItem>
          <MYDropdownItem command="lg2">大菜单 2</MYDropdownItem>
        </template>
      </MYDropdown>
    </div>
  </template>
</ShowCode>

### 自定义颜色
使用 `backGroundColor` 和 `textColor` 属性自定义下拉菜单的颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYDropdown backGroundColor='#409eff' textColor='#fff'>
    <template #default>
      自定义颜色
    </template>
    <template #dropdown>
      <MYDropdownItem command='color1'>蓝色菜单项 1</MYDropdownItem>
      <MYDropdownItem command='color2'>蓝色菜单项 2</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown backGroundColor="#409eff" textColor="#fff">
      <template #default>
        自定义颜色
      </template>
      <template #dropdown>
        <MYDropdownItem command="color1">蓝色菜单项 1</MYDropdownItem>
        <MYDropdownItem command="color2">蓝色菜单项 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### 隐藏下拉箭头
使用 `no-caret` 属性隐藏下拉箭头。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYDropdown no-caret>
    <template #default>
      无箭头
    </template>
    <template #dropdown>
      <MYDropdownItem command='no1'>菜单项 1</MYDropdownItem>
      <MYDropdownItem command='no2'>菜单项 2</MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown no-caret>
      <template #default>
        无箭头
      </template>
      <template #dropdown>
        <MYDropdownItem command="no1">菜单项 1</MYDropdownItem>
        <MYDropdownItem command="no2">菜单项 2</MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

### 带图标菜单项
在 DropdownItem 中使用图标。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYDropdown>
    <template #default>
      带图标菜单
    </template>
    <template #dropdown>
      <MYDropdownItem command='edit' :icon='EditIcon'>
        编辑
      </MYDropdownItem>
      <MYDropdownItem command='copy' :icon='CopyIcon'>
        复制
      </MYDropdownItem>
      <MYDropdownItem command='delete' :icon='DeleteIcon' divided>
        删除
      </MYDropdownItem>
    </template>
  </MYDropdown>
</template>
  `.trim()"
>
  <template #demo>
    <MYDropdown>
      <template #default>
        带图标菜单
      </template>
      <template #dropdown>
        <MYDropdownItem command="edit">
          <template #icon>
            <span style="margin-right: 8px;">📝</span>
          </template>
          编辑
        </MYDropdownItem>
        <MYDropdownItem command="copy">
          <template #icon>
            <span style="margin-right: 8px;">📋</span>
          </template>
          复制
        </MYDropdownItem>
        <MYDropdownItem command="delete" divided>
          <template #icon>
            <span style="margin-right: 8px;">🗑️</span>
          </template>
          删除
        </MYDropdownItem>
      </template>
    </MYDropdown>
  </template>
</ShowCode>

## API 参考

### Dropdown Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| type  | 按钮类型      | string  | `default`/`primary` | `default`  |
| size  | 尺寸      | string  | `sm`/`md`/`lg` | `md`  |
| split-button  | 是否为分割按钮      | boolean  | — | `false`  |
| disabled  | 是否禁用      | boolean  | — | `false`  |
| placement  | 菜单弹出位置      | string  | `bottom`/`top`/`left`/`right` 等 | `bottom`  |
| trigger  | 触发方式      | string  | `hover`/`click` | `hover`  |
| hide-on-click  | 点击菜单项后是否隐藏菜单      | boolean  | — | `true`  |
| show-timeout  | 显示延时（hover 触发）      | number  | — | `150`  |
| hide-timeout  | 隐藏延时（hover 触发）      | number  | — | `150`  |
| max-height  | 菜单最大高度      | string \| number  | — | `null`  |
| back-ground-color  | 背景颜色      | string  | — | `''`  |
| text-color  | 文字颜色      | string  | — | `''`  |
| no-caret  | 是否隐藏下拉箭头      | boolean  | — | `false`  |
| teleported  | 是否使用 teleport      | boolean  | — | `true`  |

### DropdownItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| command  | 命令      | string \| number \| object  | — | `null`  |
| disabled  | 是否禁用      | boolean  | — | `false`  |
| divided  | 是否显示分割线      | boolean  | — | `false`  |
| icon  | 图标组件      | string \| object  | — | `null`  |

### 事件
| 事件名          | 说明         | 参数     |
|--------------|-------------|---------|
| command  | 点击菜单项触发      | command: string \| number \| object  |
| click  | 点击按钮时触发      | event: MouseEvent  |
| visible-change  | 菜单显示状态改变时触发      | visible: boolean  |

### 类型定义
```typescript
interface DropdownProps {
  type?: string;
  size?: string;
  splitButton?: boolean;
  disabled?: boolean;
  placement?: string;
  trigger?: string;
  hideOnClick?: boolean;
  showTimeout?: number;
  hideTimeout?: number;
  maxHeight?: string | number;
  backGroundColor?: string;
  textColor?: string;
  noCaret?: boolean;
  teleported?: boolean;
}

interface DropdownItemProps {
  command?: string | number | object;
  disabled?: boolean;
  divided?: boolean;
  icon?: string | object;
}
```
<script setup> 
import MYDropdown from '../../packages/components/dropdown/src/dropdown.vue' 
import MYDropdownItem from '../../packages/components/dropdown/src/dropdownItem.vue' 
</script>