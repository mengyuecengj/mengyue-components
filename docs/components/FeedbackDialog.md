# Dialog
## 简易介绍
dialog对话框组件，用于在页面中显示模态对话框。<br />
可以使用`<MYDialog></MYDialog>`或者`<MYDialog />`来实现一个对话框。

## 基础用法
使用`v-model`控制对话框的显示与隐藏。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog1 = true'>打开对话框</MYButton>
    <MYDialog v-model='showDialog1' title='基础对话框'>
        <p>这是一个基础对话框示例</p>
        <p>点击遮罩层或按ESC键可以关闭</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog1 = true">打开对话框</MYButton>
    <MYDialog v-model="showDialog1" title="基础对话框">
        <p style="color: black;">这是一个基础对话框示例</p>
        <p style="color: black;">点击遮罩层或按ESC键可以关闭</p>
    </MYDialog>
  </template>
</ShowCode>

## 自定义尺寸
使用`width`和`height`属性可以自定义对话框的尺寸。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog2 = true'>自定义尺寸</MYButton>
    <MYDialog 
        v-model='showDialog2' 
        title='自定义尺寸'
        width='600px'
        height='400px'
    >
        <p>这是一个宽度600px，高度400px的对话框</p>
        <p>支持像素值、百分比等CSS单位</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog2 = true">自定义尺寸</MYButton>
    <MYDialog 
        v-model="showDialog2" 
        title="自定义尺寸"
        width="600px"
        height="400px"
    >
        <p style="color: black;">>这是一个宽度600px，高度400px的对话框</p>
        <p style="color: black;">>支持像素值、百分比等CSS单位</p>
    </MYDialog>
  </template>
</ShowCode>

## 自定义颜色
使用`backgroundColor`、`borderColor`和`textColor`属性可以自定义对话框的颜色。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog3 = true'>自定义颜色</MYButton>
    <MYDialog 
        v-model='showDialog3' 
        title='自定义颜色'
        backgroundColor='#f0f8ff'
        borderColor='#409EFF'
        textColor='#333'
    >
        <p>这是一个自定义颜色的对话框</p>
        <p>背景色、边框色、文字颜色都可以自定义</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog3 = true">自定义颜色</MYButton>
    <MYDialog 
        v-model="showDialog3" 
        title="自定义颜色"
        backgroundColor="#f0f8ff"
        borderColor="#409EFF"
        textColor="#333"
    >
        <p>这是一个自定义颜色的对话框</p>
        <p>背景色、边框色、文字颜色都可以自定义</p>
    </MYDialog>
  </template>
</ShowCode>

## 禁用遮罩层关闭
使用`closeOnClickModal`属性可以禁用点击遮罩层关闭对话框。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog4 = true'>禁用遮罩层关闭</MYButton>
    <MYDialog 
        v-model='showDialog4' 
        title='禁用遮罩层关闭'
        :closeOnClickModal='false'
    >
        <p>这个对话框不能通过点击遮罩层关闭</p>
        <p>只能通过关闭按钮或ESC键关闭</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog4 = true">禁用遮罩层关闭</MYButton>
    <MYDialog 
        v-model="showDialog4" 
        title="禁用遮罩层关闭"
        :closeOnClickModal="false"
    >
        <p style="color: black;">>这个对话框不能通过点击遮罩层关闭</p>
        <p style="color: black;">>只能通过关闭按钮或ESC键关闭</p>
    </MYDialog>
  </template>
</ShowCode>

## 禁用ESC关闭
使用`closeOnPressEscape`属性可以禁用ESC键关闭对话框。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog5 = true'>禁用ESC关闭</MYButton>
    <MYDialog 
        v-model='showDialog5' 
        title='禁用ESC关闭'
        :closeOnPressEscape='false'
    >
        <p>这个对话框不能通过ESC键关闭</p>
        <p>只能通过关闭按钮或点击遮罩层关闭</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog5 = true">禁用ESC关闭</MYButton>
    <MYDialog 
        v-model="showDialog5" 
        title="禁用ESC关闭"
        :closeOnPressEscape="false"
    >
        <p style="color: black;">>这个对话框不能通过ESC键关闭</p>
        <p style="color: black;">>只能通过关闭按钮或点击遮罩层关闭</p>
    </MYDialog>
  </template>
