# messageManageer工具类

## messageManager：全局 Message 消息管理器

### 痛点来源

在实际项目中，全局消息提示（Message、Notification）是高频使用的反馈机制，但传统实现往往存在以下问题：

- 多个消息叠加时容易遮挡关键内容，或在小屏设备上堆积过多导致页面溢出
- 不同位置（top-right、bottom-left 等）的消息容器需重复创建与管理
- 全局配置（如默认时长、zIndex、位置）难以统一修改
- 动态创建的 Vue 实例未正确卸载会导致内存泄漏
- 消息关闭、批量关闭逻辑散乱，调用不优雅
- SSR 环境下直接操作 DOM 会导致崩溃

如果每个地方都手动创建消息组件，代码冗余且难以维护一致的交互与视觉体验。

### 设计目标

`messageManager.ts` 提供了一个**轻量、强大、可配置的全局 Message 服务**，通过单例容器管理 + 动态 Vue 实例挂载，实现：

- 支持多位置独立消息栈
- 自动限制屏幕内消息数量，避免溢出
- 全局统一配置与链式 API（如 `message.success()`）
- 完美 SSR 兼容与资源自动清理
- 优雅的打开、关闭、批量关闭接口

### 核心特性

| 特性                         | 说明                                                                 |
|------------------------------|----------------------------------------------------------------------|
| **多位置独立容器**           | 支持 `top-left`、`top-right`、`bottom-left`、`bottom-right` 四位置独立管理 |
| **屏幕高度自适应限制**       | 自动计算消息总高度（平均 48px），超出屏幕时从旧消息开始移除（top 位置从底移除，bottom 位置从顶移除） |
| **动态 Vue 实例管理**        | 按位置懒创建 `MessageContainer` 实例，挂载到 body，避免重复渲染       |
| **全局配置支持**             | 通过 `configureGlobal` 统一设置 duration、position、zIndex 等         |
| **链式类型 API**             | `message.success/info/warning/error` 快速调用，语义清晰               |
| **SSR 安全**                 | 服务端直接返回空闭包函数，避免 DOM 操作崩溃                           |
| **自动清理机制**             | 消息移除时自动检查高度，容器长期为空时可手动清理（当前未销毁实例，保持性能） |
| **唯一 ID 与手动关闭**       | 每条消息返回 `id` 与 `close()` 方法，支持精准关闭与 `closeAll()`       |

### 典型使用方式

```typescript
import message from '@/utils/messageManager';

// 基础调用
message('操作成功');

// 类型调用
message.success('保存成功');
message.warning({ content: '网络不稳定', duration: 5000 });
message.error('请求失败，请重试');

// 自定义选项
message({
  content: '带图标的消息',
  type: 'info',
  position: 'bottom-left',
  duration: 0, // 不自动关闭
});

// 手动关闭
const handle = message.info('长时间任务');
setTimeout(() => handle.close(), 10000);

// 全局关闭
message.closeAll();

// 全局配置（建议在 main.ts 中调用）
message.configureGlobal({
  duration: 4500,
  position: 'top-right',
  zIndex: 5000
});
```

## 设计价值
messageManager 是组件库中全局反馈系统的基石，它将原本分散、易出错的消息创建逻辑彻底集中，实现了：

视觉体验高度一致：所有消息样式、动画、位置、堆叠规则统一
用户体验更友好：自动防止消息堆积过多，避免遮挡关键区域
API 优雅直观：链式调用 + 类型方法大幅降低使用心智成本
资源管理安全：SSR 兼容、动态挂载、无内存泄漏风险
高扩展性：后续可轻松添加通知音、最大数量配置、偏移量等功能

它完美体现了我们的设计哲学：全局性服务不应是“临时拼凑”，而应是经过深思熟虑的、可靠的单例管理系统。一个优秀的 Message 服务，能悄无声息地提升整个应用的反馈品质与专业感。
用最智能的管理，呈现最优雅的消息反馈。