# Upload

## Brief Introduction
The Upload component is used for file upload functionality, supporting both regular file upload and avatar upload modes. mengyue-components has encapsulated it and performed vitest testing.
You can use `<MYUpload></MYUpload>` or `<MYUpload />` to implement file upload functionality.

## Basic Usage

### Basic File Upload
Basic file upload functionality supporting single or multiple file selection.

<ShowCode
  title="Code Demo"
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
    Click to upload file
  </MYUpload>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('Upload successful:', file.name, res)
}
const handleError = (err, file) => {
  console.error('Upload failed:', file.name, err)
}
const handleProgress = (percent, file) => {
  console.log('Upload progress:', file.name, percent + '%')
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
        Click to upload file
      </MYUpload>
      <div v-if="uploadResult" style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ uploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

### Avatar Upload
Use the `avatar` prop to enable avatar upload mode.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYUpload 
    action='/api/upload'
    :avatar='true'
    :src='avatarUrl'
    @success='handleAvatarSuccess'
  >
    <template #icon>👤</template>
    Click to upload avatar
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const avatarUrl = ref('')
const handleAvatarSuccess = (res, file) => {
  console.log('Avatar upload successful:', file.name)
  // Update avatar URL here
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
        Click to upload avatar
      </MYUpload>
      <div style="margin-top: 10px; color: #666; font-size: 12px;">
        Current avatar: {{ avatarUrl ? 'Set' : 'Not set' }}
      </div>
    </div>
  </template>
</ShowCode>

### File Type Restriction
Use the `accept` prop to restrict the file types that can be uploaded.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>Image Upload (jpg, png only):</label>
      <MYUpload 
        action='/api/upload'
        accept='.jpg,.jpeg,.png'
        @success='handleSuccess'
      >
        <template #icon>🖼️</template>
        Upload Image
      </MYUpload>
    </div>
    <div>
      <label>Document Upload (pdf, doc only):</label>
      <MYUpload 
        action='/api/upload'
        accept='.pdf,.doc,.docx'
        @success='handleSuccess'
      >
        <template #icon>📄</template>
        Upload Document
      </MYUpload>
    </div>
  </div>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('Upload successful:', file.name)
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Image Upload (jpg, png only):</label>
        <MYUpload 
          action="/api/upload"
          accept=".jpg,.jpeg,.png"
          @success="handleAcceptSuccess"
        >
          <template #icon>🖼️</template>
          Upload Image
        </MYUpload>
      </div>
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Document Upload (pdf, doc only):</label>
        <MYUpload 
          action="/api/upload"
          accept=".pdf,.doc,.docx"
          @success="handleAcceptSuccess"
        >
          <template #icon>📄</template>
          Upload Document
        </MYUpload>
      </div>
      <div v-if="acceptUploadResult" style="padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ acceptUploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

### Custom Request Headers
Use the `headers` prop to set custom headers for the upload request.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYUpload 
    action='/api/upload'
    :headers='headers'
    @success='handleSuccess'
  >
    <template #icon>🔐</template>
    Upload with Authentication
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const headers = ref({
  'Authorization': 'Bearer your-token-here',
  'X-Custom-Header': 'custom-value'
})
const handleSuccess = (res, file) => {
  console.log('Authenticated upload successful:', file.name)
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
        Upload with Authentication
      </MYUpload>
      <div v-if="headerUploadResult" style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <div>{{ headerUploadResult }}</div>
      </div>
    </div>
  </template>
</ShowCode>

### Hide File List
Use the `show-file-list` prop to control whether the file list is displayed.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>Show File List:</label>
      <MYUpload 
        action='/api/upload'
        :show-file-list='true'
        @success='handleSuccess'
      />
    </div>
    <div>
      <label>Hide File List:</label>
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
  console.log('Upload successful:', file.name)
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Show File List:</label>
        <MYUpload 
          action="/api/upload"
          :show-file-list="true"
          @success="handleListSuccess"
        />
      </div>
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Hide File List:</label>
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

## API Reference

### Props

| Prop             | Description                              | Type     | Options | Default     |
|------------------|------------------------------------------|----------|---------|-------------|
| action           | Upload URL                               | string   | —       | `Required`  |
| headers          | Request headers for upload               | object   | —       | `{}`        |
| accept           | Accepted file types                      | string   | —       | `''`        |
| multiple         | Whether to support multiple file selection | boolean | —       | `false`     |
| avatar           | Whether in avatar upload mode            | boolean  | —       | `false`     |
| src              | Avatar URL                               | string   | —       | `''`        |
| show-file-list   | Whether to show uploaded file list       | boolean  | —       | `true`      |
| onSuccess        | Callback function on successful upload   | function | —       | `undefined` |
| onError          | Callback function on failed upload       | function | —       | `undefined` |
| onProgress       | Callback function on upload progress     | function | —       | `undefined` |

### Events

| Event Name | Description                              | Parameters                         |
|------------|------------------------------------------|------------------------------------|
| success    | Triggered when file upload is successful | res: any, file: File               |
| error      | Triggered when file upload fails         | err: any, file: File               |
| progress   | Triggered on upload progress change      | percent: number, file: File        |

### Slots

| Slot Name | Description                              |
|-----------|------------------------------------------|
| default   | Text content of the upload button        |
| icon      | Icon of the upload button                |

### Type Definitions

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
import MYUpload from '../../../packages/components/upload/src/upload.vue'

// Basic upload example
const uploadResult = ref('')
const handleUploadSuccess = (res, file) => {
  uploadResult.value = `Upload successful: ${file.name}`
}
const handleUploadError = (err, file) => {
  uploadResult.value = `Upload failed: ${file.name} - ${err}`
}
const handleUploadProgress = (percent, file) => {
  uploadResult.value = `Upload progress: ${file.name} - ${percent}%`
}

// Multi-file upload example
const multiUploadResult = ref('')
const handleMultiSuccess = (res, file) => {
  multiUploadResult.value = `Multi-file upload successful: ${file.name}`
}

// Avatar upload example
const avatarUrl = ref('')
const handleAvatarSuccess = (res, file) => {
  avatarUrl.value = URL.createObjectURL(file)
}

// File type restriction example
const acceptUploadResult = ref('')
const handleAcceptSuccess = (res, file) => {
  acceptUploadResult.value = `File upload successful: ${file.name}`
}

// Custom request headers example
const uploadHeaders = ref({
  'Authorization': 'Bearer demo-token',
  'X-Custom-Header': 'custom-value'
})
const headerUploadResult = ref('')
const handleHeaderSuccess = (res, file) => {
  headerUploadResult.value = `Authenticated upload successful: ${file.name}`
}

// File list control example
const listUploadResult = ref('')
const handleListSuccess = (res, file) => {
  listUploadResult.value = `Upload successful: ${file.name}`
}
</script>
