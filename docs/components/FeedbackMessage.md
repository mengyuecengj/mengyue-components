# Message
## 简易介绍
message消息提示组件，用于向用户显示操作反馈信息。<br />
可以通过函数式调用 `MYMessage()` 来显示消息提示。

## 基础用法
使用函数调用方式显示不同类型的消息提示。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showInfo'>信息提示</MYButton>
        <MYButton @click='showSuccess'>成功提示</MYButton>
        <MYButton @click='showWarning'>警告提示</MYButton>
        <MYButton @click='showError'>错误提示</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showInfo">信息提示</MYButton>
        <MYButton @click="showSuccess">成功提示</MYButton>
        <MYButton @click="showWarning">警告提示</MYButton>
        <MYButton @click="showError">错误提示</MYButton>
    </div>
  </template>
</ShowCode>

## 显示关闭按钮
使用`showClose`属性可以显示关闭按钮。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton @click='showClosableMessage'>显示关闭按钮</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showClosableMessage">显示关闭按钮</MYButton>
  </template>
</ShowCode>

## 自定义持续时间
使用`duration`属性可以自定义消息显示的持续时间。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showShortMessage'>短时间 (1秒)</MYButton>
        <MYButton @click='showLongMessage'>长时间 (10秒)</MYButton>
        <MYButton @click='showPermanentMessage'>永久显示</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showShortMessage">短时间 (1秒)</MYButton>
        <MYButton @click="showLongMessage">长时间 (10秒)</MYButton>
        <MYButton @click="showPermanentMessage">永久显示</MYButton>
    </div>
  </template>
</ShowCode>

## 自定义位置
使用`position`属性可以设置消息显示的位置。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showTopLeft'>左上角</MYButton>
        <MYButton @click='showTopRight'>右上角</MYButton>
        <MYButton @click='showTopCenter'>顶部居中</MYButton>
        <MYButton @click='showBottomLeft'>左下角</MYButton>
        <MYButton @click='showBottomRight'>右下角</MYButton>
        <MYButton @click='showBottomCenter'>底部居中</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showTopLeft">左上角</MYButton>
        <MYButton @click="showTopRight">右上角</MYButton>
        <MYButton @click="showTopCenter">顶部居中</MYButton>
        <MYButton @click="showBottomLeft">左下角</MYButton>
        <MYButton @click="showBottomRight">右下角</MYButton>
        <MYButton @click="showBottomCenter">底部居中</MYButton>
    </div>
  </template>
</ShowCode>

## HTML内容支持
使用`dangerouslyUseHTMLString`属性可以支持HTML内容（注意XSS风险）。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton @click='showHTMLMessage'>显示HTML内容</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showHTMLMessage">显示HTML内容</MYButton>
  </template>
</ShowCode>

## 手动关闭控制
可以通过返回值手动控制消息的关闭。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showManualMessage'>显示可手动关闭的消息</MYButton>
        <MYButton @click='closeManualMessage' :disabled='!manualMessageHandle'>
            手动关闭
        </MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showManualMessage">显示可手动关闭的消息</MYButton>
        <MYButton @click="closeManualMessage" :disabled="!manualMessageHandle">
            手动关闭
        </MYButton>
    </div>
  </template>
</ShowCode>

## 关闭回调
使用`onClose`属性可以在消息关闭时执行回调函数。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton @click='showMessageWithCallback'>显示带回调的消息</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showMessageWithCallback">显示带回调的消息</MYButton>
  </template>
</ShowCode>

## 偏移量设置
使用`offset`属性可以设置消息容器的偏移量。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showMessageWithOffset'>带偏移量的消息</MYButton>
        <MYButton @click='showMultipleOffsetMessages'>多个偏移消息</MYButton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <MYButton @click="showMessageWithOffset">带偏移量的消息</MYButton>
        <MYButton @click="showMultipleOffsetMessages">多个偏移消息</MYButton>
    </div>
  </template>
</ShowCode>

## 组合使用
最后，实现个多种api组合使用实现个完整的消息提示：
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton @click='showComplexMessage'>组合使用示例</MYButton>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton @click="showComplexMessage">组合使用示例</MYButton>
  </template>
</ShowCode>

## API 参考

### 函数调用
```typescript
// 基础用法
MYMessage(options: MessageOption): MessageHandle
MYMessage(content: string): MessageHandle

// 快捷方法
MYMessage.success(content: string, options?: MessageOption): MessageHandle
MYMessage.info(content: string, options?: MessageOption): MessageHandle
MYMessage.warning(content: string, options?: MessageOption): MessageHandle
MYMessage.error(content: string, options?: MessageOption): MessageHandle
MYMessage.default(content: string, options?: MessageOption): MessageHandle
```

### MessageOption 参数
| 参数                | 说明             | 类型               | 可选值        | 默认值      |
|--------------------|------------------|-------------------|-------------|------------|
| content         | 消息内容   | string | VNode           | —           |  —   |
| type              | 消息类型       | string            | info/success/warning/error/default           | `'info'`       |
| duration              | 显示时长(毫秒)       | number  | —           | `3000`      |
| showClose             | 显示关闭按钮       | sboolean  | —           | `false`      |
| dangerouslyUseHTMLString  | 使用HTML内容   | boolean           | top-right/top-left/bottom-right/bottom-left/top-center/bottom-center           | `'top-right'`     |
| offset | 偏移量      | number           | —           | `20`     |
| zIndex    | 层级           | number            | —           | `9999`       |
| onClose        | 关闭回调         | function            | —           | `''`       |

