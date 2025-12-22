# Upload 组件设计文档

## 概述

Upload 组件是本组件库中用于实现文件上传功能的核心组件。它延续了我们组件库一贯的设计理念，采用"单一职责"和"状态驱动"的原则，通过 upload.vue 实现了一套完整且易用的文件上传解决方案。

Upload 组件专注于处理文件选择、上传过程管理和状态反馈，为用户提供了一套直观、可靠的文件上传体验，支持普通上传和头像上传两种模式、多文件选择、进度反馈和丰富的事件回调，有效提升用户在文件上传操作时的体验。

## 设计理念

### 单一职责原则

Upload 组件严格遵循单一职责原则：

1. **文件选择** - 处理用户选择文件的操作
2. **上传管理** - 管理文件上传的整个生命周期
3. **状态反馈** - 提供上传过程中的状态反馈
4. **UI 展示** - 根据不同模式提供相应的界面展示

这种设计使组件的每个部分职责单一，便于维护和扩展。

### 状态驱动设计

Upload 组件采用状态驱动的设计思想：

- **文件状态** - 通过 fileList 管理文件上传状态
- **进度反馈** - 通过 progress 属性实时反映上传进度
- **事件驱动** - 通过事件机制实现状态变化的外部通知

这种设计确保了组件的状态可预测性和一致性。

## 核心功能设计

### 文件管理机制

Upload 组件的核心在于文件管理机制：

```typescript
const fileList = ref<{ name: string; progress?: number }[]>([])
const previewUrl = ref<string>('')
```

#### 文件管理特点：
- **状态跟踪** - 为每个文件维护独立的上传状态
- **进度反馈** - 实时跟踪并更新上传进度
- **预览支持** - 为头像模式提供图片预览功能
- **多文件处理** - 支持批量上传多个文件

### 上传流程设计

Upload 组件的上传流程设计如下：

```typescript
const uploadFile = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)

  const xhr = new XMLHttpRequest()
  xhr.open('POST', props.action, true)

  // 设置请求头
  if (props.headers) {
    Object.entries(props.headers).forEach(([k, v]) => xhr.setRequestHeader(k, v))
  }

  // 进度处理
  xhr.upload.onprogress = (ev) => {
    if (!ev.lengthComputable) return
    const percent = Math.round((ev.loaded / ev.total) * 100)
    const target = fileList.value.find((f) => f.name === file.name)
    if (target) target.progress = percent
    safeCall(props.onProgress, percent, file)
    emit('progress', percent, file)
  }

  // 成功处理
  xhr.onload = () => {
    let parsed: any = null
    try { parsed = JSON.parse(xhr.responseText || '{}') } catch (e) { parsed = xhr.responseText }
    if (xhr.status >= 200 && xhr.status < 300) {
      safeCall(props.onSuccess, parsed, file)
      emit('success', parsed, file)
    } else {
      safeCall(props.onError, parsed, file)
      emit('error', parsed, file)
    }
  }

  // 错误处理
  xhr.onerror = () => {
    safeCall(props.onError, xhr.responseText, file)
    emit('error', xhr.responseText, file)
  }

  xhr.send(fd)
}
```

#### 上传流程特点：
- **原生 XHR** - 使用原生 XMLHttpRequest 实现上传，避免依赖第三方库
- **进度追踪** - 通过 `onprogress` 事件实时追踪上传进度
- **状态反馈** - 提供完整的成功、错误和进度回调
- **错误处理** - 完善的错误处理机制，确保上传过程的可靠性

## 组件结构设计

### 整体结构

Upload 组件的整体结构如下：

```html
<div class="my-upload" :class="{ 'is-avatar': avatar }">
  <input ref="fileInput" type="file" :accept="accept" :multiple="multiple" @change="handleChange" style="display: none" />

  <div v-if="avatar" class="avatar-wrapper" @click="triggerUpload">
    <img v-if="previewUrl || src" :src="previewUrl || src" class="avatar" />
    <div v-else class="avatar-placeholder">
      <slot name="icon"></slot>
      <slot>点击上传</slot>
    </div>
  </div>

  <button v-else class="upload-btn" @click="triggerUpload">
    <slot name="icon"></slot>
    <slot>点击上传</slot>
  </button>

  <ul v-if="!avatar && showFileList && fileList.length">
    <li v-for="(f, i) in fileList" :key="i">
      {{ f.name }} <span v-if="f.progress !== undefined">- {{ f.progress }}%</span>
    </li>
  </ul>
</div>
```

### 组件层次

Upload 组件包含多个关键部分：

