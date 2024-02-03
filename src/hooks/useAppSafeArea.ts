import {useAppTheme} from '@hooks/useAppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useAppSafeArea = () => {
  const {spacing} = useAppTheme();
  const {top} = useSafeAreaInsets();

  return {
    topSpacing: Math.max(top, spacing.s20),
  };
};
