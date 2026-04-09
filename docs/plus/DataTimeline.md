# Timeline
## 简易介绍
Timeline 时间线组件，用于展示一系列事件的时间顺序。
可以使用 `<MYTimeline></MYTimeline>` 和 `<MYTimelineItem></MYTimelineItem>` 来实现一个时间线组件。

## 基础时间线
<ShowCode
  title="基础时间线"
  description="垂直方向的时间线，默认方向为 vertical"
  :code="`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01'>
      事件一：项目启动
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15'>
      事件二：需求分析完成
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20'>
      事件三：开发阶段开始
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30'>
      事件四：测试阶段
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline>
        <MYTimelineItem timestamp="2024-01-01">
          事件一：项目启动
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-02-15">
          事件二：需求分析完成
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-03-20">
          事件三：开发阶段开始
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-04-30">
          事件四：测试阶段
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## 自定义节点颜色
<ShowCode
  title="自定义节点颜色"
  description="使用 color 属性自定义时间线节点的颜色"
  :code="`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01' color='#67C23A'>
      <strong>成功事件</strong>
      <div style='color: #666; font-size: 12px;'>项目成功启动，所有资源准备就绪</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15' color='#E6A23C'>
      <strong>警告事件</strong>
      <div style='color: #666; font-size: 12px;'>需求变更，需要重新评估时间</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20' color='#F56C6C'>
      <strong>错误事件</strong>
      <div style='color: #666; font-size: 12px;'>开发过程中发现重大技术问题</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30' color='#409EFF'>
      <strong>信息事件</strong>
      <div style='color: #666; font-size: 12px;'>测试完成，准备上线发布</div>
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline>
        <MYTimelineItem timestamp="2024-01-01" color="#67C23A">
          <strong>成功事件</strong>
          <div style="color: #666; font-size: 12px;">项目成功启动，所有资源准备就绪</div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-02-15" color="#E6A23C">
          <strong>警告事件</strong>
          <div style="color: #666; font-size: 12px;">需求变更，需要重新评估时间</div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-03-20" color="#F56C6C">
          <strong>错误事件</strong>
          <div style="color: #666; font-size: 12px;">开发过程中发现重大技术问题</div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-04-30" color="#409EFF">
          <strong>信息事件</strong>
          <div style="color: #666; font-size: 12px;">测试完成，准备上线发布</div>
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## 使用插槽自定义内容
<ShowCode
  title="使用插槽自定义内容"
  description="使用 timestamp 插槽自定义时间显示，使用默认插槽自定义内容"
  :code="`<template>
  <MYTimeline>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #409EFF;'>📅</span>
          <span style='font-weight: bold;'>2024-01-01 09:00</span>
        </div>
      </template>
      <div style='background: #f0f9ff; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #409EFF;'>项目启动会议</h4>
        <p style='margin: 0; color: #666;'>讨论项目目标、时间安排和资源分配</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #67C23A;'>✅</span>
          <span style='font-weight: bold;'>2024-02-15 14:30</span>
        </div>
      </template>
      <div style='background: #f0f9e8; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #67C23A;'>需求分析完成</h4>
        <p style='margin: 0; color: #666;'>所有功能需求已确认，进入设计阶段</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #E6A23C;'>🚧</span>
          <span style='font-weight: bold;'>2024-03-20 10:00</span>
        </div>
      </template>
      <div style='background: #fdf6ec; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #E6A23C;'>开发阶段开始</h4>
        <p style='margin: 0; color: #666;'>前端和后端开发工作同时进行</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline>
        <MYTimelineItem>
          <template #timestamp>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #409EFF;">📅</span>
              <span style="font-weight: bold;">2024-01-01 09:00</span>
            </div>
          </template>
          <div style="background: #f0f9ff; padding: 12px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #409EFF;">项目启动会议</h4>
            <p style="margin: 0; color: #666;">讨论项目目标、时间安排和资源分配</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem>
          <template #timestamp>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #67C23A;">✅</span>
              <span style="font-weight: bold;">2024-02-15 14:30</span>
            </div>
          </template>
          <div style="background: #f0f9e8; padding: 12px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #67C23A;">需求分析完成</h4>
            <p style="margin: 0; color: #666;">所有功能需求已确认，进入设计阶段</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem>
          <template #timestamp>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #E6A23C;">🚧</span>
              <span style="font-weight: bold;">2024-03-20 10:00</span>
            </div>
          </template>
          <div style="background: #fdf6ec; padding: 12px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #E6A23C;">开发阶段开始</h4>
            <p style="margin: 0; color: #666;">前端和后端开发工作同时进行</p>
          </div>
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## 自定义样式
<ShowCode
  title="自定义样式"
  description="使用 style 属性自定义时间线容器的样式"
  :code="`<template>
  <MYTimeline :style='{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '8px' }'>
    <MYTimelineItem timestamp='第一阶段' color='#FF6B6B'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>概念设计</h3>
        <p style='margin: 0; opacity: 0.9;'>确定产品方向和核心功能</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='第二阶段' color='#4ECDC4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>原型开发</h3>
        <p style='margin: 0; opacity: 0.9;'>创建可交互的产品原型</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='第三阶段' color='#45B7D1'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>产品测试</h3>
        <p style='margin: 0; opacity: 0.9;'>进行用户测试和功能验证</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='第四阶段' color='#96CEB4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>正式发布</h3>
        <p style='margin: 0; opacity: 0.9;'>产品上线并提供支持</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline :style="{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '8px' }">
        <MYTimelineItem timestamp="第一阶段" color="#FF6B6B">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">概念设计</h3>
            <p style="margin: 0; opacity: 0.9;">确定产品方向和核心功能</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="第二阶段" color="#4ECDC4">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">原型开发</h3>
            <p style="margin: 0; opacity: 0.9;">创建可交互的产品原型</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="第三阶段" color="#45B7D1">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">产品测试</h3>
            <p style="margin: 0; opacity: 0.9;">进行用户测试和功能验证</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="第四阶段" color="#96CEB4">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">正式发布</h3>
            <p style="margin: 0; opacity: 0.9;">产品上线并提供支持</p>
          </div>
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## API 参考
### Timeline Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| direction  | 时间线方向      | string  | `vertical`/`horizontal` | `vertical`  |
| style  | 自定义样式      | StyleValue  | — | `{}`  |

### TimelineItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| timestamp  | 时间戳内容      | string  | — | —  |
| color  | 节点颜色      | string  | 支持16进制颜色或单词颜色 | —  |

### TimelineItem Slots
| 插槽名          | 说明         | 参数     |
|--------------|-------------|---------|
| default  | 时间项内容      | —  |
| timestamp  | 时间戳内容      | —  |

### 类型定义
```typescript
interface TimelineProps {
  direction?: 'vertical' | 'horizontal';
  style?: StyleValue;
}

interface TimelineItemProps {
  timestamp: string;
  color?: string;
}
```
<script setup> 
import MYTimeline from '../../packages/components/timeline/src/timeline.vue'; 
import MYTimelineItem from '../../packages/components/timeline/src/timelineItem.vue'; 
</script>
