# Progress
## 简易介绍
progress进度条组件，用于展示任务或操作的进度状态。mengyue-components进行了封装并进行了vitest测试。<br />
可以使用`<MYProgress></MYProgress>`来实现一个进度条。

## 基础用法
使用`percentage`属性设置进度百分比。
```vue
<MYProgress :percentage="50" />
```
<MYProgress :percentage="50" />

## 状态显示
使用`status`属性可以设置进度条的状态，可选值为`success`、`warning`、`exception`。
```vue
<MYProgress :percentage="70" status="success" />
```
<MYProgress :percentage="70" status="success" />

## 自定义格式化
使用`format`属性可以自定义百分比显示格式。
```vue
<MYProgress :percentage="80" :format="(percentage) => `${percentage}%完成`" />
```
<MYProgress :percentage="80" :format="(percentage) => `${percentage}%完成`" />

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| percentage   | 进度百分比   | number  | —                               | `50`   |
| status       | 进度条状态   | string  | `success`/`warning`/`exception` | `''`   |
| format       | 百分比格式化函数 | function | —                               | `undefined` |

### 类型定义
```vue
interface ProgressProps {
  percentage: number;
  status: ProgressStatus | '';
  format: ProgressFormat;
}
```