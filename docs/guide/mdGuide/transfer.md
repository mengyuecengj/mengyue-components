# Transfer
## 简易介绍
Transfer 穿梭框组件，用于在两栏中移动数据项。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYTransfer></MYTransfer>` 或者 `<MYTransfer />` 来实现一个穿梭框组件。

## 穿梭框使用方法
```vue
<MYTransfer v-model="value" :data="data" backgroundColor="#ff0000" colorText="#2c2" hoverBackground="#2c2" />
```
<div style="padding: 20px">
  <MYTransfer v-model="value" :data="data" backgroundColor="#ff0000" colorText="#2c2" hoverBackground="#2c2" />
</div>


## API 参考
### Transfer Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue  | 已选中的数据项      | number[]  | — | `[]`  |
| data  | 数据源      | Option[]  | — | `[]`  |

### TransferPanel Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| title  | 面板标题      | string  | — | `''`  |
| data  | 数据源      | Option[]  | — | `[]`  |
| selected  | 已选中的数据项      | number[]  | — | `[]`  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| buttons  | 自定义按钮      |

### 类型定义
```ts
interface transferProps {
  title?: string;
  data?: Option[];
  selected: number[];
};
```

<script setup>
import { ref } from 'vue'
const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `选项 ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([]) // 右侧被选中的 key 数组
</script>