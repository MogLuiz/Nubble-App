import {IIconProps} from '@components/Icon';
import {AppTabNavigatorStackParams} from '@/routes/AppTabNavigator';

type IconVariants = IIconProps['variant'];
type TabScreensKeys = keyof AppTabNavigatorStackParams;
type MapperStructure = {
  label: string;
  icon: {
    focused: IconVariants;
    unfocused: IconVariants;
  };
};

export const mapScreenToProps: Record<TabScreensKeys, MapperStructure> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
};
