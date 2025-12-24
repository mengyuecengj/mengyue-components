# Message 组件设计文档

## 概述

Message 组件是本组件库中用于展示消息提示的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 messageContainer.vue 和 message.vue等核心组件实现了一套完整且易用的消息提示解决方案。

Message 组件专注于处理消息提示的展示、管理和交互，为用户提供了一套强大、灵活的消息提示功能，支持多种类型（信息、成功、警告、错误）、自动关闭、手动关闭和位置配置，有效提升用户在操作反馈场景中的体验。

---

## 设计理念

### 分层架构

Message 组件严格按照三层架构设计：

1. **结构层** message.vue, messageContainer.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** type.ts 和全局 messageManager - 处理复杂的响应式计算和交互逻辑
3. **表现层** message.scss, messageContainer.scss- 定义组件的视觉呈现和样式规则

### 逻辑抽象

Message 组件将复杂的逻辑抽象为核心函数：

- showMessage - 处理消息的创建和显示
- configureGlobal - 处理全局配置
- closeAll - 处理消息的批量关闭
- 消息计时器逻辑 - 处理自动关闭和暂停功能

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

---

## 核心功能设计

### Props 结构化设计

Message 组件的 props 设计简洁明了：

```typescript
export interface MessageOption {
  /** 消息唯一标识 */
  id?: string;
  /** 消息内容 */
  content?: string | VNode;
  /** 消息类型 */
  type?: MessageType;
  /** 显示时长（毫秒） */
  duration?: number;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 是否允许HTML字符串（XSS风险） */
  dangerouslyUseHTMLString?: boolean;
  /** 自定义图标 */
  icon?: VNode | string;
  /** 消息位置 */
  position?: Position;
  /** z-index值 */
  zIndex?: number;
  /** 关闭回调 */
  onClose?: () => void;
}
```

#### 参数说明：
- content：消息的文本内容或VNode。
- type：支持 `'info'`、`'success'`、`'warning'`、`'error'`、`'default'` 类型。
- duration：消息显示时长，0或负数表示不自动关闭。
- showClose：是否显示关闭按钮。
- dangerouslyUseHTMLString：是否允许HTML字符串（有XSS风险）。
- position：支持多种位置配置，如 `'top-right'`、`'bottom-center'` 等。

---

### 全局API设计

Message 组件提供简洁的全局API：

```typescript
export const message = {
  success: (content: string, options?: MessageOption) => MessageHandle,
  warning: (content: string, options?: MessageOption) => MessageHandle,
  error: (content: string, options?: MessageOption) => MessageHandle,
  info: (content: string, options?: MessageOption) => MessageHandle,
  default: (content: string, options?: MessageOption) => MessageHandle
}
```

#### API说明：
- message.success：显示成功消息
- message.warning：显示警告消息
- message.error：显示错误消息
- message.info：显示信息消息
- message.default：显示默认消息

---

## 样式系统设计

### CSS 变量控制

Message 组件通过 SCSS 实现样式控制：

1. `--message-bg` - 消息背景色
2. `--message-color` - 消息文本颜色
3. `--message-border` - 消息边框颜色

### 布局系统

Message 组件支持灵活的布局控制：

1. **位置配置** - 支持6种位置配置：
   - `top-right`（默认）
   - `top-left`
   - `bottom-right`
   - `bottom-left`
   - `top-center`
   - `bottom-center`
2. **堆叠布局** - 消息按顺序堆叠显示
3. **间距控制** - 通过SCSS变量调整消息间距

### 状态样式

Message 组件根据不同类型提供相应的样式：

1. **成功状态** - 绿色系样式（`.my-message--success`）
2. **警告状态** - 黄色系样式（`.my-message--warning`）
3. **错误状态** - 红色系样式（`.my-message--error`）
4. **信息状态** - 蓝色系样式（`.my-message--info`）
5. **默认状态** - 蓝色系样式（`.my-message--default`）

---

## 组件结构设计

### 整体结构

Message 组件的整体结构如下：

```html
<!-- 单个消息 -->
<div class="my-message" :class="'my-message--' + type" @mouseenter="pause" @mouseleave="resume">
  <div class="my-message--content">{{ content }}</div>
  <button class="my-message--close" v-if="showClose" @click="close">×</button>
</div>

<!-- 消息容器 -->
<div class="my-message-container" :class="positionClass" :style="{ zIndex }">
  <div v-for="msg in list" :key="msg.id" class="my-message-wrapper" style="margin-top: 8px;">
    <MessageItem :id="msg.id!" v-bind="msg" @close="() => msg.id && onClose(msg.id)" />
  </div>
</div>
```

### 组件层次

Message 组件包含三个主要部分：

1. **消息容器** - `.my-message-container` - 包裹所有消息的容器
2. **消息项** - `.my-message` - 单个消息的容器
3. **消息内容** - `.my-message--content` - 消息的文本内容
4. **关闭按钮** - `.my-message--close` - 消息的关闭按钮

---

## 交互设计

### 自动关闭与暂停

Message 组件通过计时器实现自动关闭功能，并支持鼠标悬停暂停：

```typescript
function startTimer() {
  if (!duration || duration <= 0) return
  clearTimer()
  start = Date.now()
  timer = window.setTimeout(() => { doClose() }, remaining)
}

function pause() {
  if (timer === null) return
  const elapsed = Date.now() - start
  remaining = Math.max(0, remaining - elapsed)
  clearTimer()
}

function resume() {
  if (duration && duration > 0) startTimer()
}
```

### 消息管理

Message 组件通过全局管理器实现消息的创建和销毁：

```typescript
export function showMessage(options: MessageOption): MessageHandle {
  const id = `message_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const mergedOptions = { ...globalConfig, ...options, id }
  
  // 添加到消息列表
  messageList.value.push(mergedOptions)
  
  return {
    id,
    close: () => {
      const idx = messageList.value.findIndex(x => x.id === id)
      if (idx >= 0) messageList.value.splice(idx, 1)
      options.onClose?.()
    }
  }
}
```

### 全局配置

Message 组件支持全局配置，简化重复配置：

```typescript
export function configureGlobal(config: MessageGlobalConfig) {
  Object.assign(globalConfig, config)
}
```

---

## 扩展性设计

Message 组件具备良好的扩展性：

1. **消息类型扩展**：通过 MessageType 类型定义支持扩展
2. **位置配置**：通过 Position 类型定义支持扩展
3. **自定义内容**：支持VNode作为消息内容
4. **自定义图标**：通过 icon 属性支持自定义图标
5. **全局配置**：通过 configureGlobal 支持全局配置

---

## 样式细节

Message 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保消息提示对屏幕阅读器友好
4. **平滑过渡**：消息显示和隐藏有平滑的过渡效果
5. **安全考虑**：默认不启用HTML字符串，避免XSS攻击

---

## 性能优化

通过以下方式优化性能：

1. 使用计时器精确控制消息显示时长
2. 鼠标悬停时暂停计时器，提升用户体验
3. 将复杂逻辑移至独立的函数中
4. 避免不必要的重新渲染
5. 使用Vue 3 Composition API提高运行效率
6. 按需创建和销毁消息，减少DOM操作

---

## 设计价值

Message 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Notification、Toast 等其他组件保持一致的设计语言
