# Timeline

## Brief Introduction
The `Timeline` component is used to display a chronological sequence of events.
You can use `<MYTimeline></MYTimeline>` and `<MYTimelineItem></MYTimelineItem>` to implement a timeline component.

## Basic Timeline

<ShowCode
  title="Basic Timeline"
  description="Vertical timeline, default direction is vertical"
  :code="`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01'>
      Event 1: Project Initiation
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15'>
      Event 2: Requirements Analysis Completed
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20'>
      Event 3: Development Phase Started
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30'>
      Event 4: Testing Phase
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline>
        <MYTimelineItem timestamp="2024-01-01">
          Event 1: Project Initiation
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-02-15">
          Event 2: Requirements Analysis Completed
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-03-20">
          Event 3: Development Phase Started
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-04-30">
          Event 4: Testing Phase
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## Custom Node Color

<ShowCode
  title="Custom Node Color"
  description="Use the color prop to customize the timeline node color"
  :code="`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01' color='#67C23A'>
      <strong>Success Event</strong>
      <div style='color: #666; font-size: 12px;'>Project successfully launched, all resources ready</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15' color='#E6A23C'>
      <strong>Warning Event</strong>
      <div style='color: #666; font-size: 12px;'>Requirements changed, need to re-estimate timeline</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20' color='#F56C6C'>
      <strong>Error Event</strong>
      <div style='color: #666; font-size: 12px;'>Major technical issue discovered during development</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30' color='#409EFF'>
      <strong>Info Event</strong>
      <div style='color: #666; font-size: 12px;'>Testing completed, ready for launch</div>
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline>
        <MYTimelineItem timestamp="2024-01-01" color="#67C23A">
          <strong>Success Event</strong>
          <div style="color: #666; font-size: 12px;">Project successfully launched, all resources ready</div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-02-15" color="#E6A23C">
          <strong>Warning Event</strong>
          <div style="color: #666; font-size: 12px;">Requirements changed, need to re-estimate timeline</div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-03-20" color="#F56C6C">
          <strong>Error Event</strong>
          <div style="color: #666; font-size: 12px;">Major technical issue discovered during development</div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="2024-04-30" color="#409EFF">
          <strong>Info Event</strong>
          <div style="color: #666; font-size: 12px;">Testing completed, ready for launch</div>
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## Custom Content Using Slots

<ShowCode
  title="Custom Content Using Slots"
  description="Use the timestamp slot to customize timestamp display and the default slot for content"
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
        <h4 style='margin: 0 0 8px 0; color: #409EFF;'>Project Kickoff Meeting</h4>
        <p style='margin: 0; color: #666;'>Discuss project goals, timeline, and resource allocation</p>
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
        <h4 style='margin: 0 0 8px 0; color: #67C23A;'>Requirements Analysis Complete</h4>
        <p style='margin: 0; color: #666;'>All functional requirements confirmed, moving to design phase</p>
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
        <h4 style='margin: 0 0 8px 0; color: #E6A23C;'>Development Phase Begins</h4>
        <p style='margin: 0; color: #666;'>Frontend and backend development underway</p>
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
            <h4 style="margin: 0 0 8px 0; color: #409EFF;">Project Kickoff Meeting</h4>
            <p style="margin: 0; color: #666;">Discuss project goals, timeline, and resource allocation</p>
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
            <h4 style="margin: 0 0 8px 0; color: #67C23A;">Requirements Analysis Complete</h4>
            <p style="margin: 0; color: #666;">All functional requirements confirmed, moving to design phase</p>
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
            <h4 style="margin: 0 0 8px 0; color: #E6A23C;">Development Phase Begins</h4>
            <p style="margin: 0; color: #666;">Frontend and backend development underway</p>
          </div>
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## Custom Styling

<ShowCode
  title="Custom Styling"
  description="Use the style prop to customize the timeline container's appearance"
  :code="`<template>
  <MYTimeline :style='{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '8px' }'>
    <MYTimelineItem timestamp='Phase 1' color='#FF6B6B'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Concept Design</h3>
        <p style='margin: 0; opacity: 0.9;'>Define product direction and core features</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='Phase 2' color='#4ECDC4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Prototype Development</h3>
        <p style='margin: 0; opacity: 0.9;'>Create interactive product prototype</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='Phase 3' color='#45B7D1'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Product Testing</h3>
        <p style='margin: 0; opacity: 0.9;'>Conduct user testing and feature validation</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='Phase 4' color='#96CEB4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Official Launch</h3>
        <p style='margin: 0; opacity: 0.9;'>Product goes live with support</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTimeline :style="{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '8px' }">
        <MYTimelineItem timestamp="Phase 1" color="#FF6B6B">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">Concept Design</h3>
            <p style="margin: 0; opacity: 0.9;">Define product direction and core features</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="Phase 2" color="#4ECDC4">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">Prototype Development</h3>
            <p style="margin: 0; opacity: 0.9;">Create interactive product prototype</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="Phase 3" color="#45B7D1">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">Product Testing</h3>
            <p style="margin: 0; opacity: 0.9;">Conduct user testing and feature validation</p>
          </div>
        </MYTimelineItem>
        <MYTimelineItem timestamp="Phase 4" color="#96CEB4">
          <div style="color: white;">
            <h3 style="margin: 0 0 8px 0;">Official Launch</h3>
            <p style="margin: 0; opacity: 0.9;">Product goes live with support</p>
          </div>
        </MYTimelineItem>
      </MYTimeline>
    </div>
  </template>
</ShowCode>

## API Reference

### Timeline Props

| Prop        | Description          | Type     | Options                          | Default    |
|-------------|----------------------|----------|----------------------------------|------------|
| direction   | Timeline direction   | string   | `vertical`/`horizontal`          | `vertical` |
| style       | Custom styles        | StyleValue | —                              | `{}`       |

### TimelineItem Props

| Prop        | Description          | Type     | Options                          | Default    |
|-------------|----------------------|----------|----------------------------------|------------|
| timestamp   | Timestamp content    | string   | —                                | —          |
| color       | Node color           | string   | Hex or named color               | —          |

### TimelineItem Slots

| Slot Name   | Description          | Parameters |
|-------------|----------------------|------------|
| default     | Timeline item content | —          |
| timestamp   | Timestamp content     | —          |

### Type Definitions

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
import MYTimeline from '../../../packages/components/timeline/src/timeline.vue'; 
import MYTimelineItem from '../../../packages/components/timeline/src/timelineItem.vue'; 
</script>
