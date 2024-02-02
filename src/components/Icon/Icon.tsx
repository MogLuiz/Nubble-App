import React from 'react';

import {EyeOffIcon} from '@assets/icons/EyeOffIcon';
import {EyeOnIcon} from '@assets/icons/EyeOnIcon';

const iconsDictionary = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconVariants = keyof typeof iconsDictionary;

interface IIconProps {
  variant: IconVariants;
}

export const Icon = ({variant}: IIconProps) => {
  const IconComponent = iconsDictionary[variant];

  return <IconComponent />;
};
