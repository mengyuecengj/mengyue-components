import { computed, type ComputedRef } from 'vue'

// configure interface
interface ClassConfig<T extends Record<string, any>> {
    baseClass: string;
    propClasses?: Partial<Record<keyof T, string | undefined>>;
    flagClasses?: Partial<Record<string, boolean | undefined>>;
}

// T hook, accpet props type
export function useClassComputed<T extends Record<string, any>> (
    config: ClassConfig<T>
): ComputedRef<string[]> {
    return computed(() => {
        const classes = [config.baseClass];

        // based on attributes class name
        if(config.propClasses) {
            Object.entries(config.propClasses).forEach(([key, value]) => {
                if (value) {
                    classes.push(`${config.baseClass}--${value}`);
                }
            });
        }
        // based boolean flag class name(`my-btn--disabled`)
        if(config.flagClasses) {
            Object.entries(config.flagClasses).forEach(([key, value]) => {
                if (value) {
                    classes.push(`${config.baseClass}--${key}`);
                }
            });
        }
        return classes;
    })
}