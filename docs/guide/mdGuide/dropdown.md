# Dropdown
## 简易介绍
Dropdown 下拉菜单组件，用于展示一个下拉菜单。mengyue-components 进行了封装并进行了 vitest 测试。<br />
下拉菜单有三种标签<br />
`<MYDropdown></MYDropdown>`或者`<MYDropdown />`<br />
`<MYDropdownMenu></MYDropdownMenu>`或者`<MYDropdownMenu />`<br />
`<MYDropdownItem></MYDropdownItem>`或者`<MYDropdownMenu />`<br />

## 使用方法
dropdown下拉框基本用法
```vue
<MYDropdown type="default" size="md">
  <template #default>默认操作</template>
    <template #dropdown>
      <MYDropdown-item command="a">选项 A</MYDropdown-item>
      <MYDropdown-item command="b">选项 B</MYDropdown-item>
      <MYDropdown-item command="c" disabled>选项 C（禁用）</MYDropdown-item>
      <MYDropdown-item command="d" divided>选项 D（分隔）</MYDropdown-item>
    </template>
</MYDropdown>
```

## 点击触发
```vue
<MYDropdown trigger="click" type="primary">
    <template #default>点击触发</template>
    <template #dropdown>
        <MYDropdown-item command="1">操作 1</MYDropdown-item>
        <MYDropdown-item command="2">操作 2</MYDropdown-item>
    </template>
</MYDropdown>
```

```vue
<MYDropdown splitButton type="primary">
    <template #default>主操作</template>
    <template #dropdown>
        <MYDropdown-item command="x">删除</MYDropdown-item>
        <MYDropdown-item command="y">重命名</MYDropdown-item>
    </template>
</MYDropdown>
```

## API 参考
### Dropdown Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| trigger  | 触发方式      | string  | `click`、`hover` | `click`  |
| placement  | 菜单弹出位置      | string  | `bottom-end`、`bottom-start`、`bottom` | `bottom-start`  |
| type | 按钮类型 | string | `default`、`primary` | `default` |
| size | 按钮尺寸 | string | `sm`、`md`、`lg` | `md` |
| buttonProps | 按钮属性 | object | - | `{}` |
| maxHeight | 菜单最大高度 | string \| number | - | `null` |
| splitButton | 是否显示分割按钮 | boolean | - | `false` |
| disabled | 是否禁用 | boolean | - | `false` |
| triggerKeys | 触发键盘事件 | array | - | `['Enter', ' ', 'ArrowDown', 'NumpadEnter']` |
| hideOnClick | 点击后是否隐藏菜单 | boolean | - | `true` |
| showTimeout | 显示延迟时间 | number | - | `150` |
| hideTimeout | 隐藏延迟时间 | number | - | `150` |
| role | ARIA角色 | string | - | `'menu'` |
| tabindex | 键盘导航索引 | string \| number | - | `0` |
| popperClass | 菜单自定义类名 | string | - | `''` |
| popperOptions | 菜单配置项 | object | - | `{}` |
| teleported | 是否使用Teleport | boolean | - | `true` |
| persistent | 是否持久化菜单 | boolean | - | `true` |

### DropdownMenu Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| style | 菜单样式 | Record<string, string \| number> | - | `{}` |

### DropdownItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| command | 菜单项命令 | string \| number \| Record<string, any> | - | `undefined` |
| disabled | 是否禁用菜单项 | boolean | - | `false` |
| divided | 是否显示分割线 | boolean | - | `false` |
| icon | 菜单项图标 | string \| object | - | `undefined` |
