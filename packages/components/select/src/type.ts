import { ComputedRef } from 'vue';
export interface SelectContext {
    selectOption: (value: string | number, label: string) => void;
    currentValue: ComputedRef<string | number>;
    disabled: ComputedRef<boolean>;
}