### MessageHandle 返回值
| 属性          | 说明         |   类型           |
|--------------|-------------|-------------|
| id      | 消息ID |string |
| close       | 关闭消息方法   | function |

### 设置全局配置
```typescript
MYMessage.config({
  duration: 5000,
  position: 'top-center',
  max: 5,
  offset: 30,
  zIndex: 10000
})
```

### 类型定义
```typescript
type MessageType = 'info' | 'success' | 'warning' | 'error' | 'default'

type Position = 
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

interface MessageOption {
  id?: string
  content?: string | VNode
  type?: MessageType
  duration?: number
  showClose?: boolean
  dangerouslyUseHTMLString?: boolean
  position?: Position
  offset?: number
  zIndex?: number
  onClose?: () => void
}

interface MessageHandle {
  id: string
  close: () => void
}

interface MessageGlobalConfig {
  duration?: number
  position?: Position
  max?: number
  offset?: number
  zIndex?: number
}
```

<script setup>
import { ref } from 'vue'
import MYButton from '../../packages/components/button/src/button.vue'
import MYMessage from '../../packages/components/message/src/message.vue'
import message from '../../packages/utils/messageManager'
// 假设 MYMessage 已经全局注册或通过其他方式引入
// 在实际使用中，需要根据实际情况引入
const manualMessageHandle = ref(null)

// 基础用法
const showInfo = () => {
    message.info('这是一条信息提示')
    console.log('显示信息提示')
}

const showSuccess = () => {
    message.success('操作成功！')
    console.log('显示成功提示')
}

const showWarning = () => {
    message.warning('请注意操作风险')
    console.log('显示警告提示')
}

const showError = () => {
    message.error('操作失败，请重试')
    console.log('显示错误提示')
}

// 显示关闭按钮
const showClosableMessage = () => {
    message({
        content: '这条消息可以手动关闭',
        type: 'info',
        showClose: true
    })
    console.log('显示带关闭按钮的消息')
}

// 自定义持续时间
const showShortMessage = () => {
    message({
       content: '这条消息只显示1秒',
       type: 'success',
       duration: 1000
    })
    console.log('显示短时间消息')
}

const showLongMessage = () => {
    message({
       content: '这条消息显示10秒',
       type: 'warning',
       duration: 10000
    })
    console.log('显示长时间消息')
}

const showPermanentMessage = () => {
    message({
        content: '这条消息不会自动关闭',
        type: 'info', 
        duration: 0,
        showClose: true
    })
    console.log('显示永久消息')
}

// 自定义位置
const showTopLeft = () => {
    message({
       content: '左上角消息',
       position: 'top-left'
    })
    console.log('显示左上角消息')
}

const showTopRight = () => {
    message({
        content: '右上角消息',
        position: 'top-right'
     })
    console.log('显示右上角消息')
}

const showTopCenter = () => {
    message({
        content: '顶部居中消息',
        position: 'top-center'
    })
    console.log('显示顶部居中消息')
}

const showBottomLeft = () => {
    message({
        content: '左下角消息',
        position: 'bottom-left'
    })
    console.log('显示左下角消息')
}

const showBottomRight = () => {
    message({
        content: '右下角消息',
        position: 'bottom-right'
    })
    console.log('显示右下角消息')
}

const showBottomCenter = () => {
    message({
        content: '底部居中消息',
        position: 'bottom-center'
    })
    console.log('显示底部居中消息')
}

// HTML内容
const showHTMLMessage = () => {
    message({
        content: '<strong>加粗文本</strong> 和 <span style="color: red;">红色文本</span>',
        dangerouslyUseHTMLString: true
    })
    console.log('显示HTML内容消息')
}

// 手动关闭
const showManualMessage = () => {
    manualMessageHandle.value = message({
        content: '这条消息需要通过按钮关闭',
        type: 'info',
        duration: 0
    })
    console.log('显示手动关闭消息')
}

const closeManualMessage = () => {
    if (manualMessageHandle.value) {
        manualMessageHandle.value.close()
        manualMessageHandle.value = null
    }
    console.log('手动关闭消息')
}

// 关闭回调
const showMessageWithCallback = () => {
    message({
        content: '关闭时会触发回调',
        type: 'success',
        onClose: () => {
            console.log('消息已关闭')
        }
    })
    console.log('显示带回调的消息')
}

// 偏移量
const showMessageWithOffset = () => {
    message({
        content: '这条消息有自定义偏移量',
        type: 'info',
        offset: 100
    })
    console.log('显示带偏移量的消息')
}

const showMultipleOffsetMessages = () => {
    message({ content: '消息1', offset: 20 })
    message({ content: '消息2', offset: 80 })
    message({ content: '消息3', offset: 140 })
    console.log('显示多个偏移消息')
}

// 组合使用
const showComplexMessage = () => {
    message({
        content: '组合使用示例消息',
        type: 'success',
        duration: 5000,
        showClose: true,
        position: 'top-center',
        offset: 50,
        zIndex: 10000,
        onClose: () => {
            console.log('组合消息已关闭')
        }
    })
    console.log('显示组合使用消息')
}

// 全局配置
const showGloballyConfiguredMessage = () => {
    // 在实际使用中，需要先配置全局设置
    message.config({
        duration: 5000,
        position: 'top-center',
        offset: 30
    })
    message.success('使用全局配置的消息')
    console.log('显示全局配置消息')
}
</script>