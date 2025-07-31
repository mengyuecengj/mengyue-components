import { LayoutProps } from './type';
import { useLayoutOverAllComputed } from "../../../hooks/useOverallComputed";
export function useComputedLayout(props: LayoutProps) {
    return {
        ...useLayoutOverAllComputed(props)
    }
}
