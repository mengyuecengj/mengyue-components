# Dropdown
## 简易介绍
Dropdown 下拉菜单组件，用于展示一个下拉菜单。mengyue-components 进行了封装并进行了 vitest 测试。<br />
下拉菜单有三种标签<br />
`<MYDropdown></MYDropdown>`或者`<MYDropdown />`<br />
`<MYDropdownMenu></MYDropdownMenu>`或者`<MYDropdownMenu />`<br />
`<MYDropdownItem></MYDropdownItem>`或者`<MYDropdownMenu />`<br />

## 使用方法
```vue
<MYDropdown trigger="click" placement="bottom-start" class="a">
    <span class="el-dropdown-link" style="cursor: pointer; display: flex; align-items: center;">
      Dropdown List
      <svg
        class="el-icon--right"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="16"
        height="16"
        viewBox="0 0 1024 1024"
        style="margin-left: 4px;"
      >
        <path d="M298 380l214 214 214-214z"/>
      </svg>
    </span>

    <template #dropdown>
      <MYDropdown-menu>
        <MYDropdown-item @click="onAction('Action 1')">Action 1</MYDropdown-item>
        <MYDropdown-item @click="onAction('Action 2')">Action 2</MYDropdown-item>
        <MYDropdown-item disabled>Action 3 (disabled)</MYDropdown-item>
        <MYDropdown-item divided @click="onAction('Action 4')">Action 4 (divided)</MYDropdown-item>
      </MYDropdown-menu>
    </template>
</MYDropdown>
```

## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| trigger  | 触发方式      | string  | `click`、`hover` | `click`  |
| placement  | 菜单弹出位置      | string  | `bottom-end`、`bottom-start`、`bottom` | `bottom-start`  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| default  | 下拉菜单内容      |