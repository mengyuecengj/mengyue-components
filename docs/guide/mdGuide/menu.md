# Menu
## 简易介绍
Menu 菜单组件，用于展示导航菜单。mengyue-components 进行了封装并进行了 vitest 测试。<br />
menu菜单有三种标签<br />
`<MYMenu></MYMenu>`或者`<MYMenu />`<br />
`<MYMenu-submenu></MYMenu-submenu>`或者`<MYMenu-submenu />`<br />
`<MYMenu-item></MYMenu-item>`或者`<MYMenu-item />`<br />

## menu菜单使用方法
```vue
<MYMenu
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
>
    <MYMenu-item index="1">首页</MYMenu-item>

    <MYMenu-submenu index="2">
      <template #title>工作区</template>
      <MYMenu-item index="2-1">项目一</MYMenu-item>
      <MYMenu-item index="2-2">项目二</MYMenu-item>

      <MYMenu-submenu index="2-3">
        <template #title>项目三</template>
        <MYMenu-item index="2-3-1">子项一</MYMenu-item>
        <MYMenu-item index="2-3-2">子项二</MYMenu-item>
      </MYMenu-submenu>
    </MYMenu-submenu>

    <MYMenu-item index="3" disabled>禁用</MYMenu-item>
    <MYMenu-item index="4">设置</MYMenu-item>
</MYMenu>
```

## API 参考
### Menu Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| mode  | 菜单模式      | string  | `vertical`、`horizontal` | `vertical`  |
| defaultActive  | 默认激活的菜单项索引      | string  | — | `''`  |
| backgroundColor  | 菜单背景色      | string  | — | `''`  |
| textColor  | 菜单文字颜色      | string  | — | `''`  |
| activeTextColor  | 激活菜单项文字颜色      | string  | — | `''`  |

### MenuItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| index  | 菜单项索引      | string  | — | `''`  |
| disabled  | 是否禁用      | boolean  | — | `false`  |

### SubMenu Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| index  | 子菜单索引      | string  | — | `''`  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| default  | 菜单项内容      |
| title  | 子菜单标题      |

### 类型定义
```vue
interface SubMenuProps {
  mode: string;
  defaultActive: string;
  backgroundColor: string;
  textColor: string;
  activeTextColor: string;
}

interface MenuItemProps {
  index: string;
  disabled: boolean;
}

interface SubMenuProps {
  index: string;
}
```