import { useStyleComputed } from '../../../hooks/useStyleComputed'
import type { transferProps } from './type'; // 你的接口定义

export const transferComputed = (props: transferProps) => {
    const transferStyle = useStyleComputed(props, {
        propToStyleMap: {
            backgroundColor: 'background-color',
            colorText: 'color',
            hoverBackground: 'transparent'
        },
    })
  return { transferStyle };
};
