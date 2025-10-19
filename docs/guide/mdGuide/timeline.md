# Timeline
## 简易介绍
Timeline 时间轴组件，用于展示时间序列的事件或步骤。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYTimeline></MYTimeline>` 或者 `<MYTimeline />`和`<MYTimeline-item></MYTimeline-item>`或者`<MYTimeline-item />`来实现一个时间轴组件。

## 时间轴基本用法

<MYTimeline style="max-width: 600px">
    <MYTimeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
      :color="activity.color"
    >
      {{ activity.content }}
    </MYTimeline-item>
</MYTimeline>

## API 参考
### Timeline Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| direction  | 时间轴方向      | string  | `'vertical'` \| `'horizontal'` | `'vertical'`  |
| theme  | 主题样式      | string  | — | —  |
| style  | 自定义样式      | object  | — | —  |

### TimelineItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| timestamp  | 时间标签      | string  | — | —  |
| color  | 填色      | string  | — | —  |

### 类型定义
```vue
interface TimelineProps {
  direction?: 'vertical' | 'horizontal';
  theme?: string;
  style?: import('vue').StyleValue;
}

interface TimelineItemProps {
  timestamp?: string;
  color?: string;
}
```

<script setup>
const activities = [
  { content: 'Event start', timestamp: '2018-04', color: '#f56c6c' },
  { content: 'Approved', timestamp: '2018-04', color: '#67c23a' },
  { content: 'Success', timestamp: '2018-04', color: '#409eff' },
];
</script>