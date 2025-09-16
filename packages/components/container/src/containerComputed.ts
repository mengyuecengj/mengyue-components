import type { ContainerProps } from '../../../components/container/src/container'
import { useContainerOverAllComputed, useContainerStyle } from '../../../hooks/useOverallComputed'

export function useContainerComputed(props: ContainerProps) {
  return {
    ...useContainerOverAllComputed(props),
    styleContainer: useContainerStyle(props),
  }
}
