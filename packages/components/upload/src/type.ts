export interface UploadProps {
    action: string
    headers?: Record<string, string>
    accept?: string
    multiple?: boolean
    avatar?: boolean
    src?: string
    showFileList?: boolean
    onSuccess?: (res: any, file: File) => void
    onError?: (err: any, file: File) => void
    onProgress?: (percent: number, file: File) => void
}