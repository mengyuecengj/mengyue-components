# Upload Component Design Documentation

## Overview

The Upload component is a core component in this library used for implementing file upload functionality. It adheres to the library's consistent design philosophy of "Single Responsibility" and "State-Driven" principles, providing a complete and user-friendly file upload solution through `upload.vue`.

The Upload component focuses on handling file selection, upload process management, and status feedback. It offers users an intuitive and reliable file upload experience, supporting both standard upload and avatar upload modes, multiple file selection, progress feedback, and rich event callbacks, effectively enhancing the user experience during file upload operations.

## Design Philosophy

### Single Responsibility Principle

The Upload component strictly follows the Single Responsibility Principle:

1. **File Selection** - Handles user file selection operations.
2. **Upload Management** - Manages the entire lifecycle of file uploads.
3. **Status Feedback** - Provides status feedback during the upload process.
4. **UI Presentation** - Provides corresponding interface displays based on different modes.

This design ensures each part of the component has a single responsibility, facilitating maintenance and extension.

### State-Driven Design

The Upload component adopts a state-driven design philosophy:

- **File State** - Manages file upload status via `fileList`.
- **Progress Feedback** - Reflects upload progress in real-time via the `progress` property.
- **Event-Driven** - Implements external notification of state changes through an event mechanism.

This design ensures the predictability and consistency of the component's state.

## Core Feature Design

### File Management Mechanism

The core of the Upload component lies in its file management mechanism:

```typescript
const fileList = ref<{ name: string; progress?: number }[]>([])
const previewUrl = ref<string>('')
```

#### File Management Features:
- **State Tracking** - Maintains independent upload state for each file.
- **Progress Feedback** - Tracks and updates upload progress in real-time.
- **Preview Support** - Provides image preview functionality for avatar mode.
- **Multiple File Handling** - Supports batch uploading of multiple files.

### Upload Process Design

The upload process of the Upload component is designed as follows:

```typescript
const uploadFile = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)

  const xhr = new XMLHttpRequest()
  xhr.open('POST', props.action, true)

  // Set request headers
  if (props.headers) {
    Object.entries(props.headers).forEach(([k, v]) => xhr.setRequestHeader(k, v))
  }

  // Progress handling
  xhr.upload.onprogress = (ev) => {
    if (!ev.lengthComputable) return
    const percent = Math.round((ev.loaded / ev.total) * 100)
    const target = fileList.value.find((f) => f.name === file.name)
    if (target) target.progress = percent
    safeCall(props.onProgress, percent, file)
    emit('progress', percent, file)
  }

  // Success handling
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

  // Error handling
  xhr.onerror = () => {
    safeCall(props.onError, xhr.responseText, file)
    emit('error', xhr.responseText, file)
  }

  xhr.send(fd)
}
```

#### Upload Process Features:
- **Native XHR** - Uses native `XMLHttpRequest` for uploading, avoiding third-party library dependencies.
- **Progress Tracking** - Tracks upload progress in real-time via the `onprogress` event.
- **Status Feedback** - Provides complete success, error, and progress callbacks.
- **Error Handling** - Comprehensive error handling ensures upload process reliability.

## Component Structure Design

### Overall Structure

The overall structure of the Upload component is as follows:

```html
<div class="my-upload" :class="{ 'is-avatar': avatar }">
  <input ref="fileInput" type="file" :accept="accept" :multiple="multiple" @change="handleChange" style="display: none" />

  <div v-if="avatar" class="avatar-wrapper" @click="triggerUpload">
    <img v-if="previewUrl || src" :src="previewUrl || src" class="avatar" />
    <div v-else class="avatar-placeholder">
      <slot name="icon"></slot>
      <slot>Click to upload</slot>
    </div>
  </div>

  <button v-else class="upload-btn" @click="triggerUpload">
    <slot name="icon"></slot>
    <slot>Click to upload</slot>
  </button>

  <ul v-if="!avatar && showFileList && fileList.length">
    <li v-for="(f, i) in fileList" :key="i">
      {{ f.name }} <span v-if="f.progress !== undefined">- {{ f.progress }}%</span>
    </li>
  </ul>
</div>
```

### Component Hierarchy

The Upload component consists of several key parts:

1. **Container** - `.my-upload` - Wraps the entire upload component.
2. **File Input** - `input[type="file"]` - Hidden file selection input.
3. **Trigger Area** - `.avatar-wrapper` or `.upload-btn` - Area users click to trigger file selection.
4. **Preview Area** - `.avatar` - Image preview area in avatar mode.
5. **File List** - `ul` - File list display in standard mode.

#### Mode Design:

- **Standard Upload Mode** - Provides button trigger and file list display.
- **Avatar Upload Mode** - Provides a circular preview area and a clean upload interface.

## Interaction Design

### File Selection Mechanism

The file selection mechanism of the Upload component is designed as follows:

```typescript
const triggerUpload = () => fileInput.value?.click()

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files || files.length === 0) return

  // Only take the first file for avatar mode; standard mode supports multiple
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

#### Selection Rules:
- **Avatar Mode** - Only processes the first selected file.
- **Standard Mode** - Supports processing multiple selected files.
- **Input Reset** - Resets the file input after each selection, ensuring the same file can be selected repeatedly.
- **Preview Handling** - Provides instant preview for avatar mode.

### Event Mechanism

The Upload component provides a comprehensive event mechanism:

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

#### Event Features:
- **Dual Callbacks** - Supports both prop callbacks and emit events.
- **Safe Invocation** - Ensures safe invocation of callback functions via `safeCall`.
- **Rich Parameters** - Provides detailed upload results and file information.
- **Progress Feedback** - Provides real-time upload progress information.

## Extensibility Design

The Upload component offers excellent extensibility:

1. **Mode Extension** - Supports standard upload and avatar upload modes via the `avatar` property.
2. **File Types** - Supports custom accepted file types via the `accept` property.
3. **Event Extension** - Supports custom event handling via `onSuccess`, `onError`, and `onProgress` properties.
4. **UI Extension** - Supports custom icons and text via slot mechanisms.
5. **Request Customization** - Supports custom request headers via the `headers` property.

## Style Details

The Upload component features the following style handling characteristics:

1. **Mode Differentiation** - Distinguishes different modes via the `is-avatar` class.
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
2. **Status Feedback** - Provides clear upload status through progress display.
3. **Visual Hierarchy** - Creates a clear visual hierarchy through color and spacing.
4. **Responsive Design** - Adapts to different screen sizes and usage scenarios.
5. **Clean UI** - Keeps the interface simple, highlighting core functionality.

## Performance Optimization

Performance is optimized through:

1. **Memory Management** - Uses `URL.createObjectURL` to create preview URLs, avoiding storing large files directly.
2. **Input Reset** - Resets the file input after each selection, ensuring the same file can be selected repeatedly.
3. **Progress Calculation** - Updates progress information only when necessary.
4. **Error Handling** - Comprehensive error handling ensures a single file upload failure does not affect the overall process.
5. **Resource Release** - Releases resources occupied by preview URLs when appropriate.

## Design Value

The Upload component embodies the design philosophy of our component library:

1. **Separation of Concerns** - Separates file selection, upload management, and status feedback.
2. **State-Driven** - Drives interface updates through state changes.
3. **Modal Design** - Supports two common scenarios: standard upload and avatar upload.
4. **Interaction Consistency** - Maintains consistent interaction patterns with other components in the library.
5. **Customizability** - Provides rich customization capabilities through properties and slots.
