import { CSSProperties, ComputedRef } from 'vue';
import { useStyleComputed } from '../../../hooks/useStyleComputed';
// import { useClassComputed } from '../../../hooks/useClassComputed';
import { TableProps } from './type';

export function useTableComputed(props: TableProps): {
  // tableClass: ComputedRef<string[]>
  tableStyle: ComputedRef<CSSProperties>;
  headerStyle: ComputedRef<CSSProperties>;
  // contextStyle: ComputedRef<CSSProperties>;
} {
  // const tableClass = useClassComputed<TableProps>({
  //   baseClass: 'my-table',
  //   flagClasses: {
  //     border: props.border
  //   }
  // });
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
      headerTextColor: 'color'
    }
  })

  // const contextStyle = useStyleComputed<TableProps>(props, {
  //   propToStyleMap: {
  //     stripe: 'backgroundColor'
  //   }
  // })

  return {
    // tableClass,
    tableStyle,
    headerStyle,
    // contextStyle
  };
}
