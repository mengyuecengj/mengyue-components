import { PropType } from 'vue';

export const layoutProps = {
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
    validator: (value: number | string) => {
      const num = parseFloat(value.toString());
      return (typeof value === 'string' || typeof value === 'number') && !isNaN(num) && num >= 0 && num <= 24;
    },
  },
  justify: {
    type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
    default: undefined,
    validator: (value: 'start' | 'end' | 'center' | 'space-around' | 'space-between') => !value || ['start', 'end', 'center', 'space-around', 'space-between'].includes(value),
  },
  align: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'row' | 'column' | 'row-reverse' | 'column-reverse'>,
    default: 'row',
    validator: (value: 'row' | 'column' | 'row-reverse' | 'column-reverse') => ['row', 'column', 'row-reverse', 'column-reverse'].includes(value),
  },
} as const;

export const colProps = {
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
    validator: (value: number) => Number.isInteger(value) && value >= 1 && value <= 24,
  },
  offsetLeft: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
    validator: (value: number | string) => {
      const num = parseFloat(value.toString());
      return (typeof value === 'string' || typeof value === 'number') && !isNaN(num) && num >= 0 && num <= 24;
    },
  },
  offsetRight: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
    validator: (value: number | string) => {
      const num = parseFloat(value.toString());
      return (typeof value === 'string' || typeof value === 'number') && !isNaN(num) && num >= 0 && num <= 24;
    },
  },
  pull: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
    validator: (value: number | string) => {
      const num = parseFloat(value.toString());
      return (typeof value === 'string' || typeof value === 'number') && !isNaN(num) && num >= 0 && num <= 24;
    },
  },
  push: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
    validator: (value: number | string) => {
      const num = parseFloat(value.toString());
      return (typeof value === 'string' || typeof value === 'number') && !isNaN(num) && num >= 0 && num <= 24;
    },
  },
} as const;