</ShowCode>

## 溢出控制
使用`overflow`属性可以控制对话框内容的溢出行为。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog6 = true'>溢出控制</MYButton>
    <MYDialog 
        v-model='showDialog6' 
        title='溢出控制'
        :overflow='true'
        height='300px'
    >
        <div style='height: 600px;'>
            <p>这是一个高度超过对话框的内容</p>
            <p>当设置overflow为true时，内容会被隐藏</p>
            <p>当设置overflow为false时，会出现滚动条</p>
            <div v-for='i in 20' :key='i' style='padding: 10px; border-bottom: 1px solid #eee;'>
                内容项 {{ i }}
            </div>
        </div>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog6 = true">溢出控制</MYButton>
    <MYDialog 
        v-model="showDialog6" 
        title="溢出控制"
        :overflow="true"
        height="300px"
    >
        <div style="height: 600px;">
            <p style="color: black;">>这是一个高度超过对话框的内容</p>
            <p style="color: black;">>当设置overflow为true时，内容会被隐藏</p>
            <p style="color: black;">>当设置overflow为false时，会出现滚动条</p>
            <div v-for="i in 20" :key="i" style="padding: 10px; border-bottom: 1px solid #eee;">
                内容项 {{ i }}
            </div>
        </div>
    </MYDialog>
  </template>
</ShowCode>

## 自定义头部和底部
使用`header`和`footer`插槽可以自定义对话框的头部和底部。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog7 = true'>自定义头部底部</MYButton>
    <MYDialog v-model='showDialog7'>
        <template #header>
            <div style='display: flex; align-items: center; gap: 10px;'>
                <span style='color: #409EFF;'>🔔</span>
                <span>自定义头部</span>
            </div>
        </template>
        <p>这是一个使用自定义头部和底部的对话框</p>
        <p>内容区域可以放置任意内容</p>
        <template #footer>
            <div style='display: flex; justify-content: space-between;'>
                <MYButton type='info' @click='showDialog7 = false'>取消</MYButton>
                <MYButton type='primary' @click='showDialog7 = false'>确认</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog7 = true">自定义头部底部</MYButton>
    <MYDialog v-model="showDialog7">
        <template #header>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #409EFF;">🔔</span>
                <span>自定义头部</span>
            </div>
        </template>
        <p style="color: black;">>这是一个使用自定义头部和底部的对话框</p>
        <p style="color: black;">>内容区域可以放置任意内容</p>
        <template #footer>
            <div style="display: flex; justify-content: space-between;">
                <MYButton type="info" @click="showDialog7 = false">取消</MYButton>
                <MYButton type="primary" @click="showDialog7 = false">确认</MYButton>
            </div>
        </template>
    </MYDialog>
  </template>
</ShowCode>

## 事件监听
对话框提供了`open`和`close`事件用于监听打开和关闭状态。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog8 = true'>事件监听</MYButton>
    <MYDialog 
        v-model='showDialog8' 
        title='事件监听'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>打开或关闭对话框时会触发相应的事件</p>
        <p>检查控制台查看事件触发情况</p>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog8 = true">事件监听</MYButton>
    <MYDialog 
        v-model="showDialog8" 
        title="事件监听"
        @open="handleOpen"
        @close="handleClose"
    >
        <p style="color: black;">>打开或关闭对话框时会触发相应的事件</p>
        <p style="color: black;">>检查控制台查看事件触发情况</p>
    </MYDialog>
  </template>
</ShowCode>