1. **容器** - `.my-upload` - 包裹整个上传组件
2. **文件输入** - `input[type="file"]` - 隐藏的文件选择输入框
3. **触发区域** - `.avatar-wrapper` 或 `.upload-btn` - 用户点击触发文件选择的区域
4. **预览区域** - `.avatar` - 头像模式下的图片预览区域
5. **文件列表** - ul - 普通模式下的文件列表展示

#### 模式设计：

- **普通上传模式** - 提供按钮触发和文件列表展示
- **头像上传模式** - 提供圆形预览区域和简洁的上传界面

## 交互设计

### 文件选择机制

Upload 组件的文件选择机制设计如下：

```typescript
const triggerUpload = () => fileInput.value?.click()

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files || files.length === 0) return

  // 只取第一个（头像场景）；普通文件可支持 multiple
  const toUpload = props.avatar ? files[0] : null

  if (props.avatar) {
    const f = toUpload as File
    previewUrl.value = URL.createObjectURL(f)
    fileList.value = [{ name: f.name, progress: 0 }]
    uploadFile(f)
  } else {
    const arr = Array.from(files)
    arr.forEach((file) => {
      fileList.value.push({ name: file.name, progress: 0 })
      uploadFile(file)
    })
  }

  ; (e.target as HTMLInputElement).value = ''
}
```

#### 选择规则：
- **头像模式** - 仅处理第一个选择的文件
- **普通模式** - 支持处理多个选择的文件
- **输入重置** - 每次选择后重置文件输入，确保可重复选择同一文件
- **预览处理** - 为头像模式提供即时预览

### 事件机制

Upload 组件提供完善的事件机制：

```typescript
const emit = defineEmits<{
  (e: 'success', res: any, file: File): void
  (e: 'error', err: any, file: File): void
  (e: 'progress', percent: number, file: File): void
}>()

// ...

safeCall(props.onProgress, percent, file)
emit('progress', percent, file)

// ...

safeCall(props.onSuccess, parsed, file)
emit('success', parsed, file)

// ...

safeCall(props.onError, parsed, file)
emit('error', parsed, file)
```

#### 事件特点：
- **双重回调** - 同时支持 props 回调和 emit 事件
- **安全调用** - 通过 safeCall 确保回调函数的安全调用
- **参数丰富** - 提供详细的上传结果和文件信息
- **进度反馈** - 实时提供上传进度信息

## 扩展性设计

Upload 组件具备出色的扩展性：

1. **模式扩展** - 通过 avatar 属性支持普通上传和头像上传两种模式
2. **文件类型** - 通过 accept 属性支持自定义接受的文件类型
3. **事件扩展** - 通过 onSuccess、onError 和 onProgress 属性支持自定义事件处理
4. **UI 扩展** - 通过插槽机制支持自定义图标和文字
5. **请求定制** - 通过 headers 属性支持自定义请求头

## 样式细节

Upload 组件在样式处理上有以下特点：

1. **模式区分** - 通过 is-avatar 类区分不同模式
   ```scss
   .my-upload {
     display: inline-block;
   }
   
   .avatar-wrapper {
     width: 100px;
     height: 100px;
     border-radius: 50%;
     overflow: hidden;
     // ...
   }
   ```
2. **状态反馈** - 通过进度显示提供清晰的上传状态
3. **视觉层次** - 通过颜色和间距创建清晰的视觉层次
4. **响应式设计** - 适应不同屏幕尺寸和使用场景
5. **简洁UI** - 保持界面简洁，突出核心功能

## 性能优化

通过以下方式优化性能：

1. **内存管理** - 使用 `URL.createObjectURL` 创建预览 URL，避免直接存储大文件
2. **输入重置** - 每次选择后重置文件输入，确保可重复选择同一文件
3. **进度计算** - 仅在必要时更新进度信息
4. **错误处理** - 完善的错误处理机制，避免因单个文件上传失败影响整体流程
5. **资源释放** - 在适当的时候释放预览 URL 占用的资源

## 设计价值

Upload 组件延续了我们组件库的设计哲学：

1. **关注点分离** - 将文件选择、上传管理和状态反馈分离
2. **状态驱动** - 通过状态变化驱动界面更新
3. **模式化设计** - 支持普通上传和头像上传两种常用场景
4. **交互一致性** - 保持与组件库其他组件一致的交互模式
5. **可定制性** - 通过属性和插槽提供丰富的定制能力

Upload 组件提供了一套完整的文件上传解决方案，通过合理的架构设计和精心的状态管理，为用户提供了一套直观、可靠且灵活的文件上传组件。组件设计注重内部逻辑的清晰性和可维护性，同时保持了足够的扩展性，能够满足各种业务场景的需求。