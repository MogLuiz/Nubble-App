import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useAppSafeArea = () => {
  const {spacing} = useAppTheme();
  const {top, bottom} = useSafeAreaInsets();

  return {
    topSpacing: Math.max(top, spacing.s20),
    bottomSpacing: Math.max(bottom, spacing.s20),
  };
};
