import React from 'react';

import {EyeOnIcon} from '@assets/icons/EyeOnIcon';
import {EyeOffIcon} from '@assets/icons/EyeOffIcon';

import {ThemeColors} from '@theme';

import {useAppTheme} from '@hooks/useAppTheme';

const iconsDictionary = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconVariants = keyof typeof iconsDictionary;

interface IIconProps {
  variant: IconVariants;
  color?: ThemeColors;
  size?: number;
}

export const Icon = ({
  variant,
  color = 'backgroundContrast',
  size,
}: IIconProps) => {
  const {colors} = useAppTheme();
  const IconComponent = iconsDictionary[variant];

  return <IconComponent color={colors[color]} size={size} />;
};
