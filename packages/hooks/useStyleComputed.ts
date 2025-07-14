import { computed, type ComputedRef, type CSSProperties } from 'vue';

interface StyleConfig<T extends Record<string, any>> {
  propToStyleMap?: Partial<Record<keyof T, string>>;
  cssVariables?: Record<string, string | undefined>;
  fontSizeProp?: keyof T;
  customStyleLogic?: (props: T, style: Record<string, string>) => void;
}

export function useStyleComputed<T extends Record<string, any>>(
  props: T,
  config: StyleConfig<T>
): ComputedRef<CSSProperties> {
  return computed(() => {
      const style: Record<string, string> = {};
      if (config.propToStyleMap) {
          Object.entries(config.propToStyleMap).forEach(([propKey, cssProp]) => {
        const value = props[propKey as keyof T];
        if (value != null) { // 确保值非 null 或 undefined
          if (cssProp === 'fontSize' && config.fontSizeProp && propKey === config.fontSizeProp) {
            if (!['small', 'medium', 'large', 'mini'].includes(value as string)) {
              style[cssProp] = typeof value === 'number' ? `${value}px` : value as string;
            }
          } else if (['width', 'height', 'maxHeight', 'scrollWidth'].includes(cssProp as string)) {
            style[cssProp as string] = typeof value === 'number' ? `${value}px` : value as string;
          } else {
            style[cssProp as string] = value as string;
          }
        }
      });
    }
    if (config.cssVariables) {
      Object.entries(config.cssVariables).forEach(([key, value]) => {
        if (value != null) { // 确保值非 null 或 undefined
          style[key] = value;
        }
      });
    }
    if (config.customStyleLogic) {
      config.customStyleLogic(props, style);
    }
    return style;
  });
}