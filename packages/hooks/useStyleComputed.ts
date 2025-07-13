import { computed, type ComputedRef, type CSSProperties } from 'vue'

// configure interface
interface StyleConfig<T extends Record<string, any>> {
    propToStyleMap?: Partial<Record<keyof T, string>>;
    cssVariables?: Record<string, string | undefined>;
    fontSizeProp?: keyof T;
    customStyleLogic?: (props: T, style: Record<string, string>) => void;
}

// T hook, accpet props type
export function useStyleComputed<T extends Record<string, any>>(
    props: T,
    config: StyleConfig<T>
): ComputedRef<CSSProperties> {
    return computed(() => {
        const style: Record<string, string> = {};
        // attribute to css style map
        if (config.propToStyleMap) {
            Object.entries(config.propToStyleMap).forEach(([propKey, cssProp]) => {
                const value = props[propKey as keyof T];
                if (value) {
                    if (cssProp === 'fontSize' && config.fontSizeProp && propKey === config.fontSizeProp) {
                        // font size handle (skip predefined value, number + 'px', string direct use)
                        if (!['small', 'medium', 'large', 'mini'].includes(value as string)) {
                            style[cssProp] = typeof value === 'number' ? `${value}px` : value as string;
                        }
                    } else if (['width', 'height', 'maxHeight', 'scrollWidth'].includes(cssProp as string)) {
                        // font size (number + 'px', string driect use)
                        style[cssProp as string] = typeof value === 'number' ? `${value}px` : value as string;
                    } else {
                        style[cssProp as string] = value as string;
                    }
                }
            });
        }
        // set css customize attribute
        if (config.cssVariables) {
            Object.entries(config.cssVariables).forEach(([key, value]) => {
                if (value) {
                    style[key] = value;
                }
            })
        }

        // application custom style logic
        if (config.customStyleLogic) {
            config.customStyleLogic(props, style);
        }

        return style;
    })
}