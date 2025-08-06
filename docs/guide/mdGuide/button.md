# Button
## 简易介绍
button按钮，经典交互元素，常用的操作按钮，可以用于表单提交等地方。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYButton></MYButton>`或者`<MYButton />`来实现一个按钮

## 基本使用
### type
在`MYButton`中使用`type`可以实现按钮的颜色定义，这些颜色是mengyue-components提供的基本颜色定义。
例如使用type完成下面的颜色定义,如果不写type默认是透明颜色: <br />
```html
<MYButton>Default按钮</MYButton>
<MYButton type="primary">primary按钮</MYButton>
<MYButton type="success">Success按钮</MYButton>
<MYButton type="warning">Warning按钮</MYButton>
<MYButton type="danger">Danger按钮</MYButton>
<MYButton type="info">Info按钮</MYButton>
```
运行后的效果
<MYBorder Border="2px solid #8a8e96ff" height="100px" center paddingText="10px">
    <MYRow :gutter="16">
        <MYCol :span="8">
            <MYButton>Default按钮</MYButton>
        </MYCol>
        <MYCol :span="8">
            <MYButton type="primary">primary按钮</MYButton>
        </MYCol>
        <MYCol :span="8">
            <MYButton type="success">Success按钮</MYButton>
        </MYCol>
        <MYCol :span="8">
            <MYButton type="warning">Warning按钮</MYButton>
        </MYCol>
        <MYCol :span="8">
            <MYButton type="danger">Danger按钮</MYButton>
        </MYCol>
        <MYCol :span="8">
            <MYButton type="info">Info按钮</MYButton>
        </MYCol>
    </MYRow>
</MYBorder>

### 自定义颜色
当然，如果上面的颜色不满足需求，还可以自定义颜色，使用colorBg自定义按钮背景颜色
例如这里使用红色背景：
```html
<MYButton colorBg="#ff0000">自定义红色背景按钮</MYButton>
```
<MYButton colorBg="#ff0000">自定义红色背景按钮</MYButton>

### plain
