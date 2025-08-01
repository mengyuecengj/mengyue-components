export interface FormItemContext {
  prop?: string
  addField?: (field: {
    prop?: string
    resetField: () => void
    validate: () => Promise<void>
    clearValidate: () => void
  }) => void
  removeField?: (prop: string) => void
  clearValidate?: () => void
}
