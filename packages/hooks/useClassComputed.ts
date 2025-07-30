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
  return computed(() => {
    const classes = [config.baseClass]; // 确保基类始终包含

    // based on attributes class name
    if (config.propClasses) {
      Object.entries(config.propClasses).forEach(([key, value]) => {
        if (value) {
          const className = config.classNameFormatter
            ? config.classNameFormatter(config.baseClass, key, value)
            : `${config.baseClass}--${value}`;
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