import { Ref } from 'vue'

export interface RadioGroupContext {
  modelValue: Ref<string | number | boolean>
  disabled: Ref<boolean>
  changeEvent: (val: string | number | boolean) => void
}

export interface FormItemContext {
  prop?: string
  clearValidate?: () => void
  addField?: (field: { prop: string; resetField: () => void; validate: () => Promise<void>; clearValidate: () => void }) => void
  removeField?: (prop: string) => void
}

export type RadioProps = {
  modelValue?: string | number | boolean;
  value?: string | number | boolean;
  name?: string;
  size?: string;
  disabled?: boolean;
};

export interface RadioDemoInstance {
  singleSelected: string;
  groupSelected: string;
  disabledSelected: string;
  verticalSelected: string;
}
