import type { CSSProperties, ComputedRef } from 'vue';
import { useStyleComputed } from '../../../hooks/useStyleComputed';
// import { useClassComputed } from '../../../hooks/useClassComputed';
// import { useClassComputed } from '../../../hooks/useClassComputed';
import type { TableProps } from './type';

// packages/components/table/src/tableComputed.ts
export function useTableComputed(props: TableProps): {
  tableStyle: ComputedRef<CSSProperties>;
  headerStyle: ComputedRef<CSSProperties>;
  bodyStyle: ComputedRef<CSSProperties>;
} {
  const tableStyle = useStyleComputed<TableProps>(props, {
    propToStyleMap: {
      width: 'width',
      height: 'height',
      border: 'border'
    }
  });

  const headerStyle = useStyleComputed<TableProps>(props, {
    propToStyleMap: {
      headerBackgroundColor: 'backgroundColor',
      headerTextColor: 'color',
      headerAlign: 'textAlign'
    }
  });

  const bodyStyle = useStyleComputed<TableProps>(props, {
    propToStyleMap: {
      bodyBackgroundColor: 'backgroundColor',
      bodyTextColor: 'color',
      bodyAlign: 'textAlign'
    }
  });

  return {
    tableStyle,
    headerStyle,
    bodyStyle
  };
}