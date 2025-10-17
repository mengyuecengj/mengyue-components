export interface TreeProps {
  children: string
  label: string
  value?: string
  check?: string  // checkbox 相关：checked 键
}

export interface TreeNodes {
  [key: string]: unknown
  id?: string | number
  checked?: boolean
}

export type TreeNodesArray = TreeNodes[]

export type Size = 'default' | 'small' | 'large'

export interface CheckboxProps {
  showCheckbox?: boolean
  checkStrictly?: boolean
  defaultCheckedKeys?: (string | number)[]
}

export type ExpandedKeys = (string | number)[]