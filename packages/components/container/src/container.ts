import { PropType } from 'vue';

export interface ContainerProps {
  tag?: string;
  height?: string | number;
  width?: string | number;
  background?: string;
  fixed?: boolean;
  position?: 'left' | 'right';
  [key: string]: unknown
}

export const containerProps = {
  tag: {
    type: String,
    default: 'div',
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: '',
    validator: (value: string | number) => typeof value === 'string' || (typeof value === 'number' && !isNaN(value)),
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '',
    validator: (value: string | number) => typeof value === 'string' || (typeof value === 'number' && !isNaN(value)),
  },
  background: {
    type: String,
    default: '',
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
    validator: (value: 'left' | 'right') => ['left', 'right'].includes(value),
  },
} as const;

export const headerProps = {
    ...containerProps,
    fixed: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    tag: {
        type: String,
        default: 'header'
    }
}

export const asideProps = {
    ...containerProps,
    position: {
        type: String as PropType<'left' | 'right'>,
        default: 'left'
    },
    tag: {
        type: String,
        default: 'aside'
    }
}

export const mainProps = {
    ...containerProps,
    tag: {
        type: String,
        default: 'main'
    }
}

export const footerProps = {
    // 其他组件通用containerProps功能
    ...containerProps,
    tag: {
        type: String,
        default: 'footer'
    }
}
