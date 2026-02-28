export interface UploadProps {
  action: string
  headers?: Record<string, string>
  accept?: string
  multiple?: boolean
  avatar?: boolean
  src?: string
  showFileList?: boolean
  onSuccess?: (res: unknown, file: File) => void
  onError?: (err: unknown, file: File) => void
  onProgress?: (percent: number, file: File) => void
}