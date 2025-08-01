export interface Option {
    value: string | number;
    label: string;
    disabled?: boolean;
    children?: Option[];
}