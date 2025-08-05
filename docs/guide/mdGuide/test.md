# Button 按钮

常用的操作按钮。
`<MYButton>我是一个按钮</MYButton>`
## 基础用法

<demo>
  <template #source>
    <MYButton type="primary">主要按钮</MYButton>
    <MYButton type="success" >次要按钮</MYButton>
  </template>
  <template #description>
    使用 `type` 属性定义按钮样式。
  </template>
</demo>


## 禁用状态

<demo>
  <template #source>
    <button type="primary" :disabled="true">禁用按钮</button>
  </template>
  <template #description>
    使用 `disabled` 属性控制按钮是否禁用。
  </template>
</demo>
