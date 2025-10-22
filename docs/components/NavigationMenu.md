# Menu

## 简易介绍
Menu 导航菜单组件，提供侧边栏和顶部导航功能。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYMenu></MYMenu>` 或者 `<MYMenu />` 来实现一个导航菜单组件。

## 基本用法

### 垂直菜单
默认的垂直菜单，支持多级嵌套。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYMenu default-active='1'>
    <MYMenuItem index='1'>
      <template #icon>🏠</template>
      首页
    </MYMenuItem>
    <MYMenuItem index='2'>
      <template #icon>📊</template>
      数据统计
    </MYMenuItem>
    <MYSubMenu index='3'>
      <template #icon>⚙️</template>
      <template #title>系统管理</template>
      <MYMenuItem index='3-1'>用户管理</MYMenuItem>
      <MYMenuItem index='3-2'>角色管理</MYMenuItem>
      <MYSubMenu index='3-3'>
        <template #title>权限管理</template>
        <MYMenuItem index='3-3-1'>菜单权限</MYMenuItem>
        <MYMenuItem index='3-3-2'>操作权限</MYMenuItem>
      </MYSubMenu>
    </MYSubMenu>
    <MYMenuItem index='4' disabled>
      <template #icon>🔒</template>
      禁用菜单
    </MYMenuItem>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="width: 240px; background: #2f3b46; border-radius: 6px; padding: 8px 0;">
      <MYMenu default-active="1">
        <MYMenuItem index="1">
          <template #icon>🏠</template>
          首页
        </MYMenuItem>
        <MYMenuItem index="2">
          <template #icon>📊</template>
          数据统计
        </MYMenuItem>
        <MYSubMenu index="3">
          <template #icon>⚙️</template>
          <template #title>系统管理</template>
          <MYMenuItem index="3-1">用户管理</MYMenuItem>
          <MYMenuItem index="3-2">角色管理</MYMenuItem>
          <MYSubMenu index="3-3">
            <template #title>权限管理</template>
            <MYMenuItem index="3-3-1">菜单权限</MYMenuItem>
            <MYMenuItem index="3-3-2">操作权限</MYMenuItem>
          </MYSubMenu>
        </MYSubMenu>
        <MYMenuItem index="4" disabled>
          <template #icon>🔒</template>
          禁用菜单
        </MYMenuItem>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### 水平菜单
使用 `mode` 属性设置为 horizontal 创建水平菜单。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYMenu mode='horizontal' default-active='1'>
    <MYMenuItem index='1'>首页</MYMenuItem>
    <MYMenuItem index='2'>产品</MYMenuItem>
    <MYSubMenu index='3'>
      <template #title>服务</template>
      <MYMenuItem index='3-1'>云服务</MYMenuItem>
      <MYMenuItem index='3-2'>技术支持</MYMenuItem>
    </MYSubMenu>
    <MYMenuItem index='4'>关于我们</MYMenuItem>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="background: #2f3b46; border-radius: 6px;">
      <MYMenu mode="horizontal" default-active="1">
        <MYMenuItem index="1">首页</MYMenuItem>
        <MYMenuItem index="2">产品</MYMenuItem>
        <MYSubMenu index="3">
          <template #title>服务</template>
          <MYMenuItem index="3-1">云服务</MYMenuItem>
          <MYMenuItem index="3-2">技术支持</MYMenuItem>
        </MYSubMenu>
        <MYMenuItem index="4">关于我们</MYMenuItem>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### 自定义颜色
使用 `backgroundColor`、`textColor` 和 `activeTextColor` 属性自定义菜单颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYMenu 
    default-active='1'
    background-color='#545c64'
    text-color='#fff'
    active-text-color='#ffd04b'
  >
    <MYMenuItem index='1'>
      <template #icon>🌟</template>
      金色主题
    </MYMenuItem>
    <MYMenuItem index='2'>
      <template #icon>🎨</template>
      色彩定制
    </MYMenuItem>
    <MYSubMenu index='3'>
      <template #icon>🔧</template>
      <template #title>设置</template>
      <MYMenuItem index='3-1'>主题设置</MYMenuItem>
      <MYMenuItem index='3-2'>颜色设置</MYMenuItem>
    </MYSubMenu>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="width: 240px; border-radius: 6px; overflow: hidden;">
      <MYMenu 
        default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <MYMenuItem index="1">
          <template #icon>🌟</template>
          金色主题
        </MYMenuItem>
        <MYMenuItem index="2">
          <template #icon>🎨</template>
          色彩定制
        </MYMenuItem>
        <MYSubMenu index="3">
          <template #icon>🔧</template>
          <template #title>设置</template>
          <MYMenuItem index="3-1">主题设置</MYMenuItem>
          <MYMenuItem index="3-2">颜色设置</MYMenuItem>
        </MYSubMenu>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### 唯一展开菜单
使用 `unique-opened` 属性确保同时只能展开一个子菜单。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYMenu unique-opened default-active='1'>
    <MYMenuItem index='1'>
      <template #icon>📁</template>
      文档管理
    </MYMenuItem>
    <MYSubMenu index='2'>
      <template #icon>👥</template>
      <template #title>用户管理</template>
      <MYMenuItem index='2-1'>用户列表</MYMenuItem>
      <MYMenuItem index='2-2'>用户组</MYMenuItem>
    </MYSubMenu>
    <MYSubMenu index='3'>
      <template #icon>🔐</template>
      <template #title>权限管理</template>
      <MYMenuItem index='3-1'>角色管理</MYMenuItem>
      <MYMenuItem index='3-2'>权限设置</MYMenuItem>
    </MYSubMenu>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="width: 240px; background: #2f3b46; border-radius: 6px; padding: 8px 0;">
      <MYMenu unique-opened default-active="1">
        <MYMenuItem index="1">
          <template #icon>📁</template>
          文档管理
        </MYMenuItem>
        <MYSubMenu index="2">
          <template #icon>👥</template>
          <template #title>用户管理</template>
          <MYMenuItem index="2-1">用户列表</MYMenuItem>
          <MYMenuItem index="2-2">用户组</MYMenuItem>
        </MYSubMenu>
        <MYSubMenu index="3">
          <template #icon>🔐</template>
          <template #title>权限管理</template>
          <MYMenuItem index="3-1">角色管理</MYMenuItem>
          <MYMenuItem index="3-2">权限设置</MYMenuItem>
        </MYSubMenu>
      </MYMenu>
    </div>
  </template>
</ShowCode>

### 悬停触发
使用 `trigger` 属性设置为 hover，通过悬停触发子菜单展开。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYMenu trigger='hover' default-active='1'>
    <MYMenuItem index='1'>首页</MYMenuItem>
    <MYSubMenu index='2'>
      <template #title>悬停菜单</template>
      <MYMenuItem index='2-1'>选项一</MYMenuItem>
      <MYMenuItem index='2-2'>选项二</MYMenuItem>
    </MYSubMenu>
    <MYMenuItem index='3'>联系我们</MYMenuItem>
  </MYMenu>
</template>
  `.trim()"
