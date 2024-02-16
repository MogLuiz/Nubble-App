import React, {useState} from 'react';

import {Icon} from '@components/Icon';
import {ITextInputProps, TextInput} from '@components/TextInput';

export type PasswordInputProps = Omit<ITextInputProps, 'RightComponent'>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const handleToggleSecureTextEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          color="gray2"
          onPress={handleToggleSecureTextEntry}
          variant={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
        />
      }
    />
  );
};
