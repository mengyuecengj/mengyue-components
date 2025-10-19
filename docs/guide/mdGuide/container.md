# Container
## 简易介绍
Container 是一个容器组件，用于包裹其他内容并提供布局和样式控制。mengyue-components 对其进行了封装并进行了 vitest 测试。<br />
它的使用有五种标签：<br />
`<MYContainer />`: 基础容器<br />
`<MYHeader />`: 页面头部<br />
`<MYAside />`: 侧边栏<br />
`<MYMain />`: 主体内容<br />
`<MYFooter />`: 页脚<br />

## 关于容器的使用
### 基础容器
使用 `<MYContainer></MYContainer>` 来实现一个容器。例如：
```vue
<div style="border: 1px solid #2c2; padding: 15px; border-radius: 4px">
    <h3>基础容器</h3>
    <MYContainer class="basic-container">
       <p>这是一个基础容器</p>
    </MYContainer>
</div>
```
<div style="border: 1px solid #2c2; padding: 15px; border-radius: 4px">
    <h3>基础容器</h3>
    <MYContainer class="basic-container">
       <p>这是一个基础容器</p>
    </MYContainer>
</div>

### 带着自定义样式的基础容器
```vue
<div style="border: 1px solid #2c2; padding: 15px; border-radius: 4px">
    <h3>带自定义样式的容器</h3>
    <MYContainer 
        height="300px" 
        width="80%" 
        background="#470303ff" class="styled-container">
        <p>自定义高度、宽度和背景色的容器</p>
    </MYContainer>
</div>
```
<div style="border: 1px solid #2c2; padding: 15px; border-radius: 4px">
    <h3>带自定义样式的容器</h3>
    <MYContainer height="300px" width="80%"background="#470303ff" class="styled-container">
        <p>自定义高度、宽度和背景色的容器</p>
    </MYContainer>
</div>

### 完整布局
```vue
<div class="test-case">
    <h3>完整布局</h3>
    <MYContainer height="200px" class="full-layout">
        <MYHeader class="header" height="30px">头部</MYHeader>
        <MYAside class="left-aside">左侧边栏</MYAside>
        <MYMain class="main-content">
          <p>主内容区域</p>
          <p>可以放置各种内容</p>
        </MYMain>
        <MYAside position="right" class="right-aside">右侧边栏</MYAside>
        <MYFooter class="footer" height="30px">页脚区域</MYFooter>
    </MYContainer>
</div>
```
<div class="test-case">
    <h3>完整布局</h3>
    <MYContainer height="200px" class="full-layout">
        <MYHeader class="header" height="30px">头部</MYHeader>
        <MYAside class="left-aside">左侧边栏</MYAside>
        <MYMain class="main-content">
          <p>主内容区域</p>
          <p>可以放置各种内容</p>
        </MYMain>
        <MYAside position="right" class="right-aside">右侧边栏</MYAside>
        <MYFooter class="footer" height="30px">页脚区域</MYFooter>
    </MYContainer>
</div>

## API 参考

### MYContainer Props

| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| height     | 高度         | string/number | px/em/rem/动态        | —      |
| width      | 宽度         | string/number | px/em/rem/动态/%                     | —      |
| background | 背景颜色      | string  | 支持16进制颜色或单词颜色               | —      |
| tag        | 容器标签      | string  | 支持所有 HTML 标签                 | `div` |

### MYHeader Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| height     | 高度         | string/number | px/em/rem/动态        | —      |
| width      | 宽度         | string/number | px/em/rem/动态/%                     | —      |
| background | 背景颜色      | string  | 支持16进制颜色或单词颜色               | —      |
| fixed      | 固定头部导航         | boolean  |  —                    | `false` |
| tag        | 容器标签      | string  | 支持所有 HTML 标签                 | `header` |

### MYAside Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| height     | 高度         | string/number | px/em/rem/动态        | —      |
| width      | 宽度         | string/number | px/em/rem/动态/%                     | —      |
| background | 背景颜色      | string  | 支持16进制颜色或单词颜色               | —      |
| position   | 侧边栏位置位置         | string  | `left`/`right`                    | `left` |
| tag        | 容器标签      | string  | 支持所有 HTML 标签                 | `aside` |

### MYMain Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| height     | 高度         | string/number | px/em/rem/动态        | —      |
| width      | 宽度         | string/number | px/em/rem/动态/%                     | —      |
| background | 背景颜色      | string  | 支持16进制颜色或单词颜色               | —      |
| tag        | 容器标签      | string  | 支持所有 HTML 标签                 | `main` |

### MYFooter Props
| 参数        | 说明         | 类型     | 可选值                              | 默认值  |
|------------|-------------|---------|-----------------------------------|--------|
| height     | 高度         | string/number | px/em/rem/动态        | —      |
| width      | 宽度         | string/number | px/em/rem/动态/%                     | —      |
| background | 背景颜色      | string  | 支持16进制颜色或单词颜色               | —      |
| tag        | 容器标签      | string  | 支持所有 HTML 标签                 | `footer` |


### 类型定义

```vue
interface ContainerProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
}

interface HeaderProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  fixed?: boolean;
  tag?: string;
}

interface AsideProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
  position?: "left" | "right";
}

interface MainProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
}

interface FooterProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
}
```

