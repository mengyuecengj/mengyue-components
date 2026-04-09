# Upload

## 简易介绍
Upload 文件上传组件，支持普通文件上传和头像上传两种模式。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYUpload></MYUpload>` 或者 `<MYUpload />` 来实现文件上传功能。

## 基本用法

### 基础文件上传
基础的文件上传功能，支持选择单个或多个文件。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYUpload 
    action='/api/upload'
    :show-file-list='true'
    @success='handleSuccess'
    @error='handleError'
    @progress='handleProgress'
  >
    <template #icon>📁</template>
    点击上传文件
  </MYUpload>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('上传成功:', file.name, res)
}
const handleError = (err, file) => {
  console.error('上传失败:', file.name, err)
}
const handleProgress = (percent, file) => {
  console.log('上传进度:', file.name, percent + '%')
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYUpload 
        action="/api/upload"
        :show-file-list="true"
        @success="handleUploadSuccess"
        @error="handleUploadError"
        @progress="handleUploadProgress"
      >
        <template #icon>📁</template>
        点击上传文件
      </MYUpload>
      <div v-if="uploadResult" style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ uploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

### 头像上传
使用 `avatar` 属性开启头像上传模式。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYUpload 
    action='/api/upload'
    :avatar='true'
    :src='avatarUrl'
    @success='handleAvatarSuccess'
  >
    <template #icon>👤</template>
    点击上传头像
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const avatarUrl = ref('')
const handleAvatarSuccess = (res, file) => {
  console.log('头像上传成功:', file.name)
  // 这里可以更新头像URL
  avatarUrl.value = URL.createObjectURL(file)
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYUpload 
        action="/api/upload"
        :avatar="true"
        :src="avatarUrl"
        @success="handleAvatarSuccess"
      >
        <template #icon>👤</template>
        点击上传头像
      </MYUpload>
      <div style="margin-top: 10px; color: #666; font-size: 12px;">
        当前头像: {{ avatarUrl ? '已设置' : '未设置' }}
      </div>
    </div>
  </template>
</ShowCode>

### 文件类型限制
使用 `accept` 属性限制可上传的文件类型。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>图片上传 (仅限 jpg, png):</label>
      <MYUpload 
        action='/api/upload'
        accept='.jpg,.jpeg,.png'
        @success='handleSuccess'
      >
        <template #icon>🖼️</template>
        上传图片
      </MYUpload>
    </div>
    <div>
      <label>文档上传 (仅限 pdf, doc):</label>
      <MYUpload 
        action='/api/upload'
        accept='.pdf,.doc,.docx'
        @success='handleSuccess'
      >
        <template #icon>📄</template>
        上传文档
      </MYUpload>
    </div>
  </div>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('上传成功:', file.name)
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">图片上传 (仅限 jpg, png):</label>
        <MYUpload 
          action="/api/upload"
          accept=".jpg,.jpeg,.png"
          @success="handleAcceptSuccess"
        >
          <template #icon>🖼️</template>
          上传图片
        </MYUpload>
      </div>
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">文档上传 (仅限 pdf, doc):</label>
        <MYUpload 
          action="/api/upload"
          accept=".pdf,.doc,.docx"
          @success="handleAcceptSuccess"
        >
          <template #icon>📄</template>
          上传文档
        </MYUpload>
      </div>
      <div v-if="acceptUploadResult" style="padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ acceptUploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

### 自定义请求头
使用 `headers` 属性设置上传请求的头部信息。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYUpload 
    action='/api/upload'
    :headers='headers'
    @success='handleSuccess'
  >
    <template #icon>🔐</template>
    带认证的上传
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const headers = ref({
  'Authorization': 'Bearer your-token-here',
  'X-Custom-Header': 'custom-value'
})
const handleSuccess = (res, file) => {
  console.log('带认证上传成功:', file.name)
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <MYUpload 
        action="/api/upload"
        :headers="uploadHeaders"
        @success="handleHeaderSuccess"
      >
        <template #icon>🔐</template>
        带认证的上传
      </MYUpload>
      <div v-if="headerUploadResult" style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ headerUploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

### 隐藏文件列表
使用 `show-file-list` 属性控制是否显示文件列表。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>显示文件列表:</label>
      <MYUpload 
        action='/api/upload'
        :show-file-list='true'
        @success='handleSuccess'
      />
    </div>
    <div>
      <label>隐藏文件列表:</label>
      <MYUpload 
        action='/api/upload'
        :show-file-list='false'
        @success='handleSuccess'
      />
    </div>
  </div>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('上传成功:', file.name)
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">显示文件列表:</label>
        <MYUpload 
          action="/api/upload"
          :show-file-list="true"
          @success="handleListSuccess"
        />
      </div>
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">隐藏文件列表:</label>
        <MYUpload 
          action="/api/upload"
          :show-file-list="false"
          @success="handleListSuccess"
        />
      </div>
      <div v-if="listUploadResult" style="padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ listUploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| action  | 上传的地址      | string  | — | `必需`  |
| headers  | 设置上传的请求头部      | object  | — | `{}`  |
| accept  | 接受上传的文件类型      | string  | — | `''`  |
| multiple  | 是否支持多选文件      | boolean  | — | `false`  |
| avatar  | 是否为头像上传模式      | boolean  | — | `false`  |
| src  | 头像地址      | string  | — | `''`  |
| show-file-list  | 是否显示已上传文件列表      | boolean  | — | `true`  |
| onSuccess  | 上传成功时的回调函数      | function  | — | `undefined`  |
| onError  | 上传失败时的回调函数      | function  | — | `undefined`  |
| onProgress  | 上传进度时的回调函数      | function  | — | `undefined`  |

### 事件
| 事件名          | 说明         | 参数     |
|--------------|-------------|---------|
| success  | 文件上传成功时触发      | res: any, file: File  |
| error  | 文件上传失败时触发      | err: any, file: File  |
| progress  | 文件上传进度变化时触发      | percent: number, file: File  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| default  | 上传按钮的文本内容      |
| icon  | 上传按钮的图标      |

### 类型定义
```typescript
interface UploadProps {
  action: string;
  headers?: Record<string, string>;
  accept?: string;
  multiple?: boolean;
  avatar?: boolean;
  src?: string;
  showFileList?: boolean;
  onSuccess?: (res: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onProgress?: (percent: number, file: File) => void;
}
```
<script setup>
import { ref } from 'vue'
import MYUpload from '../../packages/components/upload/src/upload.vue'

// 基础上传示例
const uploadResult = ref('')
const handleUploadSuccess = (res, file) => {
  uploadResult.value = `上传成功: ${file.name}`
}
const handleUploadError = (err, file) => {
  uploadResult.value = `上传失败: ${file.name} - ${err}`
}
const handleUploadProgress = (percent, file) => {
  uploadResult.value = `上传进度: ${file.name} - ${percent}%`
}

// 多文件上传示例
const multiUploadResult = ref('')
const handleMultiSuccess = (res, file) => {
  multiUploadResult.value = `多文件上传成功: ${file.name}`
}

// 头像上传示例
const avatarUrl = ref('')
const handleAvatarSuccess = (res, file) => {
  avatarUrl.value = URL.createObjectURL(file)
}

// 文件类型限制示例
const acceptUploadResult = ref('')
const handleAcceptSuccess = (res, file) => {
  acceptUploadResult.value = `文件上传成功: ${file.name}`
}

// 自定义请求头示例
const uploadHeaders = ref({
  'Authorization': 'Bearer demo-token',
  'X-Custom-Header': 'custom-value'
})
const headerUploadResult = ref('')
const handleHeaderSuccess = (res, file) => {
  headerUploadResult.value = `带认证上传成功: ${file.name}`
}

// 文件列表控制示例
const listUploadResult = ref('')
const handleListSuccess = (res, file) => {
  listUploadResult.value = `上传成功: ${file.name}`
}
</script>