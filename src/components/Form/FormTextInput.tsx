import React from 'react';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {TextInput, ITextInputProps} from '@components/TextInput';

export const FormTextInput = <FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: ITextInputProps & UseControllerProps<FormType>) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field, fieldState}) => (
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        errorMessage={fieldState.error?.message}
        {...textInputProps}
      />
    )}
  />
);
