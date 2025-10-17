import { inject, useAttrs } from 'vue';
import {
  useFormField,
  useInputState,
  useInputClasses,
  useInputChange,
  type GroupContext,
  type FormItemContext
} from '../../../hooks/useCheckComputed';

interface Props {
  disabled?: boolean;
  value?: string;
  modelValue?: string[];
}

export function useCheckboxLogic(props: Props, emit: any) {
  const attrs = useAttrs();
  const checkboxGroup = inject<GroupContext<string[]> | null>('checkboxGroup', null);
  const formItemContext = inject<FormItemContext | null>('myFormItemContext', null);

  const { initialValue } = useFormField(
    formItemContext?.prop,
    props.modelValue,
    () => {
      if (checkboxGroup) {
        checkboxGroup.change(initialValue.value as string[]);
      } else {
        emit('update:modelValue', initialValue.value);
      }
    }
  );

  const { isDisabled, isChecked } = useInputState(props, checkboxGroup);
  const checkboxClass = useInputClasses(isChecked, isDisabled, 'my-checkbox');
  const { handleChange } = useInputChange(props, emit, checkboxGroup, true);

  return {
    attrs,
    isChecked,
    isDisabled,
    checkboxClass,
    handleChange
  };
}
