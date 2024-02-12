import React from 'react';
import {Pressable} from 'react-native';

import * as icons from '@assets/icons';

import {ThemeColors} from '@theme';

import {useAppTheme} from '@hooks/useAppTheme';

type IconVariants = keyof typeof iconsDictionary;

interface IIconProps {
  variant: IconVariants;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export const Icon = ({
  variant,
  color = 'backgroundContrast',
  size,
  onPress,
}: IIconProps) => {
  const {colors} = useAppTheme();
  const IconComponent = iconsDictionary[variant];

  const iconProps = {
    color: colors[color],
    size,
  };

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <IconComponent {...iconProps} />
      </Pressable>
    );
  }

  return <IconComponent {...iconProps} />;
};

const iconsDictionary = {
  arrowLeft: icons.ArrowLeftIcon,
  arrowRight: icons.ArrowRightIcon,
  bell: icons.BellIcon,
  bellOn: icons.BellOnIcon,
  bookmark: icons.BookmarkIcon,
  bookmarkFill: icons.BookmarkFillIcon,
  camera: icons.CameraIcon,
  chat: icons.ChatIcon,
  chatOn: icons.ChatOnIcon,
  check: icons.CheckIcon,
  comment: icons.CommentIcon,
  checkRoundIcon: icons.CheckRoundIcon,
  chevronRight: icons.ChevronRightIcon,
  errorRoundIcon: icons.ErrorRoundIcon,
  eyeOn: icons.EyeOnIcon,
  eyeOff: icons.EyeOffIcon,
  flashOn: icons.FlashOnIcon,
  flashOff: icons.FlashOffIcon,
  heart: icons.HeartIcon,
  heartFill: icons.HeartFillIcon,
  home: icons.HomeIcon,
  homeFill: icons.HomeFillIcon,
  message: icons.MessageIcon,
  messageRoundIcon: icons.MessageRoundIcon,
  newPost: icons.NewPostIcon,
  profile: icons.ProfileIcon,
  profileFill: icons.ProfileFillIcon,
  search: icons.SearchIcon,
  settings: icons.SettingsIcon,
  trash: icons.TrashIcon,
};
