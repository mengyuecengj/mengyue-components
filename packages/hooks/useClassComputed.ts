/**
 * @description general component class computed logic hooks file
 * This hooks file is hooks that can be used by basic components or even any component
 * This hook is mainly written Class computed logic
 * for example, logic computed of size and round/circle/disabled and other logic
 * As the number of components increases, it will continueto strengthen the logic and other feasiblity of the code
 */

import { computed, type ComputedRef } from 'vue';

// configure interface
interface ClassConfig<T extends Record<string, unknown>> {
  baseClass: string;
  propClasses?: Partial<Record<keyof T, string | undefined>>;
  flagClasses?: Partial<Record<string, boolean | undefined>>;
  classNameFormatter?: (base: string, key: string, value: unknown) => string;
}

// T hook, accept props type
export function useClassComputed<T extends Record<string, unknown>>(
  config: ClassConfig<T>
): ComputedRef<string[]> {
  return computed<string[]>(() => {
    const classes = [config.baseClass];

    // based on attributes class name
    if (config.propClasses) {
      Object.entries(config.propClasses).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          const className = config.classNameFormatter
            ? config.classNameFormatter(config.baseClass, key, value)
            : `${config.baseClass}--${String(value)}`;
          classes.push(className);
        }
      });
    }

    // based on boolean flag class name (`my-btn--disabled`)
    if (config.flagClasses) {
      Object.entries(config.flagClasses).forEach(([key, value]) => {
        if (value) {
          const className = config.classNameFormatter
            ? config.classNameFormatter(config.baseClass, key, value)
            : `${config.baseClass}--${key}`;
          classes.push(className);
        }
      });
    }

    return classes;
  });
}