## 组合使用
最后，实现个多种api组合使用实现个完整的对话框：
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYButton type='primary' @click='showDialog9 = true'>组合使用</MYButton>
    <MYDialog 
        v-model='showDialog9' 
        title='组合使用示例'
        width='500px'
        height='350px'
        backgroundColor='#fff'
        borderColor='#8d4dd1'
        textColor='#333'
        :closeOnClickModal='false'
        :closeOnPressEscape='true'
        :overflow='false'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>这是一个组合使用的完整示例</p>
        <p>包含了所有可用的属性和功能</p>
        <template #footer>
            <div style='display: flex; gap: 10px; justify-content: flex-end;'>
                <MYButton type='info' @click='showDialog9 = false'>取消</MYButton>
                <MYButton type='primary' @click='showDialog9 = false'>确认</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()"
>
  <template #demo>
    <MYButton type="primary" @click="showDialog9 = true">组合使用</MYButton>
    <MYDialog 
        v-model="showDialog9" 
        title="组合使用示例"
        width="500px"
        height="350px"
        backgroundColor="#fff"
        borderColor="#8d4dd1"
        textColor="#333"
        :closeOnClickModal="false"
        :closeOnPressEscape="true"
        :overflow="false"
        @open="handleOpen"
        @close="handleClose"
    >
        <p style="color: black;">>这是一个组合使用的完整示例</p>
        <p style="color: black;">>包含了所有可用的属性和功能</p>
        <template #footer>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <MYButton type="info" @click="showDialog9 = false">取消</MYButton>
                <MYButton type="primary" @click="showDialog9 = false">确认</MYButton>
            </div>
        </template>
    </MYDialog>
  </template>
</ShowCode>

## API 参考

### Props
| 参数                | 说明             | 类型               | 可选值        | 默认值      |
|--------------------|------------------|-------------------|-------------|------------|
| modelValue         | 是否显示对话框   | boolean           | —           | `false`    |
| title              | 对话框标题       | string            | —           | `''`       |
| width              | 对话框宽度       | string \| number  | —           | `400`      |
| height             | 对话框高度       | string \| number  | —           | `200`      |
| closeOnClickModal  | 点击遮罩层关闭   | boolean           | —           | `true`     |
| closeOnPressEscape | 按ESC键关闭      | boolean           | —           | `true`     |
| backgroundColor    | 背景色           | string            | —           | `''`       |
| borderColor        | 边框颜色         | string            | —           | `''`       |
| textColor          | 文字颜色         | string            | —           | `''`       |
| overflow           | 溢出控制         | boolean           | —           | `false`    |

### Events
| 事件名             | 说明             | 参数              |
|--------------------|------------------|------------------|
| update:modelValue  | 对话框显示状态更新 | `value: boolean` |
| open               | 对话框打开时触发   | —               |
| close              | 对话框关闭时触发   | —               |

### Slots
| 名称          | 说明         |
|--------------|-------------|
| default      | 对话框主体内容 |
| header       | 自定义头部   |
| footer       | 自定义底部   |

### 类型定义
```typescript
interface DialogProps {
  modelValue?: boolean;
  title?: string;
  width?: string | number;
  height?: string | number;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  overflow?: boolean;
}

interface DialogEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
}
```
<script setup> 
import { ref } from 'vue' 
import MYDialog from '../../packages/components/dialog/src/dialog.vue' 
import MYButton from '../../packages/components/button/src/button.vue' 
const showDialog1 = ref(false) 
const showDialog2 = ref(false) 
const showDialog3 = ref(false) 
const showDialog4 = ref(false) 
const showDialog5 = ref(false) 
const showDialog6 = ref(false) 
const showDialog7 = ref(false) 
const showDialog8 = ref(false) 
const showDialog9 = ref(false) 
const handleOpen = () => { 
    console.log('对话框打开了') 
} 
const handleClose = () => { 
    console.log('对话框关闭了') 
    } 
</script>