>
  <template #demo>
    <div style="background: #2f3b46; border-radius: 6px;">
      <MYMenu trigger="hover" default-active="1">
        <MYMenuItem index="1">首页</MYMenuItem>
        <MYSubMenu index="2">
          <template #title>悬停菜单</template>
          <MYMenuItem index="2-1">选项一</MYMenuItem>
          <MYMenuItem index="2-2">选项二</MYMenuItem>
        </MYSubMenu>
        <MYMenuItem index="3">联系我们</MYMenuItem>
      </MYMenu>
    </div>
  </template>
</ShowCode>

## API 参考

### Menu Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| default-active  | 默认激活菜单的 index      | string  | — | `''`  |
| mode  | 菜单模式      | string  | `vertical`/`horizontal` | `vertical`  |
| collapse  | 是否水平折叠收起菜单      | boolean  | — | `false`  |
| background-color  | 菜单背景色      | string  | — | `#2f3b46`  |
| text-color  | 菜单文字颜色      | string  | — | `#bfcbd9`  |
| active-text-color  | 激活菜单的文字颜色      | string  | — | `#409EFF`  |
| trigger  | 子菜单打开的触发方式      | string  | `click`/`hover` | `click`  |
| unique-opened  | 是否只保持一个子菜单展开      | boolean  | — | `false`  |
| default-openeds  | 默认打开的 sub-menu 的 index 数组      | array  | — | `[]`  |
| collapse-transition  | 是否开启折叠动画      | boolean  | — | `true`  |

### MenuItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| index  | 唯一标识      | string  | — | `必需`  |
| disabled  | 是否禁用      | boolean  | — | `false`  |

### SubMenu Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| index  | 唯一标识      | string  | — | `必需`  |
| trigger  | 子菜单打开的触发方式      | string  | `click`/`hover` | `继承 Menu`  |
| teleported  | 是否使用 teleport      | boolean  | — | `false`  |

### 事件
| 事件名          | 说明         | 参数     |
|--------------|-------------|---------|
| select  | 菜单激活回调      | index: string, indexPath: string[]  |
| open  | sub-menu 展开的回调      | index: string, indexPath: string[]  |
| close  | sub-menu 收起的回调      | index: string, indexPath: string[]  |

### 类型定义
```typescript
interface MenuProps {
  defaultActive?: string;
  mode?: 'vertical' | 'horizontal';
  collapse?: boolean;
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  trigger?: 'click' | 'hover';
  uniqueOpened?: boolean;
  defaultOpeneds?: string[];
  collapseTransition?: boolean;
}

interface MenuItemProps {
  index: string;
  disabled?: boolean;
}

interface SubMenuProps {
  index: string;
  trigger?: 'click' | 'hover';
  teleported?: boolean;
}
```
<script setup> 
import { ref } from 'vue' 
import MYMenu from '../../packages/components/menu/src/menu.vue' 
import MYMenuItem from '../../packages/components/menu/src/menuItem.vue' 
import MYSubMenu from '../../packages/components/menu/src/menusubMenu.vue' 
const isCollapsed = ref(false) 
const toggleCollapse = () => { 
    isCollapsed.value = !isCollapsed.value 
} 
</script>