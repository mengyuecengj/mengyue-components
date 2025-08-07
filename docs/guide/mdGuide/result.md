# Result
## 简易介绍
result结果组件，用于展示操作结果的状态。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYResult></MYResult>`来实现一个结果展示。

## 基础用法
使用`title`属性设置主标题，`subTitle`属性设置副标题。
```vue
<MYResult title="操作成功" subTitle="您的操作已成功完成" />
```
<MYResult title="操作成功" subTitle="您的操作已成功完成" />

## 图标类型
通过`icon`属性可以设置结果图标，可选值为`primary`、`success`、`warning`、`error`、`info`。
```vue
<MYResult icon="primary" title="操作成功" />
<MYResult icon="success" title="操作成功" />
<MYResult icon="warning" title="操作成功" />
<MYResult icon="error" title="操作成功" />
<MYResult icon="info" title="操作成功" />
```
<MYResult icon="primary" title="操作成功" />
<MYResult icon="success" title="操作成功" />
<MYResult icon="warning" title="操作成功" />
<MYResult icon="error" title="操作成功" />
<MYResult icon="info" title="操作成功" />

## 插槽使用
- `sub-title`：自定义副标题内容
- `extra`：额外内容区域
```vue
<MYResult title="操作成功">
  <template #sub-title>
    自定义副标题内容
  </template>
  <template #extra>
    <button>返回首页</button>
  </template>
</MYResult>
```
<MYResult title="操作成功">
  <template #sub-title>
    自定义副标题内容
  </template>
  <template #extra>
    <button>返回首页</button>
  </template>
</MYResult>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| title        | 主标题       | string  | —                               | `''`   |
| subTitle     | 副标题       | string  | —                               | `''`   |
| icon         | 图标类型     | string  | `primary`/`success`/`warning`/`error`/`info` | `info` |

### 插槽
| 名称          | 说明         |
|--------------|-------------|
| sub-title    | 自定义副标题内容 |
| extra        | 额外内容区域 |

### 类型定义
```ts
interface ResultProps = {
  title: string;
  subTitle: string;
  icon?: IconType;
};
```
