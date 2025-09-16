export interface TreeProps {
  children: string
  label: string
}

export interface TreeNodes {
  [key: string]: unknown
  id?: string | number
}
